import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Scroll, Palette, Music } from "lucide-react"

const featuredCollections = [
  {
    id: 1,
    title: "Ancient Buddhist Manuscripts",
    description: "Rare palm leaf manuscripts and texts dating back to the 8th century",
    icon: BookOpen,
    count: "250+",
    image: "/placeholder.svg?key=manuscripts",
    category: "Manuscripts",
    highlights: ["Prajnaparamita Sutra", "Lotus Sutra", "Vinaya Texts"],
  },
  {
    id: 2,
    title: "Sacred Thangka Collection",
    description: "High-resolution digital captures of traditional Tibetan paintings",
    icon: Palette,
    count: "180+",
    image: "/placeholder.svg?key=thangkas",
    category: "Art",
    highlights: ["Medicine Buddha", "Green Tara", "Mandala Paintings"],
  },
  {
    id: 3,
    title: "Historical Chronicles",
    description: "Monastery records and historical documents of Sikkim",
    icon: Scroll,
    count: "120+",
    image: "/placeholder.svg?key=chronicles",
    category: "History",
    highlights: ["Royal Genealogies", "Monastery Foundations", "Cultural Records"],
  },
  {
    id: 4,
    title: "Sacred Music & Chants",
    description: "Traditional Buddhist chants and ceremonial music recordings",
    icon: Music,
    count: "90+",
    image: "/placeholder.svg?key=music",
    category: "Audio",
    highlights: ["Morning Prayers", "Festival Chants", "Meditation Music"],
  },
]

export function FeaturedCollections() {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most significant digital preservation efforts spanning centuries of Buddhist heritage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCollections.map((collection) => {
            const Icon = collection.icon
            return (
              <Card
                key={collection.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{collection.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-2">
                      <Icon className="h-5 w-5 mr-2" />
                      <span className="font-semibold text-lg">{collection.count}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{collection.description}</p>

                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-foreground mb-2">Highlights:</h4>
                    <div className="space-y-1">
                      {collection.highlights.map((highlight) => (
                        <div key={highlight} className="text-xs text-muted-foreground">
                          • {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button size="sm" className="w-full">
                    Explore Collection
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
