import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@lamamaps.org",
    description: "General inquiries and support",
    action: "mailto:info@lamamaps.org",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 3592 123456",
    description: "Mon-Fri, 9:00 AM - 6:00 PM IST",
    action: "tel:+913592123456",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Gangtok, Sikkim, India",
    description: "By appointment only",
    action: "#",
  },
]

const socialLinks = [
  { icon: Facebook, name: "Facebook", url: "#" },
  { icon: Twitter, name: "Twitter", url: "#" },
  { icon: Instagram, name: "Instagram", url: "#" },
  { icon: Youtube, name: "YouTube", url: "#" },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Contact Information</CardTitle>
          <p className="text-muted-foreground">Multiple ways to reach our team</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {contactMethods.map((method) => (
            <div key={method.title} className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <method.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{method.title}</h3>
                <p className="text-primary font-medium">{method.details}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Office Hours</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium">Monday - Friday</p>
              <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM IST</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Saturday - Sunday</p>
              <p className="text-sm text-muted-foreground">Closed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Follow Us</CardTitle>
          <p className="text-muted-foreground">Stay updated with our latest work</p>
        </CardHeader>

        <CardContent>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="outline" size="sm">
                <social.icon className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
