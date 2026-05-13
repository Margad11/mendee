import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Energy MX | Cinematic Motocross",
  description:
    "A premium motocross landing page with cinematic motion, neon energy, and immersive 3D visuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
