
import React from 'react';
import { motion } from 'framer-motion';

interface SkillGroupProps {
  title: string;
  description: string;
  skills: string[];
  className?: string;
  delay?: number;
}

const SkillCard: React.FC<SkillGroupProps> = ({ title, description, skills, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -5 }}
    className={`p-8 rounded-[2rem] border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm flex flex-col group hover:border-emerald-500/30 transition-all ${className}`}
  >
    <div className="mb-6 flex items-start justify-between">
      <h4 className="text-white font-bold text-2xl tracking-tight group-hover:text-emerald-400 transition-colors">
        {title}
      </h4>
      <div className="w-10 h-10 rounded-full bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    </div>
    
    <p className="text-zinc-400 text-sm leading-relaxed mb-8">
      {description}
    </p>
    
    <div className="mt-auto flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1 rounded-md text-[10px] font-mono font-medium tracking-widest uppercase border border-zinc-800 bg-zinc-950/50 text-zinc-500 group-hover:text-zinc-300 group-hover:border-zinc-700 transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">Core Competencies</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Engineering <span className="text-emerald-500">Skills.</span>
          </h3>
        </div>
        <p className="text-zinc-400 text-lg max-w-sm border-l border-zinc-800 pl-8 leading-relaxed">
          Focusing on problem-solving through robust backend foundations and AI implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Row 1 */}
        <SkillCard 
          title="AI & Machine Learning" 
          description="Implementing deep learning and computer vision architectures. Proficient in training models for image recognition, text generation, and processing complex datasets."
          skills={['Machine Learning', 'Deep Learning', 'Computer Vision', 'Generative AI', 'NLP']} 
          className="md:col-span-7"
          delay={0.1}
        />
        <SkillCard 
          title="Workflow Automation" 
          description="Automating high-frequency manual tasks using industry-standard orchestration tools. Building self-correcting automation cycles that integrate seamlessly with backend services."
          skills={['n8n', 'UiPath', 'Automation Anywhere', 'Workflow Automation']} 
          className="md:col-span-5"
          delay={0.2}
        />

        {/* Row 2 */}
        <SkillCard 
          title="Backend Engineering" 
          description="Architecting high-performance API layers and managing distributed data. Specialized in Python-based server environments with a focus on security and reliability."
          skills={['Python', 'Django', 'REST API', 'NodeJS','ExpressJS']} 
          className="md:col-span-5"
          delay={0.3}
        />
        <SkillCard 
          title="Data & Infrastructure" 
          description="Designing robust data schemas and managing containerized environments. Ensuring data integrity and resilient service delivery."
          skills={['MySQL', 'PostgreSQL', 'Docker', 'Git', 'Postman']} 
          className="md:col-span-7"
          delay={0.4}
        />
      </div>
    </div>
  );
};
