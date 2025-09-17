"use client";


import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation, Route, MapPin } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function TourHeader() {
  return (
    <div className="bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Sacred Journey Planner</h1>
          <p className="text-muted-foreground">
            Plan your spiritual journey through Sikkim's monasteries with detailed routes, travel guides, and local
            attractions
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-xs">
              <MapPin className="h-3 w-3 mr-1" />
              200+ Locations
            </Badge>
            <Badge variant="outline" className="text-xs">
              🚗 Driving Routes
            </Badge>
            <Badge variant="outline" className="text-xs">
              🚌 Public Transport
            </Badge>
            <Badge variant="outline" className="text-xs">
              🥾 Trekking Paths
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Route className="h-4 w-4 mr-2" />
                  Route Type
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Scenic Route</DropdownMenuItem>
                <DropdownMenuItem>Fastest Route</DropdownMenuItem>
                <DropdownMenuItem>Cultural Circuit</DropdownMenuItem>
                <DropdownMenuItem>Pilgrimage Path</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Navigation className="h-4 w-4 mr-2" />
              Plan Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
