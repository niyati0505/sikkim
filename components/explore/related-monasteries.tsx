import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"
import Link from "next/link"

interface RelatedMonasteriesProps {
  currentId: string
}

const relatedMonasteries = [
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "Pelling, West Sikkim",
    tradition: "Nyingma",
    image: "/pemayangtse-monastery-mountain-views-wooden-sculpt.jpg",
    rating: 4.7,
    distance: "110 km away",
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    location: "Tashiding, West Sikkim",
    tradition: "Nyingma",
    image: "/tashiding-monastery-hilltop-sacred-site-rivers.jpg",
    rating: 4.6,
    distance: "85 km away",
  },
  {
    id: 4,
    name: "Enchey Monastery",
    location: "Gangtok, East Sikkim",
    tradition: "Nyingma",
    image: "/placeholder.svg?key=enchey",
    rating: 4.5,
    distance: "3 km away",
  },
]

export function RelatedMonasteries({ currentId }: RelatedMonasteriesProps) {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Explore Nearby Monasteries</h2>
          <p className="text-muted-foreground">Discover other sacred sites in the region</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedMonasteries.map((monastery) => (
            <Card key={monastery.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={monastery.image || "/placeholder.svg"}
                  alt={monastery.name}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-primary-foreground text-xs">{monastery.tradition}</Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="flex items-center bg-white/90 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 text-yellow-500 mr-1" />
                    <span className="text-xs font-medium">{monastery.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{monastery.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {monastery.location}
                </div>
                <p className="text-xs text-muted-foreground mb-3">{monastery.distance}</p>
                <Link href={`/explore/${monastery.id}`}>
                  <Button size="sm" className="w-full">
                    Explore
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
