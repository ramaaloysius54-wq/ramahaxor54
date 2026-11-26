"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Education() {
  return (
    <section className="py-10 md:py-14 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#070b14]/75 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-slate-200 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-slate-400 mb-1">
                  04 / Education
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {profileData.education.school}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base mt-1">
                  Jurusan: {profileData.education.major}
                </p>
              </div>
            </div>

            <span className="inline-block px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 font-mono text-xs text-slate-300 self-start md:self-center">
              {profileData.education.level}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
