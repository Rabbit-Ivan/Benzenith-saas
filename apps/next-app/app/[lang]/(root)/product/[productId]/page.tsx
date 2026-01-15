"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Heart, ChevronRight, Phone, Award, Gem, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

import Layout from "@/components/benzenith/layout/Layout";
import LocaleLink from "@/components/benzenith/locale-link";
import { withAssetVersion } from "@/lib/assets";

const suixinshanHuanxi = withAssetVersion(
  "/benzenith/assets/products/suixinshan-huanxi.jpg",
);
const suixinshanYeying = withAssetVersion(
  "/benzenith/assets/products/suixinshan-yeying.jpg",
);
const suixinshanYongnian = withAssetVersion(
  "/benzenith/assets/products/suixinshan-yongnian.jpg",
);
const suixinshanXuanlan = withAssetVersion(
  "/benzenith/assets/products/suixinshan-xuanlan.jpg",
);

const productData: Record<
  string,
  {
    id: string;
    name: string;
    subtitleEn: string;
    nameCn: string;
    nameZhCN: string;
    nameJa: string;
    subtitleCn: string;
    subtitleZhCN: string;
    subtitleJa: string;
    image: string;
    description: string;
    descriptionCn: string;
    descriptionZhCN: string;
    descriptionJa: string;
    details: string;
    detailsCn: string;
    detailsZhCN: string;
    detailsJa: string;
    category: string;
    categoryNameKey: string;
  }
