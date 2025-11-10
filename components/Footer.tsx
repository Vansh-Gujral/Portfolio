
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 mt-24">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Vansh Gujral. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
