"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  Eye,
} from "lucide-react";
import { devopsSkills, skillCategories, DevOpsSkill } from "@/data/skills";
import ImageModal from "./ImageModal";

const iconMap: Record<string, React.ReactNode> = {
  Box: <Box className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />,
  Workflow: <Workflow className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
};

const categoryIconMap: Record<string, React.ReactNode> = {
  "web-dev": <Code2 className="w-4 h-4 text-slate-300" />,
  "digital-marketing": <Megaphone className="w-4 h-4 text-slate-300" />,
  "dev-tools": <Wrench className="w-4 h-4 text-slate-300" />,
  "soft-skills": <Users className="w-4 h-4 text-slate-300" />,
};

interface DevOpsSkillCardProps {
  skill: DevOpsSkill;
  index: number;
  onPreview: (skill: DevOpsSkill) => void;
}

function DevOpsSkillCard({ skill, index, onPreview }: DevOpsSkillCardProps) {
  const [imgError, setImgError] = useState(false);
  const iconNode = iconMap[skill.icon] ?? <Cpu className="w-5 h-5" />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
      className="rounded-2xl bg-[#070b14]/75 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all duration-300 group flex flex-col overflow-hidden"
    >
      <button
        type="button"
        onClick={() => onPreview(skill)}
        aria-label={`Preview ${skill.name}`}
        className="relative h-44 w-full bg-[#03050a] border-b border-white/10 overflow-hidden text-left focus:outline-none"
      >
        {!imgError && skill.image ? (
          <Image
            src={skill.image}
            alt={`${skill.name} – ${skill.role}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#050811] select-none">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-slate-300 mb-2">
              {iconNode}
            </div>
            <p className="text-xs font-semibold text-white">{skill.name}</p>
            <span className="mt-1 text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/10">
              {skill.image}
            </span>
          </div>
        )}

        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#03050a]/85 backdrop-blur-md border border-white/15 font-mono text-[11px] text-slate-200 pointer-events-none">
          {skill.role}
        </span>

        <div className="absolute inset-0 bg-[#03050a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black font-semibold text-xs">
            <Eye className="w-3.5 h-3.5" />
            <span>Lihat Gambar</span>
          </span>
        </div>
      </button>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-slate-200 shrink-0">
              {iconNode}
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
              {skill.name}
            </h4>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            {skill.description}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400">
            {skill.role}
          </span>
          <button
            type="button"
            onClick={() => onPreview(skill)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-200 hover:text-white transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<DevOpsSkill | null>(null);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-slate-400 mb-3">
            <span className="h-[1px] w-7 bg-slate-500" />
            <span>02 / Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Tools dan teknologi yang saya gunakan di infrastruktur, pengembangan
            web, serta workflow harian.
          </p>
        </motion.div>

        {/* A. DevOps & Infrastructure */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-slate-400">02A</span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              DevOps &amp; Infrastructure
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devopsSkills.map((skill, idx) => (
              <DevOpsSkillCard
                key={skill.name}
                skill={skill}
                index={idx}
                onPreview={(item) => setSelectedSkill(item)}
              />
            ))}
          </div>
        </div>

        {/* B, C, D, E Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group, idx) => {
            const letter = String.fromCharCode(66 + idx);
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#070b14]/70 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/15 flex items-center justify-center">
                    {categoryIconMap[group.id] ?? (
                      <Cpu className="w-4 h-4 text-slate-300" />
                    )}
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      02{letter}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {group.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-5">
                  {group.subtitle}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#03050a]/80 border border-white/10 text-slate-200 text-xs sm:text-sm"
                    >
                      <Check className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{item.name}</span>
                      {item.category && (
                        <span className="font-mono text-[10px] text-slate-400">
                          · {item.category}
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

      <ImageModal
        isOpen={!!selectedSkill}
        onClose={() => setSelectedSkill(null)}
        title={
          selectedSkill ? `${selectedSkill.name} – ${selectedSkill.role}` : ""
        }
        subtitle="DevOps & Infrastructure"
        description={selectedSkill?.description}
        imageSrc={selectedSkill?.image || ""}
        badges={selectedSkill ? [selectedSkill.name, selectedSkill.role] : []}
        highlights={selectedSkill?.highlights}
      />
    </section>
  );
}
