import { PROJECTS } from "@/constants/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-4 md:px-10">
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              src={project.cover}
              priority={index < 3}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
