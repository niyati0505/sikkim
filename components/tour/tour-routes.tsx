import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Route, Clock, MapPin, Car, Bus, Footprints } from "lucide-react"

const detailedRoutes = [
  {
    id: 1,
    name: "East Sikkim Sacred Circuit",
    description: "Perfect for first-time visitors, covering the most accessible monasteries near Gangtok",
    duration: "1-2 Days",
    distance: "45 km",
    difficulty: "Easy",
    transportModes: ["Car", "Taxi", "Bus"],
    monasteries: [
      {
        name: "Enchey Monastery",
        time: "9:00 AM",
        duration: "1.5 hours",
        distance: "3 km from Gangtok",
        highlights: ["City views", "Morning prayers", "Traditional architecture"],
      },
      {
        name: "Rumtek Monastery",
        time: "11:30 AM",
        duration: "2.5 hours",
        distance: "24 km from Gangtok",
        highlights: ["Golden stupa", "Monastery museum", "Tibetan art"],
      },
    ],
    tips: [
      "Start early to avoid crowds",
      "Carry warm clothes for higher altitudes",
      "Photography allowed in most areas",
    ],
    bestTime: "March to June, September to November",
    cost: "₹2,000 - ₹3,500 per person",
  },
  {
    id: 2,
    name: "West Sikkim Pilgrimage Trail",
    description: "Spiritual journey through ancient monasteries with stunning mountain views",
    duration: "3-4 Days",
    distance: "220 km",
    difficulty: "Moderate",
    transportModes: ["Car", "Jeep"],
    monasteries: [
      {
        name: "Pemayangtse Monastery",
        time: "Day 1 - 10:00 AM",
        duration: "3 hours",
        distance: "110 km from Gangtok",
        highlights: ["Kanchenjunga views", "Wooden sculptures", "Ancient texts"],
      },
      {
        name: "Tashiding Monastery",
        time: "Day 2 - 9:00 AM",
        duration: "2 hours",
        distance: "40 km from Pelling",
        highlights: ["Sacred site", "River confluence", "Pilgrimage significance"],
      },
      {
        name: "Dubdi Monastery",
        time: "Day 3 - 8:00 AM",
        duration: "2.5 hours",
        distance: "45 km from Tashiding",
        highlights: ["First monastery", "Forest trek", "Historical importance"],
      },
    ],
    tips: [
      "Book accommodation in advance",
      "Carry trekking shoes for Dubdi",
      "Respect photography restrictions",
      "Try local cuisine in Pelling",
    ],
    bestTime: "April to June, October to December",
    cost: "₹8,000 - ₹12,000 per person",
  },
  {
    id: 3,
    name: "Complete Sacred Journey",
    description: "Comprehensive tour covering all major monasteries across Sikkim",
    duration: "7-10 Days",
    distance: "450 km",
    difficulty: "Challenging",
    transportModes: ["Car", "Jeep", "Trekking"],
    monasteries: [
      {
        name: "Gangtok Monasteries",
        time: "Day 1-2",
        duration: "2 days",
        distance: "Within city",
        highlights: ["Enchey", "Do Drul Chorten", "Ganesh Tok"],
      },
      {
        name: "East Sikkim Circuit",
        time: "Day 3-4",
        duration: "2 days",
        distance: "80 km",
        highlights: ["Rumtek", "Lingdum", "Ranka"],
      },
      {
        name: "West Sikkim Trail",
        time: "Day 5-8",
        duration: "4 days",
        distance: "280 km",
        highlights: ["Pemayangtse", "Tashiding", "Dubdi", "Khecheopalri Lake"],
      },
      {
        name: "North Sikkim Extension",
        time: "Day 9-10",
        duration: "2 days",
        distance: "90 km",
        highlights: ["Lachung Monastery", "Lachen Monastery", "Yumthang Valley"],
      },
    ],
    tips: [
      "Obtain Inner Line Permit for North Sikkim",
      "Pack for varying altitudes and weather",
      "Book guided tour for remote areas",
      "Allow flexibility for weather delays",
    ],
    bestTime: "May to October",
    cost: "₹25,000 - ₹40,000 per person",
  },
]

export function TourRoutes() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Detailed Tour Routes</h2>
        <p className="text-muted-foreground">Choose from our carefully crafted spiritual journeys</p>
      </div>

      <div className="space-y-8">
        {detailedRoutes.map((route) => (
          <Card key={route.id} className="overflow-hidden">
            <CardHeader className="bg-muted/30">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl flex items-center mb-2">
                    <Route className="h-5 w-5 mr-2" />
                    {route.name}
                  </CardTitle>
                  <p className="text-muted-foreground mb-3">{route.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {route.duration}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      {route.distance}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        route.difficulty === "Easy"
                          ? "bg-green-100 text-green-800"
                          : route.difficulty === "Moderate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {route.difficulty}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-primary mb-1">{route.cost}</div>
                  <div className="text-xs text-muted-foreground">per person</div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h3 className="font-semibold text-foreground mb-4">Itinerary</h3>
                  <div className="space-y-4">
                    {route.monasteries.map((monastery, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                        <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-1">{monastery.name}</h4>
                          <div className="text-sm text-muted-foreground mb-2">
                            <div>
                              🕒 {monastery.time} • ⏱️ {monastery.duration}
                            </div>
                            <div>📍 {monastery.distance}</div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {monastery.highlights.map((highlight) => (
                              <Badge key={highlight} variant="outline" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Transport Options</h3>
                    <div className="space-y-2">
                      {route.transportModes.map((mode) => (
                        <div key={mode} className="flex items-center text-sm">
                          {mode === "Car" && <Car className="h-4 w-4 mr-2" />}
                          {mode === "Bus" && <Bus className="h-4 w-4 mr-2" />}
                          {mode === "Trekking" && <Footprints className="h-4 w-4 mr-2" />}
                          {mode === "Taxi" && <Car className="h-4 w-4 mr-2" />}
                          {mode === "Jeep" && <Car className="h-4 w-4 mr-2" />}
                          <span>{mode}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Travel Tips</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {route.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Best Time to Visit</h3>
                    <p className="text-sm text-muted-foreground">{route.bestTime}</p>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      Book Tour
                    </Button>
                    <Button size="sm" variant="outline">
                      Customize
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
