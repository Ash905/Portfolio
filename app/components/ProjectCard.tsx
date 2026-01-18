"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: any;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="cursor-pointer rounded-xl border border-white/10 bg-black/40 overflow-hidden"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-400 text-sm mt-2">
          {project.description}
        </p>

        <div className="flex gap-2 flex-wrap mt-4">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
