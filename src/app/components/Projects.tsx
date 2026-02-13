import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { portfolioData, Project } from "../data/portfolio";
import { Section } from "./Section";

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group relative flex flex-col p-8 bg-white rounded-3xl cursor-pointer shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0px_20px_40px_-10px_rgba(253,196,53,0.3)] transition-all border border-transparent hover:border-primary/20 h-full"
    >
      <div className="flex justify-between items-start mb-6">
         <div className="flex flex-wrap gap-2">
            {project.categories.slice(0, 1).map((cat) => (
                <span key={cat} className="text-xs font-bold tracking-wider uppercase text-primary font-brand">
                    {cat}
                </span>
            ))}
         </div>
         <div className="p-2 bg-secondary rounded-full group-hover:bg-primary transition-colors">
            <ArrowUpRight className="w-5 h-5 text-foreground transition-colors" />
         </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground font-heading leading-tight group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed font-body">
        {project.shortDescription}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full bg-secondary text-xs font-bold text-foreground/70 font-nav">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 rounded-full bg-secondary text-xs font-bold text-foreground/70 font-nav">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl flex flex-col border border-border/50"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur z-10 border-b border-border/50 p-6 md:p-10 flex justify-between items-start gap-4">
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 rounded-full bg-primary/20 text-foreground text-xs font-bold uppercase tracking-wider font-brand"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">{project.title}</h2>
                <p className="text-muted-foreground text-lg md:text-xl mt-2 font-body">{project.tagline}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-8 h-8 text-muted-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 space-y-10">
              {/* Metrics Grid */}
              {project.metrics && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="p-6 rounded-2xl bg-secondary/50 border border-transparent hover:border-primary/30 transition-colors">
                      <div className="text-3xl font-bold font-brand text-primary">{metric.value}</div>
                      <div className="text-sm text-muted-foreground font-bold uppercase tracking-wide mt-2">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="prose prose-lg max-w-none text-muted-foreground font-body whitespace-pre-line">
                  {project.fullDescription}
              </div>

               {/* Images */}
              {project.images && project.images.length > 0 && (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.map((img, idx) => (
                      <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                         <img src={img} alt={`${project.title} visualization ${idx+1}`} className="object-cover w-full h-full" />
                      </div>
                    ))}
                 </div>
              )}
              
               {/* Features */}
               <div className="bg-secondary/30 p-8 rounded-3xl">
                   <h4 className="text-xl font-bold font-heading mb-6">Key Features</h4>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {project.features.map((feature, i) => (
                           <li key={i} className="flex items-start gap-3">
                               <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"/>
                               <span className="text-muted-foreground font-body">{feature}</span>
                           </li>
                       ))}
                   </ul>
               </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                 {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                        Live Demo
                    </a>
                 )}
                 {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="px-6 py-3 border-2 border-foreground rounded-lg font-bold hover:bg-foreground hover:text-background transition-all">
                        GitHub Repo
                    </a>
                 )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Production-grade systems demonstrating end-to-end engineering."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
           className="px-8 py-3 border-2 border-foreground rounded-full font-bold text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
         >
           View More Projects on GitHub
         </a>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}
