import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ArchiveDetails } from "@/components/archives/archive-details"
import { RelatedArchives } from "@/components/archives/related-archives"

export default function ArchiveDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ArchiveDetails archiveId={params.id} />
        <RelatedArchives currentId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
