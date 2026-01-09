"use client";

import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

import Layout from "@/components/benzenith/layout/Layout";
import LocaleLink from "@/components/benzenith/locale-link";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm tracking-widest text-warm-gray uppercase mb-4 block">
              {t("contact.kicker")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal leading-tight mb-6">
              {t("contact.title")}
            </h1>
            <p className="text-lg text-warm-gray font-light">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden bg-secondary">
              <img
                src="/benzenith/assets/contact/contact-section-1.png"
                alt={t("contact.sectionOneHeadline")}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-charcoal">
                {t("contact.sectionOneHeadline")}
              </h2>
              <p className="text-lg text-warm-gray font-light leading-relaxed">
                {t("contact.sectionOneCopy")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-light text-charcoal">
                  {t("contact.sectionTwoCustomTitle")}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {t("contact.sectionTwoCustomCopy")}{" "}
                  <a
                    href="mailto:concierge@benzenith.com"
                    className="text-gold hover:underline"
                  >
                    concierge@benzenith.com
                  </a>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-light text-charcoal">
                  {t("contact.sectionTwoSupportTitle")}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {t("contact.sectionTwoSupportCopy")}
                </p>
              </div>
              <div className="space-y-3 text-warm-gray">
                <p>
                  {t("contact.sectionTwoRegionGreaterChina")}{" "}
                  <a
                    href="mailto:csgc@benzenith.com"
                    className="text-gold hover:underline"
                  >
                    csgc@benzenith.com
                  </a>
                </p>
                <p>
                  {t("contact.sectionTwoRegionNorthAmerica")}{" "}
                  <a
                    href="mailto:csna@benzenith.com"
                    className="text-gold hover:underline"
                  >
                    csna@benzenith.com
                  </a>
                </p>
                <p>
                  {t("contact.sectionTwoRegionEurope")}{" "}
                  <a
                    href="mailto:cseu@benzenith.com"
                    className="text-gold hover:underline"
                  >
                    cseu@benzenith.com
                  </a>
                </p>
                <p>
                  {t("contact.sectionTwoRegionAsiaPacific")}{" "}
                  <a
                    href="mailto:csap@benzenith.com"
                    className="text-gold hover:underline"
                  >
                    csap@benzenith.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-serif font-light text-charcoal mb-10">
                {t("contact.infoTitle")}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-charcoal mb-1">
                      {t("contact.email")}
                    </h3>
                    <a
                      href="mailto:info@email.com"
                      className="text-warm-gray hover:text-gold transition-colors"
                    >
                      info@email.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-light text-charcoal mb-10">
                {t("contact.formTitle")}
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-6 py-4 bg-cream border border-border text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 bg-cream border border-border text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-6 py-4 bg-cream border border-border text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-6 py-4 bg-cream border border-border text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <textarea
                  placeholder={t("contact.messagePlaceholder")}
                  rows={6}
                  className="w-full px-6 py-4 bg-cream border border-border text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                />
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-4 h-4 accent-gold"
                  />
                  <label htmlFor="consent" className="text-sm text-warm-gray">
                    {t("contact.privacyConsent")}{" "}
                    <LocaleLink href="/privacy-policy" className="text-gold hover:underline">
                      {t("contact.privacyLink")}
                    </LocaleLink>
                    .
                  </label>
                </div>
                <button type="submit" className="luxury-button-primary">
                  {t("contact.submitButton")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-charcoal mb-8">
              {t("newsletter.title")}
            </h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="w-full px-6 py-4 bg-background border border-border text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <div className="flex items-start gap-3 text-left">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 accent-gold"
                />
                <label htmlFor="privacy" className="text-sm text-warm-gray">
                  {t("newsletter.privacyAgree")}{" "}
                  <LocaleLink href="/privacy-policy" className="text-gold hover:underline">
                    {t("newsletter.privacyPolicy")}
                  </LocaleLink>
                </label>
              </div>
              <button type="submit" className="luxury-button-primary w-full">
                {t("newsletter.subscribe")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
