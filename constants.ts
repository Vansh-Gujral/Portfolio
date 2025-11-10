
import type { Skill, Project, Achievement } from './types';
import { Award, Code, Cpu, Leaf } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS_DATA: Skill[] = [
  { name: 'HTML, CSS, JS', level: 90, category: 'Frontend' },
  { name: 'Streamlit', level: 85, category: 'Frontend' },
  { name: 'Unity (C#)', level: 70, category: 'Frontend' },
  { name: 'Django / DRF', level: 90, category: 'Backend' },
  { name: 'MySQL, PostgreSQL', level: 80, category: 'Backend' },
  { name: 'RESTful APIs', level: 95, category: 'Backend' },
  { name: 'Python', level: 98, category: 'AI & Data Science' },
  { name: 'Machine Learning', level: 95, category: 'AI & Data Science' },
  { name: 'Deep Learning', level: 85, category: 'AI & Data Science' },
  { name: 'NLP & Computer Vision', level: 80, category: 'AI & Data Science' },
  { name: 'Scikit-Learn, Pandas, NumPy', level: 95, category: 'AI & Data Science' },
  { name: 'Git/GitHub', level: 90, category: 'Other Tools' },
  { name: 'Web Scraping', level: 85, category: 'Other Tools' },
  { name: 'Automation Scripts', level: 88, category: 'Other Tools' },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Solar Panel Efficiency & Recommendation System',
    description: 'Predicts solar efficiency, recommends panels, and provides subsidy info.',
    longDescription: 'This AI-powered system analyzes geographical and weather data to predict the efficiency of solar panels for a given location. It features a recommendation engine that suggests optimal panels based on user-defined budget and energy needs, and also provides up-to-date information on available government subsidies to encourage renewable energy adoption.',
    tags: ['AI', 'Prediction', 'Recommendation System', 'Renewable Energy'],
    imageUrl: '/images/solar.jpg',
    projectUrl: 'https://solar-eco.onrender.com/',
  },
  {
    title: 'Career Pathway System',
    description: 'AI-driven career guidance platform for tech students.',
    longDescription: 'A comprehensive career guidance platform that leverages AI to analyze a student\'s profile, interests, and academic performance. It recommends suitable tech career paths, outlines required skills, and even suggests personalized project ideas to build a strong portfolio.',
    tags: ['AI', 'Career Guidance', 'Personalization', 'EdTech'],
    imageUrl: '/images/career.jpg',
    projectUrl: '#',
  },
  {
    title: 'Crop Recommendation System',
    description: 'ML tool suggesting optimal crops based on soil and weather data.',
    longDescription: 'Built with Streamlit, this machine learning tool assists farmers in making informed decisions. By inputting soil nutrient data (like Nitrogen, Phosphorus, Potassium) and local weather conditions, the system suggests the most suitable crops for cultivation, aiming to maximize yield and sustainability.',
    tags: ['Machine Learning', 'Streamlit', 'AgriTech', 'Data Science'],
    imageUrl: '/images/crop.jpg',
    projectUrl: 'https://crop-recommendation-v.streamlit.app/',
  },
  {
    title: 'AI-Based River Pollution Detection',
    description: 'Unsupervised learning for real-time water quality monitoring.',
    longDescription: 'This project utilizes unsupervised machine learning algorithms to analyze sensor data from rivers and water bodies. It is designed to detect pollution events in real-time by identifying and clustering anomalies in water quality parameters, enabling rapid response to environmental hazards.',
    tags: ['Unsupervised Learning', 'AI', 'Environmental Tech', 'Anomaly Detection'],
    imageUrl: '/images/river.jpg',
    projectUrl: 'https://ganga-pollution-detection.streamlit.app/',
  },
  {
    title: 'AI System Performance Analyzer',
    description: 'OS monitoring tool visualizing CPU, memory, and processes.',
    longDescription: 'A Streamlit-based dashboard for real-time operating system monitoring. It provides intuitive visualizations of CPU and memory utilization, and includes Gantt charts to illustrate process scheduling, helping developers and system administrators analyze and optimize system performance.',
    tags: ['OS Monitoring', 'Streamlit', 'Data Visualization', 'System Tools'],
    imageUrl: '/images/system.jpg',
    projectUrl: 'https://github.com/Vansh-Gujral/AI-Powered-Directory-Management-System/blob/main/app4.py',
  },
  {
    title: 'AI Directory Management System',
    description: 'Intelligent file manager with NLP search and AI summaries.',
    longDescription: 'This tool redefines file management by integrating artificial intelligence. It features an NLP-based search engine that understands natural language queries to find files, and an AI-powered summarizer that can generate concise summaries of text documents on the fly.',
    tags: ['NLP', 'AI', 'File Management', 'Productivity'],
    imageUrl: '/images/dir.png',
    projectUrl: 'https://github.com/Vansh-Gujral/AI-Powered-Directory-Management-System',
  },
 
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: 'InnoTek Innovation Challenge',
    description: 'Participated and showcased innovative solutions, presenting AI and sustainability-based projects.',
    icon: Award,
  },
  {
    title: 'NGO Tech Initiatives',
    description: 'Contributed to tech initiatives for education, women empowerment, and environmental awareness.',
    icon: Leaf,
  },
  {
    title: 'ML & Automation Prototypes',
    description: 'Successfully deployed multiple machine learning and automation prototypes from conception to production.',
    icon: Code,
  },
  {
    title: 'Technical Problem-Solving',
    description: 'Recognized for consistent innovation and technical problem-solving in complex ML and AI domains.',
    icon: Cpu,
  },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/Vansh-Gujral',
  linkedin: 'https://www.linkedin.com/in/vansh-gujral/',
  email: 'mailto:vansh.gujral175@gmail.com',
};