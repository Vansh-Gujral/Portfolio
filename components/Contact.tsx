import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "f4a42dcb-f143-4667-b727-c134f6ed0661");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setIsSuccess(true);
        setIsSubmitting(false);
        (e.target as HTMLFormElement).reset(); 
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (err) {
      console.error("Transmission failed", err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">Availability</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Start a <span className="text-emerald-500">Conversation.</span></h3>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Currently open to high-impact research collaborations or Python backend engineering roles.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-zinc-900/50 backdrop-blur-2xl border border-zinc-800 p-8 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-2">Your Name</label>
              <input name="name" id="name" type="text" required placeholder="John Doe" className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-7 py-5 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all font-medium" />
            </div>
            <div className="space-y-3">
              <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-2">Email Address</label>
              <input name="email" id="email" type="email" required placeholder="john@example.com" className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-7 py-5 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all font-medium" />
            </div>
          </div>
          
          <div className="space-y-3">
            <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-2">Nature of Query</label>
            <input name="subject" id="subject" type="text" placeholder="Collaboration Inquiry" className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-7 py-5 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all font-medium" />
          </div>

          <div className="space-y-3">
            <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-2">Brief Message</label>
            <textarea name="message" id="message" rows={5} required placeholder="Tell me about the system we are building..." className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-7 py-5 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none font-medium leading-relaxed" />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="w-full py-6 bg-emerald-500 text-black font-bold rounded-2xl shadow-[0_15px_35px_rgba(16,185,129,0.2)] hover:bg-emerald-400 transition-all flex items-center justify-center gap-4 text-xs tracking-[0.2em] disabled:opacity-50"
          >
            {isSubmitting ? "TRANSMITTING..." : isSuccess ? "DATA RECEIVED" : "DISPATCH INQUIRY"}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
               {isSuccess ? (
                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
               ) : (
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
               )}
            </svg>
          </motion.button>
        </form>

        <div className="mt-16 pt-10 border-t border-zinc-800/50 flex flex-wrap justify-center gap-12">
          <a href="https://github.com/Vansh-Gujral" target="_blank" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center group-hover:border-emerald-500/50 transition-all">
              <span className="font-mono text-[10px] text-zinc-400 group-hover:text-emerald-500">GH</span>
            </div>
            <span className="text-zinc-500 text-xs font-bold tracking-widest group-hover:text-white transition-colors uppercase">Github</span>
          </a>
          <a href="https://www.linkedin.com/in/vansh-gujral/" target="_blank" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center group-hover:border-emerald-500/50 transition-all">
              <span className="font-mono text-[10px] text-zinc-400 group-hover:text-emerald-500">LN</span>
            </div>
            <span className="text-zinc-500 text-xs font-bold tracking-widest group-hover:text-white transition-colors uppercase">Linkedin</span>
          </a>
          <a 
            href="Vansh Gujral CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center group-hover:border-emerald-500/50 transition-all">
              <span className="font-mono text-[10px] text-zinc-400 group-hover:text-emerald-500">CV</span>
            </div>
            <span className="text-zinc-500 text-xs font-bold tracking-widest group-hover:text-white transition-colors uppercase">
              Resume
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};