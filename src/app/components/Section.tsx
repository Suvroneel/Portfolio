import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function Section({ id, children, className, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto", className)}>
      {(title || subtitle) && (
        <div className="mb-12 md:mb-16 space-y-2">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

