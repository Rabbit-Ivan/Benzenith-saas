"use client";

import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

import LocaleLink from "@/components/benzenith/locale-link";
import { Dialog, DialogContent, DialogTitle } from "@/components/benzenith/ui/dialog";

interface Product {
  id: string;
  name: string;
  subtitleEn: string;
  nameCn: string;
  subtitleCn: string;
  nameZhCN: string;
  subtitleZhCN: string;
  nameJa: string;
  subtitleJa: string;
  image: string;
  category: string;
}

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const productDescriptions: Record<
  string,
  {
    descriptionEn: string;
    descriptionCn: string;
    descriptionZhCN: string;
    descriptionJa: string;
  }
> = {
  "mother-of-pearl-necklace": {
    descriptionEn:
      "Light Flares with Wind, Breath Takes Shape in the Heart. Listen to the kindness under the moonlight—gentleness is also a power.",
    descriptionCn: "息啟則煥，瑩光永續。傾聽月光下的善意，溫柔也是一種力量。",
    descriptionZhCN: "息启则焕，莹光永续。倾听月光下的善意，温柔也是一种力量。",
    descriptionJa:
      "息吹きて輝き、永遠に輝く。月光の下の善意に耳を傾け、優しさもまた力なり。",
  },
  "mother-of-pearl-earrings": {
    descriptionEn:
      "As Drift Takes Form, Stillness Calms the Heart. Listen to the quiet voice within—you are your own strongest guardian.",
    descriptionCn:
      "影曳則凝，靜語寧心。傾聽內心的沉靜之語，你自己便是你最強大的守護。",
    descriptionZhCN:
      "影曳则凝，静语宁心。倾听内心的沉静之语，你自己便是你最强大的守护。",
    descriptionJa:
      "影曳けば凝り、静かなる言葉が心を鎮める。内なる静寂に耳を傾け、あなた自身が最も強き守護者。",
  },
  "hetian-jade-necklace": {
    descriptionEn:
      "Riffles Stir, Thoughts Unceasing. Let the vitality within your heart grow alongside good fortune.",
    descriptionCn: "意起則動，念湧不止。讓內心的生命力，隨著好運一同生長。",
    descriptionZhCN: "意起则动，念涌不止。让内心的生命力，随着好运一同生长。",
    descriptionJa:
      "意起これば動き、念は湧き続ける。内なる生命力を、幸運と共に育てよう。",
  },
  "blue-water-jadeite-necklace": {
    descriptionEn:
      "Crests and Swirls, the Heart's Truth Unfolds. Listen to the clarity within, and turn to find your own serenity.",
    descriptionCn: "瀾生則旋，心音自現。傾聽內心的澄澈，轉動屬於你的寧靜。",
    descriptionZhCN: "澜生则旋，心音自现。倾听内心的澄澈，转动属于你的宁静。",
    descriptionJa:
      "波生じて旋り、心の音自ら現る。内なる澄明に耳を傾け、あなただけの静寂を巡らせよう。",
  },
};

export default function ProductQuickView({
  product,
  isOpen,
  onClose,
}: ProductQuickViewProps) {
  const { t, i18n } = useTranslation();

  if (!product) {
    return null;
  }

  const getProductName = () => {
    if (i18n.language === "en") return product.name;
    if (i18n.language === "zh-CN") return product.nameZhCN;
    if (i18n.language === "ja") return product.nameJa;
    return product.nameCn;
  };

  const getProductSubtitle = () => {
    if (i18n.language === "en") return product.subtitleEn;
    if (i18n.language === "zh-CN") return product.subtitleZhCN;
    if (i18n.language === "ja") return product.subtitleJa;
    return product.subtitleCn;
  };

  const getProductDescription = () => {
    const desc = productDescriptions[product.id];
    if (!desc) return "";
    if (i18n.language === "en") return desc.descriptionEn;
    if (i18n.language === "zh-CN") return desc.descriptionZhCN;
    if (i18n.language === "ja") return desc.descriptionJa;
    return desc.descriptionCn;
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-none">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-charcoal hover:bg-gold hover:text-cream transition-colors"
        >
          <X className="w-5 h-5" />
          <span className="sr-only">{t("quickView.close")}</span>
        </button>

        <DialogTitle className="sr-only">{getProductName()}</DialogTitle>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square overflow-hidden bg-cream">
            <img
              src={product.image}
              alt={getProductName()}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-charcoal mb-2">
              {renderProductName()}
            </h2>

            {getProductSubtitle() && (
              <p className="text-sm text-warm-gray tracking-wide mb-6">
                {getProductSubtitle()}
              </p>
            )}

            {getProductDescription() && (
              <p className="text-warm-gray font-light leading-relaxed mb-8">
                {getProductDescription()}
              </p>
            )}

            <div className="space-y-3 mt-auto">
              <LocaleLink
                href={`/product/${product.id}`}
                onClick={onClose}
                className="luxury-button-primary w-full text-center block"
              >
                {t("quickView.viewDetails")}
              </LocaleLink>
              <LocaleLink
                href="/contact"
                onClick={onClose}
                className="w-full py-4 border border-border text-charcoal hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
              >
                {t("quickView.bookConsultation")}
              </LocaleLink>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
