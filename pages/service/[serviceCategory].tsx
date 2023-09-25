import React, { useMemo } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { THeroImageCategory, TR_ADVANTAGE_LIST } from '@utils/constants';
import Hero from '@components/hero';
import BookingInfoBox from '@components/bookingInfoBox';
import BookingInfoImg from '@public/services/booking-info.jpg';

import { ServiceCategory } from './constants';

const ServiceCategoryPage: NextPage = () => {
  const router = useRouter();
  const { serviceCategory } = router.query;

  const normalizedServiceCategory = useMemo(() => {
    if (typeof serviceCategory !== 'string') return null;

    return serviceCategory.toUpperCase() as Exclude<
      THeroImageCategory,
      'HOME' | 'BOOKING'
    >;
  }, [serviceCategory]);

  if (!normalizedServiceCategory) return <div>loading</div>;

  const serviceList = ServiceCategory[normalizedServiceCategory];

  return (
    <>
      <Hero heroImageCategory={normalizedServiceCategory} />

      {/* Our Service Section */}
      <div className="flexcenter flex-col mt-10 bg-tr-lightGray py-4 px-2">
        <div className="text-xl font-bold">Our Service</div>

        <div className="grid grid-cols-2 gap-2 px-4 mt-4 sm:grid-cols-3">
          {serviceList.map((service, index) => {
            return (
              <div className="flex flex-col mt-2" key={`${service.title}-${index}`}>
                <Image
                  className={`opacity-70 object-cover w-[95%] ${
                    normalizedServiceCategory === 'WATERHEATER' ? 'h-full' : 'h-fit'
                  } sm:h-[95%]`}
                  src={service.image}
                  alt={service.title}
                  placeholder="blur"
                />

                <div className="text-center mt-3 text-tr-blue text-l font-semibold">
                  {service.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Booking Info section */}
      <div className="sm:grid sm:grid-cols-2 mt-10">
        <div className="justify-center relative bg-[#2C3546B0]/100 hidden sm:flex">
          <div className="z-10 text-white leading-9 text-xl py-8">
            {TR_ADVANTAGE_LIST.map((advantage, idx) => (
              <div key={`${advantage}-${idx}`}>{advantage}</div>
            ))}
          </div>

          <div className="opacity-20 absolute w-full h-full">
            <Image
              src={BookingInfoImg}
              alt="Booking Info Image"
              placeholder="blur"
              sizes="100%"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex">
          <BookingInfoBox />
        </div>
      </div>
    </>
  );
};

export default ServiceCategoryPage;
