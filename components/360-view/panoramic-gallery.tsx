import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Download, Share2, Maximize } from "lucide-react"
import Image from "next/image"

const panoramicViews = {
  exterior: [
    {
      id: "rumtek-exterior",
      title: "Rumtek Monastery Exterior",
      location: "East Sikkim",
      description: "Stunning 360° view of the monastery complex against mountain backdrop",
      image: "/rumtek-monastery-golden-roof-traditional-architect.jpg",
      resolution: "8K",
      downloads: 1250,
    },
    {
      id: "pemayangtse-exterior",
      title: "Pemayangtse Mountain Views",
      location: "West Sikkim",
      description: "Panoramic view showcasing the monastery's elevated position",
      image: "/pemayangtse-monastery-mountain-views-wooden-sculpt.jpg",
      resolution: "6K",
      downloads: 890,
    },
  ],
  interior: [
    {
      id: "prayer-hall-360",
      title: "Main Prayer Hall",
      location: "Rumtek Monastery",
      description: "Immersive view of ornate decorations and Buddha statues",
      image: "/ornate-buddhist-prayer-hall-interior-with-golden-b.jpg",
      resolution: "8K",
      downloads: 2100,
    },
    {
      id: "meditation-chamber",
      title: "Meditation Chamber",
      location: "Tashiding Monastery",
      description: "Peaceful 360° view of traditional meditation space",
      image: "/serene-buddhist-meditation-chamber-with-prayer-cus.jpg",
      resolution: "6K",
      downloads: 1450,
    },
  ],
  ceremonies: [
    {
      id: "festival-ceremony",
      title: "Losar Festival Ceremony",
      location: "Multiple Monasteries",
      description: "Immersive experience of traditional New Year celebrations",
      image: "/losar-festival-masked-dancers-colorful-celebration.jpg",
      resolution: "4K",
      downloads: 3200,
    },
    {
      id: "prayer-ceremony",
      title: "Buddha Purnima Prayers",
      location: "Various Locations",
      description: "360° documentation of sacred prayer ceremonies",
      image: "/buddha-purnima-prayer-ceremony-monastery.jpg",
      resolution: "6K",
      downloads: 1800,
    },
  ],
}

export function PanoramicGallery() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Panoramic Gallery</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore high-resolution 360° panoramic views of monastery exteriors, sacred interiors, and ceremonial moments
          captured in stunning detail.
        </p>
      </div>

      <Tabs defaultValue="exterior" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="exterior">Exterior Views</TabsTrigger>
          <TabsTrigger value="interior">Interior Spaces</TabsTrigger>
          <TabsTrigger value="ceremonies">Ceremonies</TabsTrigger>
        </TabsList>

        {Object.entries(panoramicViews).map(([category, views]) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {views.map((view) => (
                <Card key={view.id} className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={view.image || "/placeholder.svg"}
                      alt={view.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <Button
                      size="sm"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View 360°
                    </Button>
                    <Badge className="absolute top-3 left-3 bg-primary/90">{view.resolution}</Badge>
                  </div>

                  <CardContent className="p-4 space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg">{view.title}</h3>
                      <p className="text-sm text-muted-foreground">{view.location}</p>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">{view.description}</p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Download className="w-3 h-3" />
                        {view.downloads.toLocaleString()} downloads
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Maximize className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
