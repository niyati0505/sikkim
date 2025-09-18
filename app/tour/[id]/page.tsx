// "use client"

// import { useEffect, useState } from "react"
// import { useParams } from "next/navigation"
// import { createClient } from "@supabase/supabase-js"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { MapPin, Navigation, Train, Bus, Plane, Car } from "lucide-react"

// // ✅ Supabase client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// )

// interface Tour {
//   id: number
//   monastery_name: string
//   nearest_train_station: string
//   train_distance_km: number
//   nearest_bus_stop: string
//   bus_distance_km: number
//   nearest_airport: string
//   airport_distance_km: number
//   nearest_taxi_stand: string
//   taxi_distance_km: number
//   recommended_transport: string
//   travel_tips: string
// }

// export default function TourDetailsPage() {
//   const params = useParams()
//   const { id } = params

//   const [tour, setTour] = useState<Tour | null>(null)
//   const [loading, setLoading] = useState(true)

//   // 🔥 Fetch from Supabase
//   useEffect(() => {
//     const fetchTour = async () => {
//       setLoading(true)
//       const { data, error } = await supabase
//         .from("tours")
//         .select("*")
//         .eq("id", id)
//         .single()

//       if (error) {
//         console.error("Error fetching tour:", error)
//       } else {
//         setTour(data)
//       }
//       setLoading(false)
//     }

//     if (id) fetchTour()
//   }, [id])

//   if (loading) return <p className="p-6 text-center">Loading...</p>
//   if (!tour) return <p className="p-6 text-center">No details found</p>

//   return (
//     <div className="p-6 space-y-6">
//       <Card className="bg-yellow-50">
//         <CardHeader>
//           <CardTitle className="text-xl flex items-center">
//             <MapPin className="h-5 w-5 mr-2" />
//             {tour.monastery_name}
//           </CardTitle>
//         </CardHeader>

//         <CardContent className="space-y-4 text-sm text-muted-foreground">
//           {/* Train */}
//           <div className="flex items-center space-x-2">
//             <Train className="h-4 w-4 text-indigo-600" />
//             <span>
//               Nearest Train: <b>{tour.nearest_train_station}</b> ({tour.train_distance_km} km)
//             </span>
//           </div>

//           {/* Bus */}
//           <div className="flex items-center space-x-2">
//             <Bus className="h-4 w-4 text-green-600" />
//             <span>
//               Nearest Bus Stop: <b>{tour.nearest_bus_stop}</b> ({tour.bus_distance_km} km)
//             </span>
//           </div>

//           {/* Airport */}
//           <div className="flex items-center space-x-2">
//             <Plane className="h-4 w-4 text-blue-600" />
//             <span>
//               Nearest Airport: <b>{tour.nearest_airport}</b> ({tour.airport_distance_km} km)
//             </span>
//           </div>

//           {/* Taxi */}
//           <div className="flex items-center space-x-2">
//             <Car className="h-4 w-4 text-orange-600" />
//             <span>
//               Nearest Taxi Stand: <b>{tour.nearest_taxi_stand}</b> ({tour.taxi_distance_km} km)
//             </span>
//           </div>

//           {/* Recommended Transport */}
//           <div className="mt-4">
//             <h3 className="font-semibold">Recommended Transport</h3>
//             <p>{tour.recommended_transport}</p>
//           </div>

//           {/* Travel Tips */}
//           <div className="mt-4">
//             <h3 className="font-semibold">Travel Tips</h3>
//             <p>{tour.travel_tips}</p>
//           </div>

//           <div className="flex space-x-3 mt-4">
//             <Button variant="outline">
//               <Navigation className="h-4 w-4 mr-2" />
//               Get Directions
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { createClient } from "@supabase/supabase-js"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Train, Bus, Plane, Car } from "lucide-react"

// ✅ Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface Tour {
  id: number
  monastery_name: string
  nearest_train_station: string
  train_distance_km: number
  nearest_bus_stop: string
  bus_distance_km: number
  nearest_airport: string
  airport_distance_km: number
  nearest_taxi_stand: string
  taxi_distance_km: number
  recommended_transport: string
  travel_tips: string
  image_path?: string // ✅ new column
}

export default function TourDetailsPage() {
  const params = useParams()
  const { id } = params

  const [tour, setTour] = useState<Tour | null>(null)
  const [loading, setLoading] = useState(true)

  // 🔥 Fetch from Supabase
  useEffect(() => {
    const fetchTour = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from("tours")
        .select("*")
        .eq("id", id)
        .single()

      if (error) {
        console.error("Error fetching tour:", error)
      } else {
        setTour(data)
      }
      setLoading(false)
    }

    if (id) fetchTour()
  }, [id])

  if (loading) return <p className="p-6 text-center">Loading...</p>
  if (!tour) return <p className="p-6 text-center">No details found</p>

  return (
    <div className="p-6 space-y-6">
      <Card className="bg-yellow-50 ">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            {tour.monastery_name}
          </CardTitle>
        </CardHeader>

        {/* ✅ Image section (centered & smaller) */}
{tour.image_path && (
  <div className="w-120 h-70 flex justify-center py-4">
    <img
      src={tour.image_path}
      alt={tour.monastery_name}
      className="w-90 h-70 object-contain rounded-md shadow-md"
    />
  </div>
)}

        <CardContent className="space-y-4 text-sm text-muted-foreground">
          {/* Train */}
          <div className="flex items-center space-x-2">
            <Train className="h-4 w-4 text-indigo-600" />
            <span>
              Nearest Train: <b>{tour.nearest_train_station}</b> ({tour.train_distance_km} km)
            </span>
          </div>

          {/* Bus */}
          <div className="flex items-center space-x-2">
            <Bus className="h-4 w-4 text-green-600" />
            <span>
              Nearest Bus Stop: <b>{tour.nearest_bus_stop}</b> ({tour.bus_distance_km} km)
            </span>
          </div>

          {/* Airport */}
          <div className="flex items-center space-x-2">
            <Plane className="h-4 w-4 text-blue-600" />
            <span>
              Nearest Airport: <b>{tour.nearest_airport}</b> ({tour.airport_distance_km} km)
            </span>
          </div>

          {/* Taxi */}
          <div className="flex items-center space-x-2">
            <Car className="h-4 w-4 text-orange-600" />
            <span>
              Nearest Taxi Stand: <b>{tour.nearest_taxi_stand}</b> ({tour.taxi_distance_km} km)
            </span>
          </div>

          {/* Recommended Transport */}
          <div className="mt-4">
            <h3 className="font-semibold">Recommended Transport</h3>
            <p>{tour.recommended_transport}</p>
          </div>

          {/* Travel Tips */}
          <div className="mt-4">
            <h3 className="font-semibold">Travel Tips</h3>
            <p>{tour.travel_tips}</p>
          </div>

          <div className="flex space-x-3 mt-4">
  <Button
    variant="outline"
    onClick={() =>
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          tour.monastery_name
        )}`,
        "_blank"
      )
    }
  >
    <Navigation className="h-4 w-4 mr-2" />
    Get Directions
  </Button>
</div>

        </CardContent>
      </Card>
    </div>
  )
}
