// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { supabase } from "@/lib/supabase";


// interface Monastery {
//   id: number;
//   name: string;
//   Description: string;
//   latitude: number;
//   longitude: number;
//   altitude: number;
//   architecture_style: string;
//   significance: string;
//   address: string;
//   best_time_to_visit: string;
//   established_year: number;
//   timings: string;
//   entry_fees: string;
//   main_image_path: string;
// }

// export default function MonasteryDetailsPage() {
//   const params = useParams();
//   const id = params?.id as string;
//   const [monastery, setMonastery] = useState<Monastery | null>(null);

//   useEffect(() => {
//     const fetchMonastery = async () => {
//       const { data, error } = await supabase
//         .from("monasteries")
//         .select("*")
//         .eq("id", id)
//         .single();

//       if (error) {
//         console.error("Error fetching monastery:", error);
//       } else {
//         setMonastery(data as Monastery);
//       }
//     };

//     if (id) fetchMonastery();
//   }, [id]);

//   if (!monastery) {
//     return <div className="p-8 text-gray-600">Loading monastery details...</div>;
//   }

//   return (
//     <div className="bg-yellow-50 max-w-5xl mx-auto p-6">
//       {/* Image */}
//       <div className=" rounded-2xl overflow-hidden shadow-md">
//         <Image
//           src={monastery.main_image_path}
//           alt={monastery.name}
//           width={1200}
//           height={600}
//           className="w-full h-[400px] object-cover"
//         />
//       </div>

//       {/* Info */}
//       <div className="mt-6 space-y-4">
//         <h1 className="text-3xl font-bold text-gray-900">{monastery.name}</h1>
//         <p className="text-gray-600">{monastery.address}</p>

//         <p className="text-lg text-gray-700">{monastery.Description}</p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
//           <div>
//             <p>
//               <span className="font-semibold">Established:</span>{" "}
//               {monastery.established_year}
//             </p>
//             <p>
//               <span className="font-semibold">Significance:</span>{" "}
//               {monastery.significance}
//             </p>
//             <p>
//               <span className="font-semibold">Architectural Style:</span>{" "}
//               {monastery.architecture_style}
//             </p>
//             <p>
//               <span className="font-semibold">Best Time to Visit:</span>{" "}
//               {monastery.best_time_to_visit}
//             </p>
//           </div>

//           <div>
//             <p>
//               <span className="font-semibold">Latitude:</span>{" "}
//               {monastery.latitude}
//             </p>
//             <p>
//               <span className="font-semibold">Longitude:</span>{" "}
//               {monastery.longitude}
//             </p>
//             <p>
//               <span className="font-semibold">Altitude:</span>{" "}
//               {monastery.altitude} m
//             </p>
//             <p>
//               <span className="font-semibold">Timings:</span>{" "}
//               {monastery.timings}
//             </p>
//             <p>
//               <span className="font-semibold">Entry Fees:</span>{" "}
//               {monastery.entry_fees}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import AudioPlayer from "@/components/audio/AudioPlayer"; // ✅ added import

interface Monastery {
  id: number;
  name: string;
  Description: string;
  latitude: number;
  longitude: number;
  altitude: number;
  architecture_style: string;
  significance: string;
  address: string;
  best_time_to_visit: string;
  established_year: number;
  timings: string;
  entry_fees: string;
  main_image_path: string;
}

export default function MonasteryDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const [monastery, setMonastery] = useState<Monastery | null>(null);

  useEffect(() => {
    const fetchMonastery = async () => {
      const { data, error } = await supabase
        .from("monasteries")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching monastery:", error);
      } else {
        setMonastery(data as Monastery);
      }
    };

    if (id) fetchMonastery();
  }, [id]);

  if (!monastery) {
    return <div className="p-8 text-gray-600">Loading monastery details...</div>;
  }

  return (
    <div className="bg-yellow-50 max-w-5xl mx-auto p-6">
      {/* Image */}
      <div className="rounded-2xl overflow-hidden shadow-md">
        <Image
          src={monastery.main_image_path}
          alt={monastery.name}
          width={1200}
          height={600}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Info */}
      <div className="mt-6 space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">{monastery.name}</h1>
        <p className="text-gray-600">{monastery.address}</p>

        <p className="text-lg text-gray-700">{monastery.Description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div>
            <p>
              <span className="font-semibold">Established:</span>{" "}
              {monastery.established_year}
            </p>
            <p>
              <span className="font-semibold">Significance:</span>{" "}
              {monastery.significance}
            </p>
            <p>
              <span className="font-semibold">Architectural Style:</span>{" "}
              {monastery.architecture_style}
            </p>
            <p>
              <span className="font-semibold">Best Time to Visit:</span>{" "}
              {monastery.best_time_to_visit}
            </p>
          </div>

          <div>
            <p>
              <span className="font-semibold">Latitude:</span>{" "}
              {monastery.latitude}
            </p>
            <p>
              <span className="font-semibold">Longitude:</span>{" "}
              {monastery.longitude}
            </p>
            <p>
              <span className="font-semibold">Altitude:</span>{" "}
              {monastery.altitude} m
            </p>
            <p>
              <span className="font-semibold">Timings:</span>{" "}
              {monastery.timings}
            </p>
            <p>
              <span className="font-semibold">Entry Fees:</span>{" "}
              {monastery.entry_fees}
            </p>
          </div>
        </div>

        {/* ✅ Audio Player Section */}
        <div className="mt-8">
          <AudioPlayer monasteryId={id} />
        </div>
      </div>
    </div>
  );
}
