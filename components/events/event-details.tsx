import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock, Users, Bell, Share2, Download, Navigation, Camera } from "lucide-react"

interface EventDetailsProps {
  eventId: string
}

// Mock data - in real app this would come from API/database
const eventData = {
  id: 1,
  title: "Losar Festival - Tibetan New Year",
  date: "2024-02-10",
  time: "06:00 AM",
  endTime: "08:00 PM",
  location: "Rumtek Monastery",
  address: "Rumtek, East Sikkim, India",
  description:
    "The most important festival in the Tibetan calendar, celebrating the new year with traditional masked dances, prayers, and community feasts.",
  longDescription:
    "Losar, meaning 'new year' in Tibetan, is the most significant festival in the Tibetan Buddhist calendar. This three-day celebration marks the beginning of the Tibetan lunar year and is observed with great enthusiasm across all monasteries in Sikkim. The festival combines spiritual practices with cultural traditions, featuring elaborate masked dances (Cham), traditional music, community feasts, and prayer ceremonies.",
  image: "/losar-festival-masked-dancers-colorful-celebration.jpg",
  images: [
    "/losar-festival-masked-dancers-colorful-celebration.jpg",
    "/placeholder.svg?key=losar2",
    "/placeholder.svg?key=losar3",
    "/placeholder.svg?key=losar4",
  ],
  type: "Festival",
  duration: "3 days",
  attendees: "2000+",
  highlights: ["Cham Dance", "Traditional Music", "Community Feast", "Prayer Ceremonies"],
  schedule: [
    { time: "06:00 AM", activity: "Morning Prayers and Offerings" },
    { time: "08:00 AM", activity: "Traditional Breakfast Ceremony" },
    { time: "10:00 AM", activity: "Cham Dance Performances" },
    { time: "12:00 PM", activity: "Community Lunch" },
    { time: "02:00 PM", activity: "Cultural Programs" },
    { time: "04:00 PM", activity: "Blessing Ceremonies" },
    { time: "06:00 PM", activity: "Evening Prayers" },
    { time: "07:00 PM", activity: "Traditional Dinner" },
  ],
  significance:
    "Losar represents renewal, purification, and the triumph of good over evil. It's a time for families to come together, seek blessings for the coming year, and participate in ancient traditions that have been preserved for centuries.",
  traditions: [
    "Khapse preparation - traditional fried pastries",
    "House cleaning and decoration with prayer flags",
    "Offering of Tsampa (roasted barley flour)",
    "Exchange of Tashi Delek greetings",
    "Wearing of traditional Tibetan costumes",
  ],
  guidelines: [
    "Arrive early to secure good viewing spots for performances",
    "Dress respectfully and modestly",
    "Photography may be restricted during certain ceremonies",
    "Participate respectfully in community activities",
    "Follow monastery guidelines and staff instructions",
  ],
}

export function EventDetails({ eventId }: EventDetailsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="relative h-96 rounded-lg overflow-hidden mb-6">
          <img
            src={eventData.image || "/placeholder.svg"}
            alt={eventData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-6 left-6 text-white">
            <Badge className="bg-primary text-primary-foreground mb-2">{eventData.type}</Badge>
            <h1 className="text-3xl font-bold mb-2">{eventData.title}</h1>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(eventData.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {eventData.time} - {eventData.endTime}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {eventData.location}
              </div>
            </div>
          </div>
          <div className="absolute top-6 right-6 flex space-x-2">
            <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Bell className="mr-2 h-5 w-5" />
            Get Notifications
          </Button>
          <Button size="lg" variant="outline">
            <Calendar className="mr-2 h-5 w-5" />
            Add to Calendar
          </Button>
          <Button size="lg" variant="outline">
            <Navigation className="mr-2 h-5 w-5" />
            Get Directions
          </Button>
          <Button size="lg" variant="outline">
            <Camera className="mr-2 h-5 w-5" />
            View Gallery
          </Button>
        </div>

        {/* Event Highlights */}
        <div className="flex flex-wrap gap-2">
          {eventData.highlights.map((highlight) => (
            <Badge key={highlight} variant="outline">
              {highlight}
            </Badge>
          ))}
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">About {eventData.title}</h3>
                  <p className="text-muted-foreground mb-4">{eventData.longDescription}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Duration:</span>
                      <p className="text-muted-foreground">{eventData.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium">Expected Attendees:</span>
                      <p className="text-muted-foreground">{eventData.attendees}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Cultural Significance</h3>
                  <p className="text-muted-foreground">{eventData.significance}</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Event Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-3 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Date</div>
                        <div className="text-muted-foreground">
                          {new Date(eventData.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-3 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Time</div>
                        <div className="text-muted-foreground">
                          {eventData.time} - {eventData.endTime}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-muted-foreground">{eventData.location}</div>
                        <div className="text-xs text-muted-foreground">{eventData.address}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-3 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Expected Attendance</div>
                        <div className="text-muted-foreground">{eventData.attendees}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button size="sm" className="w-full">
                      <Bell className="h-4 w-4 mr-2" />
                      Set Reminder
                    </Button>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Event
                    </Button>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Download Info
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Event Schedule</h3>
              <div className="space-y-4">
                {eventData.schedule.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium min-w-fit">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{item.activity}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traditions">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Traditional Practices</h3>
              <div className="space-y-4">
                {eventData.traditions.map((tradition, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{tradition}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Visitor Guidelines</h3>
              <div className="space-y-4">
                {eventData.guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{guideline}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gallery">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventData.images.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${eventData.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
