import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
  const navItems = [
    { name: "Commercial", path: "/commercial" },
    { name: "Personal Work", path: "/personal-work" },
    { name: "Retouching", path: "/retouching" },
    { name: "About", path: "/about" },
  ];

  return (
    <html lang="es" className={`${geistSans.variable} antialiased`}>
      <body className="bg-white m-0 p-0">

        <header className="sticky top-0 z-[100] w-full bg-white border-b border-zinc-200">
          <div className="w-full px-6 py-5 flex items-center gap-8">
            <Link
              href="/"
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-black hover:opacity-60 transition-opacity shrink-0"
            >
              Araí Moleri
            </Link>
            <nav className="flex overflow-x-auto no-scrollbar gap-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-black hover:opacity-60 transition-opacity"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </header>

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