"use client"
import React, { useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";
import Link from "next/link";

const Example = () => {
  return (
<>
  <FlyoutNav />
  <div
    className="relative min-h-screen"
    style={{
      backgroundImage: "url(/imgs/random/12.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-violet-700 to-black" />
    {/* Text Section */}
    <div className="z-10 text-left absolute top-1/4 left-8">
      <motion.h1
        className="text-6xl font-bold bg-clip-text text-white "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Learn to Invest — The Fun, Simple, and Smarter Way

      </motion.h1>
      <motion.h2
        className="ml-2 mt-4 text-4xl font-bold bg-clip-text text-violet-300 z-2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeIn" }}
      >
        Join 2000+ students already using Juny to master investing through interactive lessons, real-time simulations, and a competitive community. Build real-world financial skills in an engaging, game-like environment.
      </motion.h2>
    </div>

    <div className="absolute top-1/4 right-8 z-0">
      <img 
        src="/landing/idle.png" 
        alt="Idle" 
        className="w-auto h-auto" 
        style={{ maxWidth: "2000px" }}
      />
    </div>
  </div>
</>
  );
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-neutral-950 py-3 shadow-xl"
          : "bg-neutral-950/0 py-6 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex">
          <CTAs />
        </div>
      </div>
    </nav>
  );
};

const Logo = ({ color = "white" }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold" style={{ color }}>
        Juny
      </span>
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className="w-10"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor={color}
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor={color}
        ></path>
      </svg>
    </div>
  );
};


const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      <Link href="/login">
        <button className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black">
          <FaUserCircle />
          <span>Log in</span>
        </button>
      </Link>
      <Link href="/signup">
        <button className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black">
          <FaUserCircle />
          <span>Create Account</span>
        </button>
      </Link>
    </div>
  );
};

export default Example;
