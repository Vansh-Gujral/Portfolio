
import React from 'react';
import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const achievements: Achievement[] = [
  {
    tag: "Competition",
    title: "Top 10 – Hack with Vertos 1.0",
    description: "Ranked among top teams for innovative AI system design in a high-intensity hackathon environment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0V9.403c0-.621-.504-1.125-1.125-1.125h-.872M9.75 14.25V9.403c0-.621.504-1.125 1.125-1.125h.872m-3.393 0c-.586 0-1.132.252-1.518.69l-1.513 1.707c-.466.525-.466 1.316 0 1.841l1.513 1.707c.386.438.932.69 1.518.69h1.393M14.25 14.25h1.393c.586 0 1.132-.252 1.518-.69l1.513-1.707c.466-.525.466-1.316 0-1.841l1.513-1.707c-.386-.438-.932-.69-1.518-.69H14.25M9 9h6v1.25H9V9z" />
      </svg>
    )
  },
  {
    tag: "Exhibition",
    title: "InnoTek Exhibition – CSE Department Representative",
    description: "Represented the Computer Science & Engineering department at the InnoTek technical exhibition, showcasing innovative software and AI-based project work.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21" />
      </svg>
    )
  },
  {
    tag: "Research",
    title: "5+ AI & IoT Patents",
    description: "Authoring novel system architectures for IoT edge device AI inference and distributed data processing.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    tag: "Execution",
    title: "12+ End-to-End Projects",
    description: "Ownership of full AI product lifecycle: Data ingestion → Model Training → Deployment → Scalability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  }
];

export const Achievements: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">Milestones & Validation</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
          Achievements & <span className="text-emerald-500">Recognition.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-[2rem] bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:border-emerald-500/50 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-all">
              <div className="text-emerald-500 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
            </div>
            
            <div className="mb-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-500/60 group-hover:text-emerald-400 transition-colors">
                {item.tag}
              </span>
            </div>
            
            <h4 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors leading-tight">
              {item.title}
            </h4>
            
            <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      {/* Visual background elements */}
      <div className="mt-20 flex justify-center">
         <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>
    </div>
  );
};
