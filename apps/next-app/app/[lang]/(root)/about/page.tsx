"use client";

import { useTranslation } from "react-i18next";

import Layout from "@/components/benzenith/layout/Layout";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm tracking-widest text-warm-gray uppercase mb-4 block">
              {t("about.kicker")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal leading-tight">
              {t("about.title")}
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl text-warm-gray font-light leading-relaxed">
            <p>{t("about.para1")}</p>
            <p>{t("about.para2")}</p>
            <p>{t("about.para3")}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
