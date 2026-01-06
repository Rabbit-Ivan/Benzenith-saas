"use client";

import { Mail, Phone, MapPin } from "lucide-react";
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-serif font-light text-charcoal mb-10">
                {t("contact.infoTitle")}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-charcoal mb-1">
                      {t("contact.address")}
                    </h3>
                    <p className="text-warm-gray">785 15h街, 辦公室 478 柏林</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-charcoal mb-1">
                      {t("contact.phone")}
                    </h3>
                    <a
                      href="tel:+18408412569"
                      className="text-warm-gray hover:text-gold transition-colors"
                    >
                      +1 840 841 25 69
                    </a>
                  </div>
                </div>
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

              <div className="mt-12 aspect-video bg-secondary overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.5871673694655!2d13.404953576755096!3d52.52000907981102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1703686400000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
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
