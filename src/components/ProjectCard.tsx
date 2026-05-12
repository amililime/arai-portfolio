import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  slug: string;
}

export const ProjectCard = ({ src, title, slug }: Props) => (
  <Link href={`/projects/${slug}`} className="group block">
    <div className="relative w-full overflow-hidden bg-zinc-100" style={{ aspectRatio: "4/3" }}>
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
    </div>
    <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-black">
      {title}
    </p>
  </Link>
);
