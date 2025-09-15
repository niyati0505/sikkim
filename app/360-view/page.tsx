import type { Metadata } from "next"
import { ViewGalleryHeader } from "@/components/360-view/view-gallery-header"
import { VirtualTours } from "@/components/360-view/virtual-tours"
import { PanoramicGallery } from "@/components/360-view/panoramic-gallery"
import { InteractiveFeatures } from "@/components/360-view/interactive-features"

export const metadata: Metadata = {
  title: "360° Virtual Tours | Lama Maps",
  description:
    "Immersive virtual tours and panoramic views of Sikkim's sacred monasteries. Experience the spiritual atmosphere from anywhere in the world.",
}

export default function View360Page() {
  return (
    <div className="min-h-screen bg-background">
      <ViewGalleryHeader />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <VirtualTours />
        <PanoramicGallery />
        <InteractiveFeatures />
      </main>
    </div>
  )
}
