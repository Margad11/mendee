"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { About } from "./About";
import { Achievements } from "./Achievements";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Highlights } from "./Highlights";
import { LoadingScreen } from "./LoadingScreen";
import { Sponsors } from "./Sponsors";
import { Language, siteCopy } from "./data";

const defaultLanguage: Language = "mn";
const languageStorageKey = "site-language";
const languageChangeEvent = "site-language-change";

function isLanguage(value: string | null): value is Language {
  return value === "mn" || value === "en";
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const savedLanguage = window.localStorage.getItem(languageStorageKey);
  return isLanguage(savedLanguage) ? savedLanguage : defaultLanguage;
}

function getServerLanguage(): Language {
  return defaultLanguage;
}

function subscribeToLanguageChange(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(languageChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(languageChangeEvent, onStoreChange);
  };
}

function setStoredLanguage(language: Language) {
  window.localStorage.setItem(languageStorageKey, language);
  window.dispatchEvent(new Event(languageChangeEvent));
}

export function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const language = useSyncExternalStore(subscribeToLanguageChange, getStoredLanguage, getServerLanguage);
  const copy = siteCopy[language];

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 950);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} copy={copy.loading} />
      <Header copy={copy} language={language} onLanguageChange={setStoredLanguage} />
      <main className="min-h-screen bg-white">
        <Hero copy={copy} />
        <About copy={copy.about} brand={copy.brand} />
        <Achievements copy={copy.achievements} />
        <Gallery copy={copy.gallery} />
        <Highlights copy={copy.highlights} />
        <Sponsors copy={copy.sponsors} />
        <Contact copy={copy.contact} />
      </main>
      <Footer brand={copy.brand} copy={copy.footer} />
    </>
  );
}
