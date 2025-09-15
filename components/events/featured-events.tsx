import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, Star } from "lucide-react"

const featuredEvents = [
  {
    id: 1,
    title: "Losar Festival - Tibetan New Year",
    date: "2024-02-10",
    time: "06:00 AM",
    endTime: "08:00 PM",
    location: "Rumtek Monastery",
    description:
      "The most important festival in the Tibetan calendar, celebrating the new year with traditional masked dances, prayers, and community feasts.",
    image: "/losar-festival-masked-dancers-colorful-celebration.jpg",
    type: "Festival",
    duration: "3 days",
    attendees: "2000+",
    highlights: ["Cham Dance", "Traditional Music", "Community Feast", "Prayer Ceremonies"],
    featured: true,
  },
  {
    id: 2,
    title: "Buddha Purnima Celebration",
    date: "2024-05-23",
    time: "05:30 AM",
    endTime: "06:00 PM",
    location: "Pemayangtse Monastery",
    description:
      "Commemoration of Buddha's birth, enlightenment, and death with special prayers, meditation sessions, and teachings.",
    image: "/buddha-purnima-prayer-ceremony-monastery.jpg",
    type: "Religious",
    duration: "1 day",
    attendees: "1500+",
    highlights: ["Special Prayers", "Meditation Sessions", "Buddhist Teachings", "Candlelight Procession"],
    featured: true,
  },
]

export function FeaturedEvents() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Featured Events</h2>
        <p className="text-muted-foreground">Don't miss these spectacular celebrations</p>
      </div>

      <div className="space-y-6">
        {featuredEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-48 md:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90">
                    {event.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="md:w-2/3 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground mb-3">
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
                      {event.time} - {event.endTime}
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

                  <p className="text-muted-foreground mb-4">{event.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Event Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight) => (
                        <Badge key={highlight} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Duration: <span className="font-medium">{event.duration}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Add to Calendar
                      </Button>
                      <Button size="sm">Learn More</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
