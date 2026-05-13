"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { SiteCopy } from "./data";

type GalleryProps = {
  copy: SiteCopy["gallery"];
};

export function Gallery({ copy }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : copy.images[activeIndex];

  return (
    <section id="gallery" className="relative overflow-hidden bg-white px-4 py-28 text-zinc-950 sm:px-6 lg:px-8">
      <div className="absolute right-0 top-20 h-80 w-2/3 -skew-y-6 bg-gradient-to-l from-orange-50 via-white to-sky-50 blur-2xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={copy.section.eyebrow}
          title={copy.section.title}
          description={copy.section.description}
        />

        <div className="mt-14 grid auto-rows-[240px] gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {copy.images.map((image, index) => (
            <motion.button
              key={image.title}
              type="button"
              className={`group relative overflow-hidden rounded-[1.6rem] border border-white bg-zinc-100 text-left shadow-2xl shadow-zinc-950/10 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 4 ? "md:col-span-2" : ""}`}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.62, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <Image
                src={image.src}
                alt={`${image.title} - ${copy.altSuffix}`}
                fill
                sizes={index === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/5 to-white/10" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-200">{image.tag}</p>
                <h3 className="mt-2 text-2xl font-black uppercase">{image.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-white/75 p-4 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="relative h-[78vh] w-[min(1100px,92vw)] overflow-hidden rounded-[2rem] bg-zinc-950 shadow-[0_40px_120px_rgba(15,23,42,0.35)]"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={activeImage.src} alt={activeImage.title} fill sizes="92vw" className="object-cover" />
              <button
                type="button"
                aria-label={copy.closeAria}
                onClick={() => setActiveIndex(null)}
                className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/80 text-zinc-950 shadow-xl backdrop-blur transition hover:bg-white"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950/85 to-transparent p-8 text-white">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-orange-200">{activeImage.tag}</p>
                <h3 className="mt-2 text-4xl font-black uppercase">{activeImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
