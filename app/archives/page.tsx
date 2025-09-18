"use client";

import { useState, useEffect, useMemo } from "react";
import { Footer } from "@/components/layout/footer";
import { ArchivesHeader } from "@/components/archives/archives-header";
import { ArchivesSidebar } from "@/components/archives/archives-sidebar";
import { ArchivesGrid } from "@/components/archives/archives-grid";
import { supabase } from "@/lib/supabase";
import { Database } from "@/lib/database.types";

type Archive = Database["public"]["Tables"]["digital_archives"]["Row"];

async function getArchives(): Promise<Archive[]> {
  const { data, error } = await supabase
    .from("digital_archives")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching archives:", error);
    return [];
  }

  return data || [];
}

export default function ArchivesPage() {
  const [archives, setArchives] = useState<Archive[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filterApplied, setFilterApplied] = useState(false);

  // Fetch archives on mount
  useEffect(() => {
    getArchives().then(setArchives);
  }, []);

  // Filter archives based on selected categories
  const filteredArchives = useMemo(() => {
    if (selectedCategories.length === 0) return archives; // nothing selected = all
    return archives.filter((a) => selectedCategories.includes(a.category || ""));
  }, [archives, selectedCategories]);

  // Reset page if a filter is applied (pass flag down to grid if needed)
  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
    if (filterApplied) {
      // optional: you could also reset grid pagination here if using page state in grid
    } else {
      setFilterApplied(true); // first filter application
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <ArchivesHeader />
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-80 lg:sticky lg:top-20 self-start">
              <ArchivesSidebar
                archives={archives}
                selectedCategories={selectedCategories}
                onChangeSelectedCategories={handleCategoryChange}
              />
            </aside>
            <div className="flex-1 overflow-y-auto">
              <ArchivesGrid archives={filteredArchives} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}