import { EventDetails } from "@/components/events/event-details"

export default function EventDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <EventDetails eventId={params.id} />
      </div>
    </main>
  )
}
