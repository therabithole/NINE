'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="glass rounded-3xl px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          MoveX
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/taxi">Taxi</Link>
          <Link href="/courier">Courier</Link>
          <Link href="/freight">Freight</Link>
          <Link href="/food">Food</Link>
          
          
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="px-5 py-2 rounded-full border border-gray-700"
          >
            Login
          </Link>

          <Link
            href="/auth/register"
            className="px-5 py-2 rounded-full bg-emerald-500 text-black font-semibold"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}
