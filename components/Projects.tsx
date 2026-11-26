"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-slate-400 mb-3">
            <span className="h-[1px] w-7 bg-slate-500" />
            <span>05 / Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Proyek website, pipeline CI/CD GitOps, dan klaster Kubernetes yang
            sudah dijalankan.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors border ${
                  filter === cat
                    ? "bg-white text-black border-white font-semibold"
                    : "bg-[#070b14]/70 text-slate-300 border-white/10 hover:border-white/25"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPreview={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        subtitle={
          selectedProject
            ? `PROJECT ${selectedProject.number} — ${selectedProject.codeName}`
            : ""
        }
        description={selectedProject?.description}
        imageSrc={selectedProject?.image || ""}
        architectureImage={selectedProject?.architectureImage}
        gallery={selectedProject?.gallery}
        codeSnippets={selectedProject?.codeSnippets}
        badges={selectedProject?.technologies}
        highlights={selectedProject?.screenshotsIncluded}
        liveUrl={selectedProject?.liveUrl}
      />
    </section>
  );
}
