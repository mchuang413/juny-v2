import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#120024] to-[#00132e] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-28 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
          Learn to Invest — The Fun, Simple, and Smarter Way
        </h1>
        <p className="max-w-3xl text-gray-300 text-lg mb-8">
          Join 600+ students already using <span className="font-semibold text-purple-300">Juny</span> to master
          investing through interactive lessons, real-time simulations, and a competitive community.
          Build real-world financial skills in an engaging, game-like environment.
        </p>

        <div className="aspect-video w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl border border-purple-700 mb-8">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_DEMO_VIDEO_ID"
            title="Juny Demo"
            allowFullScreen
          ></iframe>
        </div>

        <a
          href="https://app.juny.io"
          className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg"
        >
          Try Juny Free
        </a>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-purple-300">Our Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          Financial literacy shouldn’t be reserved for adults or hidden behind jargon.
          <span className="text-purple-400 font-semibold"> Juny </span>
          was built to make learning about money approachable, visual, and genuinely fun. Whether
          you’re a beginner taking your first step into the stock market or a student curious about
          how finance really works, Juny turns complex concepts into lessons you can see, play, and practice.
        </p>
      </section>

      {/* Core Features */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0014] to-[#001032]">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">Core Features</h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {[
            {
              title: "Interactive Lessons",
              desc: `Dive into over 50 bite-sized, visual units covering everything from the basics of stocks and ETFs to risk management and long-term strategy. Each unit combines animation-style explanations with interactive quizzes and scenario-based learning.`,
              gif: "/gifs/interactive-lessons.gif",
            },
            {
              title: "Paper Trading Simulator",
              desc: `Experience investing without the risk. Juny’s simulator gives you access to all S&P 500 companies using live data through the Alpaca API. Test strategies, track performance, and learn by doing.`,
              gif: "/gifs/trading-simulator.gif",
            },
            {
              title: "Stock News Hub",
              desc: `Stay informed without getting lost in financial jargon. Juny curates market news and rewrites it in student-friendly language to help you understand real-world finance.`,
              gif: "/gifs/news-hub.gif",
            },
            {
              title: "Leaderboard",
              desc: `Learning is better when it’s competitive. The Juny leaderboard ranks users by returns and updates daily, weekly, and monthly — making growth something you can see and celebrate.`,
              gif: "/gifs/leaderboard.gif",
            },
          ].map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold mb-3 text-blue-300">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.desc}</p>
              <img
                src={feature.gif}
                alt={feature.title}
                className="w-full max-w-md rounded-xl border border-purple-700 shadow-md"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-300 mb-10">Our Impact</h2>
        <div className="space-y-4 text-gray-300 text-lg">
          <p>🌍 600 active users and students building financial confidence</p>
          <p>📈 1.5 years of consistent growth and new feature launches</p>
          <p>💬 Over 2,000 people reached through social and community initiatives</p>
        </div>
        <blockquote className="italic text-gray-400 mt-8 max-w-3xl mx-auto">
          “Juny made investing feel like a game instead of a guessing contest. It taught me more in a week
          than a semester of economics.”
          <br />— High School Student, California
        </blockquote>
      </section>

      {/* Journey Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0018] to-[#001236]">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">The Journey</h2>
        <div className="max-w-3xl mx-auto text-gray-300 space-y-4">
          <p><span className="font-semibold text-blue-300">June 2024:</span> Our journey starts — first prototype with 10 interactive units.</p>
          <p><span className="font-semibold text-blue-300">August 2024:</span> Integrated Alpaca API, built Stock News Hub, reached 600 users.</p>
          <p><span className="font-semibold text-blue-300">2025–Present:</span> Expanding content and forming school partnerships.</p>
        </div>
      </section>

      {/* Juny+ Section */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-300 mb-6">Upgrade to Juny+</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10">
          Unlock even more with <span className="font-semibold text-purple-400">Juny+</span>. 
          Power users get unlimited access to all features — while keeping the core platform free for everyone.
        </p>
        <ul className="text-gray-300 space-y-2">
          <li>✔️ Unlimited lesson access</li>
          <li>✔️ Unlimited simulator use</li>
          <li>✔️ Exclusive curated portfolios</li>
          <li>✔️ Expanded live stock news feed</li>
          <li>✔️ Personalized AI-based investing feedback</li>
        </ul>
      </section>

      {/* Join Us Section */}
      <section className="py-28 text-center bg-gradient-to-t from-[#0a0018] to-[#000010]">
        <h2 className="text-5xl font-bold mb-6 text-purple-300">
          Ready to Start Your Investing Journey?
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Juny is built by students, for students — empowering the next generation to take control
          of their financial future.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://app.juny.io"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all font-semibold shadow-lg"
          >
            Try Juny Free
          </a>
          <a
            href="https://www.youtube.com/@juny"
            className="px-8 py-4 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-800 transition-all font-semibold"
          >
            Watch Demo
          </a>
        </div>
        <div className="mt-10 flex justify-center gap-6 text-gray-400 text-lg">
          <a href="https://instagram.com/juny" className="hover:text-purple-400">Instagram</a>
          <a href="https://linkedin.com/company/juny" className="hover:text-purple-400">LinkedIn</a>
          <a href="https://youtube.com/@juny" className="hover:text-purple-400">YouTube</a>
        </div>
      </section>
    </main>
  );
}
