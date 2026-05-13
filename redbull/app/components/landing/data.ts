import { Gauge, RadioTower, ShieldCheck, Zap } from "lucide-react";

export const navLinks = [
  { label: "Ride", href: "#hero" },
  { label: "Tech", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Join", href: "#footer" },
];

export const features = [
  {
    title: "Race-Bred Control",
    description:
      "Precision suspension, instant response, and a cockpit built for hard landings.",
    icon: Gauge,
    tone: "from-red-500/25 to-white/5",
  },
  {
    title: "Neon Night Runs",
    description:
      "Electric blue light trails, reactive atmosphere, and high-contrast visibility.",
    icon: Zap,
    tone: "from-sky-400/25 to-white/5",
  },
  {
    title: "Impact Ready",
    description:
      "Carbon-inspired shell details and a protection-first layout for extreme terrain.",
    icon: ShieldCheck,
    tone: "from-white/15 to-red-500/10",
  },
  {
    title: "Live Telemetry",
    description:
      "Track speed, jump arcs, and lap rhythm through a cinematic command layer.",
    icon: RadioTower,
    tone: "from-sky-500/20 to-red-500/10",
  },
];

export const galleryImages = [
  {
    title: "Desert Launch",
    src: "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Night Session",
    src: "https://images.unsplash.com/photo-1516547994832-9ccbb5eb52df?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Track Focus",
    src: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Rider Energy",
    src: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=85",
  },
];
