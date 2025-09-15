import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Volume2, Camera, Star, Heart, Share2 } from "lucide-react"
import Link from "next/link"

const monasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "Gangtok, East Sikkim",
    tradition: "Kagyu",
    established: "1966",
    description:
      "The largest monastery in Sikkim, known as the Dharma Chakra Centre. Famous for its golden stupa and traditional architecture.",
    image: "/rumtek-monastery-golden-roof-traditional-architect.jpg",
    features: ["360° View", "Audio Guide", "Virtual Tour", "Digital Archives"],
    visitors: "1000+",
    rating: 4.8,
    significance: "Seat of the 16th Karmapa",
    distance: "24 km from Gangtok",
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "Pelling, West Sikkim",
    tradition: "Nyingma",
    established: "1705",
    description:
      "One of the oldest monasteries in Sikkim, offering breathtaking views of Kanchenjunga. Known for its wooden sculptures.",
    image: "/pemayangtse-monastery-mountain-views-wooden-sculpt.jpg",
    features: ["Mountain Views", "Audio Guide", "Historical Archives"],
    visitors: "800+",
    rating: 4.7,
    significance: "Perfect Sublime Lotus",
    distance: "110 km from Gangtok",
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    location: "Tashiding, West Sikkim",
    tradition: "Nyingma",
    established: "1641",
    description:
      "Sacred monastery believed to cleanse sins of pilgrims. Located on a hilltop between Rangit and Rathong rivers.",
    image: "/tashiding-monastery-hilltop-sacred-site-rivers.jpg",
    features: ["Sacred Site", "Pilgrimage", "River Views"],
    visitors: "600+",
    rating: 4.6,
    significance: "The Devoted Central Glory",
    distance: "85 km from Gangtok",
  },
  {
    id: 4,
    name: "Enchey Monastery",
    location: "Gangtok, East Sikkim",
    tradition: "Nyingma",
    established: "1909",
    description:
      "Located on a hilltop above Gangtok, this monastery is known for its annual Cham dance during the Pang Lhabsol festival.",
    image: "/placeholder.svg?key=enchey",
    features: ["City Views", "Annual Festival", "Traditional Dance"],
    visitors: "500+",
    rating: 4.5,
    significance: "Solitary Temple",
    distance: "3 km from Gangtok",
  },
  {
    id: 5,
    name: "Dubdi Monastery",
    location: "Yuksom, West Sikkim",
    tradition: "Nyingma",
    established: "1701",
    description:
      "The first monastery built in Sikkim, also known as the Hermit's Cell. Requires a short trek through beautiful forests.",
    image: "/placeholder.svg?key=dubdi",
    features: ["Trekking", "Forest Views", "Historical Significance"],
    visitors: "300+",
    rating: 4.4,
    significance: "First Monastery of Sikkim",
    distance: "125 km from Gangtok",
  },
  {
    id: 6,
    name: "Phensang Monastery",
    location: "Kewzing, South Sikkim",
    tradition: "Nyingma",
    established: "1721",
    description:
      "A peaceful monastery known for its meditation retreats and beautiful gardens. Popular among those seeking spiritual solitude.",
    image: "/placeholder.svg?key=phensang",
    features: ["Meditation Retreats", "Gardens", "Peaceful Environment"],
    visitors: "200+",
    rating: 4.3,
    significance: "Meditation Center",
    distance: "45 km from Gangtok",
  },
]

export function MonasteryGrid() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">{monasteries.length} Monasteries Found</h2>
          <p className="text-sm text-muted-foreground">Showing all available sacred sites</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {monasteries.map((monastery) => (
          <Card key={monastery.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src={monastery.image || "/placeholder.svg"}
                alt={monastery.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                <Badge className="bg-primary text-primary-foreground text-xs">{monastery.tradition}</Badge>
                {monastery.features.includes("360° View") && (
                  <Badge variant="outline" className="bg-white/90 text-xs">
                    <Camera className="h-3 w-3 mr-1" />
                    360°
                  </Badge>
                )}
                {monastery.features.includes("Audio Guide") && (
                  <Badge variant="outline" className="bg-white/90 text-xs">
                    <Volume2 className="h-3 w-3 mr-1" />
                    Audio
                  </Badge>
                )}
              </div>
              <div className="absolute top-4 right-4 flex space-x-1">
                <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white h-8 w-8 p-0">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white h-8 w-8 p-0">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center bg-white/90 rounded-full px-2 py-1">
                  <Star className="h-3 w-3 text-yellow-500 mr-1" />
                  <span className="text-xs font-medium">{monastery.rating}</span>
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {monastery.name}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {monastery.location} • {monastery.distance}
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  Established {monastery.established}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  {monastery.visitors} monthly visitors
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{monastery.description}</p>

              <div className="mb-4">
                <p className="text-xs font-medium text-primary mb-2">Significance: {monastery.significance}</p>
                <div className="flex flex-wrap gap-1">
                  {monastery.features.slice(0, 3).map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {monastery.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{monastery.features.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex space-x-2">
                <Link href={`/explore/${monastery.id}`} className="flex-1">
                  <Button size="sm" className="w-full">
                    Explore Details
                  </Button>
                </Link>
                <Button size="sm" variant="outline">
                  Virtual Tour
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 pt-8">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button size="sm" className="bg-primary text-primary-foreground">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )
}
