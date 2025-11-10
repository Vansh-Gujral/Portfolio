
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer"
    >
      <motion.div
        className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        style={{
          left: theme === 'light' ? '4px' : 'auto',
          right: theme === 'dark' ? '4px' : 'auto',
        }}
      >
        {theme === 'light' ? <Sun className="text-yellow-500" size={16} /> : <Moon className="text-indigo-400" size={16} />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;