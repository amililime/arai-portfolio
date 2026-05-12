import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  src: string;
  title: string;
}

export const ProjectCard = ({ id, src, title }: Props) => (
  <Link href={`/project/${id}`} className="group block space-y-3">
    <div className="relative w-full overflow-hidden bg-zinc-100" style={{ aspectRatio: '4/3' }}>
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />
    </div>
    <p className="text-[10px] uppercase tracking-[0.2em] text-black">
      {title}
    </p>
  </Link>
);
