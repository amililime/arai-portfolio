import { PROJECTS } from '@/constants/projects';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-24 pb-20 min-h-screen bg-white">

      {/* Encabezado del proyecto */}
      <div className="px-6 md:px-12 mb-12">
        <h1 className="text-xs font-normal tracking-[0.3em] uppercase text-black mb-1">
          {project.title}
        </h1>
        <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em]">
          {project.category}
        </p>
      </div>

      {/* Galería: columna única, ratio natural de cada foto */}
      <div className="flex flex-col gap-1">
        {project.images.map((src: string, index: number) => (
          <img
            key={src}
            src={src}
            alt={`${project.title} ${index + 1}`}
            className="w-full h-auto block"
          />
        ))}
      </div>

    </main>
  );
}
