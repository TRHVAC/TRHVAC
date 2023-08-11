import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

import Navbar from '@components/navbar';
import Footer from '@components/footer';

// blueprint of the whole project
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TR HVAC | Heating & Cooling</title>
        <meta
          name="description"
          content="TR HVAC offers professional heating and air conditioning services in Toronto"
        />
        <meta
          content="heating, cooling, hvac, ventilation, air conditioning, tr"
          name="keywords"
        />
      </Head>

      <Navbar />

      <div className="h-screen max-w-7xl mx-auto">
        <Component {...pageProps} />

        <Footer />
      </div>
    </>
  );
}
