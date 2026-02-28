import type { Metadata, Viewport } from "next";

import "../globals.css";
import { i18n } from '../i18n-config';
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/hooks/use-theme";
import { ThemeScript } from "@/components/theme-script";
import CookieConsent from "@/components/benzenith/CookieConsent";
import { fontVariables } from "@/lib/fonts";

const metadataByLocale: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  en: {
    title: "BenZenith",
    description: "Listen to kindness, let intention shape the heart.",
  },
};

const resolveAppBaseUrl = () => {
  const rawValue = process.env.APP_BASE_URL?.trim();
  if (!rawValue) return "http://localhost:7001";
  if (/^https?:\/\//i.test(rawValue)) return rawValue;
  return `https://${rawValue}`;
};

export async function generateViewport({ params }: { params: Promise<{ lang: string }> }): Promise<Viewport> {
  return {
    themeColor: "#0b0b0b",
  };
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const metadata = metadataByLocale[lang] || metadataByLocale.en;
  
  return {
    metadataBase: new URL(resolveAppBaseUrl()),
    title: metadata.title,
    description: metadata.description,
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.ico', type: 'image/svg+xml' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'mask-icon', url: '/logo.svg', color: '#3b82f6' },
        { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: metadata.title,
    },
    other: {
      'msapplication-TileColor': '#3b82f6',
      'msapplication-TileImage': '/mstile-150x150.png',
      'msapplication-config': 'none',
    },
    openGraph: {
      type: 'website',
      locale: lang,
      siteName: metadata.title,
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: '/android-chrome-512x512.png',
          width: 512,
          height: 512,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: metadata.title,
      description: metadata.description,
      images: ['/android-chrome-512x512.png'],
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  return (
    <html lang={lang} className={fontVariables} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
          <CookieConsent />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
} 
