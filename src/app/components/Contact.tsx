import { Section } from "./Section";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Ready to build something <span className="text-muted-foreground">scalable?</span>
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          I'm currently available for full-time roles in Data Science, AI Engineering, and Python Development.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <a
            href="mailto:suvroneelnathak213@gmail.com"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:bg-foreground/90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            suvroneelnathak213@gmail.com
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Suvroneel"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/suvroneel-nathak/"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <footer className="mt-32 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Suvroneel Nathak. Built with React & Tailwind.</p>
      </footer>
    </Section>
  );
}
