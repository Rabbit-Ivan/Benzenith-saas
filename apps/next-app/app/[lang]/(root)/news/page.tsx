"use client";

import { Calendar, MessageCircle } from "lucide-react";

import Layout from "@/components/benzenith/layout/Layout";
import LocaleLink from "@/components/benzenith/locale-link";

export default function NewsPage() {
  const articles = [
    {
      id: 1,
      title: "為什麼經典時尚永遠流行?",
      excerpt:
        "探索經典設計如何在時尚界保持其永恆的魅力，以及為什麼投資經典單品是明智的選擇。",
      category: "標準",
      date: "2023年1月7日",
      comments: 1,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    },
    {
      id: 2,
      title: "引領潮流的時尚影響者值得追隨",
      excerpt:
        "發現那些正在重新定義珠寶與時尚界限的創意先鋒，了解他們如何影響當代設計。",
      category: "標準",
      date: "2023年1月6日",
      comments: 0,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    },
    {
      id: 3,
      title: "簡單但時尚的著裝創意",
      excerpt:
        "學習如何以簡約的方式搭配珠寶首飾，創造出優雅而不過度的造型。",
      category: "標準",
      date: "2023年1月5日",
      comments: 0,
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
    },
    {
      id: 4,
      title: "展現當代時尚之美",
      excerpt:
        "當代設計與傳統工藝的完美結合，探索現代珠寶設計的藝術之美。",
      category: "標準",
      date: "2023年1月4日",
      comments: 0,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80",
    },
    {
      id: 5,
      title: "報價帖子",
      excerpt: "聆聽來自設計師和收藏家的智慧之言，感受珠寶藝術的深層內涵。",
      category: "引用",
      date: "2023年1月3日",
      comments: 0,
      image: null,
    },
    {
      id: 6,
      title: "永不過時的配飾，讓每一季都煥然一新",
      excerpt:
        "了解哪些珠寶單品能夠跨越季節，成為您衣櫥中的常青之選。",
      category: "標準",
      date: "2023年1月2日",
      comments: 0,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80",
    },
  ];

  const tags = ["時尚", "想法", "靈感", "季節", "風格", "尖端", "趨勢"];

  return (
    <Layout>
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal leading-tight">
              品牌動向
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {articles.map((article, index) => (
                <article
                  key={article.id}
                  className="group opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {article.image && (
                    <LocaleLink href={`/news/${article.id}`} className="block mb-6 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </LocaleLink>
                  )}
                  <div>
                    <span className="inline-block px-3 py-1 bg-cream text-xs tracking-widest text-warm-gray uppercase mb-4">
                      {article.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif font-light text-charcoal mb-4 group-hover:text-gold transition-colors">
                      <LocaleLink href={`/news/${article.id}`}>
                        {article.title}
                      </LocaleLink>
                    </h2>
                    <p className="text-warm-gray font-light leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        {article.comments} 評論
                      </span>
                    </div>
                  </div>
                </article>
              ))}

              <div className="flex items-center justify-center gap-2 pt-8">
                <span className="px-4 py-2 bg-charcoal text-cream text-sm">1</span>
                <LocaleLink
                  href="/news?page=2"
                  className="px-4 py-2 bg-cream text-charcoal text-sm hover:bg-secondary transition-colors"
                >
                  頁 2
                </LocaleLink>
                <LocaleLink
                  href="/news?page=3"
                  className="px-4 py-2 bg-cream text-charcoal text-sm hover:bg-secondary transition-colors"
                >
                  頁 3
                </LocaleLink>
                <LocaleLink
                  href="/news?page=2"
                  className="px-4 py-2 bg-cream text-charcoal text-sm hover:bg-secondary transition-colors"
                >
                  &gt;
                </LocaleLink>
              </div>
            </div>

            <aside className="space-y-10">
              <div>
                <h3 className="text-lg font-serif text-charcoal mb-4">搜尋</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="搜尋..."
                    className="w-full px-4 py-3 bg-cream border border-border text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-serif text-charcoal mb-4">最近的帖子</h3>
                <div className="space-y-4">
                  {articles.slice(0, 4).map((article) => (
                    <LocaleLink
                      key={article.id}
                      href={`/news/${article.id}`}
                      className="block text-sm text-warm-gray hover:text-gold transition-colors"
                    >
                      {article.title}
                    </LocaleLink>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-serif text-charcoal mb-4">標籤</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <LocaleLink
                      key={tag}
                      href={`/news/tag/${tag}`}
                      className="px-3 py-1 bg-cream text-xs tracking-wider text-warm-gray hover:bg-charcoal hover:text-cream transition-colors"
                    >
                      {tag}
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-charcoal mb-8">
              訂閱更新!
            </h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="輸入您的郵箱"
                className="w-full px-6 py-4 bg-background border border-border text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <div className="flex items-start gap-3 text-left">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 accent-gold"
                />
                <label htmlFor="privacy" className="text-sm text-warm-gray">
                  我同意{" "}
                  <LocaleLink href="/privacy-policy" className="text-gold hover:underline">
                    隱私政策
                  </LocaleLink>
                </label>
              </div>
              <button type="submit" className="luxury-button-primary w-full">
                訂閱
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
