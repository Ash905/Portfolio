"use client";

import { useState } from "react";
import { projects } from "../data/project";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Reveal from "../components/Reveal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-32 px-6">
      <Reveal>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </div>

          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        </div>
      </Reveal>
    </section>
  );
}
