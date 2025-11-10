
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';
import AnimatedSection from './AnimatedSection';
import ProjectModal from './ProjectModal';
import { Eye, Link } from 'lucide-react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-emerald-500">
    {children}
  </h2>
);

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${project.title}`}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden flex flex-col group border border-white/20"
    >
      <div className="relative overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-green-400">{project.title}</h3>
        <p className="text-neutral-400 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="bg-green-500/20 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-white/5 p-3 flex items-center justify-around text-sm font-semibold text-neutral-400">
        <button onClick={onClick} className="flex items-center hover:text-green-400 transition-colors">
            <Eye className="mr-2 h-4 w-4" /> View Details
        </button>
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-400 transition-colors">
            <Link className="mr-2 h-4 w-4" /> Visit Site
        </a>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <AnimatedSection id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.title} project={project} onClick={() => setSelectedProject(project)} />
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </AnimatedSection>
  );
};

export default Projects;