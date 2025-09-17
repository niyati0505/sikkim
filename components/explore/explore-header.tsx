"use client";

type ExploreHeaderProps = {
  total: number; // total monasteries
  search: string; // search query
  onSearch: (value: string) => void; // callback to update search
};

export function ExploreHeader({ total, search, onSearch }: ExploreHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold">Explore Sacred Monasteries</h1>
        <p className="text-muted-foreground">Showing {total} monasteries</p>
      </div>

      {/* Search */}
      <div className="w-full sm:w-72">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search monasteries, locations, or traditions..."
          className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-yellow-400"
        />
      </div>
    </div>
  );
}