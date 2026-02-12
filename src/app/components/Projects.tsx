import { useState } from "react";
import { Project, portfolioData } from "../data/portfolio";
import { Section } from "./Section";
import { ProjectModal } from "./ProjectModal";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group relative flex flex-col p-6 md:p-8 bg-card border border-border rounded-xl cursor-pointer hover:border-foreground/20 transition-colors"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-wrap gap-2">
          {project.categories.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono uppercase tracking-wider"
            >
              {cat}
            </span>
          ))}
          {project.categories.length > 2 && (
             <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono uppercase tracking-wider">+{project.categories.length - 2}</span>
          )}
        </div>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 ml-2" />
      </div>

      <h3 className="text-2xl font-bold mb-3 group-hover:text-foreground transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
        {project.shortDescription}
      </p>

      <div className="mt-auto pt-6 border-t border-border/50">
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs font-mono text-muted-foreground/80 bg-secondary/50 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs font-mono text-muted-foreground/80 bg-secondary/50 px-2 py-1 rounded">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      title="Selected Work"
      subtitle="Production-grade systems demonstrating end-to-end engineering capabilities."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {portfolioData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <div className="flex justify-center">
         <a 
           href="https://github.com/Suvroneel?tab=repositories" 
           target="_blank" 
           rel="noreferrer"
           className="inline-flex items-center gap-2 text-foreground font-medium hover:text-muted-foreground transition-colors border-b border-foreground hover:border-muted-foreground pb-1"
         >
           More Projects <ArrowUpRight className="w-4 h-4" />
         </a>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}
