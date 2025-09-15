import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Users, Star } from "lucide-react"
import Image from "next/image"

const virtualTours = [
  {
    id: "rumtek-360",
    title: "Rumtek Monastery Virtual Tour",
    description: "Explore the Golden Stupa and main prayer hall of this magnificent Kagyu monastery.",
    duration: "15 minutes",
    views: "12.5K",
    rating: 4.9,
    thumbnail: "/rumtek-monastery-golden-roof-traditional-architect.jpg",
    highlights: ["Golden Stupa", "Prayer Hall", "Monk Quarters", "Garden Views"],
    difficulty: "Beginner Friendly",
  },
  {
    id: "pemayangtse-360",
    title: "Pemayangtse Monastery Experience",
    description: "Journey through ancient wooden sculptures and sacred chambers of this historic monastery.",
    duration: "20 minutes",
    views: "8.3K",
    rating: 4.8,
    thumbnail: "/pemayangtse-monastery-mountain-views-wooden-sculpt.jpg",
    highlights: ["Wooden Sculptures", "Sacred Chambers", "Mountain Views", "Ancient Artifacts"],
    difficulty: "Intermediate",
  },
  {
    id: "tashiding-360",
    title: "Tashiding Sacred Site Tour",
    description: "Experience the spiritual energy of this hilltop monastery overlooking sacred rivers.",
    duration: "12 minutes",
    views: "15.7K",
    rating: 4.9,
    thumbnail: "/tashiding-monastery-hilltop-sacred-site-rivers.jpg",
    highlights: ["Hilltop Views", "Sacred Rivers", "Prayer Flags", "Meditation Spaces"],
    difficulty: "Beginner Friendly",
  },
]

export function VirtualTours() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Featured Virtual Tours</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Immerse yourself in guided virtual tours of Sikkim's most sacred monasteries. Each tour includes interactive
          hotspots, historical narration, and spiritual insights.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {virtualTours.map((tour) => (
          <Card key={tour.id} className="group hover:shadow-lg transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={tour.thumbnail || "/placeholder.svg"}
                alt={tour.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <Button
                size="sm"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Tour
              </Button>
              <Badge className="absolute top-3 right-3 bg-primary/90">360°</Badge>
            </div>

            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {tour.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {tour.rating}
                </div>
              </div>

              <CardTitle className="text-lg leading-tight">{tour.title}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-2">{tour.description}</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {tour.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {tour.views} views
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Tour Highlights:</p>
                <div className="flex flex-wrap gap-1">
                  {tour.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                <Play className="w-4 h-4 mr-2" />
                Begin Virtual Tour
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
