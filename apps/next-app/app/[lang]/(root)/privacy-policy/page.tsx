"use client";

import { useTranslation } from "react-i18next";

import PlaceholderPage from "@/components/benzenith/PlaceholderPage";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <PlaceholderPage
      title={t("newsletter.privacyPolicy")}
      description={t("home.comingSoon")}
      primaryAction={{ href: "/", label: t("nav.home") }}
    />
  );
}
