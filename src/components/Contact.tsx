'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { hero } from '@/lib/data';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const animate = isInView ? 'animate' : 'initial';

  return (
    <section
      id="contact"
      ref={ref}
      className="py-36 text-center relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(62,207,142,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-8">
        <motion.p
          {...fadeUp(0)}
          animate={animate === 'animate' ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          className="font-mono text-accent text-[0.75rem] tracking-[0.2em] uppercase mb-4"
        >
          07. Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-syne font-extrabold text-[clamp(2rem,6vw,3.4rem)] text-slate-50 leading-tight mb-6"
        >
          Let&apos;s Build Something Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="text-slate-500 leading-[1.8] mb-10 text-[0.96rem]"
        >
          I&apos;m actively seeking roles in QA engineering, test automation, Python development,
          and cybersecurity. If you have an opening — or just want to talk tech — my inbox is
          always open.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.26 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href={`mailto:${hero.email}`}
            className="btn-primary text-sm px-6 py-3"
          >
            <Mail size={15} />
            {hero.email}
          </a>
          <a
            href={`tel:${hero.phone}`}
            className="btn-ghost text-sm px-5 py-3"
          >
            <Phone size={14} />
            {hero.phone}
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.36 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-slate-500 hover:text-accent transition-colors"
          >
            <Github size={15} />
            GitHub
          </a>
          <span className="w-px h-4 bg-white/[0.08]" />
          <a
            href={hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-slate-500 hover:text-accent transition-colors"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
