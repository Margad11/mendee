"use client";

import { motion } from "framer-motion";

type LoadingScreenProps = {
  isLoading: boolean;
  copy: {
    status: string;
  };
};

export function LoadingScreen({ isLoading, copy }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? "auto" : "none" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden={!isLoading}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-20 w-20">
          <motion.span
            className="absolute inset-0 rounded-full border border-zinc-200"
            animate={{ scale: [0.8, 1.25, 0.8], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute inset-3 rounded-full border-2 border-zinc-950 border-r-orange-500 border-t-sky-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          />
          <span className="absolute inset-0 grid place-items-center text-sm font-black">BM</span>
        </div>
        <p className="text-xs font-black uppercase tracking-[0.42em] text-zinc-500">{copy.status}</p>
      </div>
    </motion.div>
  );
}
