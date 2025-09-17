"use client";

export default function FooterCTA() {
  return (
    <footer className="bg-gradient-to-r from-yellow-600 to-red-600 text-white py-16 mt-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Plan Your Sacred Journey</h2>
        <p className="mb-6 text-lg">
          Discover monasteries, attend festivals, and explore the living heritage of Sikkim.
        </p>
        <button className="px-6 py-3 bg-white text-yellow-700 font-bold rounded-lg shadow-lg hover:bg-gray-100">
          Explore Now
        </button>
        <p className="mt-8 text-sm opacity-70">© 2025 Sacred Monasteries Project</p>
      </div>
    </footer>
  );
}
