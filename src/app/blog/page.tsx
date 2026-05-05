import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-900 shadow-[0_16px_50px_-28px_rgba(15,23,42,0.25)]">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-700">Blog</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Danh sách bài viết</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          Blog là nơi mô phỏng nội dung bài viết cá nhân trong website portfolio. Mỗi bài có trang
          chi tiết riêng bằng dynamic route.
        </p>

        <div className="mt-8 space-y-5">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-slate-950">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-medium text-sky-700 hover:text-sky-900"
              >
                Đọc thêm →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
