"use client"
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQs";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#120024] to-[#00132e] text-white">
      <Navbar />
      <FAQ />
      <div className="h-screen bg-black bg-gradient-to-b from-black via-blue-900 flex justify-center items-center">
        <motion.h1
          className="text-6xl font-bold text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          More to Be Discovered...
        </motion.h1>
      </div>
    </>
  );
}
