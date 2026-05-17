'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { projects } from '@/lib/data';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-70px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-28 bg-surface/20"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading number="04" title="Projects" />

        <div className="space-y-7">
          {projects.map((project, i) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.58, delay: i * 0.12 }}
              className="group relative bg-surface border border-white/[0.055] rounded-xl overflow-hidden
                         hover:border-white/[0.11] transition-all duration-300
                         hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.55)]"
            >
              {/* Accent corner — top-right bracket */}
              <div aria-hidden className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-xl pointer-events-none">
                <div className="absolute top-0 right-0 h-16 w-px bg-gradient-to-b from-accent/30 to-transparent" />
                <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-accent/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  {/* Left */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[0.68rem] text-accent/50 tracking-widest">
                        {project.number}
                      </span>
                      <span className="font-mono text-[0.68rem] text-slate-600">
                        / {project.date}
                      </span>
                    </div>

                    <h3 className="font-syne text-xl font-bold text-slate-100 mb-1
                                   group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[0.71rem] text-slate-600 mb-4">
                      {project.tagline}
                    </p>

                    <p className="text-slate-500 text-[0.93rem] leading-[1.8] mb-5 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                      {project.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-slate-500 text-xs leading-relaxed"
                        >
                          <ChevronRight
                            size={12}
                            className="text-accent shrink-0 mt-[3px]"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — action icons */}
                  <div className="flex flex-col gap-3 shrink-0 pt-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View source on GitHub"
                      className="text-slate-500 hover:text-accent transition-colors duration-200"
                    >
                      <Github size={18} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live demo"
                        className="text-slate-500 hover:text-accent transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/kavyagr117"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[0.78rem] text-slate-500 hover:text-accent transition-colors"
          >
            <Github size={14} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
