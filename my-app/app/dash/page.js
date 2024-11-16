"use client";
import Navbar from "../components/DashNav";
import React from "react";
import Card from "../components/ShimmerBorderCard";
import { motion } from "framer-motion";

export default function Dash() {
  const featured = [
    { id: 1, title: "XXXXXXX: XXXXXXX", description: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" },
    { id: 2, title: "XXXXXXX: XXXXXXX", description: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" },
    { id: 3, title: "XXXXXXX: XXXXXXX", description: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" },
  ];

  const curriculum = [
    { id: 1, title: "Unit 1 Lesson 1", description: "Introduction to Juny" },
    { id: 2, title: "Unit 1 Lesson 2", description: "Overview of Investing" },
    { id: 3, title: "Unit 1 Lesson 3", description: "Types of Investments" },
  ];

  return (
    <>
      <Navbar />
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: "url(/imgs/random/12.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-violet-700 to-black opacity-100" />

        <div className="relative z-10 max-w-6xl mx-auto pt-40 px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="bg-violet-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg"
            >
              Explore Topics
            </motion.button>

            <input
              type="text"
              placeholder="What would you like to learn?"
              className="w-full md:w-1/2 py-2 px-4 rounded-lg bg-white shadow-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          {/* Featured Section */}
          <h1 className="text-4xl font-bold text-white mb-8">Featured</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((item) => (
              <Card key={item.id} title={item.title} description={item.description} />
            ))}
          </div>

          <h1 className="text-4xl font-bold text-white mb-8 mt-8">Curriculum</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {curriculum.map((lesson) => (
              <Card key={lesson.id} title={lesson.title} description={lesson.description} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
