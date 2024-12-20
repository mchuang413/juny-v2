"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/DashNav";
import Cookies from "js-cookie";

export default function Dash() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");
  const email = Cookies.get("email");

  useEffect(() => {
    async function fetchStats() {
      try {
        const email = Cookies.get("email");
        if (!email) throw new Error("Email cookie not found.");

        const response = await fetch(
          `http://127.0.0.1:8000/streak?email=${encodeURIComponent(email)}`,
          { method: "GET" }
        );

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message || "Failed to fetch streak.");
          return;
        }

        const data = await response.json();
        console.log("User streak data:", data);
        setStats(data);
      } catch (error) {
        console.error("Error:", error.message);
        setError("An error occurred while fetching stats.");
      }
    }

    fetchStats();
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="absolute top-0 left-0 w-full h-screen z-[-1]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(139, 92, 246, 1), rgba(0, 0, 0, 0.8))",
        }}
      ></div>
      <div className="relative flex flex-col items-center justify-start min-h-screen pt-24 px-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-6">Dashboard</h1>

        {/* Error or Stats */}
        <div className="w-full max-w-lg text-white">
          <hr className="border-gray-400 mb-4" />
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : stats ? (
            <div className="text-lg">
              <p className="flex items-center gap-2">
                <span>Streak:</span>
                <span className="flex items-center gap-1 text-orange-500 font-bold">
                  <span className="animate-bounce">🔥</span>
                  {stats.streak}
                </span>
              </p>
              <p className="mt-2">Email: <strong>{email || "Not available"}</strong></p>
            </div>
          ) : (
            <p className="text-gray-300">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
