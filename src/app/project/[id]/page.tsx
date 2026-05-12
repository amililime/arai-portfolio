import { PROJECTS } from '@/constants/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-[11px] uppercase tracking-[0.3em] font-medium text-black mb-1">
        {project.title}
      </h1>
      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-10">
        {project.category}
      </p>

      <div className="flex flex-col gap-2">
        {project.images.map((src, index) => (
          <div key={index} className="relative w-full" style={{ aspectRatio: '4/3' }}>
            <Image
              src={src}
              alt={`${project.title} ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
