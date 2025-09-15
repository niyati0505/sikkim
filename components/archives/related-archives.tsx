import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Eye, Download } from "lucide-react"
import Link from "next/link"

interface RelatedArchivesProps {
  currentId: string
}

const relatedArchives = [
  {
    id: 2,
    title: "Medicine Buddha Thangka",
    type: "Thangka",
    period: "18th Century",
    monastery: "Pemayangtse Monastery",
    image: "/placeholder.svg?key=medicine-buddha-thumb",
    views: 3420,
    downloads: 890,
  },
  {
    id: 5,
    title: "Lotus Sutra Commentary",
    type: "Manuscript",
    period: "19th Century",
    monastery: "Rumtek Monastery",
    image: "/placeholder.svg?key=lotus-sutra-thumb",
    views: 4120,
    downloads: 950,
  },
  {
    id: 3,
    title: "Monastery Foundation Chronicle",
    type: "Chronicle",
    period: "17th Century",
    monastery: "Tashiding Monastery",
    image: "/placeholder.svg?key=chronicle-thumb",
    views: 1890,
    downloads: 420,
  },
]

const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case "manuscript":
      return "bg-primary text-primary-foreground"
    case "thangka":
      return "bg-secondary text-secondary-foreground"
    case "chronicle":
      return "bg-accent text-accent-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function RelatedArchives({ currentId }: RelatedArchivesProps) {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Related Archives</h2>
          <p className="text-muted-foreground">Explore similar documents and manuscripts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArchives.map((archive) => (
            <Card key={archive.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={archive.image || "/placeholder.svg"}
                  alt={archive.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={`${getTypeColor(archive.type)} text-xs`}>{archive.type}</Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="flex items-center bg-white/90 rounded-full px-2 py-1">
                    <Eye className="h-3 w-3 mr-1" />
                    <span className="text-xs font-medium">{archive.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{archive.title}</h3>
                <div className="text-sm text-muted-foreground mb-3">
                  <div>{archive.period}</div>
                  <div>{archive.monastery}</div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Download className="h-3 w-3 mr-1" />
                    {archive.downloads.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    {archive.views.toLocaleString()}
                  </div>
                </div>
                <Link href={`/archives/${archive.id}`}>
                  <Button size="sm" className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Archive
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
