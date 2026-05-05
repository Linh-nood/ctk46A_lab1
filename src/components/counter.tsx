"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div>
        <p className="text-sm text-slate-500">Client Component</p>
        <p className="text-lg font-medium text-slate-900">Bộ đếm tương tác</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setCount((value) => value - 1)}
          className="h-10 w-10 rounded-full bg-white text-lg font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-slate-100"
        >
          -
        </button>
        <span className="min-w-12 text-center text-xl font-semibold text-sky-700">
          {count}
        </span>
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          className="h-10 w-10 rounded-full bg-sky-600 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-sky-500"
        >
          +
        </button>
      </div>
    </div>
  );
}
