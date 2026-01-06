"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Heart, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

import Layout from "@/components/benzenith/layout/Layout";
import LocaleLink from "@/components/benzenith/locale-link";
import ProductQuickView from "@/components/benzenith/ProductQuickView";

const suixinshanHuanxi = "/benzenith/assets/products/suixinshan-huanxi.jpg";
const suixinshanYeying = "/benzenith/assets/products/suixinshan-yeying.jpg";
const suixinshanYongnian = "/benzenith/assets/products/suixinshan-yongnian.jpg";
const suixinshanXuanlan = "/benzenith/assets/products/suixinshan-xuanlan.jpg";

const benzizaiFuguang = "/benzenith/assets/products/benzizai-fuguang.jpg";
const benzizaiShengbeiEarrings = "/benzenith/assets/products/benzizai-shengbei-earrings.jpg";
const benzizaiBaohuluBracelet = "/benzenith/assets/products/benzizai-baohulu-bracelet.jpg";
const benzizaiDingcaijie = "/benzenith/assets/products/benzizai-dingcaijie.jpg";
const benzizaiJubaoben = "/benzenith/assets/products/benzizai-jubaoben.jpg";
const benzizaiShengbeiNecklace = "/benzenith/assets/products/benzizai-shengbei-necklace.jpg";
const benzizaiBaohuluNecklace = "/benzenith/assets/products/benzizai-baohulu-necklace.jpg";
const benzizaiTianfu = "/benzenith/assets/products/benzizai-tianfu.jpg";
const benzizaiYuanbaojieA = "/benzenith/assets/products/benzizai-yuanbaojie-a.jpg";
const benzizaiYuanbaojieB = "/benzenith/assets/products/benzizai-yuanbaojie-b.jpg";
const benzizaiYunzhou = "/benzenith/assets/products/benzizai-yunzhou.jpg";

