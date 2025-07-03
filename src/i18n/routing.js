import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ur'],   // ✅ added Urdu
  defaultLocale: 'en'
});
