import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/constants/projects";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const filtered = PROJECTS.filter((p) => p.category === category);

  return (
    <main className="px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {filtered.map((project, index) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            src={project.cover}
            priority={index < 3}
          />
        ))}
      </div>
    </main>
  );
}