const products = [
  {
    id: "mother-of-pearl-necklace",
    name: "Fan of Will Flare Necklace",
    subtitleEn: "Yellow Gold, Mother-of-pearl, Diamond",
    nameCn: "隨心扇·煥息",
    subtitleCn: "18K金 珍珠母貝 鑽石項鏈",
    nameZhCN: "随心扇·焕息",
    subtitleZhCN: "18K金 珍珠母贝 钻石项链",
    nameJa: "随心扇・煥息",
    subtitleJa: "18K金 マザーオブパール ダイヤモンドネックレス",
    image: suixinshanHuanxi,
    category: "suixinshan",
  },
  {
    id: "mother-of-pearl-earrings",
    name: "Fan of Will Drift Earrings",
    subtitleEn: "Yellow Gold, Black Iridescent Mother-of-pearl, Diamond",
    nameCn: "隨心扇·曳影",
    subtitleCn: "18K金 珍珠母貝 耳環",
    nameZhCN: "随心扇·曳影",
    subtitleZhCN: "18K金 珍珠母贝 耳环",
    nameJa: "随心扇・曳影",
    subtitleJa: "18K金 マザーオブパール イヤリング",
    image: suixinshanYeying,
    category: "suixinshan",
  },
  {
    id: "hetian-jade-necklace",
    name: "Fan of Will Riffle Necklace",
    subtitleEn: "Yellow Gold, Apple Green Nephrite Jade, Diamond",
    nameCn: "隨心扇·湧念",
    subtitleCn: "18K金 和田玉 鑽石項鏈",
    nameZhCN: "随心扇·涌念",
    subtitleZhCN: "18K金 和田玉 钻石项链",
    nameJa: "随心扇・湧念",
    subtitleJa: "18K金 ホータン翡翠 ダイヤモンドネックレス",
    image: suixinshanYongnian,
    category: "suixinshan",
  },
  {
    id: "blue-water-jadeite-necklace",
    name: "Fan of Will Cresta Necklace",
    subtitleEn: "Yellow Gold, Blue Water Jadeite, Diamond",
    nameCn: "隨心扇·旋瀾",
    subtitleCn: "18K金 藍水翡翠 鑽石項鏈",
    nameZhCN: "随心扇·旋澜",
    subtitleZhCN: "18K金 蓝水翡翠 钻石项链",
    nameJa: "随心扇・旋瀾",
    subtitleJa: "18K金 ブルーウォータージェダイト ダイヤモンドネックレス",
    image: suixinshanXuanlan,
    category: "suixinshan",
  },
  {
    id: "fuguang-necklace",
    name: "Zen Aura Necklace",
    subtitleEn:
      "Thick Plated 18K Gold, Red Agate, White Mother-of-Pearl, Black Onyx, and White Mother-of-Pearl Surrounded by zircon",
    nameCn: "福光 項鏈",
    subtitleCn: "厚鍍18K / 紅瑪瑙 / 白貝母 / 黑瑪瑙 / 白貝母碎鑽圍鑲",
    nameZhCN: "福光 项链",
    subtitleZhCN: "厚镀18K / 红玛瑙 / 白贝母 / 黑玛瑙 / 白贝母碎钻围镶",
    nameJa: "福光 ネックレス",
    subtitleJa: "厚メッキ18K / 赤メノウ / 白蝶貝 / 黒メノウ / ジルコン囲み",
    image: benzizaiFuguang,
    category: "benzizai",
  },
  {
    id: "shengbei-earrings",
    name: "Seng Pue Earrings",
    subtitleEn: "Thick Plated 18K Gold, Red Agate, Black Onyx, and White Mother-of-Pearl",
    nameCn: "聖杯 耳環",
    subtitleCn: "厚鍍18K / 白貝母 / 紅瑪瑙",
    nameZhCN: "圣杯 耳环",
    subtitleZhCN: "厚镀18K / 白贝母 / 红玛瑙",
    nameJa: "聖杯 イヤリング",
    subtitleJa: "厚メッキ18K / 白蝶貝 / 赤メノウ",
    image: benzizaiShengbeiEarrings,
    category: "benzizai",
  },
  {
    id: "baohulu-bracelet",
    name: "Fortune Fulu Chain Bracelet",
    subtitleEn: "Thick Plated 18K Gold, Red Agate and White Surrounded by zircon",
    nameCn: "寶葫蘆 手鏈",
    subtitleCn: "厚鍍18K / 紅瑪瑙 / 圍鑲",
    nameZhCN: "宝葫芦 手链",
    subtitleZhCN: "厚镀18K / 红玛瑙 / 围镶",
    nameJa: "宝葫芦 ブレスレット",
    subtitleJa: "厚メッキ18K / 赤メノウ / ジルコン囲み",
    image: benzizaiBaohuluBracelet,
    category: "benzizai",
  },
  {
    id: "dingcaijie-necklace",
    name: "Sycee Knot Necklace",
    subtitleEn: "Thick Plated 18K Gold, Black Onyx, White Mother-of-Pearl, and Red Agate",
    nameCn: "錠財結 項鏈",
    subtitleCn: "厚鍍18K / 黑瑪瑙 / 白貝母 / 紅瑪瑙",
    nameZhCN: "锭财结 项链",
    subtitleZhCN: "厚镀18K / 黑玛瑙 / 白贝母 / 红玛瑙",
    nameJa: "錠財結 ネックレス",
    subtitleJa: "厚メッキ18K / 黒メノウ / 白蝶貝 / 赤メノウ",
    image: benzizaiDingcaijie,
    category: "benzizai",
  },
  {
    id: "jubaoben-necklace",
    name: "Treasure Bowl Necklace",
    subtitleEn: "Thick Plated 18K Gold, Black Onyx, White Mother-of-Pearl, and Red Agate",
    nameCn: "聚寶盆 項鏈",
    subtitleCn: "厚鍍18K / 白貝母 / 紅瑪瑙 / 黑瑪瑙",
    nameZhCN: "聚宝盆 项链",
    subtitleZhCN: "厚镀18K / 白贝母 / 红玛瑙 / 黑玛瑙",
    nameJa: "聚宝盆 ネックレス",
    subtitleJa: "厚メッキ18K / 白蝶貝 / 赤メノウ / 黒メノウ",
    image: benzizaiJubaoben,
    category: "benzizai",
  },
  {
    id: "shengbei-necklace",
    name: "Seng Pue Necklace",
    subtitleEn: "Thick Plated 18K Gold, White Mother-of-Pearl, Black Onyx, and Red Agate",
    nameCn: "聖杯 項鏈",
    subtitleCn: "厚鍍18K / 白貝母 / 紅瑪瑙 / 黑瑪瑙",
    nameZhCN: "圣杯 项链",
    subtitleZhCN: "厚镀18K / 白贝母 / 红玛瑙 / 黑玛瑙",
    nameJa: "聖杯 ネックレス",
    subtitleJa: "厚メッキ18K / 白蝶貝 / 赤メノウ / 黒メノウ",
    image: benzizaiShengbeiNecklace,
    category: "benzizai",
  },
  {
    id: "baohulu-necklace",
    name: "Fortune Fulu Necklace",
    subtitleEn:
      "Thick Plated 18K Gold, Red Agate, White Mother-of-Pearl, Black Onyx, and White Mother-of-Pearl Surrounded by zircon",
    nameCn: "寶葫蘆 項鏈",
    subtitleCn: "厚鍍18K / 白貝母 / 紅瑪瑙 / 黑瑪瑙 / 圍鑲",
    nameZhCN: "宝葫芦 项链",
    subtitleZhCN: "厚镀18K / 白贝母 / 红玛瑙 / 黑玛瑙 / 围镶",
    nameJa: "宝葫芦 ネックレス",
    subtitleJa: "厚メッキ18K / 白蝶貝 / 赤メノウ / 黒メノウ / ジルコン囲み",
    image: benzizaiBaohuluNecklace,
    category: "benzizai",
  },
  {
    id: "tianfu-necklace",
    name: "TianFu Necklace",
    subtitleEn: "Thick Plated 18K Gold, Red Agate, and Black Onyx",
    nameCn: "天福 項鏈",
    subtitleCn: "厚鍍18K / 紅瑪瑙 / 黑瑪瑙",
    nameZhCN: "天福 项链",
    subtitleZhCN: "厚镀18K / 红玛瑙 / 黑玛瑙",
    nameJa: "天福 ネックレス",
    subtitleJa: "厚メッキ18K / 赤メノウ / 黒メノウ",
    image: benzizaiTianfu,
    category: "benzizai",
  },
  {
    id: "yuanbaojie-a-necklace",
    name: "Yunbow Knot (A) Necklace",
    subtitleEn: "Thick-plated 18K Gold, Tiger's Eye, Black Onyx, and Red Agate",
    nameCn: "元寶結（內鑲款） 項鏈",
    subtitleCn: "厚鍍18K / 虎睛石 / 紅瑪瑙 / 黑瑪瑙",
    nameZhCN: "元宝结（内镶款） 项链",
    subtitleZhCN: "厚镀18K / 虎睛石 / 红玛瑙 / 黑玛瑙",
    nameJa: "元宝結（内側款） ネックレス",
    subtitleJa: "厚メッキ18K / タイガーアイ / 赤メノウ / 黒メノウ",
    image: benzizaiYuanbaojieA,
    category: "benzizai",
  },
  {
    id: "yuanbaojie-b-necklace",
    name: "Yunbow Knot (B) Necklace",
    subtitleEn: "Thick-plated 18K Gold, Red Agate, Tiger's Eye, and Black Onyx",
    nameCn: "元寶結（外鑲款） 項鏈",
    subtitleCn: "厚鍍18K / 虎睛石 / 紅瑪瑙 / 黑瑪瑙",
    nameZhCN: "元宝结（外镶款） 项链",
    subtitleZhCN: "厚镀18K / 虎睛石 / 红玛瑙 / 黑玛瑙",
    nameJa: "元宝結（外側款） ネックレス",
    subtitleJa: "厚メッキ18K / タイガーアイ / 赤メノウ / 黒メノウ",
    image: benzizaiYuanbaojieB,
    category: "benzizai",
  },
  {
    id: "yunzhou-necklace",
    name: "Cloud Skiff Necklace",
    subtitleEn: "Thick Plated 18K Gold, Black Onyx, Red Agate, and White Mother-of-Pearl",
    nameCn: "雲舟 項鏈",
    subtitleCn: "厚鍍18K / 白貝母 / 紅瑪瑙 / 黑瑪瑙",
    nameZhCN: "云舟 项链",
    subtitleZhCN: "厚镀18K / 白贝母 / 红玛瑙 / 黑玛瑙",
    nameJa: "雲舟 ネックレス",
    subtitleJa: "厚メッキ18K / 白蝶貝 / 赤メノウ / 黒メノウ",
    image: benzizaiYunzhou,
    category: "benzizai",
  },
];

