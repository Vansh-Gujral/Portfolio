
import React, { Suspense, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlobCursor from './components/BlobCursor';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const App: React.FC = () => {
  useEffect(() => {
    const removeSplineLogo = (spline: Element) => {
      // The logo is inside a shadow root, so we need to access it this way
      if (spline && 'shadowRoot' in spline && spline.shadowRoot) {
        const logo = spline.shadowRoot.querySelector('#logo');
        if (logo) {
          logo.remove();
        }
      }
    };
    
    // This observer will watch for spline-viewer elements to be added to the DOM
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'SPLINE-VIEWER') {
                removeSplineLogo(element);
              }
              // Also check for any spline-viewers nested inside the added node
              element.querySelectorAll('spline-viewer').forEach(removeSplineLogo);
            }
          });
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // A one-time check for any spline-viewers that might have loaded before the observer was set up
    document.querySelectorAll('spline-viewer').forEach(removeSplineLogo);

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      <BlobCursor
        fillColor="#22c55e"
        trailCount={3}
        sizes={[30, 60, 40]}
        innerSizes={[10, 15, 12]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0)"
        shadowBlur={0}
        shadowOffsetX={0}
        shadowOffsetY={0}
        filterStdDeviation={20}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={999}
      />
      <div className="flex flex-col min-h-screen font-sans text-neutral-200 bg-[#0e0e1a]">
        <Header />
        <main className="flex-grow">
          <Hero />
          
          {/* Wrapper for the scrollable Spline experience */}
          <div className="relative">
            {/* The Spline canvas is sticky and covers the background of this section */}
            <div className="absolute inset-0">
              <div className="sticky top-0 h-screen w-full overflow-hidden">
                <div className="absolute inset-0 transform scale-[1.4] md:scale-[1.2]">
                  <Suspense fallback={<div className="w-full h-full bg-[#0e0e1a]" />}>
                    <Spline scene="https://prod.spline.design/B5w7P6Z0A4AxxT20/scene.splinecode" />
                  </Suspense>
                </div>
              </div>
            </div>

            {/* The actual content, which defines the scroll height */}
            <div className="relative z-10">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 py-24">
                <About />
                <Skills />
                <Projects />
                <Achievements />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;