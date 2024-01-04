import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_en from '../src/components/Services/languages/en/global.json';
import global_es from '../src/components/Services/languages/es/global.json';

i18next.init({
    interpolation: { escapeValue: false },
    resources: {
        en: {
            global: global_en,
        },
        es: {
            global: global_es,
        }
    },
    lng: "en",
});

const root  = createRoot(document.getElementById('root') )

// Render app to root
root.render(
<I18nextProvider i18n={i18next}>
<App/>
</I18nextProvider>
);