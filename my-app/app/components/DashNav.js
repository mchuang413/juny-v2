"use client";
import React, { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useMotionValueEvent, AnimatePresence, useScroll, motion } from "framer-motion";
import useMeasure from "react-use-measure";

const Example = () => {
  return <FlyoutNav />;
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white transition-all duration-300 ease-out lg:px-12 border-b-2 ${
        scrolled ? "bg-neutral-950 py-3 shadow-xl border-neutral-800" : "bg-neutral-950/0 py-6 shadow-none border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
      </div>
    </nav>
  );
};

const Logo = ({ color = "white" }) => (
  <div className="flex items-center gap-2">
    <span className="text-2xl font-bold" style={{ color }}>
      Juny
    </span>
    <svg width="50" height="39" viewBox="0 0 50 39" fill={color} xmlns="http://www.w3.org/2000/svg" className="w-10">
      <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"></path>
      <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"></path>
    </svg>
  </div>
);

const Links = () => (
  <div className="flex items-center gap-6">
    {LINKS.map((l) => (
      <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
        {l.text}
      </NavLink>
    ))}
  </div>
);

const NavLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative h-fit w-fit">
      <a href={href} className="relative">
        {children}
        <span
          className={`absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out ${
            showFlyout ? "scale-x-100" : ""
          }`}
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = () => {
  const handleLogout = () => {
    try {
      Cookies.remove("auth");
      Cookies.remove("email");
      window.location.href = "/";
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black"
      >
        <FaUserCircle />
        <span>Logout</span>
      </button>
    </div>
  );
};

const TradingContent = () => {
  return (
    <div className="w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl">
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">Portfolio</h3>
          <a href="#" className="block text-sm hover:underline">
            Overview
          </a>
          <a href="#" className="block text-sm hover:underline">
            Positions
          </a>
        </div>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact support
      </button>
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink key={l.text} href={l.href} FoldContent={l.component} setMenuOpen={setOpen}>
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-end bg-neutral-950 p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Example;

const LINKS = [
  { text: "Learn", href: "/learn" },
  { text: "Trading Sim", href: "/sim", component: TradingContent },
  { text: "Dashboard", href: "/dash" },
];
