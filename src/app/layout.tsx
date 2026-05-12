import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-white m-0 p-0">
        
        {/* Header Moderno & Sticky */}
        <header className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-md border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 py-4 md:py-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            
            {/* Logo / Nombre */}
            <div className="flex flex-col">
              <Link 
                href="/" 
                className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
              >
                Araí Moleri
              </Link>
            </div>

            {/* Navegación Mobile-First (Scroll horizontal en móvil, lista en desktop) */}
            <nav className="flex overflow-x-auto md:overflow-visible no-scrollbar -mx-2 px-2 pb-2 md:pb-0 gap-6 md:gap-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="whitespace-nowrap text-[9px] md:text-[11px] uppercase tracking-[0.25em] text-zinc-400 hover:text-black transition-all duration-300 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Contenedor de contenido para que no se pegue al borde si no quieres */}
        <main className="w-full min-h-screen">
          {children}
        </main>

        {/* Footer simple para cerrar el diseño */}
        <footer className="py-12 px-6 text-center text-[10px] uppercase tracking-widest text-zinc-300">
          © 2026 Araí Moleri
        </footer>

      </body>
    </html>
  );
}