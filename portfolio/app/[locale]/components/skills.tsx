"use client";

import { Card } from "@/components/ui/card";

import { useTranslations } from "next-intl";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Firebase",
  "Azure",
  "Git",
  "GitHub",
  "Vue.js",
  "Angular",
  "React Native",
  "Java",
  "Python",
  "Kotlin",
  "Bootstrap",
  "LitElement",
];

function Pill({ name }: { name: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-primary hover:bg-secondary hover:text-primary-foreground transition-colors">
      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
      <span className="truncate">{name}</span>
    </div>
  );
}

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="py-16 bg-primary-foreground ">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mb-10 max-w-3xl text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {t("technologies")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("tools")}
          </h2>
        </div>

        <Card className="flex items-center gap-4 dark:bg-secondary-foreground bg-secondary w-4/5 sm:w-2/3 md:w-1/3">
          <div className="w-full flex flex-wrap gap-2 justify-center">
            {technologies.map((tech) => (
              <Pill key={tech} name={tech} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
