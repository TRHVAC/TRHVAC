import Link from "next/link";
import "../styles/globals.css";
import type { AppProps } from "next/app";

// blueprint of the whole project
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ul className="flex gap-3 bg-slate-400 p-3">
        <Link href="/">Home</Link>
        <Link href="/service">Service</Link>
        <Link href="/booking">Booking</Link>
      </ul>
      <Component {...pageProps} />
    </>
  );
}
