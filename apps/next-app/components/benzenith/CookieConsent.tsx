"use client";

import { X } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import LocaleLink from "@/components/benzenith/locale-link";
import i18n, {
  benzenithLocales,
  type BenzenithLocale,
} from "@/lib/benzenith-i18n";
import {
  getCookieConsentValue,
  setCookieConsentValue,
  type CookieConsentValue,
} from "@/lib/cookie-consent";

const resolveInitialOpen = () => {
  const current = getCookieConsentValue();
  return current === null;
};

const FOCUSABLE_SELECTORS =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const getFocusableElements = (container: HTMLElement | null) => {
  if (!container) {
    return [];
  }

  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)).filter(
    (element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true",
  );
};

export default function CookieConsent() {
  const { t } = useTranslation();
  const params = useParams();
  const lang = (params?.lang as string) || "zh-TW";
  const [isOpen, setIsOpen] = useState(false);
  const acceptButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nextLang = benzenithLocales.includes(lang as BenzenithLocale)
      ? (lang as BenzenithLocale)
      : "zh-TW";

    if (i18n.language !== nextLang) {
      i18n.changeLanguage(nextLang);
    }
  }, [lang]);

  useEffect(() => {
    setIsOpen(resolveInitialOpen());
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      acceptButtonRef.current?.focus();
    }
  }, [isOpen]);

  const handleChoice = (value: CookieConsentValue) => {
    setCookieConsentValue(value);
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-charcoal/70 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          handleChoice("deferred");
          return;
        }

        if (event.key !== "Tab") {
          return;
        }

        const focusable = getFocusableElements(dialogRef.current);
        if (focusable.length === 0) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const activeElement = document.activeElement as HTMLElement | null;

        if (event.shiftKey) {
          if (!activeElement || activeElement === first) {
            event.preventDefault();
            last.focus();
          }
          return;
        }

        if (activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-2xl bg-cream text-charcoal shadow-xl"
      >
        <button
          type="button"
          onClick={() => handleChoice("deferred")}
          className="absolute right-4 top-4 text-warm-gray hover:text-charcoal transition-colors"
          aria-label={t("cookieConsent.close")}
        >
          <X className="h-4 w-4" />
        </button>
        <div className="px-6 py-8 md:px-10 md:py-10">
          <h2
            id="cookie-consent-title"
            className="text-2xl md:text-3xl font-serif font-light text-charcoal"
          >
            {t("cookieConsent.title")}
          </h2>
          <p className="mt-4 text-base text-warm-gray leading-relaxed">
            {t("cookieConsent.description")}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              ref={acceptButtonRef}
              type="button"
              className="luxury-button-primary w-full sm:w-auto"
              onClick={() => handleChoice("accepted")}
            >
              {t("cookieConsent.acceptAll")}
            </button>
            <button
              type="button"
              className="luxury-button w-full sm:w-auto"
              onClick={() => handleChoice("rejected")}
            >
              {t("cookieConsent.rejectAll")}
            </button>
            <button
              type="button"
              className="luxury-button w-full sm:w-auto"
              onClick={() => handleChoice("deferred")}
            >
              {t("cookieConsent.defer")}
            </button>
          </div>
          <div className="mt-6 text-sm text-warm-gray">
            <LocaleLink
              href="/cookie-settings"
              className="text-gold hover:underline"
              onClick={() => handleChoice("deferred")}
            >
              {t("cookieConsent.settings")}
            </LocaleLink>
          </div>
        </div>
      </div>
    </div>
  );
}
