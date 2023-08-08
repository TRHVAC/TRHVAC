import Head from 'next/head';
import Image from 'next/image';

import { Hero } from '@components/Hero';
import ServiceImg from '@public/home/service.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TRHVAC</title>
      </Head>

      <Hero heroImageCategory="HOME" />
    </div>
  );
}
