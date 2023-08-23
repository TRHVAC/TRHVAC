import React, { useMemo } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { THeroImageCategory } from '@utils/constants';
import Hero from '@components/hero';
import Map from '@components/map';

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

        <div className="grid grid-cols-3 gap-4 px-4 mt-4">
          {serviceList.map((service, index) => {
            return (
              <div className={`flex flex-col mt-2`} key={`${service.title}-${index}`}>
                <Image
                  className={`opacity-70 object-cover h-[90%]`}
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

      {/* Google Map */}
      <Map />
    </>
  );
};

export default ServiceCategoryPage;
