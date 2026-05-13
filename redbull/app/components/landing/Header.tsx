"use client";

import { Languages, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Language, SiteCopy, languageOptions } from "./data";

type HeaderProps = {
  copy: SiteCopy;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

type LanguageToggleProps = {
  language: Language;
  label: string;
  onLanguageChange: (language: Language) => void;
};

function LanguageToggle({ language, label, onLanguageChange }: LanguageToggleProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex h-11 items-center gap-1 rounded-full border border-zinc-200 bg-white/80 px-1 shadow-lg shadow-zinc-950/5"
    >
      <Languages size={16} className="ml-2 hidden text-zinc-500 sm:block" />
      {languageOptions.map((option) => {
        const isActive = language === option.code;

        return (
          <button
            key={option.code}
            type="button"
            aria-label={option.ariaLabel}
            aria-pressed={isActive}
            onClick={() => onLanguageChange(option.code)}
            className={`h-9 rounded-full px-3 text-xs font-black uppercase tracking-[0.12em] transition ${
              isActive ? "bg-zinc-950 text-white shadow-md shadow-zinc-950/15" : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950"
            }`}
          >
            {option.shortLabel}
          </button>
        );
      })}
    </div>
  );
}

export function Header({ copy, language, onLanguageChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/65 px-4 py-3 shadow-2xl shadow-zinc-950/10 backdrop-blur-2xl"
        aria-label={copy.header.navAria}
      >
        <a href="#hero" className="flex items-center gap-3" aria-label={copy.brand.homeLabel}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-zinc-950 text-xs font-black text-white shadow-xl shadow-zinc-950/20">
            {copy.brand.initials}
          </span>
          <span className="leading-none">
            <span className="block text-sm font-black uppercase tracking-[0.22em] text-zinc-950">{copy.brand.firstName}</span>
            <span className="block text-[10px] font-black uppercase tracking-[0.34em] text-orange-600">{copy.brand.lastName}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {copy.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-zinc-500 transition hover:bg-zinc-950 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-orange-600 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-zinc-950 lg:inline-flex"
          >
            {copy.header.partnerCta}
          </a>

          <LanguageToggle language={language} label={copy.header.languageLabel} onLanguageChange={onLanguageChange} />

          <button
            type="button"
            aria-label={isOpen ? copy.header.closeMenu : copy.header.openMenu}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-950 md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="mx-auto mt-2 grid max-w-7xl gap-1 rounded-[1.8rem] border border-white/70 bg-white/90 p-3 shadow-2xl shadow-zinc-950/10 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
          >
            {copy.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-4 text-sm font-black uppercase tracking-[0.2em] text-zinc-700 hover:bg-zinc-950 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
