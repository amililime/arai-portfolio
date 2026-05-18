import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  src: string;
  title: string;
}

export const ProjectCard = ({ id, src, title }: Props) => {
  return (
    <Link href={`/project/${id}`} className="group block space-y-3">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-100">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="text-[10px] uppercase tracking-[0.2em] font-medium text-black">
        {title}
      </h3>
    </Link>
  );
};
