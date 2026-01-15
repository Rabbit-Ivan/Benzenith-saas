import {
  Cormorant_Garamond,
  Montserrat,
  Noto_Sans_SC,
  Noto_Sans_TC,
  Noto_Sans_JP,
  Noto_Serif_SC,
  Noto_Serif_TC,
  Noto_Serif_JP,
} from "next/font/google";

// Primary sans-serif font for body text
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-montserrat",
});

// Primary serif font for headings
export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

// CJK Sans fonts for Chinese/Japanese text
export const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-sc",
  preload: false, // Reduce initial bundle size
});

export const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-tc",
  preload: false,
});

export const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  preload: false,
});

// CJK Serif fonts for Chinese/Japanese headings
export const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-serif-sc",
  preload: false,
});

export const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-serif-tc",
  preload: false,
});

export const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-serif-jp",
  preload: false,
});

// Combined font variables for className
export const fontVariables = [
  montserrat.variable,
  cormorantGaramond.variable,
  notoSansSC.variable,
  notoSansTC.variable,
  notoSansJP.variable,
  notoSerifSC.variable,
  notoSerifTC.variable,
  notoSerifJP.variable,
].join(" ");
