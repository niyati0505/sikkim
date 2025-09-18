"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { Database } from "@/lib/database.types";
import Link from "next/link";

type Archive = Database["public"]["Tables"]["digital_archives"]["Row"];

export default function DigitalArchives() {
  const [archives, setArchives] = useState<Archive[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArchives = async () => {
      const { data, error } = await supabase
        .from("digital_archives")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3); // fetch only 3

      if (error) {
        console.error("Error fetching archives:", error);
        setArchives([]);
      } else {
        setArchives(data || []);
      }

      setLoading(false);
    };

    fetchArchives();
  }, []);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Digital Archives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore centuries-old manuscripts and rare monastic artifacts.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading archives...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {archives.map((archive) => (
              <Link key={archive.id} href={`/archives/${archive.id}`}>
                <Card className="cursor-pointer shadow-lg rounded-2xl hover:shadow-2xl transition-shadow h-[150px] flex items-center justify-center">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold">{archive.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}