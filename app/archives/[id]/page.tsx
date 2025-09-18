import { Footer } from "@/components/layout/footer";
import ArchiveDetails from "@/components/archives/archive-details";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface ArchivePageProps {
  params: {
    id: string;
  };
}

async function getArchive(id: string) {
  const { data, error } = await supabase
    .from("digital_archives")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error) {
    console.error("Error fetching archive:", error);
    return null;
  }

  return data;
}

export default async function ArchivePage({ params }: ArchivePageProps) {
  const archive = await getArchive(params.id);

  if (!archive) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <ArchiveDetails archive={archive} />
        </div>
      </main>
      <Footer />
    </div>
  );
}