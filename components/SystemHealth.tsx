import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const SystemHealth: React.FC = () => {
  const [metrics, setMetrics] = useState({
    latency: 24,
    uptime: 99.99,
    agents: 12,
    load: 14
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        latency: Math.floor(Math.random() * (28 - 22 + 1) + 22),
        load: Math.floor(Math.random() * (18 - 12 + 1) + 12),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
        {/* Background Decorative Signal */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
            <div className="flex gap-1 items-end h-12">
                {[1,2,3,4,5,6].map(i => (
                    <motion.div 
                        key={i}
                        animate={{ height: [10, 30, 10] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        className="w-1 bg-emerald-500 rounded-full"
                    />
                ))}
            </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
          <div>
            <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-3">Neural Latency</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">{metrics.latency}</span>
              <span className="text-emerald-500 font-mono text-xs font-bold uppercase tracking-widest">ms</span>
            </div>
            <div className="mt-4 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                <motion.div 
                    animate={{ width: `${(metrics.latency / 40) * 100}%` }}
                    className="h-full bg-emerald-500/50" 
                />
            </div>
          </div>

          <div>
            <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-3">System Uptime</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">{metrics.uptime}</span>
              <span className="text-emerald-500 font-mono text-xs font-bold uppercase tracking-widest">%</span>
            </div>
            <div className="mt-4 flex gap-1">
                {[1,2,3,4,5].map(i => <div key={i} className="h-1 flex-1 bg-emerald-500 rounded-full opacity-40" />)}
            </div>
          </div>

          <div>
            <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-3">Active Agents</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">{metrics.agents}</span>
              <span className="text-emerald-500 font-mono text-xs font-bold uppercase tracking-widest">Nodes</span>
            </div>
            <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-zinc-600 uppercase">Operational</span>
            </div>
          </div>

          <div>
            <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-3">Compute Load</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">{metrics.load}</span>
              <span className="text-emerald-500 font-mono text-xs font-bold uppercase tracking-widest">%</span>
            </div>
            <div className="mt-4 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                <motion.div 
                    animate={{ width: `${metrics.load}%` }}
                    className="h-full bg-emerald-500" 
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};