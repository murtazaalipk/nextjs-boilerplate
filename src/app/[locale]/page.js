'use client';

import {useTranslations , useLocale} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
    const locale = useLocale();

  // This will log the current locale, e.g., 'en' or 'ur'
  console.log('Current locale:', locale);

  return (
    <div className="min-h-screen px-4 py-10 md:px-8 lg:px-16 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('description')}
        </p>
      </div>
    </div>
  );
}
