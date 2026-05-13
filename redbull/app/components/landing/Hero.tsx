"use client";

import dynamic from "next/dynamic";
import { ArrowDownRight, Play } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { SiteCopy } from "./data";

type HeroProps = {
  copy: SiteCopy;
};

type BikeSceneProps = {
  mouse: { x: number; y: number };
};

const BikeScene = dynamic<BikeSceneProps>(() => import("./BikeScene").then((mod) => mod.BikeScene), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-white/5" />,
});

export function Hero({ copy }: HeroProps) {
  const [sceneMouse, setSceneMouse] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 22 });
  const layerX = useTransform(smoothX, [-1, 1], [-24, 24]);
  const layerY = useTransform(smoothY, [-1, 1], [-16, 16]);
  const inverseLayerX = useTransform(layerX, (value) => value * -0.7);
  const inverseLayerY = useTransform(layerY, (value) => value * -0.8);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-white text-zinc-950"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * -2;
        mouseX.set(x);
        mouseY.set(y);
        setSceneMouse({ x, y });
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#ffffff_0%,#f7f8fb_48%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:84px_84px] opacity-70" />
      <motion.div
        style={{ x: layerX, y: layerY }}
        className="absolute -left-20 top-20 h-72 w-[45rem] rotate-[-16deg] rounded-full bg-orange-500/12 blur-3xl"
      />
      <motion.div
        style={{ x: inverseLayerX, y: inverseLayerY }}
        className="absolute right-0 top-24 h-72 w-[42rem] rotate-12 rounded-full bg-sky-400/14 blur-3xl"
      />

      <div className="absolute inset-0 z-0">
        <BikeScene mouse={sceneMouse} />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-zinc-950/10 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-zinc-700 shadow-xl shadow-zinc-900/5 backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.9)]" />
            {copy.hero.eyebrow}
          </motion.div>

          <motion.h1
            className="mt-8 text-6xl font-black uppercase leading-[0.82] tracking-normal text-zinc-950 sm:text-8xl lg:text-[7.8rem]"
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {copy.brand.firstName}
            <span className="block text-transparent [-webkit-text-stroke:2px_#111]">{copy.brand.lastName}</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-xl font-semibold uppercase tracking-[0.2em] text-zinc-600"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
          >
            {copy.hero.subtitle}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
          >
            <a
              href="#highlights"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-2xl shadow-zinc-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/30"
            >
              <Play size={17} fill="currentColor" /> {copy.hero.primaryCta}
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-950/10 bg-white/50 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-zinc-950 shadow-xl shadow-zinc-900/5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-sky-400/70 hover:text-sky-700"
            >
              {copy.hero.secondaryCta} <ArrowDownRight size={18} />
            </a>
          </motion.div>
        </div>

        <div className="pointer-events-none hidden min-h-[620px] lg:block" />
      </div>

      <motion.div
        className="absolute bottom-5 left-1/2 z-20 grid w-[min(92vw,980px)] -translate-x-1/2 gap-3 sm:grid-cols-3"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        {copy.hero.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/70 bg-white/55 p-5 shadow-2xl shadow-zinc-950/10 backdrop-blur-2xl"
          >
            <p className="text-4xl font-black text-zinc-950">{stat.value}</p>
            <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-zinc-700">{stat.label}</p>
            <p className="mt-2 text-sm text-zinc-500">{stat.detail}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
