import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import Layout from "@/components/benzenith/layout/Layout";
import LocaleLink from "@/components/benzenith/locale-link";
import { newsArticles } from "@/lib/benzenith-news";
import { getServerTranslation } from "@/lib/i18n-server";
import NewsSearchClient from "./NewsSearchClient";

const defaultNewsImage = "/benzenith/assets/news/news-1.png";

// SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const { t } = await getServerTranslation(lang);

  return {
    title: `${t("news.title")} | BenZenith`,
    description: t("news.metaDescription"),
    keywords: t("news.metaKeywords"),
    openGraph: {
      title: `${t("news.title")} | BenZenith`,
      description: t("news.metaDescription"),
      type: "website",
      images: ["/benzenith/assets/news/news-1.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("news.title")} | BenZenith`,
      description: t("news.metaDescription"),
    },
    alternates: {
      canonical: `/${lang}/news`,
      languages: {
        "zh-CN": "/zh-CN/news",
        "zh-TW": "/zh-TW/news",
        en: "/en/news",
        ja: "/ja/news",
      },
    },
  };
}

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

// Simulated publish date for demo (in production, add to data model)
const getArticleDate = (id: number) => {
  const dates = [
    "2025-01-10",
    "2025-01-05",
    "2024-12-28",
    "2024-12-20",
    "2024-12-15",
    "2024-12-08",
  ];
  return dates[id - 1] || "2024-12-01";
};

const formatDate = (dateStr: string, lang: string) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const locale =
    lang === "zh-CN"
      ? "zh-CN"
      : lang === "zh-TW"
        ? "zh-TW"
        : lang === "ja"
          ? "ja-JP"
          : "en-US";
  return date.toLocaleDateString(locale, options);
};

// Estimate reading time (Chinese: ~400 chars/min, English: ~200 words/min)
const getReadingTime = (html: string, lang: string) => {
  const text = stripHtml(html);
  const isChinese = lang === "zh-CN" || lang === "zh-TW" || lang === "ja";
  const count = isChinese ? text.length : text.split(/\s+/).length;
  const wordsPerMinute = isChinese ? 400 : 200;
  return Math.max(1, Math.ceil(count / wordsPerMinute));
};

