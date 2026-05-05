"use client";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-red-200 bg-red-50 p-8 text-slate-900 shadow-[0_16px_50px_-28px_rgba(15,23,42,0.25)]">
        <p className="text-sm uppercase tracking-[0.25em] text-red-700">Đã xảy ra lỗi</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Không thể tải nội dung blog</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          {error.message || "Có lỗi runtime trong khu vực blog. Hãy thử tải lại trang."}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
        >
          Thử lại
        </button>
      </section>
    </main>
  );
}
