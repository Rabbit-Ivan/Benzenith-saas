"use client";

import { useState } from "react";
import { usePathname, useParams, useRouter } from "next/navigation";
import { ShoppingBag, Search, Menu, X, ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

import LocaleLink from "@/components/benzenith/locale-link";
import { withAssetVersion } from "@/lib/assets";
import { config } from "@config";

const languages = [
  { code: "zh-TW", label: "中文(漢字)" },
  { code: "zh-CN", label: "中文(简体)" },
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isJewelryOpen, setIsJewelryOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const currentLangCode = (params?.lang as string) || "zh-TW";
  const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const isHome =
    pathname === `/${currentLangCode}` || pathname === `/${currentLangCode}/`;

  const scrollToJewelry = (event: React.MouseEvent) => {
    if (!isHome) {
      return;
    }

    event.preventDefault();
    const element = document.getElementById("jewelry-series");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);

    const prefix = `/${currentLangCode}`;
    const pathWithoutLocale = pathname.startsWith(prefix)
      ? pathname.slice(prefix.length) || "/"
      : pathname;
    const nextPath = `/${code}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;

    router.push(nextPath);
    document.cookie = `${config.app.i18n.cookieKey}=${code}; path=/; max-age=31536000`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000] backdrop-blur-sm border-b border-white/10">
      <div className="container-luxury">
        <div className="flex items-center justify-between h-20">
          <LocaleLink href="/" className="flex-shrink-0">
            <img
              src={withAssetVersion("/benzenith/assets/logo-light.png")}
              alt="BenZenith"
              className="h-6 md:h-8 w-auto"
            />
          </LocaleLink>

          <nav className="hidden md:flex items-center gap-10">
            <div className="relative group">
              <button
                onClick={scrollToJewelry}
                className="flex items-center gap-1 text-sm tracking-widest text-white hover:text-gold transition-colors uppercase"
              >
                {t("nav.jewelrySeries")}
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible translate-y-2 scale-95 origin-top group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out">
                <div className="bg-[#000000] border border-white/10 shadow-lg py-3 min-w-[280px]">
                  <LocaleLink
                    href="/category/suixinshan"
                    className="block px-5 py-2 text-sm tracking-wider text-white hover:text-gold hover:bg-white/10 transition-colors"
                  >
                    {t("series.suixinshan")}
                  </LocaleLink>
                  <LocaleLink
                    href="/category/benzizai"
                    className="block px-5 py-2 text-sm tracking-wider text-white hover:text-gold hover:bg-white/10 transition-colors"
                  >
                    {t("series.benzizai")}
                  </LocaleLink>
                  <div className="group/coming flex items-center justify-between px-5 py-2 cursor-default">
                    <span className="text-sm tracking-wider text-white/50">
                      {t("series.tingwanxiang")}
                    </span>
                    <span className="opacity-0 group-hover/coming:opacity-100 transition-opacity text-xs text-gold whitespace-nowrap ml-3">
                      {t("home.comingSoon")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <LocaleLink
              href="/news"
              className="text-sm tracking-widest text-white hover:text-gold transition-colors uppercase"
            >
              {t("nav.brandNews")}
            </LocaleLink>
            <LocaleLink
              href="/brand-story"
              className="text-sm tracking-widest text-white hover:text-gold transition-colors uppercase"
            >
              {t("nav.brandStory")}
            </LocaleLink>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block p-2 text-white hover:text-gold transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <LocaleLink
              href="/cart"
              className="relative p-2 text-white hover:text-gold transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-charcoal text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </LocaleLink>

            <div className="relative hidden md:block">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-xs tracking-wider text-white hover:text-gold transition-colors"
              >
                <Globe className="w-4 h-4" />
                {currentLang.label}
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute top-full right-0 mt-2 bg-[#000000] border border-white/10 shadow-lg py-2 min-w-[140px] transition-all duration-300 ease-out origin-top ${
                  isLangOpen
                    ? "opacity-100 visible translate-y-0 scale-100"
                    : "opacity-0 invisible -translate-y-2 scale-95"
                }`}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      i18n.language === lang.code
                        ? "text-gold bg-white/10"
                        : "text-white hover:text-gold hover:bg-white/5"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#000000] border-t border-white/10 animate-fade-in">
          <nav className="container-luxury py-6 space-y-4">
            <div>
              <button
                onClick={() => setIsJewelryOpen(!isJewelryOpen)}
                className="flex items-center justify-between w-full text-sm tracking-widest text-white uppercase py-2"
              >
                {t("nav.jewelrySeries")}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isJewelryOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  isJewelryOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 space-y-2">
                  <LocaleLink
                    href="/category/suixinshan"
                    className="block text-sm tracking-wider text-white/70 hover:text-gold py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("series.suixinshan")}
                  </LocaleLink>
                  <LocaleLink
                    href="/category/benzizai"
                    className="block text-sm tracking-wider text-white/70 hover:text-gold py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("series.benzizai")}
                  </LocaleLink>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-sm tracking-wider text-white/50">
                      {t("series.tingwanxiang")}
                    </span>
                    <span className="text-xs text-gold">{t("home.comingSoon")}</span>
                  </div>
                </div>
              </div>
            </div>
            <LocaleLink
              href="/news"
              className="block text-sm tracking-widest text-white uppercase py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.brandNews")}
            </LocaleLink>
            <LocaleLink
              href="/brand-story"
              className="block text-sm tracking-widest text-white uppercase py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.brandStory")}
            </LocaleLink>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-white/70 mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Language
              </p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 text-sm text-center transition-colors ${
                      i18n.language === lang.code
                        ? "bg-gold text-charcoal"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
