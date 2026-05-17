'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react';
import { hero } from '@/lib/data';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center dot-grid overflow-hidden">
      {/* Subtle green glow — very restrained */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 20% 60%, rgba(62,207,142,0.045) 0%, transparent 70%)',
        }}
      />

      {/* Bottom fade to next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-bg to-transparent"
      />

      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 py-28 pt-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Greeting */}
          <motion.p
            variants={item}
            className="font-mono text-accent text-[0.82rem] tracking-[0.18em] uppercase mb-5"
          >
            {hero.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-syne font-extrabold text-[clamp(2.8rem,8vw,5.5rem)] text-slate-50 leading-[1.04] mb-4 tracking-tight"
          >
            {hero.name}
          </motion.h1>

          {/* Role strip */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-8"
          >
            {hero.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                <span className="font-syne font-semibold text-[clamp(1.1rem,3.2vw,1.75rem)] text-slate-400">
                  {role}
                </span>
                {i < hero.roles.length - 1 && (
                  <span className="text-accent/40 text-lg select-none">·</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={item}
            className="text-slate-500 text-[0.97rem] leading-[1.8] max-w-xl mb-10"
          >
            {hero.bio}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="/Kavya_GR_Resume.pdf"
              download
              className="btn-primary"
            >
              <Download size={14} />
              Download Resume
            </a>
            <a
              href={hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="absolute bottom-10 left-8 hidden sm:flex flex-col items-center gap-2 text-slate-600"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-slate-700" />
          <ArrowDown size={13} className="text-slate-600" />
        </motion.div>

        {/* Side email */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="absolute bottom-10 right-8 hidden lg:flex flex-col items-center gap-4"
        >
          <a
            href={`mailto:${hero.email}`}
            className="font-mono text-[0.65rem] text-slate-600 hover:text-accent transition-colors tracking-widest"
            style={{ writingMode: 'vertical-rl' }}
          >
            {hero.email}
          </a>
          <div className="w-px h-12 bg-gradient-to-b from-slate-700 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
