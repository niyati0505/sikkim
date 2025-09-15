import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Star, Volume2, Camera, Book } from "lucide-react"

const filterCategories = {
  regions: [
    { id: "east-sikkim", label: "East Sikkim", count: 45 },
    { id: "west-sikkim", label: "West Sikkim", count: 38 },
    { id: "north-sikkim", label: "North Sikkim", count: 22 },
    { id: "south-sikkim", label: "South Sikkim", count: 15 },
  ],
  traditions: [
    { id: "nyingma", label: "Nyingma", count: 65 },
    { id: "kagyu", label: "Kagyu", count: 42 },
    { id: "gelug", label: "Gelug", count: 28 },
    { id: "sakya", label: "Sakya", count: 15 },
  ],
  features: [
    { id: "audio-guide", label: "Audio Guide", icon: Volume2, count: 85 },
    { id: "360-view", label: "360° View", icon: Camera, count: 52 },
    { id: "archives", label: "Digital Archives", icon: Book, count: 73 },
    { id: "festivals", label: "Regular Festivals", icon: Star, count: 34 },
  ],
  established: [
    { id: "ancient", label: "Before 1600", count: 12 },
    { id: "early", label: "1600-1800", count: 28 },
    { id: "modern", label: "1800-1950", count: 45 },
    { id: "recent", label: "After 1950", count: 35 },
  ],
}

export function FilterSidebar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Regions */}
          <div>
            <h3 className="font-medium text-foreground mb-3">Region</h3>
            <div className="space-y-2">
              {filterCategories.regions.map((region) => (
                <div key={region.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={region.id} />
                    <label
                      htmlFor={region.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {region.label}
                    </label>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {region.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Buddhist Traditions */}
          <div>
            <h3 className="font-medium text-foreground mb-3">Buddhist Tradition</h3>
            <div className="space-y-2">
              {filterCategories.traditions.map((tradition) => (
                <div key={tradition.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={tradition.id} />
                    <label
                      htmlFor={tradition.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {tradition.label}
                    </label>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {tradition.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Features */}
          <div>
            <h3 className="font-medium text-foreground mb-3">Available Features</h3>
            <div className="space-y-2">
              {filterCategories.features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={feature.id} />
                      <label
                        htmlFor={feature.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                      >
                        <Icon className="h-3 w-3 mr-1" />
                        {feature.label}
                      </label>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.count}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </div>

          <Separator />

          {/* Established Period */}
          <div>
            <h3 className="font-medium text-foreground mb-3">Established</h3>
            <div className="space-y-2">
              {filterCategories.established.map((period) => (
                <div key={period.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={period.id} />
                    <label
                      htmlFor={period.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {period.label}
                    </label>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {period.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="flex space-x-2">
            <Button size="sm" className="flex-1">
              Apply Filters
            </Button>
            <Button size="sm" variant="outline">
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
