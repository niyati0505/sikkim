import { Badge } from "@/components/ui/badge"
import { Heart, Mountain, Users } from "lucide-react"
import Image from "next/image"

export function AboutHeader() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-6">
            <Image src="/images/lama-maps-logo.png" alt="Lama Maps Logo" width={80} height={80} className="h-20 w-20" />
          </div>

          <Badge variant="secondary" className="mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Preserving Heritage
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-balance bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-sm">
            About Lama Maps
          </h1>

          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            We are dedicated to preserving and promoting Sikkim's rich Buddhist heritage through innovative digital
            technologies, making these sacred spaces accessible to the world while supporting local communities and
            sustainable tourism.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="text-center space-y-3">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Mountain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Cultural Preservation</h3>
              <p className="text-sm text-muted-foreground">
                Digitally documenting and preserving Sikkim's monastery heritage for future generations
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Community Empowerment</h3>
              <p className="text-sm text-muted-foreground">
                Supporting local communities through sustainable cultural tourism initiatives
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Global Access</h3>
              <p className="text-sm text-muted-foreground">
                Making Sikkim's spiritual heritage accessible to people worldwide through technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
