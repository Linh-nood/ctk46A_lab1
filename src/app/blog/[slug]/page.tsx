import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-900 shadow-[0_16px_50px_-28px_rgba(15,23,42,0.25)]">
        <Link href="/blog" className="text-sm font-medium text-sky-700 hover:text-sky-900">
          ← Quay lại blog
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">{post.category}</span>
          <span>{post.date}</span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">{post.title}</h1>
        <div className="prose prose-slate mt-6 max-w-none whitespace-pre-line text-sm leading-7 text-slate-700">
          {post.content}
        </div>
      </section>
    </main>
  );
}
