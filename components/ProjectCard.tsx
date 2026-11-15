"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Eye, Layers, Server, Globe } from "lucide-react";
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
      className="group rounded-2xl bg-navy-800/60 border border-slate-800/90 hover:border-sky-500/40 overflow-hidden shadow-soft flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
    >
      <div>
        {/* Thumbnail Container */}
        <div
          onClick={() => onPreview(project)}
          className="relative h-52 sm:h-56 w-full bg-navy-900 overflow-hidden cursor-pointer border-b border-slate-800/80"
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
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 select-none">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
                {isDevOps ? (
                  <Server className="w-6 h-6" />
                ) : (
                  <Globe className="w-6 h-6" />
                )}
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Project {project.number}
              </p>
              <p className="text-sm font-semibold text-white mt-1 line-clamp-1">
                {project.codeName}
              </p>
              <span className="mt-2 text-[11px] text-slate-400 px-2.5 py-0.5 rounded bg-slate-900/90 border border-slate-800">
                {project.image}
              </span>
            </div>
          )}

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 rounded-lg bg-navy-950/90 backdrop-blur-md border border-slate-700/80 text-[11px] font-bold text-sky-400">
              PROJECT {project.number}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-navy-950/90 backdrop-blur-md border border-slate-700/80 text-[11px] font-medium text-slate-300">
              {project.category}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 text-navy-950 font-semibold text-xs shadow-glow">
              <Eye className="w-4 h-4" />
              <span>Preview Project</span>
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
            {project.codeName}
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Buttons */}
      <div className="px-6 pb-6 pt-3 border-t border-slate-800/60 flex items-center gap-3">
        <button
          type="button"
          onClick={() => onPreview(project)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-sky-500/40 transition-all"
        >
          <Layers className="w-4 h-4 text-sky-400" />
          <span>{project.liveUrl ? "Preview Project" : "View Details"}</span>
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-navy-950 transition-all"
          >
            <span>Visit Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
