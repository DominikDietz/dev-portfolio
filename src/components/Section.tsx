import { cn } from "../lib/utils";

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  isAlternate?: boolean;
}

const Section = ({
  id,
  title,
  subtitle,
  children,
  isAlternate,
}: SectionProps) => {
  const sectionClass = cn(
    "mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8",
    {
      "bg-muted/30": isAlternate,
    },
  );

  return (
    <section id={id} className={sectionClass}>
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-center text-xl">
          {subtitle}
        </p>
      )}
      {children}
    </section>
  );
};

export default Section;
