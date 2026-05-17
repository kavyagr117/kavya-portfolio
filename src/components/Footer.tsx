import { Github, Linkedin } from 'lucide-react';
import { hero } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.045] py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[0.68rem] text-slate-700">
          Designed &amp; built by{' '}
          <span className="text-slate-500">Kavya G R</span>
          {' '}· {year}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-700 hover:text-accent transition-colors"
          >
            <Github size={15} />
          </a>
          <a
            href={hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-700 hover:text-accent transition-colors"
          >
            <Linkedin size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
