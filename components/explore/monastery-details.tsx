import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Star, Heart, Share2, Play, Camera, Volume2, Calendar, Navigation } from "lucide-react"

interface MonasteryDetailsProps {
  monasteryId: string
}

// Mock data - in real app this would come from API/database
const monasteryData = {
  id: 1,
  name: "Rumtek Monastery",
  location: "Gangtok, East Sikkim",
  tradition: "Kagyu",
  established: "1966",
  description:
    "The largest monastery in Sikkim, known as the Dharma Chakra Centre. Famous for its golden stupa and traditional architecture.",
  longDescription:
    "Rumtek Monastery, also known as the Dharma Chakra Centre, is one of the most significant monasteries in Sikkim. Built in the 1960s, it serves as the seat of the 16th Karmapa and is the largest monastery in Sikkim. The monastery is renowned for its traditional Tibetan architecture, golden stupa, and extensive collection of Buddhist artifacts and manuscripts.",
  images: [
    "/rumtek-monastery-golden-roof-traditional-architect.jpg",
    "/placeholder.svg?key=rumtek2",
    "/placeholder.svg?key=rumtek3",
    "/placeholder.svg?key=rumtek4",
  ],
  features: ["360° View", "Audio Guide", "Virtual Tour", "Digital Archives"],
  visitors: "1000+",
  rating: 4.8,
  significance: "Seat of the 16th Karmapa",
  distance: "24 km from Gangtok",
  coordinates: { lat: 27.2046, lng: 88.5618 },
  timings: {
    summer: "6:00 AM - 6:00 PM",
    winter: "7:00 AM - 5:00 PM",
  },
  entryFee: "Free",
  bestTimeToVisit: "March to June, September to November",
  festivals: [
    { name: "Losar Festival", date: "February", description: "Tibetan New Year celebration" },
    { name: "Buddha Purnima", date: "May", description: "Buddha's birthday celebration" },
  ],
  history:
    "Rumtek Monastery was built in the 1960s by the 16th Karmapa, Rangjung Rigpe Dorje, after he fled Tibet. It was constructed as a replica of the original Tsurphu Monastery in Tibet, which was the traditional seat of the Karmapas.",
  architecture:
    "The monastery showcases traditional Tibetan architecture with its distinctive golden roof, intricate woodwork, and colorful murals. The main shrine hall houses a magnificent golden stupa and numerous Buddhist artifacts.",
  spiritualSignificance:
    "As the seat of the Karmapa lineage, Rumtek holds immense spiritual significance for Tibetan Buddhists worldwide. It serves as a center for Buddhist learning and meditation practices.",
}

export function MonasteryDetails({ monasteryId }: MonasteryDetailsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="relative h-96 rounded-lg overflow-hidden mb-6">
          <img
            src={monasteryData.images[0] || "/placeholder.svg"}
            alt={monasteryData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-6 left-6 text-white">
            <Badge className="bg-primary text-primary-foreground mb-2">{monasteryData.tradition}</Badge>
            <h1 className="text-3xl font-bold mb-2">{monasteryData.name}</h1>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {monasteryData.location}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Est. {monasteryData.established}
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-400" />
                {monasteryData.rating}
              </div>
            </div>
          </div>
          <div className="absolute top-6 right-6 flex space-x-2">
            <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Play className="mr-2 h-5 w-5" />
            Start Virtual Tour
          </Button>
          <Button size="lg" variant="outline">
            <Camera className="mr-2 h-5 w-5" />
            360° View
          </Button>
          <Button size="lg" variant="outline">
            <Volume2 className="mr-2 h-5 w-5" />
            Audio Guide
          </Button>
          <Button size="lg" variant="outline">
            <Navigation className="mr-2 h-5 w-5" />
            Get Directions
          </Button>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {monasteryData.features.map((feature) => (
            <Badge key={feature} variant="outline">
              {feature}
            </Badge>
          ))}
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="visit">Visit Info</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">About {monasteryData.name}</h3>
                  <p className="text-muted-foreground mb-4">{monasteryData.longDescription}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Significance:</span>
                      <p className="text-muted-foreground">{monasteryData.significance}</p>
                    </div>
                    <div>
                      <span className="font-medium">Distance:</span>
                      <p className="text-muted-foreground">{monasteryData.distance}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Architecture & Design</h3>
                  <p className="text-muted-foreground">{monasteryData.architecture}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Spiritual Significance</h3>
                  <p className="text-muted-foreground">{monasteryData.spiritualSignificance}</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tradition:</span>
                      <span className="font-medium">{monasteryData.tradition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Established:</span>
                      <span className="font-medium">{monasteryData.established}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly Visitors:</span>
                      <span className="font-medium">{monasteryData.visitors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Entry Fee:</span>
                      <span className="font-medium">{monasteryData.entryFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="font-medium">{monasteryData.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Visiting Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Summer:</span>
                      <p className="text-muted-foreground">{monasteryData.timings.summer}</p>
                    </div>
                    <div>
                      <span className="font-medium">Winter:</span>
                      <p className="text-muted-foreground">{monasteryData.timings.winter}</p>
                    </div>
                    <div>
                      <span className="font-medium">Best Time:</span>
                      <p className="text-muted-foreground">{monasteryData.bestTimeToVisit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Historical Background</h3>
              <p className="text-muted-foreground">{monasteryData.history}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">How to Reach</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">By Car:</span>
                    <p className="text-muted-foreground">24 km from Gangtok city center via Rumtek Road</p>
                  </div>
                  <div>
                    <span className="font-medium">By Bus:</span>
                    <p className="text-muted-foreground">Regular buses available from Gangtok</p>
                  </div>
                  <div>
                    <span className="font-medium">By Taxi:</span>
                    <p className="text-muted-foreground">Shared taxis available from Gangtok</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Visitor Guidelines</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Maintain silence inside prayer halls</li>
                  <li>• Remove shoes before entering</li>
                  <li>• Photography may be restricted in certain areas</li>
                  <li>• Dress modestly and respectfully</li>
                  <li>• Follow the guidance of monastery staff</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="events">
          <div className="space-y-4">
            {monasteryData.festivals.map((festival, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{festival.name}</h3>
                      <p className="text-muted-foreground mb-2">{festival.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        Usually held in {festival.date}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="gallery">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monasteryData.images.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${monasteryData.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
