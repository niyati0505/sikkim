import type { Metadata } from "next"
import { AboutHeader } from "@/components/about/about-header"
import { MissionVision } from "@/components/about/mission-vision"
import { TeamSection } from "@/components/about/team-section"
import { PartnersSection } from "@/components/about/partners-section"
import { ImpactStats } from "@/components/about/impact-stats"

export const metadata: Metadata = {
  title: "About Us | Lama Maps",
  description:
    "Learn about our mission to preserve and promote Sikkim's Buddhist heritage through digital innovation and cultural tourism.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHeader />
      <main className="container mx-auto px-4 py-8 space-y-16">
        <MissionVision />
        <ImpactStats />
        <TeamSection />
        <PartnersSection />
      </main>
    </div>
  )
}
