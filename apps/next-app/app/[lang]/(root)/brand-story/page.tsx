"use client";

import { useTranslation } from "react-i18next";

import Layout from "@/components/benzenith/layout/Layout";
import LocaleLink from "@/components/benzenith/locale-link";

const heroDesktop = "/benzenith/assets/brand-story/hero-desktop.jpg";
const heroMobile = "/benzenith/assets/brand-story/hero-mobile.jpg";
const inkRings = "/benzenith/assets/brand-story/ink-rings.jpg";
const jadeForms = "/benzenith/assets/brand-story/jade-forms.jpg";
const enlightenment = "/benzenith/assets/brand-story/enlightenment.jpg";
const goldJewel = "/benzenith/assets/brand-story/gold-jewel.jpg";

export default function BrandStoryPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="relative min-h-[720px] h-[78vh] max-h-[900px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroDesktop})` }}
        />
        <div
          className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroMobile})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 text-center text-cream px-6 max-w-4xl mx-auto">
          <p
            className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            {t("brandStory.heroEyebrow")}
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            {t("brandStory.heroTitle")}
          </h1>
          <p
            className="text-xl md:text-2xl font-light tracking-wider mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            {t("brandStory.heroTagline")}
          </p>
          <p
            className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10 opacity-80 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            {t("brandStory.heroQuote")}
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <LocaleLink
              href="/category/suixinshan"
              className="px-8 py-3 bg-cream text-charcoal text-sm tracking-widest uppercase hover:bg-gold hover:text-cream transition-colors"
            >
              {t("brandStory.exploreSeries")}
            </LocaleLink>
            <LocaleLink
              href="/contact"
              className="px-8 py-3 border border-cream text-cream text-sm tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-colors"
            >
              {t("brandStory.customDesign")}
            </LocaleLink>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#F5F0E8]">
        <div className="container-luxury">
          <div className="text-center mb-16 md:mb-24">
            <h2
              className="text-3xl md:text-5xl font-serif font-light text-charcoal mb-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              {t("brandStory.storyTitle")}
            </h2>
            <p
              className="text-lg md:text-xl text-warm-gray font-light opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              {t("brandStory.storySubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
            <div className="order-2 lg:order-1">
              <p className="text-sm tracking-[0.2em] text-gold uppercase mb-4">
                {t("brandStory.chapter1Kicker")}
              </p>
              <p className="text-lg md:text-xl text-charcoal font-light leading-relaxed">
                {t("brandStory.chapter1Text")}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src={inkRings}
                  alt="Ink Rings - The Origin of Goodness"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
            <div className="order-1">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src={jadeForms}
                  alt="Jade Forms - 1940 The Artisan's Brush"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            <div className="order-2 relative">
              <span className="absolute -top-8 -left-4 lg:-left-8 text-[80px] md:text-[120px] font-serif text-gold/20 leading-none select-none">
                {t("brandStory.chapter2Year")}
              </span>
              <div className="relative z-10">
                <p className="text-sm tracking-[0.2em] text-gold uppercase mb-4">
                  {t("brandStory.chapter2Kicker")}
                </p>
                <p className="text-lg md:text-xl text-charcoal font-light leading-relaxed">
                  {t("brandStory.chapter2Text")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
            <div className="order-2 lg:order-1">
              <p className="text-sm tracking-[0.2em] text-gold uppercase mb-4">
                {t("brandStory.chapter3Kicker")}
              </p>
              <p className="text-lg md:text-xl text-charcoal font-light leading-relaxed">
                {t("brandStory.chapter3Text")}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src={enlightenment}
                  alt="Enlightenment - The Shanshan Awakening"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-1">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src={goldJewel}
                  alt="Gold Jewel - Freedom Through Goodness"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            <div className="order-2">
              <p className="text-sm tracking-[0.2em] text-gold uppercase mb-4">
                {t("brandStory.chapter4Kicker")}
              </p>
              <p className="text-lg md:text-xl text-charcoal font-light leading-relaxed">
                {t("brandStory.chapter4Text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#1A1A1A] text-cream">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-lg md:text-xl font-light mb-6 opacity-80 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              {t("brandStory.closingQuestion")}
            </p>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-serif font-light mb-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              {t("brandStory.closingTitle")}
            </h2>
            <p
              className="text-lg md:text-xl font-light leading-relaxed mb-12 opacity-80 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              {t("brandStory.closingText")}
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <LocaleLink
                href="/category/suixinshan"
                className="px-8 py-3 bg-gold text-charcoal text-sm tracking-widest uppercase hover:bg-cream transition-colors"
              >
                {t("brandStory.exploreSeries")}
              </LocaleLink>
              <LocaleLink
                href="/contact"
                className="px-8 py-3 border border-cream text-cream text-sm tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-colors"
              >
                {t("brandStory.customDesign")}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
