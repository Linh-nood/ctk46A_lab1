export default function BlogLoading() {
  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_280px] lg:px-8">
      <div className="space-y-5">
        <div className="h-10 w-48 animate-pulse rounded-2xl bg-slate-200" />
        {[1, 2, 3].map((item) => (
          <div key={item} className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <div className="h-4 w-24 animate-pulse rounded-full bg-slate-200" />
            <div className="mt-4 h-6 w-3/4 animate-pulse rounded-full bg-slate-200" />
            <div className="mt-3 h-4 w-full animate-pulse rounded-full bg-slate-200" />
            <div className="mt-2 h-4 w-5/6 animate-pulse rounded-full bg-slate-200" />
          </div>
        ))}
      </div>
      <div className="h-64 rounded-[2rem] border border-slate-200 bg-white p-6">
        <div className="h-4 w-28 animate-pulse rounded-full bg-slate-200" />
        <div className="mt-4 space-y-3">
          <div className="h-10 animate-pulse rounded-2xl bg-slate-200" />
          <div className="h-10 animate-pulse rounded-2xl bg-slate-200" />
          <div className="h-10 animate-pulse rounded-2xl bg-slate-200" />
          <div className="h-10 animate-pulse rounded-2xl bg-slate-200" />
        </div>
      </div>
    </main>
  );
}
