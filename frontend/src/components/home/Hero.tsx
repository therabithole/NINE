'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <div className="inline-flex px-4 py-2 rounded-full glass mb-6">
            One platform for mobility + food + freight
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            Move Anything.
            <br />
            Order Everything.
          </h1>

          <p className="text-gray-400 text-xl mt-6 max-w-xl">
            Taxi, courier, freight, grocery, restaurants and halal meat businesses.
          </p>

          <div className="mt-10 glass rounded-3xl p-6 max-w-xl">
            <input
              placeholder="Pickup location"
              className="w-full bg-black/40 rounded-2xl p-4 mb-4 outline-none"
            />

            <input
              placeholder="Dropoff location"
              className="w-full bg-black/40 rounded-2xl p-4 outline-none"
            />

            <div className="flex gap-4 mt-5">
              <button className="bg-emerald-500 text-black px-6 py-3 rounded-2xl font-bold">
                See Prices
              </button>

              <button className="border border-gray-700 px-6 py-3 rounded-2xl">
                Schedule
              </button>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative"
        >
          <div className="glass rounded-[40px] p-10 h-[600px] flex items-center justify-center">
            <div className="w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl absolute" />

            <div className="relative z-10 text-center">
              <div className="text-8xl mb-6">🚕</div>
              <div className="text-2xl font-bold">Real-time Mobility Ecosystem</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
