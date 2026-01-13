"use client";

import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative flex items-center justify-center px-6 pt-32 pb-40">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="relative max-w-5xl text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Learn to Invest —{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              The Fun, Simple, and Smarter Way
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Join{" "}
            <span className="text-white font-semibold">
              2,000+ weekly active students
            </span>{" "}
            using Juny to learn investing through personalized, gamified lessons,
            real-time simulations, and friendly competition.
          </motion.p>

          <motion.a
            href="https://juny-rmq3.vercel.app/"
            className="inline-flex items-center justify-center rounded-2xl px-10 py-4 text-lg font-semibold 
              bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500
              shadow-lg shadow-purple-900/40 transition"
            whileHover={{ scale: 1.04 }}
          >
            Try Juny Free
          </motion.a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-32 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Core Features
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Feature 1 */}
            <motion.div
              className="group rounded-3xl p-6 bg-[#0b0020] border border-purple-800/40
                shadow-lg shadow-black/40 hover:-translate-y-1 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-3">Interactive Lessons</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                50+ visual units covering stocks, ETFs, and risk management.
              </p>

              <div className="relative mt-6 h-28 w-full overflow-hidden rounded-xl bg-black/40">
                <Image
                  src="/image1.png"
                  alt="Interactive Lessons"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="group rounded-3xl p-6 bg-[#0b0020] border border-purple-800/40
                shadow-lg shadow-black/40 hover:-translate-y-1 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3">Paper Trading Simulator</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Trade with real-time market data — risk free.
              </p>

              <div className="relative mt-6 h-28 w-full overflow-hidden rounded-xl bg-black/40">
                <Image
                  src="/image2.png"
                  alt="Paper Trading Simulator"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="group rounded-3xl p-6 bg-[#0b0020] border border-purple-800/40
                shadow-lg shadow-black/40 hover:-translate-y-1 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">Stock News Hub</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Market news rewritten in student-friendly language.
              </p>

              <div className="relative mt-6 h-28 w-full overflow-hidden rounded-xl bg-black/40">
                <Image
                  src="/image3.png"
                  alt="Stock News Hub"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="group rounded-3xl p-6 bg-[#0b0020] border border-purple-800/40
                shadow-lg shadow-black/40 hover:-translate-y-1 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3">Leaderboard</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Daily and weekly rankings that keep learning competitive.
              </p>

              <div className="relative mt-6 h-28 w-full overflow-hidden rounded-xl bg-black/40">
                <Image
                  src="/image4.png"
                  alt="Leaderboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
