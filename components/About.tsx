
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-emerald-500">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src="https://picsum.photos/seed/vansh/400/400"
            alt="Vansh Gujral"
            className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 mx-auto object-cover border-4 border-green-500"
          />
        </div>
        <div className="md:w-2/3 text-lg text-black space-y-4 text-center md:text-left">
          <p>
            I’m a passionate ML Engineer, Backend Developer, and Innovator dedicated to building impactful tech solutions that blend artificial intelligence with real-world utility.
          </p>
          <p>
            As an active member of NGOs like <strong className="text-green-400">Chahat Charitable Trust</strong>, I am deeply involved in rural development, education for girls, health, sanitation, and capacity building. I strongly advocate for applying <strong className="text-green-400">        AI for social good</strong>, promoting sustainable technology, and empowering rural communities.
          </p>
          <p>
            I'm always exploring new ways to merge innovation, code, and compassion to create a better future.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;