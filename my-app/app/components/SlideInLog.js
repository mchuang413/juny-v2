"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import Cookies from "js-cookie";

export const SlideInAuth = () => {
  return (
    <section className="grid min-h-screen grid-cols-1 bg-black md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]">
      <Logo />
      <Form />
      <SupplementalContent />
    </section>
  );
};

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://juny-v2-backend-4zbur.ondigitalocean.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        Cookies.set("email", email);
        Cookies.set("auth", data.token || "auth-token");
        setMessage("Login successful");

        window.location.href = "/dash";
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("An error occurred");
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={{ staggerChildren: 0.05 }}
      viewport={{ once: true }}
      className="flex items-center justify-center pb-4 pt-20 md:py-20"
    >
      <div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
        <motion.h1
          variants={primaryVariants}
          className="mb-2 text-center text-4xl font-semibold text-white"
        >
          Log in to your account
        </motion.h1>

        <form onSubmit={handleLogin} className="w-full">
          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="email-input"
              className="mb-1 inline-block text-sm font-medium text-white"
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-4 w-full">
            <label
              htmlFor="password-input"
              className="mb-1 inline-block text-sm font-medium text-white"
            >
              Password<span className="text-red-600">*</span>
            </label>
            <input
              id="password-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.button
            variants={primaryVariants}
            whileTap={{ scale: 0.985 }}
            type="submit"
            className="mb-1.5 w-full rounded bg-indigo-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Log in
          </motion.button>

          {message && (
            <motion.p variants={primaryVariants} className="text-xs text-white">
              {message}
            </motion.p>
          )}
          <motion.p variants={primaryVariants} className="text-xs text-white">
            Dont have an account?{" "}
            <a className="text-indigo-600 underline" href="/signup">
              Sign up
            </a>
          </motion.p>
        </form>
      </div>
    </motion.div>
  );
};

const SupplementalContent = () => {
  return (
    <div className="group sticky top-4 m-4 h-80 overflow-hidden rounded-3xl rounded-tl-[4rem] bg-slate-950 md:h-[calc(100vh_-_2rem)]">
      <img
        alt="purple-gradient"
        src="auth/bg1.png"
        className="h-full w-full bg-white object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
      />

      <div className="absolute right-2 top-4 z-10">
        <FiArrowUpRight className="rotate-45 text-6xl text-indigo-200 opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        transition={{ staggerChildren: 0.05 }}
        viewport={{ once: true }}
        className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-slate-950/90 to-slate-950/0 p-8"
      >
        <motion.h2
          className="mb-2 text-3xl font-semibold leading-[1.25] text-white lg:text-4xl"
          variants={primaryVariants}
        >
          Welcome back to Juny
        </motion.h2>
        <motion.p
          variants={primaryVariants}
          className="mb-6 max-w-md text-sm text-slate-300"
        >
          Continue learning and investing the smart way.
        </motion.p>
      </motion.div>
    </div>
  );
};

const Logo = () => {
  return (
    <svg
      width="50"
      height="39"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[50%] top-4 -translate-x-[50%] fill-white md:left-4 md:-translate-x-0"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#ffffff"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#ffffff"
      ></path>
    </svg>
  );
};

const primaryVariants = {
  initial: { y: 25, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default SlideInAuth;
