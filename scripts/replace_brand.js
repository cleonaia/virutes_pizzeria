const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2] || process.cwd();
const IGNORED = ['node_modules', '.next', '.git'];
const EXT = ['.ts', '.tsx', '.js', '.jsx', '.css', '.md', '.json', '.html'];

function walk(dir) {
  const results = [];
  for (const name of fs.readdirSync(dir)) {
    if (IGNORED.includes(name)) continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results.push(...walk(full));
    } else if (EXT.includes(path.extname(name))) {
      results.push(full);
    }
  }
  return results;
}

function replaceInFile(file) {
  let src = fs.readFileSync(file, 'utf8');
  let out = src;

  // Replace prefixed classes and css variables
  out = out.replace(/--virutes-/g, '--alfe-');
  out = out.replace(/virutes-/g, 'alfe-');

  // Replace standalone word occurrences that likely are copy (handle cases)
  out = out.replace(/\bvirutes\b/g, 'alfajorina');
  out = out.replace(/\bVirutes\b/g, 'Alfajorina');
  out = out.replace(/\bVIRUTES\b/g, 'ALFAJORINA');

  if (out !== src) {
    fs.writeFileSync(file, out, 'utf8');
    return true;
  }
  return false;
}

const files = walk(path.resolve(ROOT, 'src'));
const changed = [];
for (const f of files) {
  try {
    if (replaceInFile(f)) changed.push(f.replace(process.cwd() + '/', ''));
  } catch (e) {
    console.error('ERR', f, e.message);
  }
}

console.log(JSON.stringify({ changed, count: changed.length }, null, 2));

// Exit with 0 even if no changes
process.exit(0);
