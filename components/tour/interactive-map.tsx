"use client"

import { useState } from "react"
import { useRouter } from "next/navigation" 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Layers, ZoomIn, ZoomOut, RotateCcw, Wallet } from "lucide-react"

// 🛕 Full Monastery Data
const monasteryLocations = [
  {
    id: 1,
    name: "Rumtek Monastery",
    coordinates: { lat: 27.305827, lng: 88.536370 },
    region: "East Sikkim",
    distance: "24 km from Gangtok",
    elevation: "1763m",
    type: "Major Monastery",
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    coordinates: { lat: 27.304530, lng: 88.252040 },
    region: "West Sikkim",
    distance: "110 km from Gangtok",
    elevation: "2085m",
    type: "Major Monastery",
  },
  {
    id: 3,
    name: "Enchey Monastery",
    coordinates: { lat: 27.335706, lng: 88.619297 },
    region: "East Sikkim",
    distance: "3 km from Gangtok",
    elevation: "1800m",
    type: "City Monastery",
  },
  {
    id: 4,
    name: "Phodong Monastery",
    coordinates: { lat: 27.408330, lng: 88.570560 },
    region: "North Sikkim",
    distance: "28–35 km from Gangtok",
    elevation: "1370m",
    type: "Major Monastery",
  },
  {
    id: 5,
    name: "Tashiding Monastery",
    coordinates: { lat: 27.308690, lng: 88.297680 },
    region: "West Sikkim",
    distance: "105 km from Gangtok",
    elevation: "1465m",
    type: "Sacred Site",
  },
  {
    id: 6,
    name: "Lachen Monastery",
    coordinates: { lat: 27.716241, lng: 88.556611 },
    region: "North Sikkim",
    distance: "107 km from Gangtok",
    elevation: "2600–2750m",
    type: "Major Monastery",
  },
  {
    id: 7,
    name: "Lachung Monastery",
    coordinates: { lat: 27.689057, lng: 88.742972 },
    region: "North Sikkim",
    distance: "118 km from Gangtok",
    elevation: "2700–3000m",
    type: "Sacred Site",
  },
  {
    id: 8,
    name: "Mangbrue Monastery",
    coordinates: { lat: 27.277378, lng: 88.310023 },
    region: "South Sikkim",
    distance: "76 km from Gangtok",
    elevation: "1718m",
    type: "Hill Monastery",
  },
  {
    id: 9,
    name: "Gurudongmar Gompa",
    coordinates: { lat: 28.019270, lng: 88.709150 },
    region: "North Sikkim",
    distance: "180–190 km from Gangtok",
    elevation: "5430m",
    type: "Sacred Site",
  },
  {
    id: 10,
    name: "Bermiok Monastery",
    coordinates: { lat: 27.226283, lng: 88.457441 },
    region: "South-East Sikkim",
    distance: "30 km from Gangtok",
    elevation: "1800–1900m",
    type: "Historic Site",
  },
]

// Suggested Route Data
const routes = [
  {
    id: 1,
    name: "East Sikkim Circuit",
    monasteries: ["Rumtek Monastery", "Enchey Monastery"],
    duration: "1 Day",
    distance: "30 km",
    difficulty: "Easy",
  },
  {
    id: 2,
    name: "West Sikkim Pilgrimage",
    monasteries: ["Pemayangtse Monastery", "Tashiding Monastery", "Dubdi Monastery"],
    duration: "3 Days",
    distance: "180 km",
    difficulty: "Moderate",
  },
  {
    id: 3,
    name: "Complete Sacred Circuit",
    monasteries: [
      "Rumtek Monastery",
      "Pemayangtse Monastery",
      "Tashiding Monastery",
      "Enchey Monastery",
      "Phodong Monastery",
    ],
    duration: "5 Days",
    distance: "350 km",
    difficulty: "Challenging",
  },
]

// Budget Planning Data
const budgetPlans = [
  {
    id: 1,
    category: "Budget Travel",
    accommodation: "₹500–1,500 per night",
    food: "₹300–600 per day",
    transport: "₹500–1,000 per day",
    total: "₹1,300–3,100 per day",
  },
  {
    id: 2,
    category: "Mid-Range",
    accommodation: "₹1,500–4,000 per night",
    food: "₹600–1,200 per day",
    transport: "₹1,000–2,500 per day",
    total: "₹3,100–7,700 per day",
  },
  {
    id: 3,
    category: "Luxury",
    accommodation: "₹4,000–15,000 per night",
    food: "₹1,200–3,000 per day",
    transport: "₹2,500–6,000 per day",
    total: "₹7,700–24,000 per day",
  },
]

