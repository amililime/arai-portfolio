import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="flex flex-col lg:flex-row gap-16 p-12 lg:p-24 items-start bg-white min-h-screen">
      {/* Contenedor de la Imagen */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/images/AraiMoleri_Portrait_0.jpg"
          alt="Araí Moleri"
          width={800}
          height={1000}
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
          fetchPriority="high"
          className="grayscale hover:grayscale-0 transition-all duration-700 object-cover"
        />
      </div>

      {/* Contenedor de Texto */}
      <div className="w-full lg:w-1/2 space-y-6 text-sm tracking-wide leading-relaxed text-zinc-900">
        <p>
          Araí Moleri (Montevideo, 1988). Fotógrafa y retocadora digital. Su trabajo se centra principalmente en la fotografía gastronómica y de producto, colaborando con diversas marcas y agencias de publicidad.
        </p>
        <p>
          A través de una cuidada iluminación y composición, busca resaltar la textura y los colores naturales de los alimentos, creando imágenes que transmiten sensaciones y despiertan el deseo.
        </p>

        {/* Información de Contacto con estilo minimalista */}
        <div className="pt-12 text-[10px] uppercase tracking-[0.2em] space-y-2">
          <p>Contact: <a href="mailto:araimoleri@gmail.com" className="underline underline-offset-4">araimoleri@gmail.com</a></p>
          <p>Instagram: <a href="https://instagram.com/araimoleri" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">@araimoleri</a></p>
        </div>
      </div>
    </section>
  );
}