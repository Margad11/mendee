"use client";

import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { SiteCopy } from "./data";

type ContactProps = {
  copy: SiteCopy["contact"];
};

export function Contact({ copy }: ContactProps) {
  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-50 px-4 py-28 text-zinc-950 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow={copy.section.eyebrow}
            title={copy.section.title}
            description={copy.section.description}
          />
          <div className="mt-9 flex gap-3">
            {copy.socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-xl shadow-zinc-950/5 transition hover:-translate-y-1 hover:border-sky-300 hover:text-sky-600 hover:shadow-sky-400/20"
                >
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
        </div>

        <motion.form
          className="rounded-[2rem] border border-white bg-white/75 p-5 shadow-[0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:p-8"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
              {copy.form.nameLabel}
              <input
                className="h-14 rounded-2xl border border-zinc-200 bg-white/80 px-4 text-sm font-semibold normal-case tracking-normal text-zinc-950 outline-none transition focus:border-orange-400 focus:shadow-[0_0_0_4px_rgba(249,115,22,0.12)]"
                placeholder={copy.form.namePlaceholder}
              />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
              {copy.form.emailLabel}
              <input
                type="email"
                className="h-14 rounded-2xl border border-zinc-200 bg-white/80 px-4 text-sm font-semibold normal-case tracking-normal text-zinc-950 outline-none transition focus:border-sky-400 focus:shadow-[0_0_0_4px_rgba(14,165,233,0.12)]"
                placeholder={copy.form.emailPlaceholder}
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
            {copy.form.messageLabel}
            <textarea
              className="min-h-40 resize-none rounded-2xl border border-zinc-200 bg-white/80 px-4 py-4 text-sm font-semibold normal-case tracking-normal text-zinc-950 outline-none transition focus:border-orange-400 focus:shadow-[0_0_0_4px_rgba(249,115,22,0.12)]"
              placeholder={copy.form.messagePlaceholder}
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-2xl shadow-zinc-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/30 sm:w-auto"
          >
            {copy.form.submit} <Send size={17} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
