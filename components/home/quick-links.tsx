import { Card, CardContent } from "@/components/ui/card"
import { Compass, Calendar, Archive, Map, Camera, Headphones } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  {
    title: "Explore Monasteries",
    description: "Browse our complete collection of sacred sites",
    icon: Compass,
    href: "/explore",
    color: "bg-amber-500",
  },
  {
    title: "Cultural Events",
    description: "Discover festivals and celebrations",
    icon: Calendar,
    href: "/events",
    color: "bg-yellow-500",
  },
  {
    title: "Digital Archives",
    description: "Access ancient manuscripts and documents",
    icon: Archive,
    href: "/archives",
    color: "bg-amber-600",
  },
  {
    title: "Travel Guide",
    description: "Plan your journey to sacred sites",
    icon: Map,
    href: "/tour",
    color: "bg-yellow-600",
  },
  {
    title: "360° Views",
    description: "Immersive virtual monastery tours",
    icon: Camera,
    href: "/360-view",
    color: "bg-amber-500",
  },
  {
    title: "Audio Guides",
    description: "Listen to spiritual narratives",
    icon: Headphones,
    href: "/explore?filter=audio",
    color: "bg-yellow-500",
  },
]

export function QuickLinks() {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Sacred Heritage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your path to discover the rich spiritual and cultural heritage of Sikkim's monasteries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link key={link.title} href={link.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`${link.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
