"use client";

import { useEffect, useState } from "react";
import MonasteryCard, { Monastery } from "@/components/explore/MonasteryCard";
import FilterSidebar from "@/components/explore/filter-sidebar";
import { supabase } from "@/lib/supabase";


export default function ExplorePage() {
  const [monasteries, setMonasteries] = useState<Monastery[]>([]);
  const [filters, setFilters] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(1);
  const monasteriesPerPage = 4; // ✅ show only 4 per page

  useEffect(() => {
    const fetchMonasteries = async () => {
      const { data, error } = await supabase.from("monasteries").select("*");
      if (error) {
        console.error(error);
      } else {
        setMonasteries(data as Monastery[]);
      }
    };
    fetchMonasteries();
  }, []);

  // Pagination logic
  const indexOfLast = currentPage * monasteriesPerPage;
  const indexOfFirst = indexOfLast - monasteriesPerPage;
  const currentMonasteries = monasteries.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(monasteries.length / monasteriesPerPage);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 hidden lg:block border-r bg-gray-50">
        <FilterSidebar onFilterChange={setFilters} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {currentMonasteries.map((monastery) => (
            <MonasteryCard key={monastery.id} monastery={monastery} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-amber-700 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}