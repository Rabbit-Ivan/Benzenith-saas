"use client";

import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import Layout from "@/components/benzenith/layout/Layout";
import LocaleLink from "@/components/benzenith/locale-link";
import { newsArticles } from "@/lib/benzenith-news";

const defaultNewsImage = "/benzenith/assets/news/news-1.png";

const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const extractExcerpt = (html: string) => {
  const match = html.match(/<p>(.*?)<\/p>/i);
  return stripHtml(match?.[1] ?? html);
};

const extractPreviewImage = (html: string) => {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] ?? defaultNewsImage;
};

export default function NewsPage() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const filteredArticles = useMemo(() => {
    if (!normalizedQuery) return newsArticles;
    return newsArticles.filter((article) => {
      const haystack = `${article.title} ${stripHtml(article.contentHtml)}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  const featuredArticle = filteredArticles[0];
  const listArticles = filteredArticles.slice(1);

  return (
    <Layout>
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-charcoal/10 blur-3xl" />
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center py-20 md:py-28">
            <p
              className="text-xs md:text-sm tracking-[0.4em] uppercase text-gold mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              {t("nav.brandNews")}
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal leading-tight opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              {t("news.title")}
            </h1>
            <div
              className="mt-10 flex items-center justify-center gap-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <span className="h-px w-16 bg-charcoal/40" />
              <span className="h-2 w-2 rounded-full bg-gold" />
              <span className="h-px w-16 bg-charcoal/40" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 lg:gap-16">
            <div className="space-y-12">
              {featuredArticle ? (
                <LocaleLink
                  href={`/news/${featuredArticle.id}`}
                  id={`news-${featuredArticle.id}`}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-cream shadow-sm transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 scroll-mt-28"
                >
                  <div className="grid md:grid-cols-[1.1fr_1fr]">
                    <div className="relative min-h-[240px] md:min-h-[320px] overflow-hidden">
                      <img
                        src={extractPreviewImage(featuredArticle.contentHtml)}
                        alt={featuredArticle.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-charcoal/10 to-transparent" />
                    </div>
                    <div className="flex flex-col justify-center gap-6 p-8 md:p-10">
                      <div className="flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-gold">
                        <span>{String(1).padStart(2, "0")}</span>
                        <span className="h-px w-10 bg-gold/60" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif font-light text-charcoal leading-snug">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-base text-warm-gray font-light leading-relaxed line-clamp-4">
                        {extractExcerpt(featuredArticle.contentHtml)}
                      </p>
                      <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-charcoal">
                        <span className="h-px w-10 bg-charcoal/40 group-hover:bg-gold transition-colors" />
                        <ArrowRight className="w-4 h-4 text-charcoal group-hover:text-gold transition-colors" />
                      </div>
                    </div>
                  </div>
                </LocaleLink>
              ) : (
                <div className="rounded-2xl border border-border bg-cream px-10 py-16 text-center text-warm-gray">
                  {t("news.noResults")}
                </div>
              )}

              {listArticles.length > 0 && (
                <div className="grid gap-8 md:grid-cols-2">
                  {listArticles.map((article, index) => (
                    <LocaleLink
                      key={article.id}
                      href={`/news/${article.id}`}
                      id={`news-${article.id}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-cream shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 scroll-mt-28 opacity-0 animate-fade-in-up"
                      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={extractPreviewImage(article.contentHtml)}
                          alt={article.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                      <div className="flex flex-1 flex-col gap-4 p-6">
                        <span className="text-xs tracking-[0.3em] uppercase text-gold">
                          {String(index + 2).padStart(2, "0")}
                        </span>
                        <h3 className="text-lg font-serif font-light text-charcoal leading-snug line-clamp-2 transition-colors group-hover:text-gold">
                          {article.title}
                        </h3>
                        <p className="text-sm text-warm-gray font-light leading-relaxed line-clamp-3">
                          {extractExcerpt(article.contentHtml)}
                        </p>
                        <div className="mt-auto flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-charcoal">
                          <span className="h-px w-8 bg-charcoal/40 group-hover:bg-gold transition-colors" />
                          <ArrowRight className="w-4 h-4 text-charcoal group-hover:text-gold transition-colors" />
                        </div>
                      </div>
                    </LocaleLink>
                  ))}
                </div>
              )}
            </div>

            <aside className="space-y-8 lg:sticky lg:top-28 h-fit">
              <div className="rounded-2xl border border-border bg-cream p-6 shadow-sm">
                <label
                  htmlFor="news-search"
                  className="text-xs tracking-[0.3em] uppercase text-warm-gray block mb-3"
                >
                  {t("news.search")}
                </label>
                <input
                  id="news-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t("news.search")}
                  className="w-full px-5 py-3 bg-background border border-border text-sm text-charcoal placeholder:text-warm-gray/70 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="rounded-2xl border border-border bg-cream p-6 shadow-sm">
                <h3 className="text-xs tracking-[0.3em] uppercase text-warm-gray mb-4">
                  {t("news.recentPosts")}
                </h3>
                <div className="space-y-4">
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map((article, index) => (
                      <LocaleLink
                        key={article.id}
                        href={`#news-${article.id}`}
                        className="group flex items-start gap-3 text-charcoal transition-colors hover:text-gold"
                      >
                        <span className="mt-1 text-[10px] tracking-[0.3em] text-gold/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-serif font-light leading-snug group-hover:underline">
                          {article.title}
                        </span>
                      </LocaleLink>
                    ))
                  ) : (
                    <p className="text-sm text-warm-gray">{t("news.noResults")}</p>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
