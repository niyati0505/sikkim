"use client";

import { Database } from "@/lib/database.types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2 } from "lucide-react";
import Link from "next/link";

interface ArchiveDetailsProps {
  archive: Database["public"]["Tables"]["digital_archives"]["Row"];
}

export default function ArchiveDetails({ archive }: ArchiveDetailsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="relative h-96 rounded-lg overflow-hidden mb-6">
          <img
            src={archive.photo_link || "/placeholder.svg"}
            alt={archive.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{archive.name}</h1>
            <Badge className="bg-primary text-primary-foreground mb-2">
              {archive.category}
            </Badge>
          </div>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <p className="text-gray-600">{archive.description}</p>
              </div>

              {archive.link && (
                <div className="flex justify-end">
                  <Link
                    href={archive.link}
                    target="_blank"
                    className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    View Source
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}