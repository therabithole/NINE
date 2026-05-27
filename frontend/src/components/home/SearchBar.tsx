'use client'

import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="relative -mt-20 z-30 px-6 lg:px-20">
      <div className="glass rounded-[40px] p-5 max-w-5xl mx-auto shadow-2xl">
        <div className="flex items-center gap-4">
          <Search size={24} />

          <input
            type="text"
            placeholder="Search businesses, halal meat, restaurants, rides..."
            className="flex-1 bg-transparent outline-none text-lg"
          />

          <select className="bg-black/40 px-4 py-3 rounded-2xl outline-none">
            <option>All</option>
            <option>Taxi</option>
            <option>Food</option>
            <option>Grocery</option>
            <option>Meat Companies</option>
          </select>

          <button className="bg-emerald-500 text-black px-6 py-3 rounded-2xl font-bold">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
