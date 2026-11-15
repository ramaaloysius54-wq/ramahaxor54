"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ImageModal from "./ImageModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Web Development", "DevOps & Infrastructure"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-navy-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Dokumentasi proyek pengembangan aplikasi website dan implementasi
            infrastruktur DevOps.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === cat
                    ? "bg-sky-500 text-navy-950 shadow-glow"
                    : "bg-navy-800/80 text-slate-300 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 3-Column Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPreview={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Modal Preview Project */}
      <ImageModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        subtitle={`PROJECT ${selectedProject?.number} — ${selectedProject?.codeName}`}
        description={selectedProject?.description}
        imageSrc={selectedProject?.image || ""}
        badges={selectedProject?.technologies}
        highlights={selectedProject?.screenshotsIncluded}
        liveUrl={selectedProject?.liveUrl}
      />
    </section>
  );
}
