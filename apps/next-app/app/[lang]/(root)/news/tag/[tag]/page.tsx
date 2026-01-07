"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

import PlaceholderPage from "@/components/benzenith/PlaceholderPage";

export default function NewsTagPage() {
  const { t } = useTranslation();
  const params = useParams();
  const tagParam = params?.tag;
  const tag = Array.isArray(tagParam) ? tagParam[0] : tagParam;

  const title = tag ? (
    <>
      {t("news.tags")}：<span className="text-gold">{tag}</span>
    </>
  ) : (
    t("news.tags")
  );

  return (
    <PlaceholderPage
      title={title}
      description={t("home.comingSoon")}
      primaryAction={{ href: "/news", label: t("nav.brandNews") }}
      secondaryAction={{ href: "/", label: t("nav.home") }}
    />
  );
}
