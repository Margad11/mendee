"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { SiteCopy } from "./data";

type AboutProps = {
  brand: SiteCopy["brand"];
  copy: SiteCopy["about"];
};

export function About({ brand, copy }: AboutProps) {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-4 py-28 text-zinc-950 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      <div className="absolute left-0 top-16 h-96 w-2/3 -skew-y-6 bg-gradient-to-r from-zinc-100 via-white to-sky-50 blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, x: -40, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute -left-6 top-8 h-full w-full rounded-[2rem] border border-zinc-200 bg-zinc-100" />
          <div className="absolute -right-5 bottom-10 h-48 w-36 rounded-3xl border border-orange-200 bg-orange-500/10 blur-sm" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_30px_100px_rgba(15,23,42,0.18)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/ip.jpg"
                alt={copy.imageAlt}
                fill
                priority
                loading="eager"
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover object-[45%_50%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-white/10" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs font-black uppercase tracking-[0.32em] text-orange-200">{copy.profileEyebrow}</p>
              <p className="mt-2 text-3xl font-black uppercase leading-none">{brand.fullName}</p>
            </div>
          </div>
        </motion.div>

        <div>
          <SectionTitle
            eyebrow={copy.section.eyebrow}
            title={copy.section.title}
            description={copy.section.description}
          />

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {copy.storyCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  className="rounded-3xl border border-zinc-200 bg-white/70 p-5 shadow-xl shadow-zinc-950/5 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.58, delay: index * 0.08 }}
                >
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-zinc-950 text-white shadow-lg shadow-zinc-950/20">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-black uppercase">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{card.description}</p>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-10 rounded-[2rem] border border-zinc-200 bg-zinc-50/80 p-6 shadow-inner shadow-white">
            {copy.timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="grid grid-cols-[5rem_1fr] gap-5 border-b border-zinc-200 py-5 last:border-b-0"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
              >
                <p className="text-sm font-black text-orange-600">{item.year}</p>
                <p className="text-sm font-semibold text-zinc-700">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
