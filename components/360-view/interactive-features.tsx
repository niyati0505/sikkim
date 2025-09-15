import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Headphones, Navigation, Info, Camera, Smartphone, Monitor, Gamepad2, Globe } from "lucide-react"

const features = [
  {
    icon: Headphones,
    title: "Immersive Audio",
    description: "Experience authentic monastery sounds including chanting, bells, and ambient atmosphere.",
    badge: "Spatial Audio",
  },
  {
    icon: Navigation,
    title: "Interactive Hotspots",
    description: "Click on highlighted areas to learn about artifacts, architecture, and spiritual significance.",
    badge: "Educational",
  },
  {
    icon: Info,
    title: "Guided Narration",
    description: "Listen to expert commentary from monks and historians as you explore each space.",
    badge: "Multi-language",
  },
  {
    icon: Camera,
    title: "Virtual Photography",
    description: "Capture and save your favorite views from the virtual tours as high-resolution images.",
    badge: "HD Capture",
  },
]

const deviceSupport = [
  {
    icon: Monitor,
    title: "Desktop & Laptop",
    description: "Full-featured experience with mouse and keyboard navigation",
    compatibility: "100%",
  },
  {
    icon: Smartphone,
    title: "Mobile Devices",
    description: "Touch-optimized interface with gyroscope support for natural movement",
    compatibility: "95%",
  },
  {
    icon: Gamepad2,
    title: "VR Headsets",
    description: "Immersive virtual reality experience with Oculus, HTC Vive, and more",
    compatibility: "85%",
  },
  {
    icon: Globe,
    title: "Web Browsers",
    description: "Works seamlessly across Chrome, Firefox, Safari, and Edge browsers",
    compatibility: "98%",
  },
]

export function InteractiveFeatures() {
  return (
    <div className="space-y-12">
      {/* Interactive Features */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Interactive Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our virtual tours include advanced interactive elements to enhance your spiritual and educational journey
            through Sikkim's monasteries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <Badge variant="secondary">{feature.badge}</Badge>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Device Support */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Device Compatibility</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access virtual tours across all your devices with optimized experiences for desktop, mobile, and VR
            platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {deviceSupport.map((device) => (
            <Card key={device.title} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <device.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">{device.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{device.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Compatibility</span>
                    <span className="font-medium text-primary">{device.compatibility}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: device.compatibility }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-6">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Try Virtual Tour Now
          </Button>
        </div>
      </section>
    </div>
  )
}
