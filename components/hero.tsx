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
    <div className={`px-4 h-48 flex item-center relative sm:h-[550px] sm:px-10 sm:py-10`}>
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
          className={`flex flex-row w-full py-8 ${
            heroImageCategory === 'IAQ' ? 'text-black' : 'text-white'
          }
          sm:justify-between sm:-ml-10 sm:flex-col sm:py-10
          `}
        >
          <div className="flex-1 flex items-center justify-center flex-col sm:items-start sm:justify-start">
            {HeroBodyContents[heroImageCategory].intro ? (
              <h2 className="text-sm w-full pr-10 sm:text-xl">
                {HeroBodyContents[heroImageCategory].intro}
              </h2>
            ) : (
              <div className="sm:pt-7" />
            )}

            <h1 className="text-2xl w-full mt-2 font-bold pr-12 whitespace-pre-line sm:mt-4 sm:text-4xl sm:pr-0">
              {HeroBodyContents[heroImageCategory].title}
            </h1>

            <h2 className="text-xl whitespace-pre-line hidden sm:flex sm:mt-8">
              {HeroBodyContents[heroImageCategory].subTitle}
            </h2>
          </div>

          <div className="flex-1 flex justify-end items-end sm:w-full sm:justify-start sm:flex-none">
            <Link
              href="/booking"
              className="flexcenter bg-tr-red py-3 px-4 text-lg font-semibold w-fit h-1/3 sm:flex-none sm:text-2xl sm:p-4 sm:h-fit"
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