export default function CategoryPage() {
  const params = useParams();
  const categoryParam = params?.categoryId;
  const categoryId = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam;
  const { t, i18n } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(
    null,
  );
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedProduct(null);
  };

  const getCategoryName = () => {
    if (categoryId === "suixinshan") return t("series.suixinshan");
    if (categoryId === "benzizai") return t("series.benzizai");
    return t("series.tingwanxiang");
  };

  const renderCategoryName = () => {
    const name = getCategoryName();

    if (name.includes("®")) {
      const parts = name.split("®");
      return (
        <>
          {parts[0]}
          <sup className="text-[0.5em] align-super">®</sup>
          {parts[1] || ""}
        </>
      );
    }

    return name;
  };

  const filteredProducts = products.filter((product) => product.category === categoryId);
  const getProductName = (product: (typeof products)[0]) => {
    if (i18n.language === "en") return product.name;
    if (i18n.language === "zh-CN") return product.nameZhCN;
    if (i18n.language === "ja") return product.nameJa;
    return product.nameCn;
  };

  const renderProductName = (product: (typeof products)[0]) => {
    const name = getProductName(product);

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

  if (!categoryId) {
    return (
      <Layout>
        <div className="section-padding container-luxury text-center">
          <h1 className="text-2xl font-serif text-charcoal">{t("category.noProducts")}</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-light text-charcoal mb-4">
                {renderCategoryName()}
              </h1>
              <p className="text-sm text-warm-gray">
                {t("category.showingResults", { count: filteredProducts.length })}
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-warm-gray">{t("category.sortLatest")}</span>
              <select className="bg-transparent border border-border px-3 py-2 text-sm text-charcoal focus:outline-none">
                <option>{t("category.sortLatest")}</option>
                <option>{t("category.sortPopularity")}</option>
                <option>{t("category.sortRating")}</option>
                <option>{t("category.sortPriceLow")}</option>
                <option>{t("category.sortPriceHigh")}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-serif text-charcoal mb-4">
                {t("category.noProducts")}
              </h2>
              <p className="text-warm-gray">{t("category.comingSoon")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden aspect-[4/5] mb-6 border border-transparent group-hover:border-gold/40 transition-all duration-500">
                    <LocaleLink href={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={getProductName(product)}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </LocaleLink>
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <button className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:bg-gold hover:text-cream transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleQuickView(product)}
                        className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:bg-gold hover:text-cream transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-serif text-charcoal mb-2">
                      <LocaleLink href={`/product/${product.id}`}>
                        {renderProductName(product)}
                      </LocaleLink>
                    </h3>
                    <p className="text-xs text-warm-gray tracking-wide">
                      {i18n.language === "en"
                        ? product.subtitleEn
                        : i18n.language === "zh-CN"
                          ? product.subtitleZhCN
                          : i18n.language === "ja"
                            ? product.subtitleJa
                            : product.subtitleCn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-lg text-warm-gray mb-4 md:mb-0">
              {t("category.comingSoon")}
            </p>
            <LocaleLink
              href="/contact"
              className="luxury-button inline-flex items-center gap-2"
            >
              {t("product.inquire")}
            </LocaleLink>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-charcoal mb-8">
              {t("newsletter.title")}
            </h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="w-full px-6 py-4 bg-background border border-border text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <div className="flex items-start gap-3 text-left">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 accent-gold"
                />
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

      <ProductQuickView
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
      />
    </Layout>
  );
}
