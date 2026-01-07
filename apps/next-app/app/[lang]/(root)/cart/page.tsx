"use client";

import { useTranslation } from "react-i18next";

import PlaceholderPage from "@/components/benzenith/PlaceholderPage";

export default function CartPage() {
  const { t } = useTranslation();

  return (
    <PlaceholderPage
      title={t("cart.title")}
      description={t("home.comingSoon")}
      primaryAction={{ href: "/", label: t("nav.home") }}
      secondaryAction={{ href: "/contact", label: t("nav.contactUs") }}
    />
  );
}
