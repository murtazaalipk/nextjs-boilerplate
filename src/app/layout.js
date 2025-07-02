'use client';
import './globals.css';
import ProviderWrapper from '@/redux/providers';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@/redux/store';
import ThemeWrapper from '@/component/ThemWrapper';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
      </head>
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
