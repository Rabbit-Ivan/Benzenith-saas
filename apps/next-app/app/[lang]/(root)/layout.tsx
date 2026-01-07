import type { ReactNode } from "react";

import BenzenithI18nProvider from "@/components/benzenith/benzenith-i18n-provider";

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <BenzenithI18nProvider lang={lang}>{children}</BenzenithI18nProvider>
  );
} 
