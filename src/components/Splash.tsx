import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-6xl font-bold tracking-tighter text-display"
        >
          KK<span className="text-primary font-light">.</span>
        </motion.div>
        
        <div className="w-48 h-[2px] bg-muted overflow-hidden rounded-full relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-primary"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>
        
        <motion.div 
          className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Initializing Portfolio System
        </motion.div>
      </div>
    </motion.div>
  );
}
