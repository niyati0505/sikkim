// app/search/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase"; // ensure you have this file and it exports a configured client
import React from "react";

type MonasteryRow = {
  id: number;
  name: string;
  address?: string | null;
  main_image_path?: string | null;
};

type EventRow = {
  id: number;
  event_name: string;
  monastery_name?: string | null;
  main_image_path?: string | null;
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const q = (searchParams?.q || "").trim();

  // If there's no q, show a helpful message
  if (!q) {
    return (
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Search</h1>
        <p className="text-muted-foreground">Type something in the search box to find monasteries or events.</p>
      </main>
    );
  }

  // Use .filter('col', 'ilike', `%${q}%`) to avoid the TS issue with .ilike
  // We use server-side supabase client so this runs on the server (Next app router)
  const monasteryPromise = supabase
    .from("monasteries")
    .select("id, name, address, main_image_path")
    .filter("name", "ilike", `%${q}%`)
    .limit(50);

  const eventsPromise = supabase
    .from("events")
    .select("id, event_name, monastery_name, main_image_path")
    .filter("event_name", "ilike", `%${q}%`)
    .limit(50);

  const [monRes, evRes] = await Promise.all([monasteryPromise, eventsPromise]);

  // handle errors gracefully
  if (monRes.error) {
    console.error("Monasteries search error:", monRes.error);
  }
  if (evRes.error) {
    console.error("Events search error:", evRes.error);
  }

  const monasteries = monRes.data ?? [];
  const events = evRes.data ?? [];

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-2">Search results for &quot;{q}&quot;</h1>

      <section className="mt-6">
        <h2 className="text-lg font-medium mb-3">Monasteries ({monasteries.length})</h2>
        {monasteries.length === 0 ? (
          <p className="text-muted-foreground">No monasteries found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {monasteries.map((m) => (
              <article key={m.id} className="bg-yellow-50 rounded-lg p-4 shadow-sm">
                <div className="flex items-start gap-4">
                  {m.main_image_path ? (
                    // plain <img> so it doesn't need next/image domain config
                    <img
                      src={m.main_image_path}
                      alt={m.name}
                      className="w-28 h-20 object-cover rounded-md flex-shrink-0"
                    />
                  ) : (
                    <div className="w-28 h-20 bg-gray-100 rounded-md flex-shrink-0" />
                  )}

                  <div>
                    <h3 className="text-lg font-semibold">
                      <Link href={`/explore/${m.id}`} className="text-amber-700 hover:underline">
                        {m.name}
                      </Link>
                    </h3>
                    {m.address && <p className="text-sm text-muted-foreground">{m.address}</p>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium mb-3">Events ({events.length})</h2>
        {events.length === 0 ? (
          <p className="text-muted-foreground">No events found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((ev) => (
              <article key={ev.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start gap-4">
                  {ev.main_image_path ? (
                    <img
                      src={ev.main_image_path}
                      alt={ev.event_name}
                      className="w-28 h-20 object-cover rounded-md flex-shrink-0"
                    />
                  ) : (
                    <div className="w-28 h-20 bg-gray-100 rounded-md flex-shrink-0" />
                  )}

                  <div>
                    <h3 className="text-lg font-semibold">
                      <Link href={`/events/${ev.id}`} className="text-amber-700 hover:underline">
                        {ev.event_name}
                      </Link>
                    </h3>
                    {ev.monastery_name && <p className="text-sm text-muted-foreground">{ev.monastery_name}</p>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
