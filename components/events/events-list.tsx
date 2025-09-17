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

export function EventsList() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("events")
        .select(
          "id, event_name, monastery_name, description, start_date, end_date, category, main_image_path"
        );

      if (error) {
        console.error("Error fetching events:", error.message);
      } else {
        setEvents(data || []);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="space-y-8">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event_name={event.event_name}
          monastery_name={event.monastery_name}
          description={event.description}
          start_date={event.start_date}
          end_date={event.end_date}
          category={event.category}
          main_image_path={event.main_image_path} id={0} />
      ))}
    </div>
  );
}
