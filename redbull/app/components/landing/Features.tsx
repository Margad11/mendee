"use client";

import { motion } from "framer-motion";
import { features } from "./data";

export function Features() {
  return (
    <section id="features" className="relative bg-[#050507] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.42em] text-red-400">
            Performance system
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">
            Built for high-impact rhythm.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                className={`group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br ${feature.tone} p-6 shadow-2xl shadow-black/30 backdrop-blur-xl`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="grid h-12 w-12 place-items-center rounded-md border border-white/10 bg-black/35 text-sky-200">
                  <Icon size={22} />
                </div>
                <h3 className="mt-7 text-xl font-black uppercase">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
