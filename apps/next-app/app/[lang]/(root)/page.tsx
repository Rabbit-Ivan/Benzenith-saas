"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import Layout from "@/components/benzenith/layout/Layout";
import LocaleLink from "@/components/benzenith/locale-link";

const philosophyBanner = "/benzenith/assets/philosophy-banner-new.jpg";
const heroBanner = "/benzenith/assets/hero-banner.jpg";
const seriesSuixinshan = "/benzenith/assets/series-suixinshan.jpg";
const seriesBenzizai = "/benzenith/assets/series-benzizai.jpg";
const seriesTingwanxiang = "/benzenith/assets/series-tingwanxiang.jpg";

export default function HomePage() {
  const { t } = useTranslation();

  const jewelrySeries = [
    {
      id: "suixinshan",
      nameKey: "series.suixinshan",
      image: seriesSuixinshan,
      link: "/category/suixinshan",
      available: true,
    },
    {
      id: "benzizai",
      nameKey: "series.benzizai",
      image: seriesBenzizai,
      link: "/category/benzizai",
      available: true,
    },
    {
      id: "tingwanxiang",
      nameKey: "series.tingwanxiang",
      image: seriesTingwanxiang,
      link: "/category/tingwanxiang",
      available: false,
    },
  ];

  return (
    <Layout>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h2
            style={{
              animationDelay: "0.5s",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
            className="text-4xl md:text-6xl font-serif font-light text-cream tracking-wider leading-tight mt-2 opacity-0 animate-fade-in drop-shadow-lg text-center lg:text-5xl"
          >
            {t("home.heroTitle")}
          </h2>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-cream/50 animate-pulse" />
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-charcoal leading-relaxed mb-12 opacity-0 animate-fade-in-up whitespace-pre-line"
              style={{ animationDelay: "0.2s" }}
            >
              {t("home.brandIntroTitle")}
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-warm-gray font-light leading-relaxed">
              <p
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                {t("home.brandIntroText1")}
              </p>
              <p
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                {t("home.brandIntroText2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="jewelry-series" className="section-padding bg-background">
        <div className="container-luxury">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-charcoal text-center mb-16">
            {t("home.jewelrySeriesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {jewelrySeries.map((series, index) => (
              <div
                key={series.id}
                className="group opacity-0 animate-fade-in-up cursor-pointer transition-all duration-500 hover:-translate-y-3"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-6 border border-transparent group-hover:border-gold/40 transition-all duration-500 shadow-sm group-hover:shadow-xl">
                  <img
                    src={series.image}
                    alt={t(series.nameKey)}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl md:text-2xl font-serif text-charcoal inline-block relative">
                    <span className="relative after:content-[''] after:absolute after:w-full after:h-px after:bottom-0 after:left-0 after:bg-charcoal after:scale-x-0 after:origin-center after:transition-transform after:duration-500 group-hover:after:scale-x-100">
                      {t(series.nameKey).replace("®", "")}
                    </span>
                    <sup className="text-xs align-super ml-0.5">®</sup>
                  </h3>
                </div>

                <div className="text-center">
                  {series.available ? (
                    <LocaleLink
                      href={series.link}
                      className="luxury-button inline-flex items-center gap-2 transition-all duration-300 hover:bg-charcoal hover:text-cream hover:border-charcoal"
                    >
                      {t("home.exploreNow")}
                      <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </LocaleLink>
                  ) : (
                    <span className="luxury-button opacity-50 cursor-not-allowed">
                      {t("home.comingSoon")}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${philosophyBanner})` }}
        >
          <div className="absolute inset-0 bg-charcoal/40" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-serif font-light text-cream leading-relaxed drop-shadow-lg text-center lg:text-3xl">
            {t("home.philosophyText")}
          </h2>
        </div>
      </section>
    </Layout>
  );
}
