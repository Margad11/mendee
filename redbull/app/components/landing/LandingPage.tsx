"use client";

import { useEffect, useState } from "react";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { LoadingScreen } from "./LoadingScreen";

export function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 850);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Header />
      <main className="min-h-screen bg-black">
        <Hero />
        <Features />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
