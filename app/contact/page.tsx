import type { Metadata } from "next"
import { ContactHeader } from "@/components/contact/contact-header"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { LocationMap } from "@/components/contact/location-map"

export const metadata: Metadata = {
  title: "Contact Us | Lama Maps",
  description:
    "Get in touch with the Lama Maps team. We'd love to hear from you about partnerships, collaborations, or general inquiries.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ContactHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <LocationMap />
          </div>
        </div>
      </main>
    </div>
  )
}