export function InteractiveMap() {
  const [selectedMonastery, setSelectedMonastery] = useState<number | null>(null)
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null)
  const [mapView, setMapView] = useState<"satellite" | "terrain" | "roadmap">("terrain")
  
  const router = useRouter()

  return (
    <div className="space-y-6">
      {/* Interactive Map Card */}
      <Card className="bg-yellow-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Interactive Monastery Map
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Layers className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Map Container */}
          <div className="relative h-96 bg-muted/30 rounded-lg overflow-hidden mb-6">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/topographic-map-of-sikkim-with-monastery-locations.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <Button
                size="sm"
                variant={mapView === "terrain" ? "default" : "outline"}
                onClick={() => setMapView("terrain")}
                className="bg-white/90 hover:bg-white"
              >
                Terrain
              </Button>
              <Button
                size="sm"
                variant={mapView === "satellite" ? "default" : "outline"}
                onClick={() => setMapView("satellite")}
                className="bg-white/90 hover:bg-white"
              >
                Satellite
              </Button>
              <Button
                size="sm"
                variant={mapView === "roadmap" ? "default" : "outline"}
                onClick={() => setMapView("roadmap")}
                className="bg-white/90 hover:bg-white"
              >
                Roads
              </Button>
            </div>

            {/* Monastery Markers */}
            {monasteryLocations.map((monastery, index) => (
              <div
                key={monastery.id}
                className={`absolute w-6 h-6 rounded-full border-2 border-white cursor-pointer transition-all ${
                  selectedMonastery === monastery.id
                    ? "bg-primary scale-125 z-10"
                    : monastery.type === "Major Monastery"
                    ? "bg-yellow-600 hover:scale-110"
                    : monastery.type === "Sacred Site"
                    ? "bg-red-600 hover:scale-110"
                    : "bg-green-600 hover:scale-110"
                }`}
                style={{
                  left: `${15 + (index % 5) * 15}%`,
                  top: `${20 + Math.floor(index / 5) * 25}%`,
                }}
                onClick={() => setSelectedMonastery(monastery.id)}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-medium shadow-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                  {monastery.name}
                </div>
              </div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Legend</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-600 rounded-full mr-2" />
                  <span>Major Monastery</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-2" />
                  <span>Sacred Site</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2" />
                  <span>Historic Site</span>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Monastery Info */}
          {selectedMonastery && (
            <div className="mb-6">
              {monasteryLocations
                .filter((m) => m.id === selectedMonastery)
                .map((monastery) => (
                  <Card key={monastery.id} className="bg-muted/30">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{monastery.name}</h3>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <div>📍 {monastery.region}</div>
                            <div>🚗 {monastery.distance}</div>
                            <div>⛰️ {monastery.elevation} elevation</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          
                          <Button
                            size="sm"
                            onClick={() => window.location.href = `/tour/${monastery.id}`}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          )}

          {/* Suggested Routes */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Suggested Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {routes.map((route) => (
                <Card
                  key={route.id}
                  className={`cursor-pointer transition-all ${
                    selectedRoute === route.id ? "ring-2 ring-primary" : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedRoute(route.id)}
                >
                  <CardContent className="p-4">
                    <h4 className="font-medium text-foreground mb-2">{route.name}</h4>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>⏱️ {route.duration}</div>
                      <div>📏 {route.distance}</div>
                      <div>
                        <Badge variant="outline" className="text-xs">
                          {route.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-2 text-xs">
                      <span className="font-medium">{route.monasteries.length} monasteries</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget Planning Card */}
      <Card className="bg-yellow-50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Wallet className="h-5 w-5 mr-2" />
            Budget Planning
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {budgetPlans.map((plan) => (
              <Card key={plan.id} className="bg-yellow-100">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">{plan.category}</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>🏨 Accommodation: {plan.accommodation}</div>
                    <div>🍴 Food: {plan.food}</div>
                    <div>🚌 Transport: {plan.transport}</div>
                    <div className="font-semibold text-orange-700">💰 Total/Day: {plan.total}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
