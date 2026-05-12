import Image from "next/image";

interface Props { src: string; title: string }

export const ProjectCard = ({ src, title }: Props) => (
  <div className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden bg-zinc-100">
    <Image
      src={src}
      alt={title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
      <p className="text-[10px] uppercase tracking-[0.2em] text-white opacity-0 transition-opacity group-hover:opacity-100">
        {title}
      </p>
    </div>
  </div>
);