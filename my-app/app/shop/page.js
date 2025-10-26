"use client";
import Navbar from "../components/DashNav";
import { motion } from "framer-motion";
export default function Shop() {
  return (
    <>
    <Navbar />
    <div
      style={{
        background: "linear-gradient(#1e1b4b, black)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        animation: "moveBackground 10s infinite alternate",
      }}
    >
      <style>
        {`
          @keyframes moveBackground {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
      <img
        src="/premium/logo.png"
        alt="Premium Logo"
        style={{ width: "300px", marginBottom: "20px" }}
      />
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
        Upgrade to JUNY+ to unlock all investing secrets
      </h1>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          fontSize: "1.5rem",
        }}
      >
        <li style={{ marginBottom: "10px" }}>
          ✅ Premium Feature 1
        </li>
        <li style={{ marginBottom: "10px" }}>
          ✅ Premium Feature 2
        </li>
        <li style={{ marginBottom: "10px" }}>
          ✅ Premium Feature 3
        </li>
      </ul>

      <motion.button
      whileHover={{
        scale: 1.2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="relative overflow-hidden rounded-full bg-indigo-200 p-4 text-xl font-black uppercase text-indigo-900"
    >
      <motion.span
        className="block"
        initial={{ x: "0%" }}
        animate={{
          x: "calc(-100% - 6px)",
        }}
        transition={{
          ease: "linear",
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        UPGRADE •{" "}
      </motion.span>

      <motion.span
        initial={{ x: "calc(-100% - 6px)" }}
        animate={{
          x: "calc(-200% - 12px)",
        }}
        transition={{
          ease: "linear",
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute left-4 top-4 block"
      >
        UPGRADE •
      </motion.span>
      <motion.span
        initial={{ x: "calc(100% + 6px)" }}
        animate={{
          x: "0%",
        }}
        transition={{
          ease: "linear",
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute left-4 top-4 block"
      >
        UPGRADE •
      </motion.span>
      <motion.span
        initial={{ x: "calc(200% + 12px)" }}
        animate={{
          x: "calc(100% + 6px)",
        }}
        transition={{
          ease: "linear",
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute left-4 top-4 block"
      >
        UPGRADE •
      </motion.span>
    </motion.button>
    </div>
    </>
  );
}
