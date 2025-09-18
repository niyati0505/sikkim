"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Train, Plane, Car } from "lucide-react";

const travelInfo = [
  {
    id: 1,
    title: "Nearest Train Station",
    detail: "🚆 New Jalpaiguri Railway Station",
    icon: Train,
  },
  {
    id: 2,
    title: "Nearest Airport",
    detail: "✈️ Pakyong Airport",
    icon: Plane,
  },
  {
    id: 3,
    title: "Recommended Transport",
    detail: `🚆 Budget: Take a train to NJP, then hail a cab.\n✈️ Fast: Fly to Pakyong Airport, then take a cab.`,
    icon: Car,
  },
];

export default function ToursSection() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Travel Information</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the best ways to reach Sikkim’s monasteries.
          </p>
        </div>

        {/* ✅ Flex row for cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {travelInfo.map((info) => {
            const Icon = info.icon;
            return (
              <Link key={info.id} href="/tour" className="flex-1">
                <Card className="cursor-pointer h-full rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform bg-yellow-50 ">
                  <CardContent className="p-6 text-center space-y-4">
                    {/* Icon */}
                    <div className="flex justify-center">
                      <div className="p-3 bg-white rounded-full shadow-sm">
                        <Icon className="w-8 h-8 text-gray-700" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900">
                      {info.title}
                    </h3>

                    {/* Detail */}
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {info.detail}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
