
import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS_DATA } from '../constants';
import AnimatedSection from './AnimatedSection';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-emerald-500">
    {children}
  </h2>
);

const Achievements: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <AnimatedSection id="achievements">
      <SectionTitle>Achievements</SectionTitle>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 -ml-px w-0.5 h-full bg-green-700/50" aria-hidden="true"></div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {ACHIEVEMENTS_DATA.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              className="relative flex items-start"
            >
              {/* Icon and circle */}
              <div className="absolute left-4 md:left-1/2 -ml-4 w-8 h-8 bg-gray-900 rounded-full border-4 border-green-500 flex items-center justify-center">
                <achievement.icon className="w-4 h-4 text-green-500" />
              </div>

              {/* Content */}
              <div className={`w-full pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} md:w-1/2`}>
                 <div className={`inline-block p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <h3 className="text-xl font-bold mb-1 text-black">{achievement.title}</h3>
                    <p className="text-neutral-400">{achievement.description}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Achievements;
