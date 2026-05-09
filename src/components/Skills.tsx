import { motion } from 'motion/react';
import { portfolioData } from '../lib/data';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Code2, Globe, Cpu } from 'lucide-react';

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Core Competencies</h2>
        <div className="h-1 w-20 bg-primary/20 rounded-full mb-6" />
        <p className="text-muted-foreground max-w-lg">
          Specialized technical toolkit developed through rigorous academic projects and focused learning.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {portfolioData.skills.map((skillGroup, idx) => (
          <motion.div key={idx} variants={item}>
            <Card className="h-full glass border-muted/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-8">
                <div className="mb-6 p-3 w-fit rounded-lg bg-primary/5 text-primary">
                  {idx === 0 ? <Cpu className="h-6 w-6" /> : <Globe className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-bold mb-6 tracking-tight">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <Badge 
                      key={sIdx} 
                      variant="secondary" 
                      className="px-3 py-1 bg-muted/30 text-foreground font-mono text-[10px] hover:bg-primary/10 transition-colors uppercase"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        
        <motion.div variants={item}>
          <Card className="h-full glass border-muted/50 hover:border-primary/30 transition-colors bg-primary/5">
            <CardContent className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="mb-6 p-3 w-fit rounded-lg bg-primary/5 text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">Development Philosophy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Committed to building scalable, user-centric applications using robust data structures and efficient algorithms.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-muted/50">
                <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest">
                  Ready to deploy
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
