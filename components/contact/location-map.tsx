import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation } from "lucide-react"
import Image from "next/image"

export function LocationMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Our Location
        </CardTitle>
        <p className="text-muted-foreground">Based in the heart of Sikkim's cultural landscape</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/topographic-map-of-sikkim-with-monastery-locations.jpg"
            alt="Lama Maps Office Location in Sikkim"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <Badge className="absolute top-3 left-3 bg-primary/90">
            <Navigation className="w-3 h-3 mr-1" />
            Gangtok
          </Badge>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="font-semibold">Lama Maps Headquarters</h4>
            <p className="text-sm text-muted-foreground">
              MG Marg, Gangtok
              <br />
              Sikkim 737101, India
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>
              Located in Sikkim's capital, we're perfectly positioned to work closely with local monasteries and
              communities while maintaining connections with government and tourism partners.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
