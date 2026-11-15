"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Server,
  Code2,
  ArrowRight,
  Mail,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle Background Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-sky-500/30 text-sky-400 text-xs sm:text-sm font-medium shadow-soft">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>{profileData.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">
                Reliable Infrastructure
              </span>{" "}
              & Modern Web Applications.
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profileData.heroDescription}
            </p>

            {/* Quick Info Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs sm:text-sm">
                <Server className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Junior DevOps Engineer</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs sm:text-sm">
                <Code2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Web Developer</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-sky-500 hover:bg-sky-400 text-navy-950 shadow-glow transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-sky-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Circular Profile Photo with Decorative Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Outer Decorative Ring 1 */}
              <div className="absolute inset-0 rounded-full border border-sky-500/20 scale-110 pointer-events-none" />
              {/* Outer Decorative Dashed Ring 2 */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30 scale-125 pointer-events-none" />
              {/* Soft Ambient Glow Behind Photo */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-sky-500/20 to-blue-600/20 blur-2xl pointer-events-none" />

              {/* Perfect Circular Photo Frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-sky-400/80 shadow-glow bg-navy-800 flex items-center justify-center">
                {!imgError ? (
                  <Image
                    src={profileData.avatar}
                    alt={profileData.name}
                    fill
                    sizes="(max-width: 640px) 256px, 320px"
                    priority
                    className="object-cover rounded-full"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-6 select-none">
                    <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
                      <Terminal className="w-8 h-8" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-wider">
                      MSR
                    </span>
                    <span className="text-xs text-slate-400 mt-1">
                      Muhammad Syafiq Ramadani
                    </span>
                    <span className="text-[11px] text-sky-400/80 mt-2 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                      /images/profile.jpg
                    </span>
                  </div>
                )}
              </div>

              {/* Floating Verification Badge */}
              <div className="absolute -bottom-2 right-2 sm:bottom-2 sm:right-2 px-3.5 py-2 rounded-xl bg-navy-900/95 border border-slate-700/80 shadow-soft flex items-center gap-2 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">
                  DevOps & Web Ready
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {profileData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-navy-800/60 border border-slate-800/90 hover:border-sky-500/30 transition-all duration-300 shadow-soft flex items-center justify-between"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}{" "}
                  <span className="text-lg sm:text-xl font-bold text-sky-400">
                    {stat.label}
                  </span>
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {stat.subtext}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                <span className="text-xs font-bold">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
