import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { EventsHeader } from "@/components/events/events-header"
import { EventsCalendar } from "@/components/events/events-calendar"
import { FeaturedEvents } from "@/components/events/featured-events"
import { EventsList } from "@/components/events/events-list"
import { Suspense } from "react"

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <EventsHeader />
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <FeaturedEvents />
              <Suspense fallback={<div>Loading events...</div>}>
                <EventsList />
              </Suspense>
            </div>
            <div>
              <EventsCalendar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
