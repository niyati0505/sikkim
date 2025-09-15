import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Headphones, Camera } from "lucide-react"
import Link from "next/link"

const featuredMonasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "Gangtok, East Sikkim",
    description:
      "The largest monastery in Sikkim, known as the Dharma Chakra Centre. Famous for its golden stupa and traditional architecture.",
    image: "/rumtek-monastery-golden-roof-traditional-architect.jpg",
    established: "1966",
    features: ["360° View", "Audio Guide", "Virtual Tour"],
    significance: "Seat of the 16th Karmapa",
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "Pelling, West Sikkim",
    description:
      "One of the oldest monasteries in Sikkim, offering breathtaking views of Kanchenjunga. Known for its wooden sculptures.",
    image: "/pemayangtse-monastery-mountain-views-wooden-sculpt.jpg",
    established: "1705",
    features: ["Mountain Views", "Audio Guide", "Historical Archives"],
    significance: "Perfect Sublime Lotus",
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    location: "Tashiding, West Sikkim",
    description:
      "Sacred monastery believed to cleanse sins of pilgrims. Located on a hilltop between Rangit and Rathong rivers.",
    image: "/tashiding-monastery-hilltop-sacred-site-rivers.jpg",
    established: "1641",
    features: ["Sacred Site", "Pilgrimage", "River Views"],
    significance: "The Devoted Central Glory",
  },
]

export function FeaturedMonasteries() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Sacred Sites</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the most significant monasteries that define Sikkim's spiritual landscape
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredMonasteries.map((monastery) => (
            <Card key={monastery.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={monastery.image || "/placeholder.svg"}
                  alt={monastery.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex space-x-1">
                  {monastery.features.includes("360° View") && (
                    <Badge variant="outline" className="bg-white/90 text-xs">
                      <Camera className="h-3 w-3 mr-1" />
                      360°
                    </Badge>
                  )}
                  {monastery.features.includes("Audio Guide") && (
                    <Badge variant="outline" className="bg-white/90 text-xs">
                      <Headphones className="h-3 w-3" />
                    </Badge>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{monastery.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {monastery.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    Established {monastery.established}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{monastery.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-medium text-primary mb-2">Significance: {monastery.significance}</p>
                  <div className="flex flex-wrap gap-1">
                    {monastery.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    Explore
                  </Button>
                  <Button size="sm" variant="outline">
                    Virtual Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/explore">
            <Button size="lg" variant="outline">
              View All Monasteries
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
