"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="text-xs font-black uppercase tracking-[0.42em] text-orange-600">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-normal text-zinc-950 sm:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
