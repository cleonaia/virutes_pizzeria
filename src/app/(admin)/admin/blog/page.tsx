import Link from "next/link";
import { FileText, PenLine, Plus } from "lucide-react";
import { blogPosts } from "@/features/blog/data/posts";

export default function AdminBlogPage() {
  return (
    <div className="min-h-screen bg-alfe-cream-soft">
      <div className="border-b border-alfe-border bg-white px-6 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-alfe-frambuesa" />
            <h1 className="font-serif text-2xl italic text-alfe-cacao">Gestió del blog</h1>
          </div>
          <span className="text-sm text-alfe-cacao/50">Gestionar articles</span>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="space-y-3">
          {blogPosts.map((post) => (
            <div key={post.slug} className="flex items-center justify-between rounded-2xl border border-alfe-border bg-white px-5 py-4">
              <div>
                <p className="font-medium text-alfe-cacao">{post.title}</p>
                <p className="text-xs text-alfe-cacao/50">{post.publishedAt}</p>
              </div>
              <Link href={"/blog/" + post.slug} className="flex items-center gap-1.5 text-xs font-semibold text-alfe-frambuesa hover:underline">
                <PenLine className="h-3.5 w-3.5" /> Veure
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-dashed border-alfe-frambuesa/30 bg-alfe-frambuesa/5 p-6">
          <p className="text-sm font-medium text-alfe-frambuesa">Editor CMS pendent</p>
        </div>
      </div>
    </div>
  );
}
