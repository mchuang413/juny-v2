"use client"
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
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
    </>
  );
}
