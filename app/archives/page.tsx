import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ArchivesHeader } from "@/components/archives/archives-header"
import { ArchivesSidebar } from "@/components/archives/archives-sidebar"
import { ArchivesGrid } from "@/components/archives/archives-grid"
import { FeaturedCollections } from "@/components/archives/featured-collections"
import { Suspense } from "react"

export default function ArchivesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <ArchivesHeader />
        <FeaturedCollections />
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-80">
              <ArchivesSidebar />
            </aside>
            <div className="flex-1">
              <Suspense fallback={<div>Loading archives...</div>}>
                <ArchivesGrid />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
