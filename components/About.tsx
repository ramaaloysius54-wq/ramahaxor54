"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Check } from "lucide-react";
import { profileData } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Clean Monospace Index — tanpa badge kapsul AI) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-slate-400 mb-3">
            <span className="h-[1px] w-7 bg-slate-500" />
            <span>01 / About</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-1.5">
            {profileData.name}
          </p>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#070b14]/75 backdrop-blur-md border border-white/10 mb-8 space-y-6"
        >
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            {profileData.about.bio}
          </p>

          <div className="pt-6 border-t border-white/10">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              {profileData.about.devopsFocusTitle}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {profileData.about.devopsFocusDescription}
            </p>
          </div>
        </motion.div>

        {/* Two Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {profileData.about.cards.map((card, index) => {
            const isWeb = index === 0;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#070b14]/70 backdrop-blur-md border border-white/10 hover:border-white/25 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-slate-200 shrink-0">
                      {isWeb ? (
                        <Code className="w-5 h-5" />
                      ) : (
                        <Server className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                        {card.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-5 border-t border-white/10">
                  {card.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
                    >
                      <Check className="w-4 h-4 text-slate-400 shrink-0" />
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
