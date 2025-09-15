import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ExploreHeader } from "@/components/explore/explore-header"
import { FilterSidebar } from "@/components/explore/filter-sidebar"
import { MonasteryGrid } from "@/components/explore/monastery-grid"
import { Suspense } from "react"

export default function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ExploreHeader />
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-80">
              <FilterSidebar />
            </aside>
            <div className="flex-1">
              <Suspense fallback={<div>Loading monasteries...</div>}>
                <MonasteryGrid />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
