"use client";

import { motion } from "framer-motion";
import { SiteCopy } from "./data";

type FooterProps = {
  brand: SiteCopy["brand"];
  copy: SiteCopy["footer"];
};

export function Footer({ brand, copy }: FooterProps) {
  return (
    <motion.footer
      className="bg-white px-4 py-12 text-zinc-950 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-t border-zinc-200 pt-8 md:flex-row md:items-end">
        <div>
          <p className="text-4xl font-black uppercase leading-none tracking-normal">{brand.fullName}</p>
          <p className="mt-3 text-xs font-black uppercase tracking-[0.34em] text-zinc-500">
            {copy.role}
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="font-['Brush_Script_MT',cursive] text-3xl text-zinc-950">{brand.lastName}</p>
          <p className="mt-2 text-xs font-black uppercase tracking-[0.24em] text-zinc-400">
            {copy.program}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
