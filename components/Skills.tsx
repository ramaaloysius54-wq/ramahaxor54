"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Network,
  GitBranch,
  Workflow,
  Activity,
  BarChart3,
  Cpu,
  Code2,
  Megaphone,
  Wrench,
  Users,
  Check,
} from "lucide-react";
import { devopsSkills, skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Box: <Box className="w-6 h-6" />,
  Network: <Network className="w-6 h-6" />,
  GitBranch: <GitBranch className="w-6 h-6" />,
  Workflow: <Workflow className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
};

const categoryIconMap: Record<string, React.ReactNode> = {
  "web-dev": <Code2 className="w-5 h-5 text-sky-400" />,
  "digital-marketing": <Megaphone className="w-5 h-5 text-sky-400" />,
  "dev-tools": <Wrench className="w-5 h-5 text-sky-400" />,
  "soft-skills": <Users className="w-5 h-5 text-sky-400" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-navy-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Kombinasi keahlian infrastruktur DevOps, pengembangan aplikasi web,
            serta perangkat pendukung siklus produksi perangkat lunak.
          </p>
        </motion.div>

        {/* A. DevOps & Infrastructure Detailed Cards */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider">
              A. Core Infrastructure
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              DevOps & Infrastructure
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devopsSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-navy-800/70 border border-slate-800/90 hover:border-sky-500/40 transition-all duration-300 shadow-soft group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-navy-950 transition-all duration-300">
                      {iconMap[skill.icon]}
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-medium text-sky-400">
                      {skill.role}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {skill.name} – {skill.role}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* B, C, D, E Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((group, idx) => {
            const letter = String.fromCharCode(66 + idx);
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-navy-800/60 border border-slate-800/90 hover:border-slate-700 transition-all shadow-soft"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                    {categoryIconMap[group.id]}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                      Category {letter}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {group.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-5">
                  {group.subtitle}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-900/90 border border-slate-800 hover:border-sky-500/40 text-slate-200 text-xs sm:text-sm font-medium transition-colors"
                    >
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{item.name}</span>
                      {item.category && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                          {item.category}
                        </span>
                      )}
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
