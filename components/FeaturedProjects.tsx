import { projectsData } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const featuredProjects = [
    projectsData.find((p) => p.Name === "Roastume"),
    projectsData.find((p) => p.Name === "Pixel Brain IQ"),
    projectsData.find((p) => p.Name === "Jose Lead"),
    projectsData.find((p) => p.Name === "Salfiya"),
  ].filter((p) => p !== undefined) as typeof projectsData;

  return (
    <section id="projects" className="mt-32 lg:pl-12 relative">
      <h2 className="text-3xl font-figtree font-light tracking-tight text-white mb-12">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-16 flex justify-center lg:justify-start">
        <Link
          href="/projects"
          className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
        >
          View All Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
