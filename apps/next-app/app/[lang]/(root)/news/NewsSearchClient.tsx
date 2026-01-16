"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import LocaleLink from "@/components/benzenith/locale-link";
import { newsArticles } from "@/lib/benzenith-news";

interface NewsSearchClientProps {
  searchLabel: string;
  noResultsText: string;
}

const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

export default function NewsSearchClient({
  searchLabel,
  noResultsText,
}: NewsSearchClientProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredArticles = useMemo(() => {
    if (!normalizedQuery) return [];
    return newsArticles.filter((article) => {
      const haystack =
        `${article.title} ${stripHtml(article.contentHtml)}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  const showResults = isFocused && normalizedQuery.length > 0;

  return (
    <div className="rounded-2xl border border-border bg-cream p-6 shadow-sm">
      <label
        htmlFor="news-search"
        className="text-xs tracking-[0.3em] uppercase text-warm-gray block mb-3"
      >
        {searchLabel}
      </label>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-gray/60" />
        <input
          id="news-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={searchLabel}
          className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-lg text-sm text-charcoal placeholder:text-warm-gray/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-300"
          autoComplete="off"
        />

        {/* Search Results Dropdown */}
        {showResults && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-cream border border-border rounded-xl shadow-lg overflow-hidden z-50">
            {filteredArticles.length > 0 ? (
              <ul className="max-h-64 overflow-y-auto">
                {filteredArticles.map((article) => (
                  <li key={article.id}>
                    <LocaleLink
                      href={`/news/${article.id}`}
                      className="block px-4 py-3 text-sm text-charcoal hover:bg-sand/50 hover:text-gold transition-colors border-b border-border/50 last:border-b-0"
                    >
                      <span className="line-clamp-2 font-serif font-light">
                        {article.title}
                      </span>
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-6 text-sm text-warm-gray text-center">
                {noResultsText}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
