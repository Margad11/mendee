"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "./data";

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute left-0 top-20 h-72 w-72 bg-red-500/15 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-72 w-72 bg-sky-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.42em] text-sky-300">
              Showcase
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">
              Dirt, light, velocity.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/60">
            High-contrast frames inspired by night races, desert launches, and campaign-grade
            action photography.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[240px] gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.title}
              className={`group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 3 ? "md:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Image
                src={image.src}
                alt={`${image.title} motocross action`}
                fill
                sizes={index === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
                className="object-cover brightness-75 saturate-125 transition duration-700 group-hover:scale-105 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-sky-200">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-black uppercase">{image.title}</h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
