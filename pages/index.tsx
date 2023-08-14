import Image from 'next/image';
import Link from 'next/link';

import Hero from '@components/hero';
import ServiceImg from '@public/home/service.jpg';
import ServiceHeating from '@public/home/service-heating.jpg';
import ServiceCooling from '@public/home/service-cooling.jpg';
import ServiceIAQ from '@public/home/service-iaq.jpg';
import ServiceWaterHeater from '@public/home/service-water-heater.jpg';
import AboutImage from '@public/home/about.jpg';
import AdvantageBanner from '@public/home/advantage.jpg';
import { ACIcon } from '@components/icons/home/ACIcon';
import { BoilerIcon } from '@components/icons/home/BoilerIcon';
import { FurnaceIcon } from '@components/icons/home/FurnaceIcon';
import { GasLineIcon } from '@components/icons/home/GasLineIcon';
import { MaintenanceIcon } from '@components/icons/home/MaintenanceIcon';
import { TanklessIcon } from '@components/icons/home/TanklessIcon';

const serviceItems = [
  { title: 'Heating', image: ServiceHeating },
  { title: 'Cooling', image: ServiceCooling },
  { title: 'Water Heaters', image: ServiceWaterHeater },
  { title: 'Indoor Air Quality Products', image: ServiceIAQ },
];

const specialtyItems = [
  { title: 'A/C', icon: <ACIcon /> },
  { title: 'Furnace', icon: <FurnaceIcon /> },
  { title: 'Maintenance', icon: <MaintenanceIcon /> },
  { title: 'Gas Line', icon: <GasLineIcon /> },
  { title: 'Tankless', icon: <TanklessIcon /> },
  { title: 'Boiler', icon: <BoilerIcon /> },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero heroImageCategory="HOME" />

      {/* Our Service Section */}
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
                key={`${service.title}-${index}`}
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

      {/* About Section */}
      <div className="flex flex-row mt-16 bg-tr-lightGray">
        <div className="flex-[2_2_0%] p-10">
          <div className="font-bold text-tr-red text-xl">Your trusted partner</div>

          <div className="text-tr-blue font-medium text-3xl mt-2">
            TR Heating & Cooling
          </div>

          <div className="mt-4 whitespace-pre-line">
            Introducing TR Heating and Cooling, your trusted partner for all your HVAC
            needs in Greater Toronto Area. With over a decades of industry experience, our
            dedicated team of professionals is passionate about creating comfortable
            living spaces for Canadians throughout the year.
            {'\n'}
            {'\n'}
            At TR Heating and Cooling, our primary focus is ensuring complete customer
            satisfaction. Our mission is to help you save money, extend the lifespan of
            your appliances, and enhance the value of your home, all while ensuring your
            utmost comfort.
          </div>
        </div>

        <div className="flex-1 relative">
          <Image
            src={AboutImage}
            alt="Home-About"
            placeholder="blur"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      {/* Advantage Section */}
      <div className="flexcenter flex-row relative p-12 mt-24 overflow-hidden bg-tr-blue/80">
        <div className="text-white flex-1 text-center z-10">Service in GTA Area</div>

        <div className="text-white flex-1 text-center z-10">Gas & A/C Licensed</div>

        <div className="text-white flex-1 text-center z-10">TSSA & 2 Million Insured</div>

        <div className="text-white flex-1 text-center z-10">Affordable Price</div>

        <div className="opacity-50">
          <Image
            src={AdvantageBanner}
            alt={'Home-advantage-banner'}
            placeholder="blur"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      {/* Our Specialty Section */}
      <div className="flex flex-row bg-tr-lightGray mt-24">
        <div className="bg-tr-skyBlue flexcenter py-14">
          <div className="rotate-[270deg] whitespace-pre-line text-2xl text-white font-extrabold">
            @@ Years {'\n'} Experience
          </div>
        </div>

        <div className="flex-1 px-12">
          <div className="mt-6 text-tr-red text-xl font-bold text-center">
            Our Specialty
          </div>

          <div className="flex flex-row mt-5 font-medium">
            {specialtyItems.map((item, index) => {
              return (
                <div
                  className="flexcenter flex-col flex-1"
                  key={`${item.title}-${index}`}
                >
                  <div className="mb-2">{item.title}</div>
                  {item.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
