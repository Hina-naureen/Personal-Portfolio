import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Replacing Geist with Inter
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hina Yaqoob | Portfolio",
  description: "A Professional Portfolio built with Next.js, Tailwind, and GSAP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-gray-900 text-white font-sans`}>
        {children}
      </body>
    </html>
  );
}
