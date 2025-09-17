"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import Image from "next/image"
import Link from "next/link"

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface Monastery {
  id: number
  name: string
  main_image_path: string   // using image_url instead of main_image_path
}

export default function FeaturedMonasteries() {
  const [monasteries, setMonasteries] = useState<Monastery[]>([])
  const [featured, setFeatured] = useState<Monastery[]>([])

  // Fetch monasteries from Supabase
  useEffect(() => {
    const fetchMonasteries = async () => {
      const { data, error } = await supabase
        .from("monasteries")
        .select("id, name, main_image_path")

      if (error) {
        console.error("❌ Error fetching monasteries:", error)
      } else {
        setMonasteries(data || [])
        pickRandom(data || [])
      }
    }
    fetchMonasteries()
  }, [])

  // Pick 4 random monasteries
  const pickRandom = (all: Monastery[]) => {
    if (!all.length) return
    const shuffled = [...all].sort(() => 0.5 - Math.random())
    setFeatured(shuffled.slice(0, 4))
  }

  // Rotate featured monasteries every 2 minutes
  useEffect(() => {
    if (!monasteries.length) return
    const interval = setInterval(() => pickRandom(monasteries), 120000)
    return () => clearInterval(interval)
  }, [monasteries])

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-2">Featured Monasteries</h2>
      <p className="text-center text-gray-600 mb-8">
        Discover the most iconic and spiritually significant monasteries of Sikkim.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {featured.map((monastery) => (
          <div
            key={monastery.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <Link href="/explore">
              <Image
                src={monastery.main_image_path}
                alt={monastery.name}
                width={400}
                height={250}
                className="h-56 w-full object-cover cursor-pointer"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900">{monastery.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
