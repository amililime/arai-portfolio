import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/constants/projects";

export default function HomePage() {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-1">
        {PROJECTS.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            src={project.src} 
          />
        ))}
      </div>
    </div>
  );
}