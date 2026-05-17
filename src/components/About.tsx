'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { about } from '@/lib/data';
import SectionHeading from './SectionHeading';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="py-28 max-w-6xl mx-auto px-5 sm:px-8">
      <SectionHeading number="01" title="About Me" />

      <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">
        {/* ── Text content ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-500 leading-[1.82] text-[0.96rem]">
              {p}
            </p>
          ))}

          {/* Skill chips */}
          <div className="flex flex-wrap gap-2 pt-3">
            {about.highlights.map((tag) => (
              <span key={tag} className="skill-pill">
                {tag}
              </span>
            ))}
          </div>

          {/* Education block */}
          <div className="flex items-start gap-3 pt-4 border-t border-white/[0.055]">
            <GraduationCap size={16} className="text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-slate-300 text-sm font-medium">
                {about.education.institution}
              </p>
              <p className="text-slate-500 text-xs mt-0.5">
                {about.education.degree}
              </p>
              <p className="font-mono text-xs text-slate-600 mt-0.5">
                {about.education.period} &nbsp;·&nbsp;{' '}
                <span className="text-accent">{about.education.cgpa} CGPA</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Terminal card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="terminal"
        >
          {/* Window chrome */}
          <div className="terminal-header">
            <span className="terminal-dot bg-[#ff5f57]" />
            <span className="terminal-dot bg-[#febc2e]" />
            <span className="terminal-dot bg-[#28c840]" />
            <span className="font-mono text-[0.65rem] text-slate-600 ml-2 select-none">
              kavya@portfolio — zsh
            </span>
          </div>

          {/* Content */}
          <div className="p-5 text-[0.8rem] space-y-3">
            <div className="text-slate-500">
              <span className="text-accent">❯</span>{' '}
              <span className="text-slate-400">cat profile.json</span>
            </div>

            <div className="pl-2 leading-relaxed space-y-0.5">
              <div className="text-slate-600">{'{'}</div>
              <div className="pl-4">
                <span className="text-blue-400/80">&quot;name&quot;</span>
                <span className="text-slate-600">: </span>
                <span className="text-green-400/80">&quot;Kavya G R&quot;</span>
                <span className="text-slate-600">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400/80">&quot;role&quot;</span>
                <span className="text-slate-600">: </span>
                <span className="text-green-400/80">&quot;QA Engineer&quot;</span>
                <span className="text-slate-600">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400/80">&quot;focus&quot;</span>
                <span className="text-slate-600">: </span>
                <span className="text-green-400/80">&quot;Testing · Python · Cyber&quot;</span>
                <span className="text-slate-600">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400/80">&quot;cgpa&quot;</span>
                <span className="text-slate-600">: </span>
                <span className="text-accent">9.2</span>
                <span className="text-slate-600">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400/80">&quot;location&quot;</span>
                <span className="text-slate-600">: </span>
                <span className="text-green-400/80">&quot;Bengaluru, India&quot;</span>
                <span className="text-slate-600">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400/80">&quot;status&quot;</span>
                <span className="text-slate-600">: </span>
                <span className="text-accent">&quot;Open to opportunities&quot;</span>
              </div>
              <div className="text-slate-600">{'}'}</div>
            </div>

            <div className="flex items-center gap-1.5 text-slate-500">
              <span className="text-accent">❯</span>{' '}
              <span className="text-slate-400">_</span>
              <span className="inline-block w-[7px] h-4 bg-accent/55 animate-cursor-blink" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
