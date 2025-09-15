import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Camera, Globe } from "lucide-react"

const stats = [
  {
    icon: MapPin,
    value: "25+",
    label: "Monasteries Documented",
    description: "Comprehensive digital archives created",
  },
  {
    icon: Camera,
    value: "10,000+",
    label: "High-Resolution Images",
    description: "Preserving architectural and cultural details",
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Global Visitors",
    description: "People connected to Sikkim's heritage",
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries Reached",
    description: "International cultural exchange facilitated",
  },
]

export function ImpactStats() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Our Impact</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Since our launch, we've made significant strides in preserving and promoting Sikkim's Buddhist heritage while
          supporting local communities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>

              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <h3 className="font-semibold">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
