'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { experiences } from '@/lib/data';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" className="py-28 bg-surface/20">
      <div ref={ref} className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading number="02" title="Experience" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row"
        >
          {/* ── Company tab rail ── */}
          <div
            role="tablist"
            aria-label="Companies"
            className="
              flex md:flex-col
              overflow-x-auto md:overflow-visible
              md:w-[168px] shrink-0
              border-b md:border-b-0 md:border-l
              border-white/[0.07]
              mb-8 md:mb-0
            "
          >
            {experiences.map((exp, i) => {
              const isActive = activeIdx === i;
              return (
                <button
                  key={exp.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIdx(i)}
                  className={`
                    relative text-left font-mono text-[0.78rem]
                    px-4 py-3.5 whitespace-nowrap md:whitespace-normal
                    transition-colors duration-200
                    ${
                      isActive
                        ? 'text-accent bg-accent/[0.06]'
                        : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.025]'
                    }
                  `}
                >
                  {/* Active indicator — slides with layoutId */}
                  {isActive && (
                    <motion.span
                      layoutId="exp-indicator"
                      className="
                        absolute
                        bottom-0 md:bottom-auto
                        left-0
                        md:top-0 md:left-0
                        right-0 md:right-auto
                        h-[2px] md:h-full
                        w-full md:w-[2px]
                        bg-accent
                      "
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  {exp.shortName}
                </button>
              );
            })}
          </div>

          {/* ── Tab content ── */}
          <div className="md:pl-10 flex-1 min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-syne font-bold text-xl text-slate-100">
                    {experiences[activeIdx].role}{' '}
                    <span className="text-accent">
                      @ {experiences[activeIdx].company}
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2.5">
                    <span className="flex items-center gap-1.5 font-mono text-[0.72rem] text-slate-600">
                      <Clock size={11} />
                      {experiences[activeIdx].period}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[0.72rem] text-slate-600">
                      <MapPin size={11} />
                      {experiences[activeIdx].location}
                    </span>
                    <span className="font-mono text-[0.72rem] text-accent/60 border border-accent/20 px-2 py-0.5 rounded">
                      {experiences[activeIdx].type}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-4">
                  {experiences[activeIdx].points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-slate-500 leading-[1.78] text-[0.94rem]"
                    >
                      <span className="text-accent mt-[5px] shrink-0 text-xs">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
