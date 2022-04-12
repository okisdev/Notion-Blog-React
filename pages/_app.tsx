import '../styles/globals.css';

import '../styles/notion.css';

import 'prismjs/themes/prism-tomorrow.css';

import 'katex/dist/katex.min.css';

import { appWithTranslation } from 'next-i18next';

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute='class'>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default appWithTranslation(MyApp);
