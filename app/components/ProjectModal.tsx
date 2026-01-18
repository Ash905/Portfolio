"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-[#111] rounded-xl p-6 max-w-lg w-full"
          >
            <h3 className="text-2xl font-bold mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">
              {project.details}
            </p>

            <a
              href={project.link}
              className="text-green-400"
            >
              Visit Project →
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
