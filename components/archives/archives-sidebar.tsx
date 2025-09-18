"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Archive } from "lucide-react";
import { Database } from "@/lib/database.types";

type Archive = Database["public"]["Tables"]["digital_archives"]["Row"];

interface ArchivesSidebarProps {
  archives: Archive[];
  selectedCategories: string[];
  onChangeSelectedCategories: (categories: string[]) => void;
}

export function ArchivesSidebar({
  archives,
  selectedCategories,
  onChangeSelectedCategories,
}: ArchivesSidebarProps) {
  // ✅ Local state for checkboxes before applying
  const [tempSelected, setTempSelected] = useState<string[]>([]);

  useEffect(() => {
    setTempSelected(selectedCategories); // sync external state with local
  }, [selectedCategories]);

  // ✅ Extract unique categories with counts
  const categoriesMap = archives.reduce((acc, archive) => {
    if (!archive.category) return acc;
    acc[archive.category] = (acc[archive.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(categoriesMap).map(([category, count]) => ({
    id: category.toLowerCase().replace(/\s+/g, "-"),
    label: category,
    count,
  }));

  const toggleCategory = (label: string) => {
    setTempSelected((prev) =>
      prev.includes(label)
        ? prev.filter((c) => c !== label)
        : [...prev, label]
    );
  };

  const applyFilters = () => {
    onChangeSelectedCategories(tempSelected);
  };

  const clearAll = () => {
    setTempSelected([]);
    onChangeSelectedCategories([]); // notify parent
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Archive className="h-5 w-5 mr-2" />
            Archive Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-medium text-foreground mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={cat.id}
                      checked={tempSelected.includes(cat.label)}
                      onCheckedChange={() => toggleCategory(cat.label)}
                    />
                    <label
                      htmlFor={cat.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {cat.label}
                    </label>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {cat.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="flex space-x-2">
            <Button size="sm" className="flex-1" onClick={applyFilters}>
              Apply Filters
            </Button>
            <Button size="sm" variant="outline" onClick={clearAll}>
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}