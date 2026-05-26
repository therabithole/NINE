'use client'

import Link from 'next/link'
import SocialLogin from './SocialLogin'

export default function RegisterForm() {
  return (
    <div className="w-full max-w-md glass rounded-[40px] p-10">
      <h1 className="text-5xl font-black mb-3">
        Create Account
      </h1>

      <p className="text-gray-400 mb-8">
        Join the mobility ecosystem.
      </p>

      <SocialLogin />

      <div className="flex items-center gap-4 my-8">
        <div className="h-px bg-gray-700 flex-1" />
        <span className="text-gray-500 text-sm">OR</span>
        <div className="h-px bg-gray-700 flex-1" />
      </div>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-black/40 rounded-2xl p-4 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full bg-black/40 rounded-2xl p-4 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full bg-black/40 rounded-2xl p-4 outline-none"
        />

        <button className="w-full bg-emerald-500 text-black font-bold py-4 rounded-2xl">
          Create Account
        </button>
      </form>

      <p className="text-center text-gray-400 mt-8">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-emerald-400">
          Login
        </Link>
      </p>
    </div>
  )
}
