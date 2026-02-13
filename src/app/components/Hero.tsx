import { motion } from "motion/react";
import profileImage from "figma:asset/dc773c44342fa4275e7583a499c1f28c2a3a7879.png";

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden pt-20 md:pt-0" id="about">
      {/* Background Yellow Wave (Desktop) */}
      <div className="absolute top-0 right-0 h-full w-[55%] hidden md:block z-0 pointer-events-none">
         <svg
            viewBox="0 0 771 871"
            className="w-full h-full object-cover text-primary fill-current"
            preserveAspectRatio="none"
         >
            <path d="M0 0H771.833V871.168H134.46C134.46 871.168 -48.26 620.5 24.5 450C97.26 279.5 0 0 0 0Z" />
         </svg>
      </div>
      
      {/* Background Yellow Wave (Mobile - Simplified) */}
      <div className="absolute top-0 right-0 w-3/4 h-1/2 bg-primary rounded-bl-full md:hidden z-0 opacity-20" />


      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center h-full">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 md:space-y-8 order-2 md:order-1"
        >
          <h3 className="text-primary font-bold tracking-wider uppercase text-lg md:text-xl font-brand">
            Suvroneel Nathak
          </h3>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1]">
            Building & deploying <br />
            production AI
          </h1>
          
          <div className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed font-body space-y-2">
             <p className="font-bold text-foreground/80">
               Data Scientist • AI/ML Engineer • Full-Stack
             </p>
             <p>
               NLP • Computer Vision • Multi-Agent Systems
             </p>
             <p className="text-base pt-2 block opacity-90 font-medium border-t-2 border-primary/20 w-fit">
               6 systems in production: AWS • Docker • FastAPI • Streamlit
             </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Projects
            </a>
            <a
              href="https://www.linkedin.com/in/suvroneel-nathak/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 border-2 border-foreground text-foreground rounded-lg font-medium text-lg hover:bg-foreground hover:text-background transition-all transform hover:-translate-y-1"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="order-1 md:order-2 flex justify-center md:justify-end relative h-full md:h-auto items-center"
        >
            {/* Cutout Image Container - No borders/background to mix with yellow wave */}
            <div className="relative w-[280px] md:w-[420px] lg:w-[480px] z-10">
               <img 
                 src={profileImage} 
                 alt="Suvroneel Nathak" 
                 className="w-full h-auto object-contain drop-shadow-2xl"
               />
            </div>
        </motion.div>
      </div>
    </section>
  );
}
