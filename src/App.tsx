/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import Splash from './components/Splash';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Default to dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-primary/20 selection:text-primary">
      <AnimatePresence>
        {loading && (
          <Splash onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <AnimatedBackground />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <main className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        
        <div className="relative z-10">
          <Skills />
          <div className="max-w-6xl mx-auto px-6 h-px bg-gradient-to-r from-transparent via-muted/30 to-transparent" />
          <Education />
        </div>

        <Footer />
      </main>

      {/* Scroll to Top helper if needed, or Navigation Overlay */}
      {!loading && (
        <motion.nav 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
        >
          <div className="flex items-center gap-1 p-1 rounded-full glass border border-muted/50 backdrop-blur-xl">
             <NavButton label="Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
             <NavButton label="Skills" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} />
             <NavButton label="Academic" onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })} />
          </div>
        </motion.nav>
      )}
    </div>
  );
}

function NavButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/30"
    >
      {label}
    </button>
  );
}

