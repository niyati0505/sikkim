"use client";

interface EventCardProps {
  event_name: string;
  monastery_name: string;
  description: string;
  start_date: string;
  end_date: string;
  category: string;
  main_image_path: string;
}

export function EventCard({
  event_name,
  monastery_name,
  description,
  start_date,
  end_date,
  category,
  main_image_path,
}: EventCardProps) {
  return (
    <div className="bg-yellow-50 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
      {/* Event Image */}
      <img
        src={main_image_path}
        alt={event_name}
        className="w-full md:w-1/3 h-64 object-cover"
      />

      {/* Event Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          {/* Category + Featured Label */}
          <div className="flex gap-2 mb-2">
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
              Featured
            </span>
            <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2">{event_name}</h3>

          {/* Dates */}
          <p className="text-sm text-gray-600 mb-2">
            📅 {start_date} – {end_date}
          </p>

          {/* Monastery */}
          <p className="text-sm text-gray-600 mb-2">📍 {monastery_name}</p>

          {/* Description */}
          <p className="text-gray-700 text-sm">{description}</p>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200">
            Add to Calendar
          </button>
          <button className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm hover:bg-amber-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
