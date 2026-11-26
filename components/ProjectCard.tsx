"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Eye, Code2, Server, Globe } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  onPreview: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onPreview }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const isDevOps = project.category === "DevOps & Infrastructure";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="group rounded-2xl bg-[#070b14]/75 backdrop-blur-md border border-white/10 hover:border-white/25 overflow-hidden flex flex-col justify-between transition-all duration-300"
    >
      <div>
        <div
          onClick={() => onPreview(project)}
          className="relative h-52 sm:h-56 w-full bg-[#03050a] overflow-hidden cursor-pointer border-b border-white/10"
        >
          {!imgError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#050811] select-none">
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-slate-300 mb-3">
                {isDevOps ? (
                  <Server className="w-5 h-5" />
                ) : (
                  <Globe className="w-5 h-5" />
                )}
              </div>
              <p className="font-mono text-xs text-slate-400">
                PROJECT {project.number}
              </p>
              <p className="text-sm font-semibold text-white mt-1 line-clamp-1">
                {project.codeName}
              </p>
              <span className="mt-2 font-mono text-[10px] text-slate-400 px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/10">
                {project.image}
              </span>
            </div>
          )}

          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 rounded-md bg-[#03050a]/85 backdrop-blur-md border border-white/15 font-mono text-[11px] text-white">
              {project.number}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#03050a]/85 backdrop-blur-md border border-white/15 font-mono text-[11px] text-slate-300">
              {project.category}
            </span>
          </div>

          <div className="absolute inset-0 bg-[#03050a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black font-semibold text-xs">
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Project</span>
            </span>
          </div>
        </div>

        <div className="p-6">
          <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-1">
            {project.codeName}
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 font-mono text-[11px] text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-4 border-t border-white/10 flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => onPreview(project)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-white/[0.04] hover:bg-white/[0.09] text-white border border-white/15 transition-colors"
        >
          <Code2 className="w-4 h-4 text-slate-300" />
          <span>{project.codeSnippets ? "Detail & YAML" : "Preview"}</span>
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-white hover:bg-slate-200 text-black transition-colors"
          >
            <span>Visit Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
