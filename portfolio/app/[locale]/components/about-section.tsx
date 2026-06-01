import { Card } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AboutSection() {
  const t = useTranslations("AboutSection");

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-primary font-medium mb-4">{t("greeting")}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            {t("heading")}
          </h1>
          <p className="text-lg md:text-xl text-primary mb-6">{t("role")}</p>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            {t("description")}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Card className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 w-full h-full"
              >
                {t("viewWork")}
                <ArrowDown className="h-4 w-4" />
              </Link>
            </Card>
            <Card className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg hover:bg-primary/90 transition-colors">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 w-full h-full"
              >
                {t("contact")}
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
