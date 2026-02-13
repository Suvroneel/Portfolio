import { Section } from "./Section";

const skills = [
  {
    category: "Languages & Core",
    items: ["Python", "SQL", "C++", "JavaScript", "TypeScript"],
  },
  {
    category: "AI & Machine Learning",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "YOLOv8", "Hugging Face", "LangChain", "LlamaIndex"],
  },
  {
    category: "Data & Backend",
    items: ["PostgreSQL", "FastAPI", "Django", "Flask", "Pandas", "NumPy", "Supabase"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "AWS (Lambda, S3)", "Git/GitHub", "Streamlit", "Linux"],
  },
];

export function Skills() {
  return (
    <Section id="skills" title="Technical Arsenal" subtitle="The tools and technologies I use to build production-grade software.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup) => (
          <div 
            key={skillGroup.category} 
            className="group p-8 rounded-3xl bg-white shadow-lg border border-transparent hover:border-primary/30 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-6 text-foreground font-heading group-hover:text-primary transition-colors">
              {skillGroup.category}
            </h3>
            <ul className="space-y-3">
              {skillGroup.items.map((item) => (
                <li key={item} className="text-muted-foreground font-body text-base flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
