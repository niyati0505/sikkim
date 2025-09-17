"use client";

import { useEffect, useState } from "react";
import { EventCard } from "./event-card";
import { supabase } from "@/lib/supabase";

interface Event {
  id: number;
  event_name: string;
  monastery_name: string;
  description: string;
  start_date: string;
  end_date: string;
  category: string;
  main_image_path: string;
}

export function FeaturedEvents() {
  const [featuredEvent, setFeaturedEvent] = useState<Event | null>(null);

  useEffect(() => {
    const fetchFeaturedEvent = async () => {
      const { data, error } = await supabase
        .from("events")
        .select(
          "id, event_name, monastery_name, description, start_date, end_date, category, main_image_path"
        )
        .limit(1); // 👈 just get one featured event

      if (error) {
        console.error("Error fetching featured event:", error.message);
      } else {
        setFeaturedEvent(data?.[0] || null);
      }
    };

    fetchFeaturedEvent();
  }, []);

  if (!featuredEvent) {
    return (
      <section>
        <h2 className="text-2xl font-bold">Featured Events</h2>
        <p className="text-gray-600">Loading...</p>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Featured Events</h2>
      <p className="text-gray-600">Don't miss these spectacular celebrations</p>
      <EventCard {...featuredEvent} />
    </section>
  );
}
