export type CookieConsentValue = "accepted" | "rejected" | "deferred";

const CONSENT_COOKIE_NAME = "benzenith_cookie_consent";
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

const getCookieValue = (name: string) => {
  if (typeof document === "undefined") {
    return null;
  }

  const cookie = document.cookie
    .split(";")
    .map((entry) => entry.trim())
    .find((entry) => entry.startsWith(`${name}=`));

  if (!cookie) {
    return null;
  }

  return decodeURIComponent(cookie.slice(name.length + 1));
};

const setCookie = (name: string, value: string, options?: { maxAge?: number }) => {
  if (typeof document === "undefined") {
    return;
  }

  const base = `${name}=${encodeURIComponent(value)}; path=/; samesite=lax`;
  const maxAge = options?.maxAge ? `; max-age=${options.maxAge}` : "";
  document.cookie = `${base}${maxAge}`;
};

export const getCookieConsentValue = () => {
  const value = getCookieValue(CONSENT_COOKIE_NAME);

  if (value === "accepted" || value === "rejected" || value === "deferred") {
    return value;
  }

  return null;
};

export const setCookieConsentValue = (value: CookieConsentValue) => {
  if (value === "deferred") {
    setCookie(CONSENT_COOKIE_NAME, value);
    return;
  }

  setCookie(CONSENT_COOKIE_NAME, value, { maxAge: CONSENT_MAX_AGE_SECONDS });
};

export const cookieConsentCookieName = CONSENT_COOKIE_NAME;
