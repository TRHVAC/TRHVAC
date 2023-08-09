import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Hero } from '@components/Hero';
import ServiceImg from '@public/home/service.jpg';
import ServiceHeating from '@public/home/service-heating.jpg';
import ServiceCooling from '@public/home/service-cooling.jpg';
import ServiceIAQ from '@public/home/service-iaq.jpg';
import ServiceWaterHeater from '@public/home/service-water-heater.jpg';

const serviceItems = [
  { title: 'Heating', image: ServiceHeating },
  { title: 'Cooling', image: ServiceCooling },
  { title: 'Water Heaters', image: ServiceWaterHeater },
  { title: 'Indoor Air Quality Products', image: ServiceIAQ },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>TRHVAC</title>
      </Head>

      <Hero heroImageCategory="HOME" />

      <div className="flexcenter flex-col mt-10 bg-tr-lightGray">
        <div className="py-4 text-tr-blue text-xl font-bold">Our Service</div>

        <div className="flex">
          <div className="flex-1">
            <Image src={ServiceImg} alt="home-service" />
          </div>

          <div className="w-3" />

          <div className="grid gap-4 grid-cols-2 flex-1">
            {serviceItems.map((service, index) => (
              <Link
                key={index}
                href="/service"
                className="relative flexcenter overflow-hidden bg-[#444648A6]"
              >
                <div className="text-xl font-bold text-white z-10 text-center">
                  {service.title}
                </div>

                <div className="opacity-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    placeholder="blur"
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
