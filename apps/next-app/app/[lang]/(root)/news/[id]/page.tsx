"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

import Layout from "@/components/benzenith/layout/Layout";
import LocaleLink from "@/components/benzenith/locale-link";
import PlaceholderPage from "@/components/benzenith/PlaceholderPage";
import { getNewsArticleById } from "@/lib/benzenith-news";

export default function NewsDetailPage() {
  const { t } = useTranslation();
  const params = useParams();
  const idParam = params?.id;
  const articleId = Array.isArray(idParam) ? idParam[0] : idParam;
  const article = articleId ? getNewsArticleById(articleId) : undefined;

  if (!article) {
    return (
      <PlaceholderPage
        title={t("news.title")}
        description={t("home.comingSoon")}
        primaryAction={{ href: "/news", label: t("nav.brandNews") }}
        secondaryAction={{ href: "/", label: t("nav.home") }}
      />
    );
  }

  return (
    <Layout>
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-neutral max-w-none prose-headings:text-charcoal prose-p:text-warm-gray prose-li:text-warm-gray prose-strong:text-charcoal"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <LocaleLink href="/news" className="luxury-button-primary">
                {t("nav.brandNews")}
              </LocaleLink>
              <LocaleLink href="/" className="luxury-button">
                {t("nav.home")}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
