"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("professional");

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-32 h-64 w-64 rounded-full bg-emerald-500/5 blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -left-32 h-48 w-48 rounded-full bg-green-500/5 blur-[80px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur mb-4">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Get to Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-green-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A glimpse into my journey, passion for technology, and what drives me as a developer
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-2 mb-12"
        >
          {["professional", "personal", "skills"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "bg-white/5 text-gray-400 hover:text-gray-300 hover:bg-white/10 border border-transparent"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Professional Tab Content */}
            {activeTab === "professional" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">My Journey in Tech</h3>
                <p className="text-gray-300 leading-relaxed">
                  I started my journey as a self-taught developer, fascinated by how technology can solve real-world problems. Over the years, I&apos;ve evolved into a Full Stack Developer specializing in modern web technologies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  What excites me most is building applications that not only look great but also perform exceptionally well. I believe in writing clean, maintainable code and following best practices that stand the test of time.
                </p>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    My Philosophy
                  </h4>
                  <p className="text-gray-300">
                    &ldquo;Build for the user, code for the next developer, and architect for scale. Every line of code should serve a purpose and every feature should solve a problem.&rdquo;
                  </p>
                </div>
              </div>
            )}

            {/* Personal Tab Content */}
            {activeTab === "personal" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Beyond the Code</h3>
                <p className="text-gray-300 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or diving into tech blogs and documentation. I&apos;m passionate about continuous learning and staying updated with industry trends.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I enjoy mentoring aspiring developers and participating in tech communities. Sharing knowledge and helping others grow in their tech journey is something I truly value.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-green-400 mb-2">🌱 Currently Learning</h4>
                    <p className="text-sm text-gray-300">Go & System Design</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-green-400 mb-2">🎯 2026 Goals</h4>
                    <p className="text-sm text-gray-300">Contribute to 12+ OSS projects</p>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab Content */}
            {activeTab === "skills" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Technical Expertise</h3>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in the Data Analyst (Pnadas, Sckit-learn,matplotlib) and Power BI expertise. My expertise spans across Data Analytics, Dashboard , database design, and DevOps practices.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Data Mastery</h4>
                    <p className="text-sm text-gray-300">
                      Python, MySQL, Pandas, PowerBI, Data Manipulation, Mongo DB
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend & Database</h4>
                    <p className="text-sm text-gray-300">
                      Node.js, Express, MongoDB, PostgreSQL, REST APIs, GraphQL
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools & DevOps</h4>
                    <p className="text-sm text-gray-300">
                      Git, Docker, AWS, Vercel, CI/CD, Jest, ESLint
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column - Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Experience Stats */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">By The Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">7+</div>
                  <div className="text-sm text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                  <div className="text-sm text-gray-300">Job Simulations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">12+</div>
                  <div className="text-sm text-gray-300">Tech Stacks</div>
                </div>
              </div>
            </div>

            {/* Work Approach */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">My Approach</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Problem-First Mindset",
                    desc: "Understand the problem thoroughly before jumping to solutions"
                  },
                  {
                    title: "User-Centric Design",
                    desc: "Build interfaces that are intuitive and delightful to use"
                  },
                  {
                    title: "Performance Focused",
                    desc: "Optimize for speed, scalability, and efficiency"
                  },
                  {
                    title: "Clean Code Advocate",
                    desc: "Write maintainable, well-documented code"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Working On */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Currently Building
              </h4>
              <p className="text-gray-300">
                A SaaS platform for developers to collaborate on open-source projects, built with Next.js 14, TypeScript, and real-time features.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <span className="font-medium">Want to collaborate on something awesome?</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}