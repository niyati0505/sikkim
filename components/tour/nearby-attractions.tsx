import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star, Camera } from "lucide-react"

const nearbyAttractions = [
  {
    id: 1,
    name: "Khecheopalri Lake",
    description: "Sacred lake revered by both Buddhists and Hindus, known for its pristine beauty",
    distance: "5 km from Pemayangtse",
    duration: "2-3 hours",
    type: "Sacred Site",
    rating: 4.7,
    image: "/placeholder.svg?key=khecheopalri",
    highlights: ["Wish-fulfilling lake", "Bird watching", "Prayer flags"],
    bestTime: "March to June",
  },
  {
    id: 2,
    name: "Yumthang Valley",
    description: "Valley of flowers with hot springs and stunning alpine scenery",
    distance: "25 km from Lachung",
    duration: "Full day",
    type: "Natural Wonder",
    rating: 4.8,
    image: "/placeholder.svg?key=yumthang",
    highlights: ["Rhododendron blooms", "Hot springs", "Snow peaks"],
    bestTime: "April to June",
  },
  {
    id: 3,
    name: "Nathu La Pass",
    description: "Historic trade route between India and China at 14,140 feet",
    distance: "56 km from Gangtok",
    duration: "Full day",
    type: "Historical Site",
    rating: 4.5,
    image: "/placeholder.svg?key=nathula",
    highlights: ["Border views", "War memorial", "High altitude"],
    bestTime: "May to October",
  },
  {
    id: 4,
    name: "Gurudongmar Lake",
    description: "One of the highest lakes in the world, sacred to multiple religions",
    distance: "190 km from Gangtok",
    duration: "2 days",
    type: "Sacred Lake",
    rating: 4.9,
    image: "/placeholder.svg?key=gurudongmar",
    highlights: ["High altitude lake", "Sacred significance", "Pristine beauty"],
    bestTime: "May to October",
  },
  {
    id: 5,
    name: "Tsomgo Lake",
    description: "Glacial lake surrounded by steep mountains, changes color with seasons",
    distance: "40 km from Gangtok",
    duration: "Half day",
    type: "Natural Wonder",
    rating: 4.6,
    image: "/placeholder.svg?key=tsomgo",
    highlights: ["Color-changing lake", "Yak rides", "Mountain views"],
    bestTime: "March to June, October to December",
  },
  {
    id: 6,
    name: "Pelling Skywalk",
    description: "Glass skywalk offering panoramic views of Kanchenjunga range",
    distance: "2 km from Pelling",
    duration: "1-2 hours",
    type: "Adventure",
    rating: 4.4,
    image: "/placeholder.svg?key=pelling-skywalk",
    highlights: ["Glass bridge", "Mountain panorama", "Adventure activity"],
    bestTime: "October to May",
  },
]

const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case "sacred site":
    case "sacred lake":
      return "bg-primary text-primary-foreground"
    case "natural wonder":
      return "bg-green-500 text-white"
    case "historical site":
      return "bg-amber-500 text-white"
    case "adventure":
      return "bg-red-500 text-white"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function NearbyAttractions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Camera className="h-5 w-5 mr-2" />
          Nearby Attractions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {nearbyAttractions.map((attraction) => (
            <div key={attraction.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Badge className={`${getTypeColor(attraction.type)} text-xs`}>{attraction.type}</Badge>
                </div>
                <div className="absolute top-2 right-2">
                  <div className="flex items-center bg-white/90 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 text-yellow-500 mr-1" />
                    <span className="text-xs font-medium">{attraction.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-3">
                <h3 className="font-semibold text-foreground mb-1">{attraction.name}</h3>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{attraction.description}</p>

                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span className="mr-3">{attraction.distance}</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{attraction.duration}</span>
                </div>

                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {attraction.highlights.slice(0, 2).map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {attraction.highlights.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{attraction.highlights.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">Best: {attraction.bestTime}</div>
                  <Button size="sm" variant="outline" className="text-xs px-2 py-1 h-auto bg-transparent">
                    Add to Route
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button className="w-full mt-4 bg-transparent" variant="outline">
          View All Attractions
        </Button>
      </CardContent>
    </Card>
  )
}
