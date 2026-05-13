"use client";

import dynamic from "next/dynamic";
import { ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const BikeScene = dynamic(() => import("./BikeScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-white/5" />,
});

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 110]);
  const opacity = useTransform(scrollY, [0, 620], [1, 0.25]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black pt-28 text-white sm:pt-32"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(225,29,46,0.32),transparent_28%),radial-gradient(circle_at_78%_24%,rgba(14,165,233,0.28),transparent_30%),linear-gradient(135deg,#020204_0%,#101014_48%,#030305_100%)]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <div className="absolute left-1/2 top-0 h-40 w-[70vw] -translate-x-1/2 bg-sky-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            className="mb-5 text-xs font-black uppercase tracking-[0.42em] text-sky-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Extreme motocross division
          </motion.p>
          <motion.h1
            className="text-balance text-5xl font-black uppercase leading-[0.88] tracking-normal text-white sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            ODOR BVR OOR OHINTOI. Break the night.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            A cinematic motocross experience built for speed, control, and electric-blue
            altitude. Tuned for riders who turn pressure into air time.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
          >
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:bg-sky-200"
            >
              Watch the line <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white backdrop-blur transition hover:border-red-400/60 hover:bg-red-500/15"
            >
              <Play size={17} fill="currentColor" /> Explore tech
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative h-[420px] min-h-[320px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-2xl shadow-sky-500/10 backdrop-blur-sm sm:h-[560px]"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="absolute inset-x-8 top-10 h-20 bg-red-500/25 blur-3xl" />
          <div className="absolute inset-y-10 right-8 w-20 bg-sky-400/25 blur-3xl" />
          <BikeScene />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.68))]" />
        </motion.div>
      </div>
    </section>
  );
}
