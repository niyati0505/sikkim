import { EventsList } from "@/components/events/events-list"

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Events</h1>
        <EventsList />
      </div>
    </main>
  )
}
