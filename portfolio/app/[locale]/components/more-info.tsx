"use client";
import { useTranslations } from "next-intl";

export default function MoreInfo() {
  const t = useTranslations("MoreInfoData");

  return (
    <section id="more-info" className="w-full px-6 py-16 bg-secondary ">
      <div>
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {t("sectionLabel")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
            {t("heading")}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {t("focusHeading")}
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li
                    key={t("focusItems.UI")}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {t("focusItems.UI")}
                  </li>
                  <li
                    key={t("focusItems.Optimization")}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {t("focusItems.Optimization")}
                  </li>
                  <li
                    key={t("focusItems.Technologies")}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {t("focusItems.Technologies")}
                  </li>
                  <li
                    key={t("focusItems.CleanCode")}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {t("focusItems.CleanCode")}
                  </li>
                  <li
                    key={t("focusItems.Backend")}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {t("focusItems.Backend")}
                  </li>
                  <li
                    key={t("focusItems.API")}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {t("focusItems.API")}
                  </li>
                  <li
                    key={t("focusItems.Database")}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {t("focusItems.Database")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
