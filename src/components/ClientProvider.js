'use client';

import {NextIntlClientProvider} from 'next-intl';
import ProviderWrapper from '@/redux/providers';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from '@/redux/store';
import ThemeWrapper from '@/components/ThemWrapper';

/**
 * Wraps all client‑only providers (intl, Redux, persist, theme).
 * Receives `locale` and `messages` from the server layout.
 */
export default function ClientProviders({locale, messages, children}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ProviderWrapper>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeWrapper>{children}</ThemeWrapper>
        </PersistGate>
      </ProviderWrapper>
    </NextIntlClientProvider>
  );
}
