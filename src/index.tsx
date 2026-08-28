/// <reference types="fbtee/ReactTypes.d.ts" />

import { createLocaleContext } from 'fbtee';
import './App.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import AvailableLanguages from './AvailableLanguages.tsx';

const LocaleContext = createLocaleContext({
  availableLanguages: AvailableLanguages,
  clientLocales: [navigator.language, ...navigator.languages],
  loadLocale: async (locale: string) => {
    if (locale === 'ja-JP') {
      return (await import('./translations/ja-JP.json')).default['ja-JP'];
    }

    return {};
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LocaleContext>
  </StrictMode>,
);
