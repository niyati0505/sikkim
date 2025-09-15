import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    title: "Losar Festival Celebration",
    date: "2024-02-10",
    time: "06:00 AM",
    location: "Rumtek Monastery",
    description: "Traditional Tibetan New Year celebration with masked dances and prayers",
    attendees: "500+",
    type: "Festival",
    image: "/losar-festival-masked-dancers-colorful-celebration.jpg",
  },
  {
    id: 2,
    title: "Buddha Purnima",
    date: "2024-05-23",
    time: "05:30 AM",
    location: "Pemayangtse Monastery",
    description: "Commemoration of Buddha's birth, enlightenment, and death",
    attendees: "300+",
    type: "Religious",
    image: "/buddha-purnima-prayer-ceremony-monastery.jpg",
  },
  {
    id: 3,
    title: "Saga Dawa Festival",
    date: "2024-06-22",
    time: "04:00 AM",
    location: "Tashiding Monastery",
    description: "Sacred month celebration with special prayers and rituals",
    attendees: "800+",
    type: "Pilgrimage",
    image: "/saga-dawa-festival-prayer-flags-pilgrims.jpg",
  },
]

export function UpcomingEvents() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Sacred Events</h2>
            <p className="text-muted-foreground max-w-2xl">
              Join spiritual celebrations and witness ancient traditions come alive
            </p>
          </div>
          <Link href="/events">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              View All Events
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-40 object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">{event.type}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">{event.title}</h3>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees} Expected
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>

                <Button size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
