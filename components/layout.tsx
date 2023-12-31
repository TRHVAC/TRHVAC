import { ReactNode } from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import Seo from "./seo";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />

      <div className="m-h-screen h-fit max-w-screen-xl sm:max-w-screen-2xl sm:mx-auto">
        <Seo />

        <main>{children}</main>
      </div>

      <Footer />
    </>
  );
}
