"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import MonasteryCard, { Monastery } from "./MonasteryCard"

// Supabase client (make sure env vars are set in .env.local)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
)

export default function MonasteryGrid() {
  const [monasteries, setMonasteries] = useState<Monastery[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMonasteries = async () => {
      setLoading(true)
      const { data, error } = await supabase.from("monasteries").select("*")

      if (error) {
        console.error("Error fetching monasteries:", error.message)
      } else {
        setMonasteries(data as Monastery[])
      }
      setLoading(false)
    }

    fetchMonasteries()
  }, [])

  if (loading) {
    return <p className="text-center text-gray-500 py-8">Loading monasteries...</p>
  }

  if (monasteries.length === 0) {
    return <p className="text-center text-gray-500 py-8">No monasteries found.</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {monasteries.map((monastery) => (
        <MonasteryCard key={monastery.id} monastery={monastery} />
      ))}
    </div>
  )
}