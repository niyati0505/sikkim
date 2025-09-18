import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Music, Palette, Users } from "lucide-react"

const highlights = [
  {
    title: "Ancient Manuscripts",
    description: "Digitally preserved Buddhist texts and scriptures dating back centuries",
    icon: BookOpen,
    count: "500+",
    category: "Archives",
  },
  {
    title: "Traditional Music",
    description: "Sacred chants and ceremonial music recordings from monastery rituals",
    icon: Music,
    count: "200+",
    category: "Audio",
  },
  {
    title: "Sacred Art",
    description: "Thangka paintings, murals, and sculptures captured in high resolution",
    icon: Palette,
    count: "1000+",
    category: "Visual",
  },
  {
    title: "Living Heritage",
    description: "Stories and traditions shared by monks and local communities",
    icon: Users,
    count: "100+",
    category: "Stories",
  },
]

export function CulturalHighlights() {
  return (
    <section className="py-16 px-6 bg-muted/30 bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Cultural Heritage Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Preserving centuries of Buddhist wisdom and artistic traditions through digital innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight) => {
            const Icon = highlight.icon
            return (
              <Card key={highlight.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="mb-2">
                      {highlight.category}
                    </Badge>
                  </div>

                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{highlight.description}</p>

                  <div className="text-2xl font-bold text-primary">{highlight.count}</div>
                  <div className="text-xs text-muted-foreground">Items Available</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