export default async function NewsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { t } = await getServerTranslation(lang);

  const featuredArticle = newsArticles[0];
  const listArticles = newsArticles.slice(1);

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: t("news.title"),
    description: t("news.metaDescription"),
    url: `https://benzenith.com/${lang}/news`,
    publisher: {
      "@type": "Organization",
      name: "BenZenith",
      logo: {
        "@type": "ImageObject",
        url: "https://benzenith.com/benzenith/assets/logo.png",
      },
    },
    blogPost: newsArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: extractExcerpt(article.contentHtml).slice(0, 160),
      image: extractPreviewImage(article.contentHtml),
      datePublished: getArticleDate(article.id),
      author: {
        "@type": "Organization",
        name: "BenZenith",
      },
      url: `https://benzenith.com/${lang}/news/${article.id}`,
    })),
  };

  return (
    <Layout>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cream">
        {/* Atmospheric background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-charcoal/5 blur-[80px]" />
        </div>

        <div className="container-luxury relative">
          <header className="max-w-4xl mx-auto text-center py-20 md:py-28">
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
            <p
              className="mt-6 text-base md:text-lg text-warm-gray font-light max-w-2xl mx-auto opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              {t("news.subtitle")}
            </p>
            <div
              className="mt-10 flex items-center justify-center gap-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <span className="h-px w-16 bg-charcoal/40" />
              <span className="h-2 w-2 rounded-full bg-gold" />
              <span className="h-px w-16 bg-charcoal/40" />
            </div>
          </header>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-12 lg:gap-16">
            {/* Articles Column */}
            <main className="space-y-16">
              {/* Featured Article */}
              {featuredArticle && (
                <article className="group">
                  <LocaleLink
                    href={`/news/${featuredArticle.id}`}
                    className="relative block overflow-hidden rounded-2xl border border-border bg-cream shadow-sm transition-all duration-500 hover:shadow-xl hover:border-gold/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
                  >
                    <div className="grid md:grid-cols-[1.2fr_1fr]">
                      {/* Image */}
                      <figure className="relative min-h-[280px] md:min-h-[380px] overflow-hidden">
                        <img
                          src={extractPreviewImage(featuredArticle.contentHtml)}
                          alt={featuredArticle.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.8,0.2,1)] group-hover:scale-105"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent" />
                        {/* Featured badge */}
                        <span className="absolute top-6 left-6 px-4 py-1.5 bg-gold/90 text-white text-xs tracking-[0.2em] uppercase rounded-full backdrop-blur-sm">
                          {t("news.featured")}
                        </span>
                      </figure>

                      {/* Content */}
                      <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
                        {/* Meta info */}
                        <div className="flex items-center gap-4 text-xs text-warm-gray">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <time dateTime={getArticleDate(featuredArticle.id)}>
                              {formatDate(
                                getArticleDate(featuredArticle.id),
                                lang
                              )}
                            </time>
                          </span>
                          <span className="h-1 w-1 rounded-full bg-warm-gray/50" />
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {getReadingTime(
                              featuredArticle.contentHtml,
                              lang
                            )}{" "}
                            {t("news.minRead")}
                          </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-serif font-light text-charcoal leading-snug group-hover:text-gold transition-colors duration-300">
                          {featuredArticle.title}
                        </h2>

                        <p className="text-base text-warm-gray font-light leading-relaxed line-clamp-3">
                          {extractExcerpt(featuredArticle.contentHtml)}
                        </p>

                        {/* Read more indicator */}
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs tracking-[0.2em] uppercase text-charcoal group-hover:text-gold transition-colors">
                            {t("news.readMore")}
                          </span>
                          <span className="h-px w-8 bg-charcoal/40 group-hover:w-12 group-hover:bg-gold transition-all duration-300" />
                          <ArrowRight className="w-4 h-4 text-charcoal group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </LocaleLink>
                </article>
              )}

              {/* Article Grid */}
              {listArticles.length > 0 && (
                <div className="grid gap-8 sm:grid-cols-2">
                  {listArticles.map((article, index) => (
                    <article
                      key={article.id}
                      className="group opacity-0 animate-fade-in-up"
                      style={{
                        animationDelay: `${0.1 + index * 0.1}s`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <LocaleLink
                        href={`/news/${article.id}`}
                        className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-cream shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-gold/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
                      >
                        {/* Image */}
                        <figure className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={extractPreviewImage(article.contentHtml)}
                            alt={article.title}
                            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.8,0.2,1)] group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </figure>

                        {/* Content */}
                        <div className="flex flex-1 flex-col gap-4 p-6">
                          {/* Meta info */}
                          <div className="flex items-center gap-3 text-xs text-warm-gray/80">
                            <time dateTime={getArticleDate(article.id)}>
                              {formatDate(getArticleDate(article.id), lang)}
                            </time>
                            <span className="h-1 w-1 rounded-full bg-warm-gray/40" />
                            <span>
                              {getReadingTime(article.contentHtml, lang)}{" "}
                              {t("news.minRead")}
                            </span>
                          </div>

                          <h3 className="text-lg font-serif font-light text-charcoal leading-snug line-clamp-2 group-hover:text-gold transition-colors duration-300">
                            {article.title}
                          </h3>

                          <p className="text-sm text-warm-gray font-light leading-relaxed line-clamp-2 flex-1">
                            {extractExcerpt(article.contentHtml)}
                          </p>

                          {/* Read more */}
                          <div className="mt-auto flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-charcoal">
                            <span className="h-px w-6 bg-charcoal/40 group-hover:w-10 group-hover:bg-gold transition-all duration-300" />
                            <ArrowRight className="w-4 h-4 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-300" />
                          </div>
                        </div>
                      </LocaleLink>
                    </article>
                  ))}
                </div>
              )}
            </main>

            {/* Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-28 h-fit">
              {/* Search */}
              <NewsSearchClient
                searchLabel={t("news.search")}
                noResultsText={t("news.noResults")}
              />

              {/* Recent Posts */}
              <nav
                className="rounded-2xl border border-border bg-cream p-6 shadow-sm"
                aria-label={t("news.recentPosts")}
              >
                <h2 className="text-xs tracking-[0.3em] uppercase text-warm-gray mb-5">
                  {t("news.recentPosts")}
                </h2>
                <ul className="space-y-4">
                  {newsArticles.slice(0, 5).map((article, index) => (
                    <li key={article.id}>
                      <LocaleLink
                        href={`/news/${article.id}`}
                        className="group flex items-start gap-3 text-charcoal transition-colors hover:text-gold"
                      >
                        <span className="mt-0.5 text-[10px] tracking-[0.3em] text-gold/60 font-light">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-serif font-light leading-snug group-hover:underline underline-offset-2">
                          {article.title}
                        </span>
                      </LocaleLink>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Newsletter CTA */}
              <div className="rounded-2xl border border-gold/20 bg-gradient-to-br from-cream to-sand/30 p-6 shadow-sm">
                <h2 className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
                  {t("news.stayUpdated")}
                </h2>
                <p className="text-sm text-warm-gray font-light leading-relaxed mb-4">
                  {t("news.newsletterHint")}
                </p>
                <LocaleLink
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-charcoal hover:text-gold transition-colors"
                >
                  <span>{t("news.subscribe")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </LocaleLink>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
