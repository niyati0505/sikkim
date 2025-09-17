import Image from "next/image";
import Link from "next/link";

export interface Monastery {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  altitude: number;
  significance: string;
  address: string;
  best_time_to_visit: string;
  established_year: number;
  timings: string;
  entry_fees: string;
  main_image_path: string;
  architectural_style?: string;
}

interface MonasteryCardProps {
  monastery: Monastery;
}

export default function MonasteryCard({ monastery }: MonasteryCardProps) {
  return (
    <div className="bg-yellow-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-56">
        <Image
          src={monastery.main_image_path}
          alt={monastery.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{monastery.name}</h3>
        <p className="text-sm text-gray-600">{monastery.address}</p>

        <p className="mt-2 text-sm text-gray-500 line-clamp-3">
          {monastery.description}
        </p>

        <p className="mt-3 text-xs text-gray-500">
          <span className="font-semibold">Established:</span>{" "}
          {monastery.established_year}
        </p>

        <p className="mt-1 text-xs text-gray-500">
          <span className="font-semibold">Significance:</span>{" "}
          {monastery.significance}
        </p>

        {/* Buttons Section */}
        <div className="mt-4 flex gap-2">
          <Link href={`/explore/${monastery.id}`}>
            <button className="px-3 py-2 bg-amber-700 text-white text-sm rounded-lg hover:bg-amber-800">
              Explore Details
            </button>
          </Link>

          <button className="px-3 py-2 border border-amber-700 text-amber-700 text-sm rounded-lg hover:bg-amber-50">
            Virtual Tour
          </button>

          {/* ✅ Audio Guide button */}
          <button className="px-3 py-2 border border-green-700 text-green-700 text-sm rounded-lg hover:bg-green-50">
            Audio Guide
          </button>
        </div>
      </div>
    </div>
  );
}