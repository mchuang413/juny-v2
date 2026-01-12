"use client";

import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

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
            Join <span className="text-white font-semibold">2,000+ weekly active students</span>{" "}
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

      {/* MISSION */}
      <section className="px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Financial literacy shouldn’t be reserved for adults or hidden behind jargon.
            <br /><br />
            Juny was built to make learning about money approachable, personalized, and genuinely fun.
            Whether you’re just getting started or curious how finance really works, Juny turns
            complex ideas into <span className="text-white font-medium">gamified lessons you can see, play, and practice</span>.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-32 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Core Features</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Interactive Lessons",
                desc: "50+ visual units covering stocks, ETFs, and risk management. Lessons adapt to progress so learning feels personal, not overwhelming.",
              },
              {
                title: "Paper Trading Simulator",
                desc: "Trade with real-time market data via the Alpaca API. Build portfolios and see how decisions play out over time — risk free.",
              },
              {
                title: "Stock News Hub",
                desc: "Market news rewritten in student-friendly language that directly connects to what users are trading and learning.",
              },
              {
                title: "Leaderboard",
                desc: "Daily and weekly rankings that keep learning motivating, competitive, and game-like — never stressful.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                className="rounded-3xl p-6 bg-[#0b0020] border border-purple-800/40
                  shadow-lg shadow-black/40 hover:-translate-y-1 transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{f.desc}</p>
                <div className="mt-6 h-28 rounded-xl bg-black/40 flex items-center justify-center text-gray-500 text-sm">
                  Visual Preview
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Our Impact</h2>
          <ul className="text-lg text-gray-300 space-y-2 mb-10">
            <li>🌍 ~2,000 weekly active users</li>
            <li>📈 1.5+ years of continuous iteration</li>
            <li>🏆 3rd Place — Congressional App Challenge</li>
          </ul>

          <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
            “Juny made investing feel like a game instead of a guessing contest.
            It taught me more in a week than a semester of economics.”
            <br />— High School Student, California
          </blockquote>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="px-6 py-32 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">The Journey</h2>
          <div className="space-y-4 text-gray-300 text-lg">
            <p><strong>June 2024:</strong> First prototype launched.</p>
            <p><strong>August 2024:</strong> Alpaca integration + Stock News Hub.</p>
            <p><strong>2025–Present:</strong> Scaled to ~2,000 weekly users.</p>
          </div>
        </div>
      </section>

      {/* JUNY+ */}
      <section className="px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Optional Upgrade: Juny+</h2>
          <p className="text-lg text-gray-300 mb-10">
            Juny+ unlocks advanced tools for power users while keeping Juny free and accessible for everyone.
          </p>

          <ul className="text-gray-300 space-y-2 mb-8">
            <li>✅ Unlimited lessons</li>
            <li>✅ Unlimited simulator access</li>
            <li>✅ Curated portfolios</li>
            <li>✅ Expanded news feed</li>
            <li>✅ AI-powered investing feedback</li>
          </ul>

          <p className="text-sm text-gray-400 italic">
            Juny stays focused on education — Juny+ simply adds depth.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-40 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Start Your Investing Journey?
        </motion.h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          Built by students, for students — empowering the next generation through
          personalized, gamified finance education.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://juny-rmq3.vercel.app/"
            className="rounded-2xl px-10 py-4 font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg"
          >
            Try Juny Free
          </a>
          <a
            href="#demo"
            className="rounded-2xl px-10 py-4 font-semibold border border-purple-600 hover:bg-purple-900/30"
          >
            Watch Demo
          </a>
        </div>
      </section>
    </main>
  );
}
