import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, Bell } from "lucide-react"

const allEvents = [
  {
    id: 3,
    title: "Saga Dawa Festival",
    date: "2024-06-22",
    time: "04:00 AM",
    location: "Tashiding Monastery",
    description:
      "Sacred month celebration marking Buddha's birth, enlightenment, and parinirvana with special prayers and rituals.",
    image: "/saga-dawa-festival-prayer-flags-pilgrims.jpg",
    type: "Pilgrimage",
    attendees: "800+",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Pang Lhabsol Festival",
    date: "2024-08-15",
    time: "07:00 AM",
    location: "Enchey Monastery",
    description: "Traditional festival honoring Mount Kanchenjunga with masked dances and warrior performances.",
    image: "/placeholder.svg?key=panglhabsol",
    type: "Cultural",
    attendees: "600+",
    status: "upcoming",
  },
  {
    id: 5,
    title: "Drukpa Kunley Festival",
    date: "2024-06-10",
    time: "06:30 AM",
    location: "Druk Sangag Choling Monastery",
    description: "Celebration honoring the Divine Madman with traditional performances and teachings.",
    image: "/placeholder.svg?key=drukpa",
    type: "Religious",
    attendees: "400+",
    status: "upcoming",
  },
  {
    id: 6,
    title: "Lhabab Duchen",
    date: "2024-11-12",
    time: "05:00 AM",
    location: "Multiple Monasteries",
    description: "Commemoration of Buddha's descent from heaven with special prayers and offerings.",
    image: "/placeholder.svg?key=lhabab",
    type: "Religious",
    attendees: "1000+",
    status: "upcoming",
  },
  {
    id: 7,
    title: "Drupka Teshi",
    date: "2024-07-20",
    time: "06:00 AM",
    location: "Rumtek Monastery",
    description: "Celebration of Buddha's first teaching with scripture readings and discussions.",
    image: "/placeholder.svg?key=drupka",
    type: "Religious",
    attendees: "500+",
    status: "upcoming",
  },
  {
    id: 8,
    title: "Tendong Lho Rum Faat",
    date: "2024-08-08",
    time: "08:00 AM",
    location: "Tendong Hill",
    description: "Traditional Lepcha festival celebrating the sacred Tendong Hill with cultural performances.",
    image: "/placeholder.svg?key=tendong",
    type: "Cultural",
    attendees: "300+",
    status: "upcoming",
  },
]

const getEventTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case "festival":
      return "bg-primary text-primary-foreground"
    case "religious":
      return "bg-secondary text-secondary-foreground"
    case "cultural":
      return "bg-accent text-accent-foreground"
    case "pilgrimage":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function EventsList() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">All Events</h2>
        <p className="text-muted-foreground">Complete calendar of monastery events and festivals</p>
      </div>

      <div className="space-y-4">
        {allEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-32 flex-shrink-0">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-20 md:h-24 object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                    <Badge className={`${getEventTypeColor(event.type)} text-xs`}>{event.type}</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees}
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{event.location}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Bell className="h-4 w-4 mr-2" />
                        Remind Me
                      </Button>
                      <Button size="sm" variant="outline">
                        Add to Calendar
                      </Button>
                    </div>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline">Load More Events</Button>
      </div>
    </section>
  )
}
