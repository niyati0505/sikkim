"use client";

export default function ImmersiveExperience() {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Immersive Experiences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engage with monasteries through guided audio and 360° virtual tours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* 🎧 Audio Guides */}
          <div className="p-6 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-700 dark:to-yellow-900 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Audio Guides</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-200">
              Listen to stories and history of Sikkim monasteries in your language.
            </p>
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
              Play Sample
            </button>
          </div>

          {/* 🎥 360° Videos */}
          <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-700 dark:to-blue-900 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">360° Virtual Tours</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-200">
              Walk inside the monasteries and explore sacred halls virtually.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Watch Sample
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
