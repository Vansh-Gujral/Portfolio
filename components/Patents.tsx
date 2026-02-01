import React from 'react';
import { motion } from 'framer-motion';

interface Patent {
  id: string;
  title: string;
  field: string;
  description: string;
  technicalKey: string;
}

const patentData: Patent[] = [
  {
    id: "IP-01",
    title: "Multi-Spectral Sub-Dermal Vascular Authentication System",
    field: "Biometric Security",
    description: "A system utilizing kinetic hemodynamic liveness verification to prevent spoofing in vein-structure recognition.",
    technicalKey: "Edge-Based Cryptographic Mapping"
  },
  {
    id: "IP-02",
    title: "Automated Technical Document Synthesis via Multi-Agent LLMs",
    field: "Generative AI",
    description: "An orchestrated architecture where multiple specialized LLM agents collaborate to synthesize complex legal documentation.",
    technicalKey: "Multi-Agent Orchestration"
  },
  {
    id: "IP-03",
    title: "Cognitive Prognostics for Photovoltaic Arrays",
    field: "Renewable Energy / IoT",
    description: "Health management system for solar panels using fused sensor telemetry to predict failure before it occurs.",
    technicalKey: "Fused Sensor Telemetry"
  },
  {
    id: "IP-04",
    title: "Spatiotemporal Source Localization of Riverine Pollutants",
    field: "Environmental AI",
    description: "Autonomous framework using a multi-node sensor network to find the origin point of pollution in a moving river body.",
    technicalKey: "Multi-Node Analytics"
  },
  {
    id: "IP-05",
    title: "Momentum-Based Non-Lagging Trade Indicator",
    field: "FinTech / Quant",
    description: "A mathematical model designed to reduce latency in trade signals, allowing for swifter entry and exit in volatile markets.",
    technicalKey: "Latency Reduction Algorithm"
  },
  {
    id: "IP-06",
    title: "Technical Quantification of Neuro-Acoustic Phase Instability",
    field: "Neuro-Tech / Distributed Computing",
    description: "A hybrid Fog–Cloud topological learning architecture designed to quantify phase instability in neuro-acoustic signals.",
    technicalKey: "Fog-Cloud Topological Learning"
  }
];

export const Patents: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">Intellectual Property</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
          Patent <span className="text-emerald-500">Archives.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patentData.map((patent, index) => (
          <motion.div
            key={patent.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 bg-zinc-900/20 border border-zinc-800/60 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-emerald-500/40 hover:bg-zinc-900/40"
          >
            {/* The Blueprint Reveal Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none" 
                 style={{ 
                   backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', 
                   backgroundSize: '25px 25px' 
                 }} 
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] font-mono text-emerald-500 bg-emerald-500/5 border border-emerald-500/10 px-2 py-1 rounded uppercase tracking-widest font-bold">
                  {patent.field}
                </span>
                <span className="text-[9px] font-mono text-zinc-700 group-hover:text-emerald-500/30 transition-colors">
                  {patent.id}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors leading-tight min-h-[3.5rem]">
                {patent.title}
              </h4>

              <p className="text-zinc-500 text-xs leading-relaxed mb-8 group-hover:text-zinc-400 transition-colors italic flex-grow">
                "{patent.description}"
              </p>

              <div className="pt-6 border-t border-zinc-800/50 group-hover:border-emerald-500/10 flex justify-between items-end">
                <div>
                  <span className="block text-[8px] font-mono uppercase text-zinc-600 mb-1 tracking-[0.2em]">Arch Insight</span>
                  <span className="text-[11px] text-zinc-300 font-mono group-hover:text-white transition-colors">
                    {patent.technicalKey}
                  </span>
                </div>
                
                <div className="text-zinc-800 group-hover:text-emerald-500/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Subtle radial glow */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};