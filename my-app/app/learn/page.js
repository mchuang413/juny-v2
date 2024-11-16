"use client";
import Navbar from "../components/DashNav";
import React from "react";
import Card from "../components/ShimmerBorderCard";
import { motion } from "framer-motion";

export default function Dash() {
  const featured = [
    { id: 1, title: "Unit XX Lesson XX", description: "XXXXXXXXXXXX" },
    { id: 2, title: "Unit XX Lesson XX", description: "XXXXXXXXXXXX" },
    { id: 3, title: "Unit XX Lesson XX", description: "XXXXXXXXXXXX" },
  ];

  const curriculum = [
    { id: 1, title: "Unit 1 Lesson 1", description: "Introduction to Juny" },
    { id: 2, title: "Unit 1 Lesson 2", description: "Overview of Investing" },
    { id: 3, title: "Unit 1 Lesson 3", description: "Types of Investments" },
    { id: 4, title: "Unit 2 Lesson 1", description: "Stock Market Basics" },
    { id: 5, title: "Unit 2 Lesson 2", description: "Bonds and Fixed Income" },
    { id: 6, title: "Unit 2 Lesson 3", description: "Mutual Funds and ETFs" },
    { id: 7, title: "Unit 3 Lesson 1", description: "Risk and Reward" },
    { id: 8, title: "Unit 3 Lesson 2", description: "Portfolio Diversification" },
    { id: 9, title: "Unit 3 Lesson 3", description: "Investment Strategies" },
  ];

  return (
    <>
      <Navbar />
      <div
        className="relative min-h-screen bg-black overflow-y-auto"
        style={{
          backgroundImage: "url(/imgs/random/12.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay for the first screen height */}
        <div
          className="absolute top-0 left-0 w-full h-screen z-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(139, 92, 246, 1), rgba(0, 0, 0, 0.8))",
          }}
        ></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 space-y-4 md:space-y-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="bg-black text-white font-semibold py-3 px-8 rounded-lg shadow-lg"
            >
              Explore Topics
            </motion.button>

            <input
              type="text"
              placeholder="What would you like to learn?"
              className="w-full md:w-1/2 py-3 px-4 rounded-lg bg-white shadow-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Featured Section */}
          <h1 className="text-4xl font-bold text-white mb-6">Featured</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((item) => (
              <Card key={item.id} title={item.title} description={item.description} />
            ))}
          </div>

          {/* Curriculum Section */}
          <h1 className="text-4xl font-bold text-white mb-6 mt-10">Curriculum</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((lesson) => (
              <Card key={lesson.id} title={lesson.title} description={lesson.description} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
