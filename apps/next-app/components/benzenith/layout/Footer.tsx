"use client";

import { useTranslation } from "react-i18next";

import LocaleLink from "@/components/benzenith/locale-link";
import { socialLinks } from "@libs/ui/social-links";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <div className="container-luxury py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-white/10">
          <LocaleLink href="/" className="flex-shrink-0">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/benzenith/assets/footer-logo-mobile.jpg"
                type="image/jpeg"
              />
              <img
                src="/benzenith/assets/footer-logo.png"
                alt="BenZenith"
                className="h-10 md:h-12 w-auto max-w-[160px] md:max-w-[200px] object-contain"
                loading="lazy"
              />
            </picture>
          </LocaleLink>
          <nav className="flex flex-wrap gap-6 md:gap-10">
            <LocaleLink
              href="/contact"
              className="text-sm tracking-widest text-footer-foreground hover:text-cream transition-colors uppercase"
            >
              {t("nav.contactUs")}
            </LocaleLink>
            <LocaleLink
              href="/cookie-settings"
              className="text-sm tracking-widest text-footer-foreground hover:text-cream transition-colors uppercase"
            >
              {t("footer.cookieSettings")}
            </LocaleLink>
            <span className="text-sm tracking-widest text-footer-foreground uppercase cursor-default">
              {t("footer.followUs")}
            </span>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          <div></div>
          <div className="text-center">
            <p className="text-sm text-footer-foreground/70">{t("footer.businessCoop")}</p>
          </div>
          <div className="flex gap-4 md:justify-end">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-footer-foreground hover:text-cream transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-footer-foreground/50">
            © {new Date().getFullYear()} BenZenith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
