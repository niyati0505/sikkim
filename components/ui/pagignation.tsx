"use client";

type PaginationProps = {
  total: number; // total number of monasteries
  page: number; // current page number
  pageSize: number; // how many per page
  onPageChange: (page: number) => void; // callback when page changes
};

export function Pagination({ total, page, pageSize, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);

  if (totalPages <= 1) return null; // no need to show pagination

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {/* Previous Button */}
      <button
        onClick={() => page > 1 && onPageChange(page - 1)}
        disabled={page === 1}
        className={`px-3 py-1 rounded-md border ${
          page === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-3 py-1 rounded-md border ${
            page === p
              ? "bg-yellow-600 text-white"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          {p}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => page < totalPages && onPageChange(page + 1)}
        disabled={page === totalPages}
        className={`px-3 py-1 rounded-md border ${
          page === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
      >
        Next
      </button>
    </div>
  );
}