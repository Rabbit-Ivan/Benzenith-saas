import type { ReactNode } from "react";

import BenzenithI18nProvider from "@/components/benzenith/benzenith-i18n-provider";

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <BenzenithI18nProvider lang={params.lang}>{children}</BenzenithI18nProvider>
  );
} 
