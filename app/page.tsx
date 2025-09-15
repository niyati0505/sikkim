import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedMonasteries } from "@/components/home/featured-monasteries"
import { QuickLinks } from "@/components/home/quick-links"
import { CulturalHighlights } from "@/components/home/cultural-highlights"
import { UpcomingEvents } from "@/components/home/upcoming-events"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <QuickLinks />
        <FeaturedMonasteries />
        <CulturalHighlights />
        <UpcomingEvents />
      </main>
      <Footer />
    </div>
  )
}
