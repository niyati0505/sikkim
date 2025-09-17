import { TourHeader } from "@/components/tour/tour-header"
import { InteractiveMap } from "@/components/tour/interactive-map"

import { TravelGuide } from "@/components/tour/travel-guide"

import { Suspense } from "react"

export default function TourPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Removed <Header /> */}
      <main className="flex-1">
        <TourHeader />
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Suspense fallback={<div>Loading map...</div>}>
                <InteractiveMap />
              </Suspense>
              
            </div>
            <div className="space-y-8">
              <TravelGuide />
              
            </div>
          </div>
        </div>
      </main>
      {/* ✅ Removed <Footer /> */}
    </div>
  )
}
