"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import Link from "next/link";
import { Database } from "@/lib/database.types";

type Archive = Database["public"]["Tables"]["digital_archives"]["Row"];

interface ArchivesGridProps {
  archives: Archive[];
}

export function ArchivesGrid({ archives }: ArchivesGridProps) {
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(archives.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedItems = archives.slice(startIndex, startIndex + itemsPerPage);

  const topRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // ✅ Reset page when archives change (but not on first render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setPage(1);
  }, [archives]);

  const goToPage = (newPage: number) => {
    setPage(newPage);

    if (topRef.current) {
      const headerOffset = 80; // adjust based on your header height
      const elementPosition =
        topRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div ref={topRef} className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            {archives.length} Items Found
          </h2>
          <p className="text-sm text-muted-foreground">
            Showing {startIndex + 1}–
            {Math.min(startIndex + itemsPerPage, archives.length)} of{" "}
            {archives.length} items
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedItems.map((item) => (
          <Card
            key={item.id}
            className="group overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.photo_link || "/placeholder.svg"}
                alt={item.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {item.category && (
                <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                  <Badge className="bg-primary text-primary-foreground text-xs">
                    {item.category}
                  </Badge>
                </div>
              )}
            </div>

            <CardContent className="p-6 flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.name}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                {item.description ?? "No description available"}
              </p>

              <div className="flex space-x-2 mt-auto">
                <Link href={`/archives/${item.id}`} className="flex-1">
                  <Button size="sm" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 pt-8">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => goToPage(page - 1)}
          >
            Previous
          </Button>

          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              size="sm"
              variant={page === i + 1 ? "default" : "outline"}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages}
            onClick={() => goToPage(page + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}