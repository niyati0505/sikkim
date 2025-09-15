import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plane, Train, Car, Info, AlertTriangle, Wallet } from "lucide-react"

const travelInfo = {
  gettingThere: [
    {
      mode: "By Air",
      icon: Plane,
      details: "Bagdogra Airport (124 km) - Nearest airport with regular flights from major Indian cities",
      duration: "3-4 hours drive to Gangtok",
      cost: "₹3,000 - ₹8,000",
      tips: ["Book flights in advance", "Shared taxis available from airport"],
    },
    {
      mode: "By Train",
      icon: Train,
      details: "New Jalpaiguri Railway Station (148 km) - Well connected to major cities",
      duration: "4-5 hours drive to Gangtok",
      cost: "₹500 - ₹2,000",
      tips: ["Book train tickets early", "Multiple transport options available"],
    },
    {
      mode: "By Road",
      icon: Car,
      details: "Well-connected highways from Kolkata, Siliguri, and Darjeeling",
      duration: "12-14 hours from Kolkata",
      cost: "₹2,000 - ₹5,000",
      tips: ["Check road conditions", "Carry valid documents"],
    },
  ],
  localTransport: [
    {
      type: "Shared Taxis",
      description: "Most common and economical way to travel between monasteries",
      cost: "₹10-50 per km",
      availability: "Readily available",
    },
    {
      type: "Private Cars",
      description: "Comfortable option for families and groups",
      cost: "₹2,000-4,000 per day",
      availability: "Book in advance",
    },
    {
      type: "Public Buses",
      description: "Budget-friendly option for major routes",
      cost: "₹20-100 per journey",
      availability: "Limited schedules",
    },
  ],
  permits: [
    {
      type: "Inner Line Permit (ILP)",
      required: "For North and East Sikkim",
      validity: "15-30 days",
      cost: "₹50-100",
      where: "Online or at checkpoints",
    },
    {
      type: "Protected Area Permit (PAP)",
      required: "For restricted border areas",
      validity: "7-15 days",
      cost: "₹200-500",
      where: "Tourism office",
    },
  ],
  budgetGuide: [
    {
      category: "Budget Travel",
      accommodation: "₹500-1,500 per night",
      food: "₹300-600 per day",
      transport: "₹500-1,000 per day",
      total: "₹1,300-3,100 per day",
    },
    {
      category: "Mid-Range",
      accommodation: "₹1,500-4,000 per night",
      food: "₹600-1,200 per day",
      transport: "₹1,000-2,500 per day",
      total: "₹3,100-7,700 per day",
    },
    {
      category: "Luxury",
      accommodation: "₹4,000-15,000 per night",
      food: "₹1,200-3,000 per day",
      transport: "₹2,500-6,000 per day",
      total: "₹7,700-24,000 per day",
    },
  ],
}

export function TravelGuide() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Info className="h-5 w-5 mr-2" />
            Travel Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Getting There */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Getting to Sikkim</h3>
            <div className="space-y-3">
              {travelInfo.gettingThere.map((option, index) => {
                const Icon = option.icon
                return (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Icon className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium text-sm">{option.mode}</span>
                      <Badge variant="outline" className="ml-auto text-xs">
                        {option.cost}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{option.details}</p>
                    <div className="text-xs text-muted-foreground mb-2">⏱️ {option.duration}</div>
                    <div className="flex flex-wrap gap-1">
                      {option.tips.map((tip) => (
                        <Badge key={tip} variant="outline" className="text-xs">
                          {tip}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Local Transport */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Local Transport</h3>
            <div className="space-y-2">
              {travelInfo.localTransport.map((transport, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                  <div>
                    <div className="font-medium text-sm">{transport.type}</div>
                    <div className="text-xs text-muted-foreground">{transport.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium">{transport.cost}</div>
                    <div className="text-xs text-muted-foreground">{transport.availability}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Permits */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
              Required Permits
            </h3>
            <div className="space-y-2">
              {travelInfo.permits.map((permit, index) => (
                <div key={index} className="p-3 border border-orange-200 bg-orange-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">{permit.type}</span>
                    <Badge variant="outline" className="text-xs">
                      {permit.cost}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>📍 Required for: {permit.required}</div>
                    <div>⏱️ Validity: {permit.validity}</div>
                    <div>🏢 Available at: {permit.where}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Wallet className="h-5 w-5 mr-2" />
            Budget Planning
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {travelInfo.budgetGuide.map((budget, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">{budget.category}</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-muted-foreground">Accommodation:</span>
                    <div className="font-medium">{budget.accommodation}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Food:</span>
                    <div className="font-medium">{budget.food}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Transport:</span>
                    <div className="font-medium">{budget.transport}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Total/Day:</span>
                    <div className="font-bold text-primary">{budget.total}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Button className="w-full">
        <Info className="h-4 w-4 mr-2" />
        Download Complete Travel Guide
      </Button>
    </div>
  )
}
