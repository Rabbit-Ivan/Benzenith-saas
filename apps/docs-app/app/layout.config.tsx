import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';
import { Logo } from '@/components/ui/logo';
import { translations } from '@libs/i18n';
import { socialLinks } from '@libs/ui/social-links';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(locale: string): BaseLayoutProps {
  const t = translations[locale as keyof typeof translations] || translations.en;
  const socialIconLinks = socialLinks.map(({ label, href, Icon }) => ({
    type: 'icon' as const,
    text: label,
    label,
    url: href,
    external: true,
    icon: <Icon className="h-4 w-4" />,
  }));

  return {
    i18n,
    nav: {
      title: <Logo size="md" />,
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: t.docs.nav.docs,
        url: `/${locale}/docs`,
      },
      {
        text: t.docs.nav.blog,
        url: `/${locale}/blog`,
      },
      ...socialIconLinks,
    ],
  };
}
