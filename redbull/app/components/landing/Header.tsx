"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { navLinks } from "./data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-white/10 bg-black/35 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5"
        aria-label="Primary navigation"
      >
        <a href="#hero" className="flex items-center gap-3" aria-label="Apex MX home">
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-lg border border-white/15 bg-black shadow-lg shadow-red-500/20">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.65),transparent_34%),radial-gradient(circle_at_75%_78%,rgba(239,68,68,0.8),transparent_38%)]" />
            <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/20" />
            <span className="relative text-[13px] font-black italic tracking-[-0.08em] text-white drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">
              mednee
            </span>
          </span>
          <span className="leading-none">
            <span className="block text-sm font-black uppercase tracking-[0.28em] text-white">
              red
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.35em] text-sky-300">
              bull
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-md px-4 py-2 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              {link.label}
              <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-red-500 to-sky-300 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <a
          href="#footer"

          className="hidden rounded-md border border-red-400/50 bg-red-500/10 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-red-500/10 transition hover:border-red-300 hover:bg-red-500/20 md:inline-flex"
        >
          Login 
        </a>

        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white md:hidden"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <motion.div
        className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-lg border border-white/10 bg-black/80 backdrop-blur-xl md:hidden"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      >
        <div className="grid gap-1 p-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white/75 hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
