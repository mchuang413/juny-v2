"use client";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-black">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Learn to Invest — The Fun, Simple, and Smarter Way
        </motion.h1>
        <motion.p
          className="max-w-3xl text-lg text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Join 2,000+ weekly active students using Juny to learn investing through
          personalized, gamified lessons, real-time simulations, and friendly
          competition. Build real-world financial skills in an engaging,
          game-like environment designed for beginners.
        </motion.p>
        <motion.a
          href="https://juny-rmq3.vercel.app/"
          className="bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Try Juny Free
        </motion.a>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 px-8 text-center bg-black">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          Financial literacy shouldn’t be reserved for adults or hidden behind
          jargon. <br />
          Juny was built to make learning about money approachable, visual, and
          genuinely fun. Whether you’re a beginner taking your first step into
          the stock market or a student curious about how finance really works,
          Juny turns complex concepts into lessons you can see, play, and
          practice.
        </p>
      </section>

      {/* CORE FEATURES SECTION */}
      <section className="py-24 px-8 text-center bg-black">
        <h2 className="text-4xl font-bold mb-12">Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: "Interactive Lessons",
              desc: "Over 50 visual units covering stocks, ETFs, risk management, and strategy — complete with animations, quizzes, and scenario-based learning. Lessons adapt to user progress, making learning feel personal and interactive rather than overwhelming.",
            },
            {
              title: "Paper Trading Simulator",
              desc: "Invest without risk using real-time market data via the Alpaca API. Test strategies, build portfolios, and track performance across the S&P 500 while learning how your decisions play out over time.",
            },
            {
              title: "Stock News Hub",
              desc: "Live market updates rewritten in student-friendly language, turning business news into quick, readable insights.",
            },
            {
              title: "Leaderboard",
              desc: "Compete and grow. Track returns, climb ranks, and celebrate progress through daily and weekly leaderboards.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#0b0020] p-6 rounded-2xl shadow-lg border border-purple-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
              <div className="mt-4 bg-gray-800 rounded-xl h-32 flex items-center justify-center text-gray-400">
                GIF Placeholder
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-24 px-8 text-center bg-black">
        <h2 className="text-4xl font-bold mb-10">Our Impact</h2>
        <ul className="text-gray-300 text-lg mb-8 space-y-2">
          <li>🌍 600 active users building financial confidence</li>
          <li>📈 1.5 years of consistent growth and new feature launches</li>
          <li>💬 2,000+ people reached through community initiatives</li>
        </ul>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
          “Juny made investing feel like a game instead of a guessing contest.
          It taught me more in a week than a semester of economics.” <br />—
          High School Student, California
        </blockquote>
      </section>

      {/* JOURNEY SECTION */}
      <section className="py-24 px-8 text-center bg-black">
        <h2 className="text-4xl font-bold mb-10">The Journey</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            <strong>June 2024:</strong> Launched our first prototype with 10
            interactive units.
          </p>
          <p>
            <strong>August 2024:</strong> Integrated Alpaca API, added Stock
            News Hub, reached 600 active users.
          </p>
          <p>
            <strong>2025–Present:</strong> Expanding our content library and
            partnering with schools to bring Juny into classrooms.
          </p>
        </div>
      </section>

      {/* JUNY+ SECTION */}
      <section className="py-24 px-8 text-center bg-black">
        <h2 className="text-4xl font-bold mb-6">Optional Upgrade: Juny+</h2>
        <p className="max-w-3xl mx-auto text-gray-300 mb-10 text-lg">
          Unlock even more with Juny+. Juny+ gives power users unlimited access
          to all features, while keeping the core platform free for everyone.
        </p>
        <ul className="text-gray-300 space-y-2 mb-10">
          <li>✅ Unlimited lesson access</li>
          <li>✅ Unlimited trading simulator use</li>
          <li>✅ Exclusive curated portfolios</li>
          <li>✅ Expanded live stock news feed</li>
          <li>✅ Personalized AI-based feedback on investing patterns</li>
        </ul>
        <p className="italic text-gray-400 max-w-2xl mx-auto">
          (Juny remains primarily a free platform focused on access and
          education — Juny+ simply adds depth for advanced learners.)
        </p>
      </section>

      {/* JOIN US SECTION */}
      <section className="py-24 px-8 text-center bg-black">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ready to Start Your Investing Journey?
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          Juny is built by students, for students — empowering the next
          generation to take control of their financial future.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="https://juny-rmq3.vercel.app/"
            className="bg-gradient-to-r from-purple-700 to-blue-700 px-8 py-3 rounded-2xl font-semibold shadow-lg hover:from-purple-600 hover:to-blue-600"
          >
            Try Juny Free
          </a>
          <a
            href="#demo-video"
            className="border border-purple-600 px-8 py-3 rounded-2xl font-semibold hover:bg-purple-900/30"
          >
            Watch Demo
          </a>
        </div>
        <div className="text-gray-400 text-sm space-x-4">
          <a href="#" className="hover:text-white">Instagram</a> |
          <a href="#" className="hover:text-white"> LinkedIn</a> |
          <a href="#" className="hover:text-white"> YouTube</a>
        </div>
      </section>

      {/* FINAL SECTION */}
      <div className="h-screen bg-black flex justify-center items-center">
        <motion.h1
          className="text-6xl font-bold text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          More to Be Discovered...
        </motion.h1>
      </div>
    </main>
  );
}
