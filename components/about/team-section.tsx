import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const team = [
  {
    name: "Dr. Tenzin Norbu",
    role: "Cultural Heritage Director",
    bio: "Buddhist scholar and monastery preservation expert with 20+ years experience",
    image: "/placeholder-user.jpg",
    expertise: ["Buddhist Studies", "Cultural Preservation", "Community Relations"],
  },
  {
    name: "Priya Sharma",
    role: "Technology Lead",
    bio: "Digital innovation specialist focused on heritage technology solutions",
    image: "/placeholder-user.jpg",
    expertise: ["VR/AR Development", "Digital Archives", "Web Technologies"],
  },
  {
    name: "Karma Lepcha",
    role: "Community Liaison",
    bio: "Local community advocate ensuring authentic representation and benefit sharing",
    image: "/placeholder-user.jpg",
    expertise: ["Community Engagement", "Sustainable Tourism", "Local Languages"],
  },
  {
    name: "Dr. Sarah Chen",
    role: "Research Coordinator",
    bio: "Academic researcher specializing in Himalayan Buddhist culture and history",
    image: "/placeholder-user.jpg",
    expertise: ["Historical Research", "Documentation", "Academic Partnerships"],
  },
]

export function TeamSection() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our diverse team combines deep cultural knowledge, technical expertise, and community connections to create
          authentic and impactful digital experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member) => (
          <Card key={member.name} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="text-center space-y-3">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="mx-auto rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center">{member.bio}</p>

              <div className="space-y-2">
                <p className="text-xs font-medium text-center">Expertise:</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-2 pt-2">
                <Button size="sm" variant="ghost">
                  <Mail className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
