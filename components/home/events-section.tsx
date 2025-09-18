"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface events {
  id: number;
  event_name: string;
  start_date: string;
  main_image_path: string;
  monastery_id: number;
  monastery_name: string;
}

export default function EventsSection() {
  const [events, setEvents] = useState<events[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("events")
        .select("id, event_name, start_date, main_image_path, monastery_id, monastery_name");

      if (error) {
        console.error("Error fetching events:", error.message);
      } else {
        setEvents(data || []);
      }
    };

    fetchEvents();
  }, []);

  // Auto change every 2 minutes
  useEffect(() => {
    if (events.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % events.length);
    }, 120000); // 120 sec = 2 mins

    return () => clearInterval(interval);
  }, [events]);

  // Get only 3 events starting from currentIndex
  const visibleEvents = events.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-16 px-6 bg-muted/20 bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrate Sikkim’s vibrant cultural and spiritual traditions.
          </p>
        </div>

       <div className="grid md:grid-cols-3 gap-6">
  {visibleEvents.map((e) => (
    <Link key={e.id} href="/events" passHref>
      <Card className="shadow-lg rounded-2xl hover:shadow-2xl transition-shadow cursor-pointer">
        <CardContent className="p-6 text-center">
          {e.main_image_path && (
            <img
              src={e.main_image_path}
              alt={e.event_name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
          )}
          <h3 className="text-lg font-bold">{e.event_name}</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {e.monastery_name}
          </p>
          <p className="text-sm text-gray-500">
            Start Date: {e.start_date}
          </p>
        </CardContent>
      </Card>
    </Link>
  ))}
</div>
      </div>
    </section>
  );
}
