'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  /* ── Scroll-based backdrop ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-38% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Lock body scroll when menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-blur' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-syne font-extrabold text-lg text-slate-100 hover:text-accent transition-colors duration-200 tracking-tight"
          >
            KGR<span className="text-accent">.</span>
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }, i) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`font-mono text-[0.75rem] tracking-wider transition-colors duration-200 ${
                    isActive
                      ? 'text-accent'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <span className="text-accent mr-1 opacity-70">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  {label}
                </button>
              );
            })}
            <a
              href="/Kavya_GR_Resume.pdf"
              download
              className="flex items-center gap-1.5 font-mono text-[0.72rem] text-accent border border-accent/35 hover:border-accent/70 hover:bg-accent/5 px-4 py-2 rounded-md transition-all duration-200"
            >
              <Download size={12} />
              Resume
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-400 hover:text-slate-200 transition-colors p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      {/* ── Mobile slide-in menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center gap-9 md:hidden"
          >
            {navLinks.map(({ label, href }, i) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className="group flex flex-col items-center gap-1"
              >
                <span className="font-mono text-xs text-accent/60 tracking-widest">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <span className="font-syne text-2xl font-bold text-slate-200 group-hover:text-accent transition-colors">
                  {label}
                </span>
              </button>
            ))}
            <a
              href="/Kavya_GR_Resume.pdf"
              download
              className="mt-4 font-mono text-sm text-accent border border-accent/35 px-7 py-3 rounded-md"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
