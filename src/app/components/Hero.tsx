import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20">
      <div className="max-w-4xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent-foreground font-mono mb-4 text-sm md:text-base">
            Hi, I'm Suvroneel Nathak
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6">
            Building & deploying <br className="hidden md:block" />
            <span className="text-muted-foreground">production AI.</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed space-y-1">
            <p>Data Scientist • AI/ML Engineer • Full-Stack</p>
            <p>NLP • Computer Vision • Multi-Agent Systems</p>
            <p className="text-foreground/80 font-medium pt-2 text-lg md:text-xl">
              6 systems in production: AWS • Docker • FastAPI • Streamlit
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-border bg-transparent text-foreground font-medium hover:bg-secondary transition-colors group"
          >
            Contact Me
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
