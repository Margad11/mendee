"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import { SectionTitle } from "./SectionTitle";
import { SiteCopy } from "./data";

type AchievementsProps = {
  copy: SiteCopy["achievements"];
};

export function Achievements({ copy }: AchievementsProps) {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-white px-4 py-28 text-zinc-950 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-x-0 top-20 h-32 -skew-y-3 bg-[linear-gradient(90deg,transparent,rgba(249,115,22,0.14),rgba(14,165,233,0.13),transparent)] blur-xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={copy.section.eyebrow}
          title={copy.section.title}
          description={copy.section.description}
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {copy.items.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.article
                key={achievement.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white bg-white/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
                initial={{ opacity: 0, y: 35, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-zinc-950 text-white shadow-xl shadow-zinc-950/20">
                    <Icon size={22} />
                  </div>
                  <span className="rounded-full border border-zinc-200 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                    {copy.badge}
                  </span>
                </div>
                <p className="mt-9 text-5xl font-black tracking-tight text-zinc-950">
                  <AnimatedCounter value={achievement.value} suffix={achievement.suffix} />
                </p>
                <h3 className="mt-3 text-lg font-black uppercase">{achievement.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{achievement.detail}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="mt-8 overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 px-6 py-5 text-white shadow-2xl shadow-zinc-950/20"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex min-w-max animate-[marquee_18s_linear_infinite] gap-10 text-sm font-black uppercase tracking-[0.35em] text-white/70">
            {copy.marquee.map((item) => {
              const toneClass =
                "tone" in item && item.tone === "orange"
                  ? "text-orange-400"
                  : "tone" in item && item.tone === "sky"
                    ? "text-sky-300"
                    : "";

              return (
                <span key={item.label} className={toneClass}>
                  {item.label}
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
