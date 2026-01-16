"use client";

import { Mail } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

import Layout from "@/components/benzenith/layout/Layout";
import LocaleLink from "@/components/benzenith/locale-link";

export default function ContactPage() {
  const { t } = useTranslation();
  const afterSalesSectionId = "after-sales-form";
  const [formState, setFormState] = useState({
    name: "",
    subject: "",
    region: "",
    message: "",
  });

  const regionOptions = [
    {
      label: t("contact.sectionTwoRegionGreaterChina"),
      value: "csgc@benzenith.com",
    },
    {
      label: t("contact.sectionTwoRegionNorthAmerica"),
      value: "csna@benzenith.com",
    },
    {
      label: t("contact.sectionTwoRegionEurope"),
      value: "cseu@benzenith.com",
    },
    {
      label: t("contact.sectionTwoRegionAsiaPacific"),
      value: "csap@benzenith.com",
    },
  ];

  const handleFieldChange =
    (field: keyof typeof formState) =>
    (
      event:
        | ChangeEvent<HTMLInputElement>
        | ChangeEvent<HTMLTextAreaElement>
        | ChangeEvent<HTMLSelectElement>,
    ) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selectedRegion = regionOptions.find(
      (option) => option.value === formState.region,
    );

    if (!selectedRegion) {
      return;
    }

    const subject = `${t("contact.formMailSubjectPrefix")} - ${selectedRegion.label}`;
    const body = [
      `${t("contact.formNameLabel")}: ${formState.name}`,
      `${t("contact.formSubjectLabel")}: ${formState.subject}`,
      `${t("contact.formMessageLabel")}: ${formState.message}`,
    ].join("\n");

    const mailtoUrl = `mailto:${selectedRegion.value}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  const scrollToAfterSalesForm = () => {
    document
      .getElementById(afterSalesSectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

      <section id={afterSalesSectionId} className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-light text-charcoal">
                  {t("contact.sectionTwoSupportTitle")}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {t("contact.sectionTwoSupportCopy")}
                </p>
                <button
                  type="button"
                  className="luxury-button-primary"
                  onClick={scrollToAfterSalesForm}
                >
                  {t("contact.sectionTwoSupportCta")}
                </button>
              </div>
            </div>

            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    value={formState.name}
                    onChange={handleFieldChange("name")}
                    placeholder={t("contact.formNamePlaceholder")}
                    className="w-full px-6 py-4 bg-cream border border-border text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                  <select
                    value={formState.region}
                    onChange={handleFieldChange("region")}
                    className="w-full px-6 py-4 bg-cream border border-border text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">{t("contact.formRegionPlaceholder")}</option>
                    {regionOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={handleFieldChange("subject")}
                  placeholder={t("contact.formSubjectPlaceholder")}
                  className="w-full px-6 py-4 bg-cream border border-border text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                />
                <textarea
                  value={formState.message}
                  onChange={handleFieldChange("message")}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-light text-charcoal">
                  {t("contact.sectionTwoCustomTitle")}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {t("contact.sectionTwoCustomCopy")}
                </p>
                <a
                  href="mailto:partnership@benzenith.com"
                  className="text-gold hover:underline"
                >
                  partnership@benzenith.com
                </a>
              </div>
              <div className="space-y-4 pt-8 border-t border-border/40">
                <h3 className="text-2xl font-serif font-light text-charcoal">
                  {t("contact.sectionTwoBespokeTitle")}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {t("contact.sectionTwoBespokeCopy")}
                </p>
                <a
                  href="mailto:concierge@benzenith.com"
                  className="text-gold hover:underline"
                >
                  concierge@benzenith.com
                </a>
              </div>
            </div>
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
                      href="mailto:contact@benzenith.com"
                      className="text-warm-gray hover:text-gold transition-colors"
                    >
                      contact@benzenith.com
                    </a>
                  </div>
                </div>
              </div>
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
