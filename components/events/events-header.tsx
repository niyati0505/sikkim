import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Filter, Bell } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function EventsHeader() {
  return (
    <div className="bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Sacred Events & Festivals</h1>
          <p className="text-muted-foreground">
            Experience the rich spiritual traditions and cultural celebrations of Sikkim's monasteries
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-xs">
              <Calendar className="h-3 w-3 mr-1" />
              25+ Annual Events
            </Badge>
            <Badge variant="outline" className="text-xs">
              🎭 Traditional Festivals
            </Badge>
            <Badge variant="outline" className="text-xs">
              🙏 Religious Ceremonies
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter Events
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All Events</DropdownMenuItem>
                <DropdownMenuItem>Festivals</DropdownMenuItem>
                <DropdownMenuItem>Religious Ceremonies</DropdownMenuItem>
                <DropdownMenuItem>Cultural Programs</DropdownMenuItem>
                <DropdownMenuItem>Meditation Retreats</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Bell className="h-4 w-4 mr-2" />
              Get Notifications
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
