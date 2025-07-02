'use client';

import './globals.css';
import ProviderWrapper from '@/redux/providers';
import { persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeWrapper from '@/component/ThemWrapper';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeWrapper>{children}</ThemeWrapper>
          </PersistGate>
        </ProviderWrapper>
      </body>
    </html>
  );
}