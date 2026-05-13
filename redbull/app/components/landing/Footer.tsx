"use client";

import { Camera, MessageCircle, Radio, Send, Video } from "lucide-react";

const socialLinks = [
  { label: "Photo feed", icon: Camera },
  { label: "Video channel", icon: Video },
  { label: "Live stream", icon: Radio },
  { label: "Community", icon: MessageCircle },
];

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#050507] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-white text-sm font-black text-black">
              MXghvhgh
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em]">Apex Energy</p>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                Motocross campaign system
              </p>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href="#hero"
                  aria-label={link.label}
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-white/70 transition hover:border-sky-300/70 hover:text-sky-200"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <form className="grid gap-3 sm:grid-cols-[1fr_auto]" aria-label="Newsletter signup">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@domain.com"
            className="min-h-12 rounded-md border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-sky-300/70"
          />
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-red-500"
          >
            Subscribe <Send size={16} />
          </button>
        </form>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-white/40 sm:flex-row">
        <p>Copyright 2026 Apex Energy MX</p>
        <p>Inspired by extreme sports culture</p>
      </div>
    </footer>
  );
}
