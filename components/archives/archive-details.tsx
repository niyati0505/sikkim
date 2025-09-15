import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Download, Share2, Heart, Eye, Calendar, MapPin, FileText, ZoomIn as Zoom } from "lucide-react"

interface ArchiveDetailsProps {
  archiveId: string
}

// Mock data - in real app this would come from API/database
const archiveData = {
  id: 1,
  title: "Prajnaparamita Sutra",
  description:
    "Ancient palm leaf manuscript of the Perfection of Wisdom sutra, one of the most important Mahayana Buddhist texts.",
  longDescription:
    "The Prajnaparamita Sutra, or 'Perfection of Wisdom' literature, represents one of the most profound and influential collections of Buddhist texts. This particular manuscript, written on palm leaves in Sanskrit, dates to the 12th century and contains the complete text of the Heart Sutra along with extensive commentaries by renowned Buddhist scholars. The manuscript showcases the sophisticated literary and philosophical traditions of medieval Buddhist monasteries in the Himalayan region.",
  type: "Manuscript",
  language: "Sanskrit",
  period: "12th Century",
  monastery: "Rumtek Monastery",
  pages: 108,
  images: [
    "/placeholder.svg?key=prajnaparamita-1",
    "/placeholder.svg?key=prajnaparamita-2",
    "/placeholder.svg?key=prajnaparamita-3",
    "/placeholder.svg?key=prajnaparamita-4",
  ],
  subjects: ["Philosophy", "Wisdom Literature"],
  condition: "Excellent",
  digitized: "2023",
  downloads: 1250,
  views: 5680,
  dimensions: "35cm x 5cm",
  material: "Palm leaves, natural ink",
  scribe: "Unknown",
  provenance: "Rumtek Monastery collection since 1960s",
  significance:
    "This manuscript represents one of the finest examples of Sanskrit Buddhist literature preserved in Sikkim. The text contains rare commentaries not found in other versions, making it invaluable for Buddhist scholarship and understanding of Mahayana philosophy.",
  conservation:
    "The manuscript has been carefully preserved using traditional methods and modern conservation techniques. Digital preservation ensures its accessibility while protecting the original from handling damage.",
  contents: [
    "Heart Sutra (Prajnaparamita Hridaya)",
    "Diamond Sutra excerpts",
    "Commentary by Nagarjuna",
    "Marginal notes in Tibetan",
    "Colophon with date and scribe information",
  ],
  relatedTexts: ["Lotus Sutra Commentary", "Abhidhamma Manuscripts", "Vinaya Texts Collection"],
}

export function ArchiveDetails({ archiveId }: ArchiveDetailsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="relative h-96 rounded-lg overflow-hidden mb-6">
          <img
            src={archiveData.images[0] || "/placeholder.svg"}
            alt={archiveData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-6 left-6 text-white">
            <Badge className="bg-primary text-primary-foreground mb-2">{archiveData.type}</Badge>
            <h1 className="text-3xl font-bold mb-2">{archiveData.title}</h1>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {archiveData.period}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {archiveData.monastery}
              </div>
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-1" />
                {archiveData.pages} pages
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
            <Eye className="mr-2 h-5 w-5" />
            View Full Document
          </Button>
          <Button size="lg" variant="outline">
            <Download className="mr-2 h-5 w-5" />
            Download PDF
          </Button>
          <Button size="lg" variant="outline">
            <Zoom className="mr-2 h-5 w-5" />
            High-Res Images
          </Button>
          <Button size="lg" variant="outline">
            <BookOpen className="mr-2 h-5 w-5" />
            Read Online
          </Button>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap gap-2">
          {archiveData.subjects.map((subject) => (
            <Badge key={subject} variant="outline">
              {subject}
            </Badge>
          ))}
          <Badge variant="outline">{archiveData.language}</Badge>
          <Badge variant="outline">Condition: {archiveData.condition}</Badge>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="contents">Contents</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="conservation">Conservation</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">About This Document</h3>
                  <p className="text-muted-foreground mb-4">{archiveData.longDescription}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Language:</span>
                      <p className="text-muted-foreground">{archiveData.language}</p>
                    </div>
                    <div>
                      <span className="font-medium">Pages:</span>
                      <p className="text-muted-foreground">{archiveData.pages}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Historical Significance</h3>
                  <p className="text-muted-foreground">{archiveData.significance}</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Document Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <span className="font-medium">{archiveData.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Period:</span>
                      <span className="font-medium">{archiveData.period}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Language:</span>
                      <span className="font-medium">{archiveData.language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pages:</span>
                      <span className="font-medium">{archiveData.pages}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dimensions:</span>
                      <span className="font-medium">{archiveData.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material:</span>
                      <span className="font-medium">{archiveData.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Condition:</span>
                      <span className="font-medium">{archiveData.condition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Digitized:</span>
                      <span className="font-medium">{archiveData.digitized}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Usage Statistics</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Views</span>
                      </div>
                      <span className="font-medium">{archiveData.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Downloads</span>
                      </div>
                      <span className="font-medium">{archiveData.downloads.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="contents">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Document Contents</h3>
              <div className="space-y-4">
                {archiveData.contents.map((content, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium min-w-fit">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{content}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Provenance</h3>
                <p className="text-muted-foreground text-sm">{archiveData.provenance}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Related Texts</h3>
                <div className="space-y-2">
                  {archiveData.relatedTexts.map((text, index) => (
                    <div key={index} className="text-sm">
                      <Button variant="link" className="p-0 h-auto text-primary">
                        {text}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="conservation">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Conservation & Preservation</h3>
              <p className="text-muted-foreground">{archiveData.conservation}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gallery">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {archiveData.images.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${archiveData.title} - Page ${index + 1}`}
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
