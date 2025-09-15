import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const partners = [
  {
    name: "Government of Sikkim",
    type: "Government Partner",
    description: "Official support for cultural preservation initiatives",
    logo: "/placeholder-logo.png",
  },
  {
    name: "Sikkim Tourism Board",
    type: "Tourism Partner",
    description: "Promoting sustainable cultural tourism",
    logo: "/placeholder-logo.png",
  },
  {
    name: "Buddhist Heritage Foundation",
    type: "Cultural Partner",
    description: "Expertise in Buddhist cultural preservation",
    logo: "/placeholder-logo.png",
  },
  {
    name: "Digital Heritage Institute",
    type: "Technology Partner",
    description: "Advanced digital preservation technologies",
    logo: "/placeholder-logo.png",
  },
  {
    name: "Local Monastery Network",
    type: "Community Partner",
    description: "Direct collaboration with monastery communities",
    logo: "/placeholder-logo.png",
  },
  {
    name: "UNESCO India",
    type: "International Partner",
    description: "Global heritage preservation standards",
    logo: "/placeholder-logo.png",
  },
]

export function PartnersSection() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Our Partners</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We collaborate with government agencies, cultural institutions, technology partners, and local communities to
          ensure authentic and sustainable heritage preservation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <Card key={partner.name} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={48}
                  height={48}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{partner.name}</h3>
                  <Badge variant="outline" className="text-xs mt-1">
                    {partner.type}
                  </Badge>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">{partner.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
