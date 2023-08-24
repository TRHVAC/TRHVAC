import { ReactNode } from 'react';

import Navbar from './navbar';
import Footer from './footer';
import Seo from './seo';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />

      <div className="m-h-screen h-fit mx-auto w-fit sm:max-w-screen-2xl ">
        <Seo />

        <main>{children}</main>
      </div>

      <Footer />
    </>
  );
}
