'use client'

import { motion } from 'framer-motion'

export default function AuthSidePanel() {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center relative overflow-hidden bg-black">
      <div className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center"
      >
        <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-violet-500 rounded-[32px]" />
      </motion.div>

      <div className="relative z-10 text-center mt-16 px-10">
        <h2 className="text-5xl font-black leading-tight">
          Mobility + Food + Freight
        </h2>

        <p className="text-gray-400 text-xl mt-6 max-w-lg">
          One ecosystem connecting users, drivers, restaurants, grocery stores and halal meat businesses.
        </p>
      </div>
    </div>
  )
}
