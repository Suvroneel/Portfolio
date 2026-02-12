import { Section } from "./Section";

const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "JavaScript/TypeScript", "HTML/CSS", "Bash"],
  },
  {
    category: "AI & ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "LangChain",
      "YOLOv8",
      "BERT",
      "LLMs (Llama, Mistral)",
    ],
  },
  {
    category: "Backend & Cloud",
    items: ["FastAPI", "Django", "AWS (Lambda, S3, RDS)", "Supabase", "Docker", "PostgreSQL"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "n8n", "Streamlit", "Linux", "CI/CD"],
  },
];

export function Skills() {
  return (
    <Section id="skills" title="Technical Arsenal" subtitle="The tools and technologies I use to build production-grade software.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup) => (
          <div 
            key={skillGroup.category} 
            className="group p-6 rounded-xl bg-card border border-border hover:border-foreground/20 transition-all hover:-translate-y-1"
          >
            <h3 className="text-lg font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
              {skillGroup.category}
            </h3>
            <ul className="space-y-2.5">
              {skillGroup.items.map((item) => (
                <li key={item} className="text-muted-foreground font-mono text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-foreground/50 transition-colors" />
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
