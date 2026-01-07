"use client";

import type { ReactNode } from "react";

import Layout from "@/components/benzenith/layout/Layout";
import LocaleLink from "@/components/benzenith/locale-link";

type PlaceholderAction = {
  href: string;
  label: string;
};

type PlaceholderPageProps = {
  title: ReactNode;
  description?: ReactNode;
  primaryAction?: PlaceholderAction;
  secondaryAction?: PlaceholderAction;
};

export default function PlaceholderPage({
  title,
  description,
  primaryAction,
  secondaryAction,
}: PlaceholderPageProps) {
  return (
    <Layout>
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-warm-gray font-light leading-relaxed mt-6">
                {description}
              </p>
            )}
            {(primaryAction || secondaryAction) && (
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                {primaryAction && (
                  <LocaleLink
                    href={primaryAction.href}
                    className="luxury-button-primary w-full sm:w-auto text-center"
                  >
                    {primaryAction.label}
                  </LocaleLink>
                )}
                {secondaryAction && (
                  <LocaleLink
                    href={secondaryAction.href}
                    className="luxury-button w-full sm:w-auto text-center"
                  >
                    {secondaryAction.label}
                  </LocaleLink>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
