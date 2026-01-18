"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Internships", href: "#internships" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Certifications", href: "#certifications" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
          <h1 className="text-lg font-semibold tracking-tight">
            Ashutosh Trivedi
          </h1>
        </div>

        {/* Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative text-gray-300 hover:text-green-400 transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
