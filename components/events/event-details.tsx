"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface Event {
  id: number
  monastery_id: number
  event_name: string
  monastery_name: string
  description: string
  start_date: string
  end_date: string
  category: string
  main_image_path: string
  registration_required: boolean
  max_participants: string
  when_does_it_happen: string
}

interface EventDetailsProps {
  eventId: string   // ✅ match the prop name properly
}

export function EventDetails({ eventId }: EventDetailsProps) {
  const [event, setEvent] = useState<Event | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvent = async () => {
      if (!eventId) {
        setErrorMsg("No event ID provided.")
        return
      }

      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", Number(eventId))  // ✅ cast to number
        .single()

      if (error) {
        console.error("Error fetching event:", error.message)
        setErrorMsg("Could not load event details. Please try again later.")
      } else {
        setEvent(data)
      }
    }

    fetchEvent()
  }, [eventId])

  if (errorMsg) {
    return <p className="text-red-500 p-6">{errorMsg}</p>
  }

  if (!event) {
    return <p className="text-gray-500 p-6">Loading event details...</p>
  }

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="relative h-80 w-full rounded-lg overflow-hidden shadow">
        <img
          src={event.main_image_path}
          alt={event.event_name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
          <h1 className="text-4xl font-bold text-white">{event.event_name}</h1>
          <p className="text-gray-200">{event.monastery_name}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
          Get Notification
        </button>
        <button className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
          Add to Calendar
        </button>
        <button className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
          Get Directions
        </button>
        <button className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
          View Gallery
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <a className="pb-2 border-b-2 border-orange-600 text-orange-600">
            Overview
          </a>
          <a className="pb-2 hover:text-orange-600">Schedule</a>
          <a className="pb-2 hover:text-orange-600">Traditions</a>
          <a className="pb-2 hover:text-orange-600">Guidelines</a>
          <a className="pb-2 hover:text-orange-600">Gallery</a>
        </nav>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-3">
              About {event.event_name}
            </h2>
            <p className="text-gray-700">{event.description}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-3">Cultural Significance</h2>
            <p className="text-gray-700">
              {event.event_name} represents peace, spirituality, and unity...
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-3">Event Details</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>📅 Start: {event.start_date}</li>
              <li>📅 End: {event.end_date}</li>
              <li>📍 Location: {event.monastery_name}</li>
              <li>🏷️ Category: {event.category}</li>
              {event.max_participants && (
                <li>👥 Max Participants: {event.max_participants}</li>
              )}
              {event.registration_required && <li>📝 Registration Required</li>}
              {event.when_does_it_happen && (
                <li>🕒 Happens: {event.when_does_it_happen}</li>
              )}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
            <div className="flex flex-col gap-2">
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                Join Event
              </button>
              <button className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
                Share Event
              </button>
              <button className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
                Download Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
