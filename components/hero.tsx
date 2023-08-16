import React, { FunctionComponent, useCallback } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { HeroBodyContents, THeroImageCategory } from '@utils/constants';
import HomeHero from '@public/hero/HomeHero.jpg';
import CoolingHero from '@public/hero/CoolingHero.jpg';
import HeatingHero from '@public/hero/HeatingHero.jpg';
import IAQHero from '@public/hero/IAQHero.jpg';
import WaterHeaterHero from '@public/hero/WaterHeaterHero.jpg';
import BookingHero from '@public/hero/BookingHero.jpg';

interface HeroProps {
  heroImageCategory: THeroImageCategory;
}

const Hero: FunctionComponent<HeroProps> = ({ heroImageCategory = 'HOME' }) => {
  const getHeroImage = useCallback((): StaticImageData => {
    switch (heroImageCategory) {
      case 'COOLING':
        return CoolingHero;

      case 'HEATING':
        return HeatingHero;

      case 'IAQ':
        return IAQHero;

      case 'WATERHEATER':
        return WaterHeaterHero;

      case 'BOOKING':
        return BookingHero;

      default:
        return HomeHero;
    }
  }, [heroImageCategory]);

  return (
    <div className={`px-10 py-10 h-[550px] flex item-center relative`}>
      <div className="-z-10">
        <Image
          src={getHeroImage()}
          alt="test hero"
          placeholder="blur"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <div className="flex flex-row">
        <div
          className={`w-20 border-solid border-y-8 border-l-8 ${
            heroImageCategory === 'IAQ' ? 'border-black' : 'border-white'
          }`}
        />

        <div
          className={`flex flex-col pt-20 -ml-10 relative ${
            heroImageCategory === 'IAQ' ? 'text-black' : 'text-white'
          }`}
        >
          {HeroBodyContents[heroImageCategory].intro ? (
            <h2 className="text-xl">{HeroBodyContents[heroImageCategory].intro}</h2>
          ) : (
            <div className="pt-7" />
          )}

          <h1 className="text-4xl font-bold mt-4 whitespace-pre-line">
            {HeroBodyContents[heroImageCategory].title}
          </h1>

          <h2 className="text-xl mt-8 whitespace-pre-line">
            {HeroBodyContents[heroImageCategory].subTitle}
          </h2>

          <Link
            href="/booking"
            className="flexcenter bg-tr-red p-4 w-52 text-2xl absolute bottom-0 mb-14"
          >
            Book a service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
