"use client";

import { Card, CardContent } from "@/components/ui/card";

const archives = [
  { id: 1, title: "Ancient Scrolls of Pemayangtse", year: "1700 AD" },
  { id: 2, title: "Monastic Artifacts of Rumtek", year: "1850 AD" },
  { id: 3, title: "Rare Manuscripts from Tashiding", year: "1600 AD" },
];

export default function DigitalArchives() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Digital Archives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore centuries-old manuscripts and rare monastic artifacts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {archives.map((a) => (
            <Card key={a.id} className="shadow-lg rounded-2xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold">{a.title}</h3>
                <p className="text-gray-500">{a.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
