import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Grid, List, Archive } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ArchivesHeader() {
  return (
    <div className="bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Digital Heritage Archives</h1>
          <p className="text-muted-foreground">
            Explore centuries of Buddhist wisdom through digitally preserved manuscripts, scriptures, and historical
            documents
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search manuscripts, texts, or topics..." className="pl-10" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              <Archive className="h-3 w-3 mr-1" />
              1000+ Documents
            </Badge>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Sort By
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Date Added</DropdownMenuItem>
                <DropdownMenuItem>Historical Period</DropdownMenuItem>
                <DropdownMenuItem>Document Type</DropdownMenuItem>
                <DropdownMenuItem>Language</DropdownMenuItem>
                <DropdownMenuItem>Relevance</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex border border-border rounded-md">
              <Button variant="ghost" size="sm" className="rounded-r-none">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-l-none border-l">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
