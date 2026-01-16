import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from "lucide-react";

import Layout from "@/components/benzenith/layout/Layout";
import LocaleLink from "@/components/benzenith/locale-link";
import { getNewsArticleById, newsArticles } from "@/lib/benzenith-news";
import { getServerTranslation } from "@/lib/i18n-server";

// Generate static params for all articles
export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: String(article.id),
  }));
}

// SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const { t } = await getServerTranslation(lang);
  const article = getNewsArticleById(id);

  if (!article) {
    return {
      title: `${t("news.title")} | BenZenith`,
    };
  }

  const excerpt = extractExcerpt(article.contentHtml).slice(0, 160);
  const image = extractPreviewImage(article.contentHtml);

  return {
    title: `${article.title} | BenZenith`,
    description: excerpt,
    openGraph: {
      title: article.title,
      description: excerpt,
      type: "article",
      images: [image],
      publishedTime: getArticleDate(article.id),
      authors: ["BenZenith"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: excerpt,
      images: [image],
    },
    alternates: {
      canonical: `/${lang}/news/${id}`,
      languages: {
        "zh-CN": `/zh-CN/news/${id}`,
        "zh-TW": `/zh-TW/news/${id}`,
        en: `/en/news/${id}`,
        ja: `/ja/news/${id}`,
      },
    },
  };
}

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

