'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '@/lib/data';
import SectionHeading from './SectionHeading';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-70px' });

  return (
    <section className="py-28 bg-surface/20">
      <div ref={ref} className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading number="06" title="Achievements" />

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="card p-6 flex gap-5"
            >
              <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <h3 className="font-syne font-bold text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-[1.75]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
