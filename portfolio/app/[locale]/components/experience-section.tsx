import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

function getExperiences(t: ReturnType<typeof useTranslations>) {
  return [
    {
      period: t("fibwi.period"),
      title: t("fibwi.title"),
      company: t("fibwi.company"),
      companyUrl: t("fibwi.companyUrl"),
      description: t("fibwi.description"),
      skills: [
        t("fibwi.skills.0"),
        t("fibwi.skills.1"),
        t("fibwi.skills.2"),
        t("fibwi.skills.3"),
        t("fibwi.skills.4"),
        t("fibwi.skills.5"),
        t("fibwi.skills.6"),
      ],
    },
  ];
}

type Experience = ReturnType<typeof getExperiences>[number];

function ExperienceCard({
  period,
  title,
  company,
  companyUrl,
  description,
  skills,
}: Experience) {
  return (
    <div className="group relative grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 p-6 rounded-xl hover:bg-card transition-colors">
      <div className="text-sm text-muted-foreground font-medium">{period}</div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {title} ·{" "}
          <a
            href={companyUrl}
            className="text-primary hover:underline"
            rel="noopener noreferrer"
          >
            {company}
          </a>
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const t = useTranslations("Experience");
  const locale = useLocale();
  const experiences = getExperiences(t);
  const cvFile =
    locale === "es"
      ? "/cv/N.M. Schirmer CV - ESP.pdf"
      : "/cv/N.M. Schirmer CV.pdf";

  return (
    <section id="experience" className="w-full px-6 py-16 bg-secondary ">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {t("sectionLabel")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
            {t("heading")}
          </h2>

          <div className="space-y-2">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.period} {...exp} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={cvFile}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
            >
              {t("viewResume")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
