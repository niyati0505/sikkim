import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Camera, Navigation, Headphones } from "lucide-react"

export function ViewGalleryHeader() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            <Eye className="w-4 h-4 mr-2" />
            Virtual Reality Experience
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-balance">360° Virtual Tours</h1>

          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Step inside Sikkim's sacred monasteries through immersive virtual reality. Experience the spiritual
            atmosphere, architectural beauty, and cultural richness from anywhere in the world.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Camera className="w-4 h-4" />
              High-Resolution 360° Photography
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Navigation className="w-4 h-4" />
              Interactive Navigation
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Headphones className="w-4 h-4" />
              Immersive Audio
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Virtual Tour
            </Button>
            <Button size="lg" variant="outline">
              View Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
