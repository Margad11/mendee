"use client";

import { Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { SiteCopy } from "./data";

type HighlightsProps = {
  copy: SiteCopy["highlights"];
};

export function Highlights({ copy }: HighlightsProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      id="highlights"
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-white px-4 py-28 text-zinc-950 sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionTitle
            eyebrow={copy.section.eyebrow}
            title={copy.section.title}
            description={copy.section.description}
          />

          <motion.div
            style={{ y }}
            className="relative overflow-hidden rounded-[2.4rem] border border-white bg-zinc-950 p-3 shadow-[0_35px_120px_rgba(15,23,42,0.25)]"
          >
            <div className="relative aspect-video overflow-hidden rounded-[1.8rem] bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.45),transparent_28%),linear-gradient(135deg,#111827,#020617)]">
              <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,transparent_42%,rgba(255,255,255,0.16)_45%,transparent_48%,transparent_100%)]" />
              <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="absolute left-8 top-8 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white backdrop-blur">
                {copy.reelLabel}
              </div>
              <button
                type="button"
                className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-zinc-950 shadow-2xl shadow-orange-500/30 transition hover:scale-105"
                aria-label={copy.playAria}
              >
                <Play size={30} fill="currentColor" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 grid gap-3 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent p-6 sm:grid-cols-3">
                {copy.metrics.map((metric) => {
                  const Icon = metric.icon;

                  return (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur">
                      <Icon size={18} className="text-orange-300" />
                      <p className="mt-3 text-2xl font-black">{metric.value}</p>
                      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-white/55">{metric.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
