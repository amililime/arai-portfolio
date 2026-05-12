import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/constants/projects";

export default function HomePage() {
  return (
    <main className="px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            src={project.cover}
          />
        ))}
      </div>
    </main>
  );
}
