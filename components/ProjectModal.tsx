
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import { X, Link } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            layoutId={`card-${project.title}`}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-t-xl" />
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-green-400">{project.title}</h2>
                <button onClick={onClose} className="p-1 rounded-full text-neutral-400 hover:bg-gray-700">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 my-4">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-green-500/20 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-6">
                {project.longDescription}
              </p>
               <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
                >
                  <Link className="mr-2 h-5 w-5" />
                  Visit Project
                </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
