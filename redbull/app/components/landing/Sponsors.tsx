"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { SiteCopy } from "./data";

type SponsorsProps = {
  copy: SiteCopy["sponsors"];
};

export function Sponsors({ copy }: SponsorsProps) {
  const repeatedSponsors = [...copy.brands, ...copy.brands];

  return (
    <section className="overflow-hidden bg-white px-4 py-24 text-zinc-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={copy.section.eyebrow}
          title={copy.section.title}
          description={copy.section.description}
          align="center"
        />
      </div>

      <motion.div
        className="mt-14 flex min-w-max gap-4 animate-[marquee_24s_linear_infinite]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {repeatedSponsors.map((sponsor, index) => (
          <div
            key={`${sponsor}-${index}`}
            className="group grid h-24 w-56 place-items-center rounded-3xl border border-zinc-200 bg-white/75 text-xl font-black tracking-[0.18em] text-zinc-400 shadow-xl shadow-zinc-950/5 backdrop-blur transition hover:-translate-y-1 hover:border-orange-300 hover:text-orange-600 hover:shadow-orange-500/15"
          >
            {sponsor}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
