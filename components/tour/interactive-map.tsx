"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Layers, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"

const monasteryLocations = [
  {
    id: 1,
    name: "Rumtek Monastery",
    coordinates: { lat: 27.2046, lng: 88.5618 },
    region: "East Sikkim",
    distance: "24 km from Gangtok",
    elevation: "1550m",
    type: "Major Monastery",
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    coordinates: { lat: 27.2109, lng: 88.2123 },
    region: "West Sikkim",
    distance: "110 km from Gangtok",
    elevation: "2085m",
    type: "Major Monastery",
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    coordinates: { lat: 27.2567, lng: 88.2789 },
    region: "West Sikkim",
    distance: "85 km from Gangtok",
    elevation: "1465m",
    type: "Sacred Site",
  },
  {
    id: 4,
    name: "Enchey Monastery",
    coordinates: { lat: 27.3389, lng: 88.6065 },
    region: "East Sikkim",
    distance: "3 km from Gangtok",
    elevation: "1840m",
    type: "City Monastery",
  },
  {
    id: 5,
    name: "Dubdi Monastery",
    coordinates: { lat: 27.3667, lng: 88.2167 },
    region: "West Sikkim",
    distance: "125 km from Gangtok",
    elevation: "2100m",
    type: "Historic Site",
  },
]

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
    monasteries: ["Rumtek Monastery", "Pemayangtse Monastery", "Tashiding Monastery", "Enchey Monastery"],
    duration: "5 Days",
    distance: "350 km",
    difficulty: "Challenging",
  },
]

export function InteractiveMap() {
  const [selectedMonastery, setSelectedMonastery] = useState<number | null>(null)
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null)
  const [mapView, setMapView] = useState<"satellite" | "terrain" | "roadmap">("terrain")

  return (
    <Card>
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
        {/* Map Container - In a real app, this would be a proper map component */}
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
                  : "bg-secondary hover:bg-primary hover:scale-110"
              }`}
              style={{
                left: `${20 + index * 15}%`,
                top: `${30 + (index % 3) * 20}%`,
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
                <div className="w-3 h-3 bg-primary rounded-full mr-2" />
                <span>Major Monastery</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-secondary rounded-full mr-2" />
                <span>Sacred Site</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent rounded-full mr-2" />
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
                        <Button size="sm" variant="outline">
                          <Navigation className="h-4 w-4 mr-2" />
                          Directions
                        </Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        )}

        {/* Route Selection */}
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
  )
}
