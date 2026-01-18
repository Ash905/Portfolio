"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-green-500/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black to-black" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Status badge */}
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              
              Available for Opportunities
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Ashutosh Trivedi
              </span>
            </h1>

            {/* Role + location */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-gray-400">
              <span className="text-xl md:text-2xl">
                Data Analyst & Full-Stack Developer
              </span>
              <span className="hidden sm:inline text-gray-600">•</span>
              <span className="flex items-center gap-1">
                📍 India (IST)
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-gray-400 leading-relaxed text-lg">
              I build scalable, modern web applications using{" "}
              <span className="text-gray-200 font-medium">
                React, Next.js, Node.js, and MongoDB
              </span>{" "}
              focusing on clean UI, performance, and real-world problem solving.
              I am also skilled in{" "}
              <span className="text-gray-200 font-medium">
                Python, SQL, and Data Analysis
              </span>
              , delivering data-driven insights and solutions.
            </p>

            {/* Featured work */}
            <div className="mt-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-green-400 hover:underline"
              >
                ⭐ Featured Work — AI Resume Builder →
              </a>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:ashutoshtrivedi9632@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-black font-medium hover:bg-green-400 transition shadow-lg shadow-green-500/20"
              >
                Email
              </a>

              {Object.entries({
                Github: "https://github.com/Ash905",
                LinkedIn: "https://www.linkedin.com/in/ashutosht28/",
                Resume:"/Ashutosh Trivedi CV.pdf"
              }).map(([item,url]) => (
                <a
                  key={item}
                  href={url}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 hover:border-white/20 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL (BALANCE ELEMENT) */}
          <div className="hidden lg:flex justify-center">
            <div className="relative h-[320px] w-[320px]">
              <div className="absolute inset-0 rounded-full bg-green-500/10 blur-2xl" />
              <div className="absolute inset-12 rounded-full bg-green-400/20 blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-sm animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
}
