import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
  image: string;
  projectUrl: string;
  detailedKnowledge: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Palm Pay",
    description: "Biometric payment system using hand geometry.",
    problem: "High friction and security vulnerabilities in physical card/mobile payments.",
    solution: "CV-powered hand geometry and vein structure recognition for unique biometric auth.",
    impact: "Secure, contactless, and frictionless identity verification for high-end retail.",
    tags: ["Computer Vision", "Python", "ResNet"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
    projectUrl: "https://palm-pay-one.vercel.app/", 
    detailedKnowledge: "Palm Pay uses a ResNet-based architecture to extract unique 'blobs' from hand structure and vein patterns. It converts physical hand geometry into a high-dimensional latent vector stored in a secure database for 1:N matching during transactions."
  },
  {
    id: 2,
    title: "AI Patent Maker",
    description: "Automated multi-agent IP drafting workflow.",
    problem: "Prohibitive costs and complexity for engineers drafting complete patent claims.",
    solution: "A multi-agent LLM system that processes one topic into an entire legal draft.",
    impact: "Simulated real-world IP workflows, reducing drafting time by over 80%.",
    tags: ["GenAI", "NLP", "LangChain"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
    projectUrl: "#",
    detailedKnowledge: "This tool orchestrates multiple AI agents to handle different patent sections: an 'Inventor Agent' for the summary, a 'Legal Agent' for Claims, and a 'Technical Agent' for System Architecture, ensuring legal-grade documentation."
  },
  {
    id: 3,
    title: "LatentFlow JEPA",
    description: "Self-supervised representation learning for video.",
    problem: "Massive label scarcity in training data for large-scale video perception.",
    solution: "Implemented Joint Embedding Predictive Architecture (JEPA) for latent space modeling.",
    impact: "Scalable feature extraction without human-in-the-loop labeling.",
    tags: ["JEPA", "Self-Supervised", "Research"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4628c9759?auto=format&fit=crop&q=80&w=800",
    projectUrl: "https://vl-jepa.streamlit.app/",
    detailedKnowledge: "Based on Yann LeCun's JEPA, this project avoids pixel-level reconstruction by predicting the latent representation of missing video parts. This allows the model to learn high-level semantic features rather than wasting capacity on noise."
  },
  {
    id: 4,
    title: "CareerSage",
    description: "Personalized AI career roadmap generator.",
    problem: "Fragmented guidance in rapidly evolving technical industries.",
    solution: "Recommendation engine analyzing skillsets and market trends for career paths.",
    impact: "Data-driven personalized roadmaps with actionable learning milestones.",
    tags: ["RecSys", "Django", "LLM"],
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    projectUrl: "https://github.com/Vansh-Gujral/CareerSage",
    detailedKnowledge: "CareerSage maps current user skills against live industry requirements using a custom knowledge graph. It generates a step-by-step learning journey, suggesting specific documentation and project goals to fill skill gaps."
  },
  {
    id: 5,
    title: "SolarEco Predictor",
    description: "Efficiency prediction via weather-integrated ML.",
    problem: "Inaccurate yield forecasting slowing residential solar adoption.",
    solution: "ML models integrating real-time weather data and usage pattern datasets.",
    impact: "High-accuracy efficiency forecasting to optimize panel ROI for consumers.",
    tags: ["XGBoost", "Data Science", "Sustainability"],
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
    projectUrl: "https://solar-eco.onrender.com/",
    detailedKnowledge: "SolarEco utilizes time-series forecasting to predict energy output. By integrating APIs for solar irradiance and local weather patterns, it provides users with a 7-day outlook of their potential energy savings."
  },
  {
    id: 6,
    title: "Ganga River Pollution Detection",
    description: "Unsupervised ML for environmental monitoring.",
    problem: "Manual, low-frequency monitoring of river health indicators.",
    solution: "Unsupervised ML analyzing upstream/downstream data to detect pollution spikes.",
    impact: "Real-time anomaly detection supporting river cleaning initiatives.",
    tags: ["Unsupervised ML", "IoT", "Environment"],
    image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&q=80&w=800",
    projectUrl: "https://ganga-pollution-detection.streamlit.app/",
    detailedKnowledge: "This system uses isolation forests and clustering on sensor data collected from Ganga river locations. By comparing upstream 'clean' baseline data with downstream 'target' data, it identifies chemical spikes without needing pre-labeled 'polluted' datasets."
  }
];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6 py-12 backdrop-blur-2xl bg-black/90"
    onClick={onClose}
  >
    <motion.div 
      initial={{ scale: 0.9, y: 30, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.9, y: 30, opacity: 0 }}
      className="bg-zinc-950 border border-zinc-800 p-8 md:p-14 rounded-[3rem] max-w-3xl w-full relative overflow-hidden shadow-2xl overflow-y-auto max-h-[90vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute top-0 right-0 p-8">
        <button onClick={onClose} className="text-zinc-500 hover:text-emerald-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-emerald-500"></div>
          <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Project Intelligence</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">{project.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div>
          <h4 className="text-zinc-100 font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Technical Summary
          </h4>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            {project.detailedKnowledge}
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="text-[10px] font-mono uppercase text-emerald-500 mb-2 tracking-widest">Core Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono rounded-md uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-mono uppercase text-emerald-500 mb-2 tracking-widest">Business Impact</h4>
            <p className="text-zinc-400 text-sm italic">"{project.impact}"</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-zinc-900">
        <a 
          href={project.projectUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-[2] bg-emerald-500 text-black text-center font-bold py-5 rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 text-xs tracking-widest uppercase shadow-[0_10px_30px_rgba(16,185,129,0.2)]"
        >
          Explore Live Build
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
        <button onClick={onClose} className="flex-1 border border-zinc-800 text-zinc-400 font-bold py-5 rounded-2xl hover:bg-zinc-900 hover:text-white transition-all text-xs tracking-widest uppercase">
          Return
        </button>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectCard: React.FC<{ project: Project; onOpen: (p: Project) => void }> = ({ project, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -12 }}
    className="relative group h-full cursor-pointer"
    onClick={() => onOpen(project)}
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-700"></div>
    <div className="relative h-full bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800/80 rounded-[2.5rem] overflow-hidden flex flex-col">
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-40 group-hover:opacity-80 grayscale group-hover:grayscale-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
        <div className="absolute bottom-6 left-8 flex gap-2">
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[9px] font-mono font-bold uppercase text-white/90 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors leading-tight">
          {project.title}
        </h3>
        
        <div className="space-y-4 mb-8">
          <div className="flex gap-3">
            <span className="text-emerald-500 font-bold text-[10px] uppercase font-mono mt-1 whitespace-nowrap">Problem:</span>
            <p className="text-zinc-500 text-sm leading-snug">{project.problem}</p>
          </div>
          <div className="flex gap-3">
            <span className="text-emerald-500 font-bold text-[10px] uppercase font-mono mt-1 whitespace-nowrap">Impact:</span>
            <p className="text-zinc-300 text-sm font-medium leading-snug italic">{project.impact}</p>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-zinc-800/50">
          <div className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 group-hover:text-emerald-400 flex items-center gap-3 transition-all">
            VIEW DETAILS
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">Curated Engineering</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Backend + <span className="text-emerald-500">AI Systems.</span></h3>
        </div>
        <p className="text-zinc-400 text-lg max-w-sm border-l border-zinc-800 pl-8 leading-relaxed">
          Focusing on problem-driven architecture rather than toy demos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onOpen={(p) => setSelectedProject(p)} 
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};
