import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Archive, BookOpen, Palette, Music, Scroll } from "lucide-react"

const filterCategories = {
  documentTypes: [
    { id: "manuscripts", label: "Manuscripts", icon: BookOpen, count: 250 },
    { id: "thangkas", label: "Thangka Paintings", icon: Palette, count: 180 },
    { id: "chronicles", label: "Historical Records", icon: Scroll, count: 120 },
    { id: "audio", label: "Audio Recordings", icon: Music, count: 90 },
  ],
  languages: [
    { id: "tibetan", label: "Tibetan", count: 420 },
    { id: "sanskrit", label: "Sanskrit", count: 280 },
    { id: "nepali", label: "Nepali", count: 150 },
    { id: "english", label: "English", count: 90 },
    { id: "bhutia", label: "Bhutia", count: 60 },
  ],
  periods: [
    { id: "ancient", label: "8th-12th Century", count: 85 },
    { id: "medieval", label: "13th-16th Century", count: 180 },
    { id: "early-modern", label: "17th-19th Century", count: 320 },
    { id: "modern", label: "20th Century", count: 415 },
  ],
  monasteries: [
    { id: "rumtek", label: "Rumtek Monastery", count: 180 },
    { id: "pemayangtse", label: "Pemayangtse", count: 150 },
    { id: "tashiding", label: "Tashiding", count: 120 },
    { id: "enchey", label: "Enchey", count: 90 },
    { id: "dubdi", label: "Dubdi", count: 60 },
  ],
  subjects: [
    { id: "philosophy", label: "Buddhist Philosophy", count: 280 },
    { id: "rituals", label: "Rituals & Ceremonies", count: 220 },
    { id: "history", label: "Monastery History", count: 180 },
    { id: "art", label: "Sacred Art", count: 160 },
    { id: "medicine", label: "Traditional Medicine", count: 90 },
    { id: "astrology", label: "Tibetan Astrology", count: 70 },
  ],
}

export function ArchivesSidebar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Archive className="h-5 w-5 mr-2" />
            Archive Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Document Types */}
          <div>
            <h3 className="font-medium text-foreground mb-3">Document Type</h3>
            <div className="space-y-2">
              {filterCategories.documentTypes.map((type) => {
                const Icon = type.icon
                return (
                  <div key={type.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={type.id} />
                      <label
                        htmlFor={type.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                      >
                        <Icon className="h-3 w-3 mr-1" />
                        {type.label}
                      </label>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {type.count}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </div>

          <Separator />

          {/* Languages */}
          <div>
            <h3 className="font-medium text-foreground mb-3">Language</h3>
            <div className="space-y-2">
              {filterCategories.languages.map((language) => (
                <div key={language.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={language.id} />
                    <label
                      htmlFor={language.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {language.label}
                    </label>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {language.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Time Periods */}
          <div>
            <h3 className="font-medium text-foreground mb-3">Time Period</h3>
            <div className="space-y-2">
              {filterCategories.periods.map((period) => (
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

          {/* Source Monasteries */}
          <div>
            <h3 className="font-medium text-foreground mb-3">Source Monastery</h3>
            <div className="space-y-2">
              {filterCategories.monasteries.map((monastery) => (
                <div key={monastery.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={monastery.id} />
                    <label
                      htmlFor={monastery.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {monastery.label}
                    </label>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {monastery.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Subjects */}
          <div>
            <h3 className="font-medium text-foreground mb-3">Subject</h3>
            <div className="space-y-2">
              {filterCategories.subjects.map((subject) => (
                <div key={subject.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={subject.id} />
                    <label
                      htmlFor={subject.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {subject.label}
                    </label>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {subject.count}
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
