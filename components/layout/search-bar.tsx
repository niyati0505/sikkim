"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [q, setQ] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = q.trim();
    if (!trimmed) return;
    // navigate to /search?q=...
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <label htmlFor="site-search" className="sr-only">Search</label>
      <div className="relative">
        <input
          id="site-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search..."
          className="w-64 md:w-72 rounded-full py-2 pl-3 pr-10 text-sm bg-gray-100 dark:bg-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
        <button
          type="submit"
          aria-label="Search"
          className="absolute right-1 top-1/2 -translate-y-1/2 px-2 py-1 text-xs rounded-full bg-amber-700 text-white hover:bg-amber-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}
