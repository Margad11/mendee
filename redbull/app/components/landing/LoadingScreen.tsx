"use client";

import { motion } from "framer-motion";

type LoadingScreenProps = {
  isLoading: boolean;
};

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? "auto" : "none" }}
      transition={{ duration: 0.65, ease: "easeInOut" }}
      aria-hidden={!isLoading}
    >
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          className="h-20 w-20 rounded-full border border-white/20 border-t-red-500 border-r-sky-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className="text-xs font-bold uppercase tracking-[0.45em] text-white/70"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          Ignition
        </motion.p>
      </div>
    </motion.div>
  );
}
