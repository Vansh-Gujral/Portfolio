
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
          <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">Engineering Philosophy</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tighter">
            I build systems that <span className="text-emerald-500 italic">think.</span>
          </h3>
        </div>
        
        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
          <p>
            I'm <span className="text-zinc-100 font-semibold">Vansh Gujral</span>, an AI Engineer focused on the intersection of advanced research and robust backend architecture. My work bridges the gap between raw data and actionable intelligence, moving beyond basic models to create full-lifecycle automation.
          </p>
          <p>
            I believe in <span className="text-zinc-100 font-medium italic underline decoration-emerald-500/50 underline-offset-4">individual ownership</span>. Whether it's drafting novel patent architectures for IoT-integrated AI or deploying high-concurrency Python backends, I take systems from data ingestion to production-ready deployment.
          </p>
          <p>
            My focus is on designing intelligent software foundations that handle complex ML inference while maintaining high performance and scalability.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 py-10 border-t border-zinc-800/50 mt-10">
          <div>
            <div className="text-4xl font-bold text-emerald-500 mb-1 tracking-tighter">5+</div>
            <div className="text-zinc-500 text-[10px] uppercase font-mono tracking-widest">Patent Drafts</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-500 mb-1 tracking-tighter">10+</div>
            <div className="text-zinc-500 text-[10px] uppercase font-mono tracking-widest">Core AI Systems</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl relative">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
            alt="Vansh Gujral's Workspace/Vision" 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
          
          {/* Status Badge */}
          <div className="absolute top-8 left-8 flex items-center gap-3 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest">Active Researching</span>
          </div>

          <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/60 backdrop-blur-2xl border border-white/5 rounded-3xl">
            <div className="text-zinc-100 font-bold text-xl mb-1">Lead AI Developer</div>
            <div className="text-zinc-500 text-sm font-mono mb-4 uppercase tracking-widest">Architecting Innovation</div>
            <div className="flex gap-2">
              <div className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '92%' }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-full bg-emerald-500" 
                />
              </div>
              <div className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '78%' }}
                  transition={{ duration: 2, delay: 0.7 }}
                  className="h-full bg-teal-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
