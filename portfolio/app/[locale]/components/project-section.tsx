"use client";
import { Link as LinkIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}) {
  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Link
            href={liveUrl}
            className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            aria-label={`View ${title} live`}
          >
            <LinkIcon className="h-5 w-5" />
          </Link>
          <Link
            href={githubUrl}
            className="p-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
            aria-label={`View ${title} code on GitHub`}
          >
            <FaGithub className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const t = useTranslations("Projects");

  const projects = [
    {
      title: t("pokecompanion.title"),
      description: t("pokecompanion.description"),
      image: "/project-images/pokecompanion.webp",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      liveUrl: t("pokecompanion.liveUrl"),
      githubUrl: t("pokecompanion.githubUrl"),
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {t("projects")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {t("seleccionados")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
