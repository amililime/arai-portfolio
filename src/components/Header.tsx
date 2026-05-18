'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { name: 'Commercial', path: '/commercial' },
  { name: 'Personal Work', path: '/personal-work' },
  { name: 'Retouching', path: '/retouching' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-zinc-100">
      <div className="w-full px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-[11px] font-bold uppercase tracking-[0.3em] text-black hover:opacity-60 transition-opacity shrink-0"
        >
          Araí Moleri
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-[10px] uppercase tracking-[0.25em] text-black hover:opacity-50 transition-opacity"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
        >
          <span className={`block h-px w-full bg-black transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block h-px w-full bg-black transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-full bg-black transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 pb-6 gap-5 bg-white/95 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className="text-[10px] uppercase tracking-[0.25em] text-black hover:opacity-50 transition-opacity"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
