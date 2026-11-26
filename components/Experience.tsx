"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Building2, Check } from "lucide-react";
import { experiencesData } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-slate-400 mb-3">
            <span className="h-[1px] w-7 bg-slate-500" />
            <span>03 / Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Riwayat kerja di pengembangan website dan operasional live streaming.
          </p>
        </motion.div>

        <div className="relative border-l border-white/15 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative"
            >
              <div className="absolute -left-[29px] sm:-left-[45px] top-6 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-[#03050a]" />

              <div className="p-6 sm:p-8 rounded-2xl bg-[#070b14]/75 backdrop-blur-md border border-white/10 hover:border-white/25 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400 mb-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 font-mono text-xs text-slate-300 self-start sm:self-center shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.responsibilities.map((task, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-300 text-sm sm:text-base"
                    >
                      <Check className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
