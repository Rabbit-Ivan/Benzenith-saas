"use client";

import { useTranslation } from "react-i18next";

import Layout from "@/components/benzenith/layout/Layout";
import { setCookieConsentValue } from "@/lib/cookie-consent";

export default function CookieSettingsPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-light text-charcoal">
              {t("cookieSettings.title")}
            </h1>
            <p className="mt-4 text-lg text-warm-gray font-light">
              {t("cookieSettings.description")}
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              className="luxury-button-primary w-full sm:w-auto"
              onClick={() => setCookieConsentValue("accepted")}
            >
              {t("cookieConsent.acceptAll")}
            </button>
            <button
              type="button"
              className="luxury-button w-full sm:w-auto"
              onClick={() => setCookieConsentValue("rejected")}
            >
              {t("cookieConsent.rejectAll")}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
