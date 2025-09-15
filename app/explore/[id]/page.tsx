import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MonasteryDetails } from "@/components/explore/monastery-details"
import { RelatedMonasteries } from "@/components/explore/related-monasteries"

export default function MonasteryDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MonasteryDetails monasteryId={params.id} />
        <RelatedMonasteries currentId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
