"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Clean Editorial Identity */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Minimalist Monospace Index Line (Bukan pill AI generik) */}
            <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-slate-400">
              <span className="h-[1px] w-8 bg-slate-500" />
              <span>DevOps &amp; Web Engineer</span>
              <span className="text-slate-600">/</span>
              <span className="text-sky-400">Indonesia</span>
            </div>

            {/* Authentic Direct Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.035em] leading-[1.08]">
                Muhammad Syafiq
                <span className="block text-slate-400 font-semibold mt-1">
                  Ramadani.
                </span>
              </h1>
              <p className="font-mono text-sm sm:text-base text-sky-300/90 tracking-tight pt-1">
                Linux VPS · Docker &amp; Kubernetes · CI/CD · Full-Stack Web
              </p>
            </div>

            {/* Human, Grounded Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Saya merancang alur deployment otomatis, mengorkestrasi kontainer di
              server produksi, memantau performa sistem secara real-time, serta
              membangun aplikasi web yang cepat dan terukur.
            </p>

            {/* Hairline Technical Specs Strip */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 max-w-xl">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  Lokasi
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5">
                  Indonesia
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  Fokus Utama
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5">
                  DevOps &amp; Web
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  Status
                </p>
                <p className="text-xs sm:text-sm font-medium text-emerald-400 mt-0.5">
                  Open to Work
                </p>
              </div>
            </div>

            {/* Crisp High-Contrast Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm bg-white hover:bg-slate-200 text-black transition-all duration-200"
              >
                <span>Lihat Proyek</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-sm bg-white/[0.04] hover:bg-white/[0.09] text-white border border-white/15 backdrop-blur-md transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-slate-300" />
                <span>Hubungi Saya</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Circular Profile Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 flex items-center justify-center">
              {/* Thin Minimalist Orbital Ring */}
              <div className="absolute inset-0 rounded-full border border-white/15 scale-[1.12] pointer-events-none" />
              <div className="absolute inset-0 rounded-full border border-sky-400/20 scale-[1.24] pointer-events-none" />

              {/* Perfect Circular Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/25 shadow-2xl bg-[#070b14]/90 backdrop-blur-md flex items-center justify-center">
                {!imgError ? (
                  <Image
                    src={profileData.avatar}
                    alt={profileData.name}
                    fill
                    sizes="(max-width: 640px) 240px, 288px"
                    priority
                    className="object-cover rounded-full"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-6 select-none">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white mb-3">
                      <Terminal className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-lg font-bold text-white tracking-widest">
                      MSR
                    </span>
                    <span className="text-xs text-slate-400 mt-1">
                      /images/profile.jpg
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimalist Glassmorphic Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {profileData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-[#050811]/65 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors flex items-center justify-between"
            >
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {stat.value}{" "}
                  <span className="text-base sm:text-lg font-medium text-slate-300">
                    {stat.label}
                  </span>
                </p>
                <p className="font-mono text-xs text-slate-400 mt-1">
                  {stat.subtext}
                </p>
              </div>
              <span className="font-mono text-xs text-slate-500">
                0{idx + 1}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
