import Link from "next/link"
import { Mountain, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  explore: [
    { name: "All Monasteries", href: "/explore" },
    { name: "Featured Tours", href: "/tour" },
    { name: "360° Views", href: "/360-view" },
    { name: "Audio Guides", href: "/explore?filter=audio" },
  ],
  heritage: [
    { name: "Digital Archives", href: "/archives" },
    { name: "Manuscripts", href: "/archives?category=manuscripts" },
    { name: "Historical Documents", href: "/archives?category=documents" },
    { name: "Cultural Events", href: "/events" },
  ],
  support: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Lama Maps</span>
            </div>
            <p className="text-sm leading-6 text-muted-foreground max-w-md">
              Preserving Sikkim's sacred heritage through digital innovation. Explore ancient monasteries, immerse in
              cultural traditions, and discover the spiritual heart of the Himalayas.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Gangtok, Sikkim, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@lamamaps.org</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 3592 123456</span>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Explore</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.explore.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Heritage</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.heritage.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground text-center">
            &copy; 2024 Lama Maps. All rights reserved. Preserving heritage, inspiring journeys.
          </p>
        </div>
      </div>
    </footer>
  )
}
