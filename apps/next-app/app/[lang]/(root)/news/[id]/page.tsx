"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

import PlaceholderPage from "@/components/benzenith/PlaceholderPage";

export default function NewsDetailPage() {
  const { t } = useTranslation();
  const params = useParams();
  const idParam = params?.id;
  const articleId = Array.isArray(idParam) ? idParam[0] : idParam;

  const title = articleId ? (
    <>
      {t("news.title")}
      <span className="text-gold"> · #{articleId}</span>
    </>
  ) : (
    t("news.title")
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
