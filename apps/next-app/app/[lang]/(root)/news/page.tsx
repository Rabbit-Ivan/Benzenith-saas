"use client";

import { useTranslation } from "react-i18next";

import Layout from "@/components/benzenith/layout/Layout";
import LocaleLink from "@/components/benzenith/locale-link";
import { newsArticles } from "@/lib/benzenith-news";

export default function NewsPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal leading-tight">
              {t("news.title")}
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-5xl mx-auto space-y-20">
            {newsArticles.map((article, index) => (
              <article
                key={article.id}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-light text-charcoal mb-6">
                  <LocaleLink href={`/news/${article.id}`} className="hover:text-gold transition-colors">
                    {article.title}
                  </LocaleLink>
                </h2>
                <div
                  className="prose prose-neutral max-w-none prose-headings:text-charcoal prose-p:text-warm-gray prose-li:text-warm-gray prose-strong:text-charcoal"
                  dangerouslySetInnerHTML={{ __html: article.contentHtml }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
