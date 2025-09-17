"use client"

import { useState } from "react"

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<any>({
    region: [],
    tradition: [],
    features: [],
    established: [],
  })

  const regions = [
    { label: "East Sikkim", count: 45 },
    { label: "West Sikkim", count: 38 },
    { label: "North Sikkim", count: 22 },
    { label: "South Sikkim", count: 15 },
  ]

  const traditions = [
    { label: "Nyingma", count: 65 },
    { label: "Kagyu", count: 42 },
    { label: "Gelug", count: 28 },
    { label: "Sakya", count: 15 },
  ]

  const features = [
    { label: "Audio Guide", count: 85 },
    { label: "360° View", count: 52 },
    { label: "Digital Archives", count: 73 },
    { label: "Regular Festivals", count: 34 },
  ]

  const established = [
    { label: "Before 1600", count: 12 },
    { label: "1600-1800", count: 28 },
    { label: "1800-1950", count: 45 },
    { label: "After 1950", count: 35 },
  ]

  const handleCheckboxChange = (category: string, value: string) => {
    setFilters((prev: any) => {
      const updated = prev[category].includes(value)
        ? prev[category].filter((v: string) => v !== value)
        : [...prev[category], value]
      return { ...prev, [category]: updated }
    })
  }

  const applyFilters = () => {
    onFilterChange(filters)
  }

  const clearFilters = () => {
    setFilters({ region: [], tradition: [], features: [], established: [] })
    onFilterChange({})
  }

  return (
    <aside className="bg-yellow-50 p-4 rounded-lg space-y-6">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <span>📍</span> Filters
      </h2>

      {/* Region */}
      <div>
        <h3 className="font-medium mb-2">Region</h3>
        {regions.map((r) => (
          <label key={r.label} className="flex justify-between mb-2">
            <div>
              <input
                type="checkbox"
                checked={filters.region.includes(r.label)}
                onChange={() => handleCheckboxChange("region", r.label)}
                className="mr-2"
              />
              {r.label}
            </div>
            <span className="text-gray-500">{r.count}</span>
          </label>
        ))}
      </div>

      {/* Tradition */}
      <div>
        <h3 className="font-medium mb-2">Buddhist Tradition</h3>
        {traditions.map((t) => (
          <label key={t.label} className="flex justify-between mb-2">
            <div>
              <input
                type="checkbox"
                checked={filters.tradition.includes(t.label)}
                onChange={() => handleCheckboxChange("tradition", t.label)}
                className="mr-2"
              />
              {t.label}
            </div>
            <span className="text-gray-500">{t.count}</span>
          </label>
        ))}
      </div>

      {/* Features */}
      <div>
        <h3 className="font-medium mb-2">Available Features</h3>
        {features.map((f) => (
          <label key={f.label} className="flex justify-between mb-2">
            <div>
              <input
                type="checkbox"
                checked={filters.features.includes(f.label)}
                onChange={() => handleCheckboxChange("features", f.label)}
                className="mr-2"
              />
              {f.label}
            </div>
            <span className="text-gray-500">{f.count}</span>
          </label>
        ))}
      </div>

      {/* Established */}
      <div>
        <h3 className="font-medium mb-2">Established</h3>
        {established.map((e) => (
          <label key={e.label} className="flex justify-between mb-2">
            <div>
              <input
                type="checkbox"
                checked={filters.established.includes(e.label)}
                onChange={() => handleCheckboxChange("established", e.label)}
                className="mr-2"
              />
              {e.label}
            </div>
            <span className="text-gray-500">{e.count}</span>
          </label>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={applyFilters}
          className="flex-1 bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
        >
          Apply Filters
        </button>
        <button
          onClick={clearFilters}
          className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100"
        >
          Clear All
        </button>
      </div>
    </aside>
  )
}