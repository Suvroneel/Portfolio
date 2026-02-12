import { Project } from "../data/portfolio";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
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
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="sticky top-0 bg-card/95 backdrop-blur z-10 border-b border-border p-6 md:p-8 flex justify-between items-start gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono uppercase tracking-wider"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                <p className="text-muted-foreground text-lg mt-1">{project.tagline}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Metrics Grid */}
              {project.metrics && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="p-4 rounded-lg bg-secondary/30 border border-border">
                      <div className="text-xl md:text-2xl font-bold font-mono">{metric.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Images if available (specifically for Hotel Booking or others) */}
              {project.images && project.images.length > 0 && (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((img, idx) => (
                      <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-border bg-secondary/20">
                         <img src={img} alt={`${project.title} visualization ${idx+1}`} className="object-cover w-full h-full" />
                      </div>
                    ))}
                 </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-md bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:bg-secondary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Overview</h3>
                <p className="whitespace-pre-line text-muted-foreground leading-relaxed text-base md:text-lg">
                  {project.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Key Technical Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/10">
                      <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground bg-secondary/20 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
