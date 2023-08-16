import type { AppProps } from 'next/app';
import '../styles/globals.css';

import Layout from '@components/layout';

// blueprint of the whole project
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