> = {
  "mother-of-pearl-necklace": {
    id: "mother-of-pearl-necklace",
    name: "Fan of Will Flare Necklace",
    subtitleEn: "Yellow Gold, Mother-of-pearl, Diamond",
    nameCn: "隨心扇·煥息",
    nameZhCN: "随心扇·焕息",
    nameJa: "随心扇・煥息",
    subtitleCn: "18K黃金白貝鑽石項鏈",
    subtitleZhCN: "18K黄金白贝钻石项链",
    subtitleJa: "18Kイエローゴールド マザーオブパール ダイヤモンド ネックレス",
    image: suixinshanHuanxi,
    description:
      "Light Flares with Wind, Breath Takes Shape in the Heart. Listen to the kindness under the moonlight—gentleness is also a power.",
    descriptionCn: "息啟則煥，瑩光永續。傾聽月光下的善意，溫柔也是一種力量。",
    descriptionZhCN: "息启则焕，莹光永续。倾听月光下的善意，温柔也是一种力量。",
    descriptionJa:
      "息吹きて輝き、永遠に輝く。月光の下の善意に耳を傾け、優しさもまた力なり。",
    details:
      "Guided by the brand philosophy of 'listening to kindness, letting intention shape the heart,' we infuse the radiance of mother-of-pearl with the grace and inner strength of women. Carefully selected for its exceptional lustre, the mother-of-pearl centerpiece captures and reflects light with ethereal beauty.",
    detailsCn:
      "秉承「聽從善意，意行隨心」的品牌理念，我們將珍珠母貝的光輝與女性的優雅與內在力量融為一體。精心挑選的珍珠母貝以其卓越的光澤捕捉並反射光線，呈現出空靈之美。",
    detailsZhCN:
      "秉承「听从善意，意行随心」的品牌理念，我们将珍珠母贝的光辉与女性的优雅与内在力量融为一体。精心挑选的珍珠母贝以其卓越的光泽捕捉并反射光线，呈现出空灵之美。",
    detailsJa:
      "「善意に従い、心のままに」というブランド理念に基づき、マザーオブパールの輝きと女性の優雅さと内なる強さを融合させました。その卓越した輝きのために慎重に選ばれたマザーオブパールは、光を捉え反射し、幽玄な美しさを呈します。",
    category: "suixinshan",
    categoryNameKey: "series.suixinshan",
  },
  "mother-of-pearl-earrings": {
    id: "mother-of-pearl-earrings",
    name: "Fan of Will Drift Earrings",
    subtitleEn: "Yellow Gold, Black Iridescent Mother-of-pearl, Diamond",
    nameCn: "隨心扇·曳影",
    nameZhCN: "随心扇·曳影",
    nameJa: "随心扇・曳影",
    subtitleCn: "18K黃金黑彩貝鑽石耳環",
    subtitleZhCN: "18K黄金黑彩贝钻石耳环",
    subtitleJa: "18Kイエローゴールド ブラックマザーオブパール ダイヤモンド イヤリング",
    image: suixinshanYeying,
    description:
      "As Drift Takes Form, Stillness Calms the Heart. Listen to the quiet voice within—you are your own strongest guardian.",
    descriptionCn:
      "影曳則凝，靜語寧心。傾聽內心的沉靜之語，你自己便是你最強大的守護。",
    descriptionZhCN:
      "影曳则凝，静语宁心。倾听内心的沉静之语，你自己便是你最强大的守护。",
    descriptionJa:
      "影曳けば凝り、静かなる言葉が心を鎮める。内なる静寂に耳を傾け、あなた自身が最も強き守護者。",
    details:
      "Inspired by the brand philosophy of 'listening to kindness, letting intention shape the heart,' we infuse the mysterious beauty of black shell with profound strength and protective symbolism. Carefully selected for its deep hue and lustrous quality, these earrings feature exquisite mother-of-pearl set in 18K gold.",
    detailsCn:
      "靈感源自「聽從善意，意行隨心」的品牌理念，我們將黑貝的神秘之美注入深邃的力量與守護象徵。精心挑選深邃色澤與光澤品質的珍珠母貝，這對耳環以18K金鑲嵌，呈現優雅韻致。",
    detailsZhCN:
      "灵感源自「听从善意，意行随心」的品牌理念，我们将黑贝的神秘之美注入深邃的力量与守护象征。精心挑选深邃色泽与光泽品质的珍珠母贝，这对耳环以18K金镶嵌，呈现优雅韵致。",
    detailsJa:
      "「善意に従い、心のままに」というブランド理念に触発され、黒貝の神秘的な美しさに深い力と守護の象徴を込めました。深い色調と光沢のある品質のために慎重に選ばれたマザーオブパールを特徴とするこれらのイヤリングは、18Kゴールドにセットされています。",
    category: "suixinshan",
    categoryNameKey: "series.suixinshan",
  },
  "hetian-jade-necklace": {
    id: "hetian-jade-necklace",
    name: "Fan of Will Riffle Necklace",
    subtitleEn: "Yellow Gold, Apple Green Nephrite, Diamond",
    nameCn: "隨心扇·湧念",
    nameZhCN: "随心扇·涌念",
    nameJa: "随心扇・湧念",
    subtitleCn: "18K黃金蘋果綠和田玉鑽石項鏈",
    subtitleZhCN: "18K黄金苹果绿和田玉钻石项链",
    subtitleJa: "18Kイエローゴールド アップルグリーン和田玉 ダイヤモンド ネックレス",
    image: suixinshanYongnian,
    description:
      "Riffles Stir, Thoughts Unceasing. Let the vitality within your heart grow alongside good fortune.",
    descriptionCn: "意起則動，念湧不止。讓內心的生命力，隨著好運一同生長。",
    descriptionZhCN: "意起则动，念涌不止。让内心的生命力，随着好运一同生长。",
    descriptionJa:
      "意起これば動き、念は湧き続ける。内なる生命力を、幸運と共に育てよう。",
    details:
      "Drawing inspiration from the brand essence of 'listening to kindness, letting intention shape the heart,' we transform vibrant apple-green Hetian jade into an ancient yet lively banana leaf fan. The smooth, jade-like apple-green Hetian jade symbolizes growth, vitality, and prosperity.",
    detailsCn:
      "汲取「聽從善意，意行隨心」的品牌精髓，我們將鮮活的蘋果綠和田玉幻化為古老而靈動的芭蕉扇。溫潤如玉的蘋果綠和田玉象徵成長、活力與繁榮。",
    detailsZhCN:
      "汲取「听从善意，意行随心」的品牌精髓，我们将鲜活的苹果绿和田玉幻化为古老而灵动的芭蕉扇。温润如玉的苹果绿和田玉象征成长、活力与繁荣。",
    detailsJa:
      "「善意に従い、心のままに」というブランドの本質からインスピレーションを得て、鮮やかなアップルグリーンのホータン翡翠を古くも生き生きとした芭蕉扇に変身させました。温潤な玉のようなアップルグリーンのホータン翡翠は、成長、活力、繁栄を象徴しています。",
    category: "suixinshan",
    categoryNameKey: "series.suixinshan",
  },
  "blue-water-jadeite-necklace": {
    id: "blue-water-jadeite-necklace",
    name: "Fan of Will Cresta Necklace",
    subtitleEn: "Yellow Gold, Blue Water Jadeite, Diamond",
    nameCn: "隨心扇·旋瀾",
    nameZhCN: "随心扇·旋澜",
    nameJa: "随心扇・旋瀾",
    subtitleCn: "18K黃金藍水翡翠鑽石項鏈",
    subtitleZhCN: "18K黄金蓝水翡翠钻石项链",
    subtitleJa: "18Kイエローゴールド ブルーウォータージェダイト ダイヤモンド ネックレス",
    image: suixinshanXuanlan,
    description:
      "Crests and Swirls, the Heart's Truth Unfolds. Listen to the clarity within, and turn to find your own serenity.",
    descriptionCn: "瀾生則旋，心音自現。傾聽內心的澄澈，轉動屬於你的寧靜。",
    descriptionZhCN: "澜生则旋，心音自现。倾听内心的澄澈，转动属于你的宁静。",
    descriptionJa:
      "波生じて旋り、心の音自ら現る。内なる澄明に耳を傾け、あなただけの静寂を巡らせよう。",
    details:
      "Inspired by the brand's original philosophy of 'listening to kindness, letting intention shape the heart,' this design combines the elegant form of an ancient banana leaf fan with the rare, serene beauty of blue-water jadeite. This exceptional piece features rare blue-water jadeite known for its translucent clarity and calming blue-green hue.",
    detailsCn:
      "靈感源自品牌原創理念「聽從善意，意行隨心」，這一設計將古老芭蕉扇的優雅形態與稀有藍水翡翠的寧靜之美相結合。這件非凡之作採用稀有的藍水翡翠，以其通透的清澈度和寧靜的藍綠色調聞名。",
    detailsZhCN:
      "灵感源自品牌原创理念「听从善意，意行随心」，这一设计将古老芭蕉扇的优雅形态与稀有蓝水翡翠的宁静之美相结合。这件非凡之作采用稀有的蓝水翡翠，以其通透的清澈度和宁静的蓝绿色调闻名。",
    detailsJa:
      "「善意に従い、心のままに」というブランドのオリジナル哲学に触発されたこのデザインは、古代の芭蕉扇の優雅な形と、稀少で穏やかな美しさを持つブルーウォータージェダイトを組み合わせています。この卓越した作品は、その透明な明瞭さと穏やかな青緑色の色合いで知られる希少なブルーウォータージェダイトを特徴としています。",
    category: "suixinshan",
    categoryNameKey: "series.suixinshan",
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const productParam = params?.productId;
  const productId = Array.isArray(productParam) ? productParam[0] : productParam;
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("description");

  const product = productData[productId || "mother-of-pearl-necklace"];

  const getLocalizedText = (en: string, zhTW: string, zhCN: string, ja: string) => {
    if (i18n.language === "en") return en;
    if (i18n.language === "zh-CN") return zhCN;
    if (i18n.language === "ja") return ja;
    return zhTW;
  };

  const getProductName = () => {
    return getLocalizedText(product.name, product.nameCn, product.nameZhCN, product.nameJa);
  };

  const getProductSubtitle = () => {
    if (i18n.language === "en") return product.subtitleEn;
    return getLocalizedText("", product.subtitleCn, product.subtitleZhCN, product.subtitleJa);
  };

  const getProductDescription = () => {
    return getLocalizedText(
      product.description,
      product.descriptionCn,
      product.descriptionZhCN,
      product.descriptionJa,
    );
  };

  const getProductDetails = () => {
    return getLocalizedText(
      product.details,
      product.detailsCn,
      product.detailsZhCN,
      product.detailsJa,
    );
  };

  const renderProductName = () => {
    const name = getProductName();

    if (i18n.language === "en" && name.includes("Fan of Will")) {
      const parts = name.split("Fan of Will");
      return (
        <>
          Fan of Will<sup className="text-[0.5em] align-super">®</sup>
          {parts[1]}
        </>
      );
    }

    const brandMatch = name.match(/^(隨心扇|随心扇)/);
    if (brandMatch) {
      const brand = brandMatch[1];
      const rest = name.slice(brand.length);
      return (
        <>
          {brand}
          <sup className="text-[0.5em] align-super">®</sup>
          {rest}
        </>
      );
    }

    return name;
  };

  if (!product) {
    return (
      <Layout>
        <div className="section-padding container-luxury text-center">
          <h1 className="text-2xl font-serif text-charcoal">Product not found</h1>
        </div>
      </Layout>
    );
  }

  const relatedProducts = Object.values(productData)
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  const renderRelatedProductName = (item: typeof product) => {
    const name = getLocalizedText(item.name, item.nameCn, item.nameZhCN, item.nameJa);

    if (i18n.language === "en" && name.includes("Fan of Will")) {
      const parts = name.split("Fan of Will");
      return (
        <>
          Fan of Will<sup className="text-[0.5em] align-super">®</sup>
          {parts[1]}
        </>
      );
    }

    const brandMatch = name.match(/^(隨心扇|随心扇)/);
    if (brandMatch) {
      const brand = brandMatch[1];
      const rest = name.slice(brand.length);
      return (
        <>
          {brand}
          <sup className="text-[0.5em] align-super">®</sup>
          {rest}
        </>
      );
    }

    return name;
  };

  return (
    <Layout>
      <div className="bg-cream py-4">
        <div className="container-luxury">
          <nav className="flex items-center gap-2 text-sm text-warm-gray">
            <LocaleLink href="/" className="hover:text-gold transition-colors">
              {t("nav.home") || "Home"}
            </LocaleLink>
            <ChevronRight className="w-4 h-4" />
            <LocaleLink
              href={`/category/${product.category}`}
              className="hover:text-gold transition-colors"
            >
              {t(product.categoryNameKey)}
            </LocaleLink>
            <ChevronRight className="w-4 h-4" />
            <span className="text-charcoal truncate max-w-[200px]">{getProductName()}</span>
          </nav>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="opacity-0 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="aspect-square overflow-hidden bg-cream">
                <img
                  src={product.image}
                  alt={getProductName()}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>

            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-2xl md:text-3xl font-serif font-light text-charcoal mb-2">
                {renderProductName()}
              </h1>
              {getProductSubtitle() && (
                <p className="text-sm text-warm-gray tracking-wide mb-6">
                  {getProductSubtitle()}
                </p>
              )}
              <p className="text-warm-gray font-light leading-relaxed mb-8">
                {getProductDescription()}
              </p>

              <div className="space-y-4 mb-8">
                <LocaleLink
                  href="/contact"
                  className="luxury-button-primary w-full text-center block"
                >
                  {t("product.inquire")}
                </LocaleLink>
                <button className="w-full py-4 border border-border text-charcoal hover:border-gold transition-colors flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  {t("product.addToWishlist")}
                </button>
              </div>

              <div className="space-y-4 p-6 bg-cream mb-8">
                <p className="text-xs tracking-widest text-warm-gray uppercase">
                  {t("product.brandPromise")}
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-gold" />
                    <span className="text-sm text-charcoal">
                      {t("product.authenticGuarantee")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gem className="w-5 h-5 text-gold" />
                    <span className="text-sm text-charcoal">
                      {t("product.craftExcellence")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-gold" />
                    <span className="text-sm text-charcoal">
                      {t("product.lifetimeService")}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <Phone className="w-5 h-5 text-gold" />
                  <span className="text-sm text-charcoal">+852 XXXX XXXX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <div className="flex gap-8 mb-8 overflow-x-auto">
              {[
                { id: "description", label: t("product.description") },
                { id: "craftsmanship", label: t("product.craftsmanship") },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-sm tracking-widest uppercase pb-2 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-gold text-charcoal"
                      : "border-transparent text-muted-foreground hover:text-charcoal"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="max-w-3xl">
              {activeTab === "description" && (
                <p className="text-warm-gray font-light leading-relaxed">
                  {getProductDetails()}
                </p>
              )}
              {activeTab === "craftsmanship" && (
                <p className="text-warm-gray font-light leading-relaxed">
                  {t("product.craftsmanshipDesc")}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-charcoal text-center mb-12">
            {t("product.relatedProducts")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((item, index) => (
              <LocaleLink
                key={item.id}
                href={`/product/${item.id}`}
                className="group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={getLocalizedText(item.name, item.nameCn, item.nameZhCN, item.nameJa)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </div>
                <h3 className="text-sm font-medium text-charcoal mb-1 group-hover:text-gold transition-colors line-clamp-2">
                  {renderRelatedProductName(item)}
                </h3>
                {i18n.language !== "en" && (
                  <p className="text-xs text-warm-gray">
                    {getLocalizedText("", item.subtitleCn, item.subtitleZhCN, item.subtitleJa)}
                  </p>
                )}
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-charcoal mb-8">
              {t("newsletter.title")}
            </h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="w-full px-6 py-4 bg-cream border border-border text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <div className="flex items-start gap-3 text-left">
                <input type="checkbox" id="privacy" className="mt-1 w-4 h-4 accent-gold" />
                <label htmlFor="privacy" className="text-sm text-warm-gray">
                  {t("newsletter.privacyAgree")}{" "}
                  <LocaleLink href="/privacy-policy" className="text-gold hover:underline">
                    {t("newsletter.privacyPolicy")}
                  </LocaleLink>
                </label>
              </div>
              <button type="submit" className="luxury-button-primary w-full">
                {t("newsletter.subscribe")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
