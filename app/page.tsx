import { HeroSection } from "@/components/home/hero-section"
import { QuickLinks } from "@/components/home/quick-links"
import { CulturalHighlights } from "@/components/home/cultural-highlights"
import FeaturedMonasteries from "@/components/home/featured-monasteries"
import EventsSection from "@/components/home/events-section"
import ToursSection from "@/components/home/tours-section"
import DigitalArchives from "@/components/home/digital-archives"
import ImmersiveExperience from "@/components/home/immersive-experience"
import { Header } from "@/components/layout/header"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <HeroSection />
      <QuickLinks />
      <CulturalHighlights />
      <FeaturedMonasteries />
      <EventsSection />
      <ToursSection />
      <DigitalArchives />
      <ImmersiveExperience />
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p className="text-sm">© 2025 LamaMap. All rights reserved.</p>
      </footer>
    </div>
  )
}
