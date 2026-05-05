import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-900 shadow-[0_16px_50px_-28px_rgba(15,23,42,0.25)]">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-700">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Bài viết không tồn tại</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Bài viết bạn đang tìm kiếm không có trong hệ thống.
        </p>
        <Link
          href="/blog"
          className="mt-6 inline-flex rounded-full bg-sky-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-500"
        >
          Quay lại blog
        </Link>
      </section>
    </main>
  );
}
