import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, Eye, Heart, Share2, Calendar, MapPin, Volume2 } from "lucide-react"
import Link from "next/link"

const archiveItems = [
  {
    id: 1,
    title: "Prajnaparamita Sutra",
    description:
      "Ancient palm leaf manuscript of the Perfection of Wisdom sutra, one of the most important Mahayana Buddhist texts.",
    type: "Manuscript",
    language: "Sanskrit",
    period: "12th Century",
    monastery: "Rumtek Monastery",
    pages: 108,
    image: "/placeholder.svg?key=prajnaparamita",
    thumbnail: "/placeholder.svg?key=prajnaparamita-thumb",
    subjects: ["Philosophy", "Wisdom Literature"],
    condition: "Excellent",
    digitized: "2023",
    downloads: 1250,
    views: 5680,
  },
  {
    id: 2,
    title: "Medicine Buddha Thangka",
    description:
      "Traditional Tibetan painting depicting the Medicine Buddha surrounded by healing deities and medicinal plants.",
    type: "Thangka",
    language: "Tibetan",
    period: "18th Century",
    monastery: "Pemayangtse Monastery",
    dimensions: "90cm x 60cm",
    image: "/placeholder.svg?key=medicine-buddha",
    thumbnail: "/placeholder.svg?key=medicine-buddha-thumb",
    subjects: ["Sacred Art", "Medicine"],
    condition: "Good",
    digitized: "2023",
    downloads: 890,
    views: 3420,
  },
  {
    id: 3,
    title: "Monastery Foundation Chronicle",
    description:
      "Historical record documenting the establishment of Tashiding Monastery and its early spiritual lineage.",
    type: "Chronicle",
    language: "Tibetan",
    period: "17th Century",
    monastery: "Tashiding Monastery",
    pages: 45,
    image: "/placeholder.svg?key=chronicle",
    thumbnail: "/placeholder.svg?key=chronicle-thumb",
    subjects: ["History", "Monastery Records"],
    condition: "Fair",
    digitized: "2022",
    downloads: 420,
    views: 1890,
  },
  {
    id: 4,
    title: "Morning Prayer Chants",
    description: "Traditional morning prayers recorded during daily ceremonies at Enchey Monastery.",
    type: "Audio",
    language: "Tibetan",
    period: "Modern",
    monastery: "Enchey Monastery",
    duration: "45 minutes",
    image: "/placeholder.svg?key=prayer-chants",
    thumbnail: "/placeholder.svg?key=prayer-chants-thumb",
    subjects: ["Rituals", "Sacred Music"],
    quality: "High Quality",
    digitized: "2023",
    downloads: 680,
    views: 2340,
  },
  {
    id: 5,
    title: "Lotus Sutra Commentary",
    description: "Detailed commentary on the Lotus Sutra by a renowned Tibetan scholar, with extensive annotations.",
    type: "Manuscript",
    language: "Tibetan",
    period: "19th Century",
    monastery: "Rumtek Monastery",
    pages: 234,
    image: "/placeholder.svg?key=lotus-sutra",
    thumbnail: "/placeholder.svg?key=lotus-sutra-thumb",
    subjects: ["Philosophy", "Commentaries"],
    condition: "Excellent",
    digitized: "2023",
    downloads: 950,
    views: 4120,
  },
  {
    id: 6,
    title: "Green Tara Mandala",
    description: "Intricate mandala painting featuring Green Tara, the female bodhisattva of compassion and action.",
    type: "Thangka",
    language: "Tibetan",
    period: "16th Century",
    monastery: "Dubdi Monastery",
    dimensions: "75cm x 75cm",
    image: "/placeholder.svg?key=green-tara",
    thumbnail: "/placeholder.svg?key=green-tara-thumb",
    subjects: ["Sacred Art", "Mandala"],
    condition: "Good",
    digitized: "2022",
    downloads: 720,
    views: 3680,
  },
]

const getTypeIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "manuscript":
      return BookOpen
    case "audio":
      return Volume2
    default:
      return BookOpen
  }
}

const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case "manuscript":
      return "bg-primary text-primary-foreground"
    case "thangka":
      return "bg-secondary text-secondary-foreground"
    case "chronicle":
      return "bg-accent text-accent-foreground"
    case "audio":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function ArchivesGrid() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">{archiveItems.length} Items Found</h2>
          <p className="text-sm text-muted-foreground">Showing all available archive materials</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {archiveItems.map((item) => {
          const TypeIcon = getTypeIcon(item.type)
          return (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                  <Badge className={`${getTypeColor(item.type)} text-xs`}>{item.type}</Badge>
                  <Badge variant="outline" className="bg-white/90 text-xs">
                    {item.language}
                  </Badge>
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
                    <Eye className="h-3 w-3 mr-1" />
                    <span className="text-xs font-medium">{item.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.period}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.monastery}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <TypeIcon className="h-4 w-4 mr-1" />
                    {item.pages ? `${item.pages} pages` : item.duration ? item.duration : item.dimensions}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {item.subjects.map((subject) => (
                      <Badge key={subject} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Condition: {item.condition || item.quality}</span>
                    <span>Digitized: {item.digitized}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Download className="h-3 w-3 mr-1" />
                      {item.downloads.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {item.views.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Link href={`/archives/${item.id}`} className="flex-1">
                    <Button size="sm" className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
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
