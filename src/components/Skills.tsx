'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/lib/data';
import SectionHeading from './SectionHeading';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-70px' });

  return (
    <section id="skills" ref={ref} className="py-28 max-w-6xl mx-auto px-5 sm:px-8">
      <SectionHeading number="03" title="Technical Skills" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((category, i) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 22 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="card p-5"
          >
            <h3 className="font-mono text-[0.7rem] text-accent tracking-[0.15em] uppercase mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
