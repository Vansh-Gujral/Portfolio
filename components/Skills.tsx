
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import AnimatedSection from './AnimatedSection';
import type { Skill } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-emerald-500">
    {children}
  </h2>
);

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-neutral-300">{skill.name}</span>
        <span className="text-sm font-medium text-green-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-green-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'AI & Data Science', 'Other Tools'];
  
  return (
    <AnimatedSection id="skills">
      <SectionTitle>My Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {categories.map(category => (
          <div key={category} className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-green-400">{category}</h3>
            {SKILLS_DATA.filter(skill => skill.category === category).map(skill => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;