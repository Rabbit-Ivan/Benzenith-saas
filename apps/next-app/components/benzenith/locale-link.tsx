"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import type { ComponentProps } from "react";

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

const isExternalHref = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:") ||
  href.startsWith("#");

export default function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const params = useParams();
  const lang = (params?.lang as string) || "zh-TW";

  if (isExternalHref(href)) {
    return <Link href={href} {...props} />;
  }

  const normalized = href.startsWith("/") ? href : `/${href}`;
  const resolvedHref = `/${lang}${normalized}`;

  return <Link href={resolvedHref} {...props} />;
}
