import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowDown, Mail, Linkedin, FileText } from 'lucide-react';
import { portfolioData } from '../lib/data';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl w-full text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full glass border border-primary/20"
        >
          <span className="text-xs font-mono tracking-widest text-primary uppercase">
            Available for Opportunities
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
          <span className="text-gradient block">{portfolioData.basics.name}</span>
          <span className="text-3xl md:text-5xl font-light text-muted-foreground mt-4 block tracking-normal">
            {portfolioData.basics.title}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          {portfolioData.basics.summary}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            size="lg" 
            onClick={() => scrollTo('skills')}
            className="rounded-full px-8 h-12 bg-primary text-primary-foreground hover:scale-105 transition-transform"
          >
            View Experience
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-full px-8 h-12 glass border-muted/50 hover:bg-muted/10"
            onClick={() => window.print()}
          >
            <FileText className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('education')}
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
