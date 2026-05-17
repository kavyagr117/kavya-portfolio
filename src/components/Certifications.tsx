'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certifications } from '@/lib/data';
import SectionHeading from './SectionHeading';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-70px' });

  return (
    <section id="certifications" className="py-28 max-w-6xl mx-auto px-5 sm:px-8">
      <div ref={ref}>
        <SectionHeading number="05" title="Certifications" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`
                group relative bg-surface rounded-xl p-6
                border ${cert.border}
                hover:border-opacity-40
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                overflow-hidden
              `}
            >
              {/* Gradient background */}
              <div
                aria-hidden
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-60 pointer-events-none`}
              />

              <div className="relative">
                <span className="text-3xl mb-4 block">{cert.icon}</span>
                <h3 className="font-syne font-bold text-slate-100 mb-1 group-hover:text-white transition-colors">
                  {cert.name}
                </h3>
                <p className="font-mono text-[0.72rem] text-slate-500 mb-3">
                  {cert.issuer}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
