import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Araí Moleri | Photography",
  description: "Professional Photography Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} antialiased`}>
      <body className="bg-white m-0 p-0">
        <Header />
        <main className="w-full min-h-screen">
          {children}
        </main>
        <footer className="py-12 px-6 text-center text-[10px] uppercase tracking-widest text-zinc-400">
          © 2026 Araí Moleri
        </footer>
      </body>
    </html>
  );
}
