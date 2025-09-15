import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Compass } from "lucide-react"

export function MissionVision() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Our Purpose</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Guided by our commitment to cultural preservation and community empowerment, we work to bridge ancient wisdom
          with modern technology.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To preserve, document, and share Sikkim's Buddhist monastery heritage through innovative digital
              technologies, creating sustainable tourism opportunities that benefit local communities while maintaining
              cultural authenticity.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To become the world's leading digital heritage platform for Buddhist monasteries, inspiring global
              understanding and appreciation of Himalayan Buddhist culture while supporting sustainable development in
              Sikkim.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Compass className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-xl">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Respect for tradition, commitment to authenticity, community collaboration, environmental sustainability,
              and the belief that technology should serve to preserve and share cultural wisdom across generations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
