"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code, Server, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sky-400 font-semibold tracking-wide text-sm sm:text-base mt-2">
            {profileData.name}
          </p>
        </motion.div>

        {/* Main Profile Bio & DevOps Focus Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 sm:p-8 rounded-2xl bg-navy-800/70 border border-slate-800 shadow-soft mb-10 space-y-6"
        >
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Professional Summary
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              &ldquo;{profileData.about.bio}&rdquo;
            </p>
          </div>

          <div className="pt-6 border-t border-slate-800/90">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Server className="w-5 h-5 text-sky-400" />
              <span>{profileData.about.devopsFocusTitle}</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {profileData.about.devopsFocusDescription}
            </p>
          </div>
        </motion.div>

        {/* Two Focus Cards: 1. Web Development & 2. DevOps & Infrastructure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {profileData.about.cards.map((card, index) => {
            const isWeb = index === 0;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 sm:p-8 rounded-2xl bg-navy-800/50 border border-slate-800/90 hover:border-sky-500/40 transition-all duration-300 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                      {isWeb ? (
                        <Code className="w-6 h-6" />
                      ) : (
                        <Server className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                        0{index + 1} • Core Focus
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-slate-800/80">
                  {card.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
