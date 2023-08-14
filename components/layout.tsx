import { ReactNode } from 'react';

import Navbar from './navbar';
import Footer from './footer';
import Seo from './Seo';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="m-h-screen h-fit max-w-7xl mx-auto">
      <Seo />

      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
