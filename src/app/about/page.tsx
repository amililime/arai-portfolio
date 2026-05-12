import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="flex flex-col lg:flex-row gap-16 p-12 lg:p-24 items-start">
      <div className="w-full lg:w-1/2">
        <Image 
          src="/images/about-portrait.jpg" 
          alt="Arai Moleri" 
          width={800} height={1000} 
          className="grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="w-full lg:w-1/2 space-y-6 text-sm tracking-wide leading-relaxed text-zinc-800">
        <p>Aquí va el primer párrafo del texto de Araí...</p>
        <p>Aquí va el segundo párrafo...</p>
        <div className="pt-8 text-[10px] uppercase tracking-[0.2em]">
          <p>Contact: example@email.com</p>
          <p>Instagram: @araimoleri</p>
        </div>
      </div>
    </section>
  );
}