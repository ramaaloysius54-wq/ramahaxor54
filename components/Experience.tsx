"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { experiencesData } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Pengalaman kerja profesional dalam pengembangan website dan operasional
            sistem penyiaran langsung.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-1 w-6 h-6 rounded-full bg-navy-950 border-2 border-sky-400 flex items-center justify-center shadow-glow">
                <div className="w-2 h-2 rounded-full bg-sky-400" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-navy-800/60 border border-slate-800/90 hover:border-sky-500/40 transition-all duration-300 shadow-soft">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-5 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs sm:text-sm font-medium self-start sm:self-center shrink-0">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((task, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-300 text-sm sm:text-base"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
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
