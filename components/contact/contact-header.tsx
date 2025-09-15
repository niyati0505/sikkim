import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mail, Phone } from "lucide-react"

export function ContactHeader() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-balance">Contact Us</h1>

          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            We'd love to hear from you! Whether you're interested in partnerships, have questions about our platform, or
            want to contribute to preserving Sikkim's heritage, we're here to help.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              Quick Response Within 24 Hours
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              Multiple Languages Supported
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
