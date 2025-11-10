// Fix: Import `ComponentType` from 'react' to resolve the "Cannot find namespace 'React'" error.
import type { ComponentType } from 'react';

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'AI & Data Science' | 'Other Tools';
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}