"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Education() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-navy-800/90 via-navy-800/60 to-sky-950/20 border border-slate-800/90 hover:border-sky-500/40 transition-all shadow-soft"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 shadow-glow">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Formal Education</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {profileData.education.school}
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-slate-300 text-sm sm:text-base">
                  <BookOpen className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="font-medium">
                    Jurusan: {profileData.education.major}
                  </span>
                </div>
              </div>
            </div>

            <div className="md:text-right">
              <span className="inline-block px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-sky-400 text-xs sm:text-sm font-semibold">
                {profileData.education.level}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