const getReadingTime = (html: string, lang: string) => {
  const text = stripHtml(html);
  const isChinese = lang === "zh-CN" || lang === "zh-TW" || lang === "ja";
  const count = isChinese ? text.length : text.split(/\s+/).length;
  const wordsPerMinute = isChinese ? 400 : 200;
  return Math.max(1, Math.ceil(count / wordsPerMinute));
};

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const { t } = await getServerTranslation(lang);
  const article = getNewsArticleById(id);

  // Get adjacent articles for navigation
  const currentIndex = newsArticles.findIndex((a) => a.id === Number(id));
  const prevArticle = currentIndex > 0 ? newsArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < newsArticles.length - 1
      ? newsArticles[currentIndex + 1]
      : null;

  // Get related articles (excluding current)
  const relatedArticles = newsArticles
    .filter((a) => a.id !== Number(id))
    .slice(0, 3);

  if (!article) {
    return (
      <Layout>
        <section className="section-padding bg-cream min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-charcoal mb-4">
              {t("news.notFound")}
            </h1>
            <LocaleLink href="/news" className="luxury-button-primary">
              {t("nav.brandNews")}
            </LocaleLink>
          </div>
        </section>
      </Layout>
    );
  }

  // JSON-LD structured data for article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: extractExcerpt(article.contentHtml).slice(0, 160),
    image: extractPreviewImage(article.contentHtml),
    datePublished: getArticleDate(article.id),
    dateModified: getArticleDate(article.id),
    author: {
      "@type": "Organization",
      name: "BenZenith",
      url: "https://benzenith.com",
    },
    publisher: {
      "@type": "Organization",
      name: "BenZenith",
      logo: {
        "@type": "ImageObject",
        url: "https://benzenith.com/benzenith/assets/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://benzenith.com/${lang}/news/${id}`,
    },
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
          <div className="absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-gold/8 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-charcoal/5 blur-[100px]" />
        </div>

        <div className="container-luxury relative">
          <header className="max-w-4xl mx-auto text-center py-16 md:py-24">
            {/* Breadcrumb */}
            <nav
              className="flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-warm-gray mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
              aria-label="Breadcrumb"
            >
              <LocaleLink
                href="/"
                className="hover:text-gold transition-colors"
              >
                {t("nav.home")}
              </LocaleLink>
              <span className="text-gold/60">/</span>
              <LocaleLink
                href="/news"
                className="hover:text-gold transition-colors"
              >
                {t("nav.brandNews")}
              </LocaleLink>
              <span className="text-gold/60">/</span>
              <span className="text-charcoal">{t("news.article")}</span>
            </nav>

            {/* Meta info */}
            <div
              className="flex items-center justify-center gap-4 text-xs text-warm-gray mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={getArticleDate(article.id)}>
                  {formatDate(getArticleDate(article.id), lang)}
                </time>
              </span>
              <span className="h-1 w-1 rounded-full bg-warm-gray/50" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {getReadingTime(article.contentHtml, lang)} {t("news.minRead")}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-charcoal leading-tight opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              {article.title}
            </h1>

            {/* Decorative divider */}
            <div
              className="mt-10 flex items-center justify-center gap-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <span className="h-px w-12 bg-charcoal/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="h-px w-12 bg-charcoal/30" />
            </div>
          </header>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto">
            {/* Article body */}
            <div
              className="prose prose-lg prose-neutral max-w-none
                prose-headings:font-serif prose-headings:font-light prose-headings:text-charcoal
                prose-h4:text-xl prose-h4:mt-10 prose-h4:mb-4
                prose-p:text-warm-gray prose-p:font-light prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg
                prose-li:text-warm-gray prose-li:font-light
                prose-strong:text-charcoal prose-strong:font-medium
                prose-a:text-gold prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-lg
                prose-figure:my-10
                prose-blockquote:border-l-gold prose-blockquote:bg-cream/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />

            {/* Share & Tags section */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs tracking-[0.2em] uppercase text-warm-gray">
                    {t("news.share")}
                  </span>
                  <button
                    className="p-2 rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
                    aria-label="Share"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <LocaleLink
                  href="/news"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-charcoal hover:text-gold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t("news.backToList")}</span>
                </LocaleLink>
              </div>
            </div>

            {/* Article Navigation */}
            <nav className="mt-12 grid sm:grid-cols-2 gap-4" aria-label="Article navigation">
              {prevArticle ? (
                <LocaleLink
                  href={`/news/${prevArticle.id}`}
                  className="group flex flex-col gap-2 p-6 rounded-2xl border border-border bg-cream hover:border-gold/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs tracking-[0.2em] uppercase text-warm-gray flex items-center gap-2">
                    <ArrowLeft className="w-3 h-3" />
                    {t("news.prevArticle")}
                  </span>
                  <span className="text-sm font-serif font-light text-charcoal group-hover:text-gold transition-colors line-clamp-2">
                    {prevArticle.title}
                  </span>
                </LocaleLink>
              ) : (
                <div />
              )}
              {nextArticle && (
                <LocaleLink
                  href={`/news/${nextArticle.id}`}
                  className="group flex flex-col gap-2 p-6 rounded-2xl border border-border bg-cream hover:border-gold/30 hover:shadow-md transition-all text-right"
                >
                  <span className="text-xs tracking-[0.2em] uppercase text-warm-gray flex items-center justify-end gap-2">
                    {t("news.nextArticle")}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="text-sm font-serif font-light text-charcoal group-hover:text-gold transition-colors line-clamp-2">
                    {nextArticle.title}
                  </span>
                </LocaleLink>
              )}
            </nav>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-luxury">
            <header className="text-center mb-12">
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
                {t("news.moreStories")}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-light text-charcoal">
                {t("news.relatedArticles")}
              </h2>
            </header>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <article key={relatedArticle.id} className="group">
                  <LocaleLink
                    href={`/news/${relatedArticle.id}`}
                    className="flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-background shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-gold/30 transition-all duration-500"
                  >
                    <figure className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={extractPreviewImage(relatedArticle.contentHtml)}
                        alt={relatedArticle.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.8,0.2,1)] group-hover:scale-105"
                        loading="lazy"
                      />
                    </figure>
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <time
                        dateTime={getArticleDate(relatedArticle.id)}
                        className="text-xs text-warm-gray/70"
                      >
                        {formatDate(getArticleDate(relatedArticle.id), lang)}
                      </time>
                      <h3 className="text-base font-serif font-light text-charcoal leading-snug line-clamp-2 group-hover:text-gold transition-colors">
                        {relatedArticle.title}
                      </h3>
                    </div>
                  </LocaleLink>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
