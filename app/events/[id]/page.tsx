import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { EventDetails } from "@/components/events/event-details"

export default function EventDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <EventDetails eventId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
