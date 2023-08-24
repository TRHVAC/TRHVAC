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
    <div className={`px-10 py-10 h-72 flex item-center relative sm:h-[550px]`}>
      <div className="-z-10">
        <Image
          src={getHeroImage()}
          alt="test hero"
          placeholder="blur"
          fill
          className="object-cover object-left"
        />
      </div>

      <div className="flex flex-row w-full sm:w-fit">
        {/* Border Line */}
        <div
          className={`w-20 border-solid border-y-8 border-l-8 ${
            heroImageCategory === 'IAQ' ? 'border-black' : 'border-white'
          } hidden sm:flex`}
        />

        <div
          className={`flex flex-row items-center py-10 w-full ${
            heroImageCategory === 'IAQ' ? 'text-black' : 'text-white'
          }
          sm:justify-between sm:-ml-10 sm:flex-col
          `}
        >
          <div className="flex-1">
            {HeroBodyContents[heroImageCategory].intro ? (
              <h2 className="text-sm sm:text-xl">
                {HeroBodyContents[heroImageCategory].intro}
              </h2>
            ) : (
              <div className="sm:pt-7" />
            )}

            <h1 className="text-2xl mt-2 pr-14 font-bold whitespace-pre-line sm:mt-4 sm:text-4xl sm:pr-0">
              {HeroBodyContents[heroImageCategory].title}
            </h1>

            <h2 className="text-xl whitespace-pre-line hidden sm:flex sm:mt-8">
              {HeroBodyContents[heroImageCategory].subTitle}
            </h2>
          </div>

          <div className="flex-1 flex justify-end sm:w-full sm:justify-start sm:flex-none">
            <Link
              href="/booking"
              className="flexcenter bg-tr-red py-3 px-4 text-xl font-semibold w-fit sm:flex-none sm:text-2xl sm:p-4"
            >
              Book a service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
