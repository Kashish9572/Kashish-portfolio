import { Mail, Linkedin, Globe, Copyright } from 'lucide-react';
import { portfolioData } from '../lib/data';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-muted/50 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-3xl font-black tracking-tighter mb-4 text-gradient">
            KK<span className="text-primary font-light">.</span>
          </div>
          <p className="text-sm text-muted-foreground font-light max-w-xs text-center md:text-left leading-relaxed">
            Building the future of digital experiences with precision and passion.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-4">
            <a 
              href={`mailto:${portfolioData.basics.email}`}
              className="p-3 rounded-full glass border-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href={portfolioData.basics.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass border-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
            <span className="flex items-center gap-1">
              <MapPinText className="h-3 w-3" /> {portfolioData.basics.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <span className="flex items-center gap-1">
              <Copyright className="h-3 w-3" /> {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MapPinText({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
