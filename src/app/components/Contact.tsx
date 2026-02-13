import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Section } from "./Section";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data
    window.location.href = `mailto:suvroneel.nathak213@gmail.com?subject=Contact from ${formState.name}&body=${formState.message}`;
  };

  return (
    <div className="relative pt-20 pb-0 overflow-hidden" id="contact">
        
      {/* Background Yellow Wave Footer */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-primary/10 -z-10 rounded-t-[50%]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -z-10" />

      <Section title="Get in Touch" subtitle="Have a project in mind? Let's build something intelligent together.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Socials / Info */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-border/50">
                <h3 className="text-2xl font-bold font-heading mb-6">Connect</h3>
                <div className="space-y-6">
                    <a href="mailto:suvroneel.nathak213@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                        <div className="p-3 bg-background rounded-full">
                            <Mail className="w-6 h-6" />
                        </div>
                        <span className="text-lg font-medium">suvroneel.nathak213@gmail.com</span>
                    </a>
                    <a href="https://github.com/Suvroneel" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                        <div className="p-3 bg-background rounded-full">
                            <Github className="w-6 h-6" />
                        </div>
                        <span className="text-lg font-medium">/Suvroneel</span>
                    </a>
                    <a href="https://www.linkedin.com/in/suvroneel-nathak/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                        <div className="p-3 bg-background rounded-full">
                            <Linkedin className="w-6 h-6" />
                        </div>
                        <span className="text-lg font-medium">/in/suvroneel-nathak</span>
                    </a>
                </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border/50 order-1 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2 ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2 ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2 ml-1">Message</label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </Section>
      
      {/* Footer Text */}
      <div className="text-center pb-8 text-muted-foreground font-body text-sm">
        <p>© 2026 Suvroneel Nathak. All rights reserved.</p>
      </div>
    </div>
  );
}
