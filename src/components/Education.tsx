import { motion } from 'motion/react';
import { portfolioData } from '../lib/data';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Academic Foundation</h2>
        <div className="h-1 w-20 bg-primary/20 rounded-full mb-6" />
      </div>

      <div className="space-y-12">
        {portfolioData.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass border-muted/50 overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                      {edu.institution}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm font-medium">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {edu.location}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        Class of {edu.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-primary/5 text-primary">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-muted/20 border border-muted/50">
                    <p className="text-xl font-medium text-foreground tracking-tight">
                      {edu.degree}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-muted/20">
                    {portfolioData.extra.map((extra, eIdx) => (
                      <div key={eIdx} className="text-xs font-mono text-muted-foreground/70 uppercase tracking-widest">
                        • {extra}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
