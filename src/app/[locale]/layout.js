// src/app/[locale]/layout.js
import '../globals.css';
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import getRequestConfig from '@/i18n/request';
import {setRequestLocale} from 'next-intl/server';
import Script from 'next/script';
import ClientProviders from '@/components/ClientProvider';


const themeInitializerScript = `
  try {
    const persistRoot = localStorage.getItem("persist:root");
    if (persistRoot) {
      const theme = JSON.parse(JSON.parse(persistRoot).theme)?.mode;
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  } catch (_) {}
`;

export default async function LocaleLayout({children, params}) {
  // 1️⃣ Validate locale
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // 2️⃣ Tell next‑intl about this request
  setRequestLocale(locale);

  // 3️⃣ Load translation messages
  const {messages} = await getRequestConfig({requestLocale: locale});

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitializerScript}
        </Script>
      </head>

      <body>
        {/* All client wrappers live inside ClientProviders */}
        <ClientProviders locale={locale} messages={messages}>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}

/* Optional: prerender every locale */
export function generateStaticParams() {
  return routing.locales.map(locale => ({locale}));
}
