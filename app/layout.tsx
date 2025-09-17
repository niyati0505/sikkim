import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"

import {Header} from "@/components/layout/header" // ✅ global header
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lama Maps - Digital Heritage Platform for Sikkim's Monasteries",
  description:
    "Explore Sikkim's sacred monasteries through immersive digital experiences, cultural preservation, and tourism guidance.",
  generator: "v0.app",
  keywords: ["Sikkim", "monasteries", "Buddhism", "heritage", "tourism", "culture"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body className="font-sans bg-gray-50 text-gray-900">
        {/* ✅ Header only once here */}
        <Header />

        <main className="min-h-screen">
          <Suspense fallback={null}>{children}</Suspense>
        </main>

        <Analytics />
        <Script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js" strategy="afterInteractive" defer />
        <Script
          src="https://files.bpcontent.cloud/2025/09/10/18/20250910181037-O27Q0BQ5.js"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  )
}


// import type React from "react"
// import type { Metadata } from "next"
// import { Inter, Poppins } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import { Suspense } from "react"
// import Script from "next/script"

// import { NextIntlClientProvider } from "next-intl"
// import { notFound } from "next/navigation"

// import { Header } from "@/components/layout/header" // ✅ global header
// import "./globals.css"

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// })

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-poppins",
//   display: "swap",
// })

// export const metadata: Metadata = {
//   title: "Lama Maps - Digital Heritage Platform for Sikkim's Monasteries",
//   description:
//     "Explore Sikkim's sacred monasteries through immersive digital experiences, cultural preservation, and tourism guidance.",
//   generator: "v0.app",
//   keywords: ["Sikkim", "monasteries", "Buddhism", "heritage", "tourism", "culture"],
// }

// // ✅ Updated RootLayout with i18n
// export default async function RootLayout({
//   children,
//   params,
// }: Readonly<{
//   children: React.ReactNode
//   params: { locale: string }
// }>) {
//   let messages
//   try {
//     messages = (await import(`../../messages/${params.locale}.json`)).default
//   } catch (error) {
//     notFound()
//   }

//   return (
//     <html lang={params.locale} className={`${inter.variable} ${poppins.variable} antialiased`}>
//       <body className="font-sans bg-gray-50 text-gray-900">
//         {/* ✅ Wrap whole app with next-intl provider */}
//         <NextIntlClientProvider locale={params.locale} messages={messages}>
//           <Header />

//           <main className="min-h-screen">
//             <Suspense fallback={null}>{children}</Suspense>
//           </main>

//           <Analytics />
//           <Script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js" strategy="afterInteractive" defer />
//           <Script
//             src="https://files.bpcontent.cloud/2025/09/10/18/20250910181037-O27Q0BQ5.js"
//             strategy="afterInteractive"
//             defer
//           />
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   )
// }
