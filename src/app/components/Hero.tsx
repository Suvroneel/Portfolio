import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import profileImage from "figma:asset/697509c293d96767ca3a6b91b5c3286f191756f9.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      {/* Background Build Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10 md:gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8 order-2 md:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-accent-foreground font-mono mb-4 text-sm md:text-base inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Hi, I'm Suvroneel Nathak
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6 leading-[1.1]">
              Building & deploying <br />
              <span className="text-muted-foreground">production AI.</span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed space-y-2 md:space-y-1">
              <p>Data Scientist • AI/ML Engineer • Full-Stack</p>
              <p>NLP • Computer Vision • Multi-Agent Systems</p>
              <p className="text-foreground/90 font-medium pt-3 text-base md:text-lg border-t border-border/40 mt-4 w-full md:w-fit mx-auto md:mx-0">
                6 systems in production: AWS • Docker • FastAPI • Streamlit
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors shadow-lg shadow-foreground/5"
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

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2 flex justify-center md:justify-start md:pl-8"
        >
          <div className="relative group">
            {/* Decorative ring/backdrop behind image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            
            <div className="relative w-[200px] md:w-[240px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-muted/20">
              <img
                src={profileImage}
                alt="Suvroneel Nathak"
                className="w-full h-full object-cover object-top scale-[1.35] translate-y-[10%]"
                style={{ objectPosition: "50% 15%" }}
              />
              
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
