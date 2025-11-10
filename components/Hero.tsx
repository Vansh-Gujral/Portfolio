
import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const roles = ['an ML Engineer', 'a Python Developer', 'a Backend Developer'];
const typingSpeed = 120;
const deletingSpeed = 70;
const pauseDuration = 1500;

const TypingAnimation: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingTimeout, setTypingTimeout] = useState(typingSpeed);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      let newText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(newText);
      
      if (isDeleting) {
        setTypingTimeout(deletingSpeed);
      }

      if (!isDeleting && newText === fullText) {
        setTypingTimeout(pauseDuration);
        setIsDeleting(true);
      } else if (isDeleting && newText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingTimeout(typingSpeed);
      }
    };

    let ticker = setTimeout(tick, typingTimeout);

    return () => clearTimeout(ticker);
  }, [text, typingTimeout, isDeleting, loopNum]);

  return <span className="border-r-2 border-current animate-pulse">{text}</span>;
};


const Hero: React.FC = () => {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen mx-auto">
       <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-[#1b1a2ea8]" />}>
            <Spline scene="https://prod.spline.design/UipJdvFMLfxAuxwr/scene.splinecode" />
        </Suspense>
      </div>

      <div className="absolute z-10 top-1/2 left-0 right-0 -translate-y-1/2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center md:justify-start">
            <div className="max-w-2xl text-center md:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-extrabold mb-4 text-black"
              >
                Hi, I'm <span className="text-green-400"><TypingAnimation /></span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-black"
              >
                My name is Vansh Gujral. A passionate ML Engineer  & Backend Developer building impactful tech solutions that blend intelligence with real-world utility.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8"
              >
                <a
                  href="/resume.pdf" 
                  download
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </motion.div>
            </div>
        </div>
      </div>
      
       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about' onClick={scrollToAbout} className="pointer-events-auto">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-neutral-300 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-neutral-300 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;