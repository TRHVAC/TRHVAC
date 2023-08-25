import Image from 'next/image';
import Link from 'next/link';

import Hero from '@components/hero';

import AboutImage from '@public/home/about.jpg';
import AdvantageBanner from '@public/home/advantage.jpg';
import ServiceImg from '@public/home/service.jpg';
import { StarIcon } from '@components/icons/StarIcon';
import { ReviewCustomerA } from '@components/icons/home/ReviewCustomerA';
import { ReviewCustomerB } from '@components/icons/home/ReviewCustomerB';
import { ReviewCustomerC } from '@components/icons/home/ReviewCustomerC';
import Map from '@components/map';
import {
  TR_GOOGLE_REVIEW_LINK,
  TR_SERVICE_ITEMS,
  TR_SPECIALTY_ITEMS,
} from '@utils/constants';
import Carousel from '@components/carousel';

const reviewItems = [
  {
    name: 'Sungkyu Jee',
    date: 'a month ago',
    image: <ReviewCustomerA />,
    review:
      'Well, it is hard to find or impossible to find any negativity on his workmanship, communication, manner, and everything. His price is fair and it comes with nice professional manner and workmanship.',
  },
  {
    name: 'Ralph Lee',
    date: 'a year ago',
    image: <ReviewCustomerB />,
    review: 'Most reliable tech!!!! Strongly suggest.',
  },
  {
    name: 'Kevin',
    date: 'a year ago',
    image: <ReviewCustomerC />,
    review: 'In a nutshell, he is the best in this field!!!',
  },
];

const CUR_YEAR = new Date().getFullYear();

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero heroImageCategory="HOME" />

      {/* Our Service Section */}
      <div className="flexcenter flex-col mt-10 bg-tr-lightGray">
        <div className="py-4 text-tr-blue font-bold text-3xl sm:text-xl ">
          Our Service
        </div>

        <div className="flex">
          <div className="hidden sm:flex sm:flex-1">
            <Image src={ServiceImg} alt="home-service" placeholder="blur" />
          </div>

          <div className="hidden sm:block sm:w-3" />

          <div className="grid gap-6 grid-cols-2 flex-1 sm:gap-4">
            {TR_SERVICE_ITEMS.map((service, index) => (
              <Link
                key={`${service.title}-${index}`}
                href={`/service/${service.queryName}`}
                className="relative flexcenter overflow-hidden bg-[#444648A6] h-52 sm:h-auto"
              >
                <div className="text-xl font-bold text-white z-10 text-center sm:text-xl">
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
      <div className={`flex flex-row mt-16 relative bg-tr-lightGray`}>
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

        <div className="flex-1 absolute w-full h-full opacity-10 sm:relative sm:w-auto sm:h-auto sm:opacity-100">
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

      {/* Our Previous Work section */}
      <Carousel />

      {/* Advantage Section */}
      <div className="grid grid-cols-2 gap-8 relative p-6 mt-24 overflow-hidde bg-[#2C3546B0]/100 sm:bg-tr-blue/80 sm:flexcenter sm:flex-row sm:gap-0 sm:p-12">
        <div className="text-white flex-1 text-center z-10">Service in GTA Area</div>

        <div className="text-white flex-1 text-center z-10">Gas & A/C Licensed</div>

        <div className="text-white flex-1 text-center z-10">TSSA & 2 Million Insured</div>

        <div className="text-white flex-1 text-center z-10">Affordable Price</div>

        <div className="opacity-20 absolute w-full h-full sm:opacity-50">
          <Image
            src={AdvantageBanner}
            alt={'Home-advantage-banner'}
            placeholder="blur"
            fill
          />
        </div>
      </div>

      {/* Our Specialty Section */}
      <div className="flex flex-row bg-tr-lightGray mt-24">
        <div className="bg-tr-skyBlue flexcenter py-14">
          <div className="rotate-[270deg] whitespace-pre-line text-2xl text-white font-extrabold text-center">
            {CUR_YEAR - 2014} Years {'\n'} Experience
          </div>
        </div>

        <div className="flex-1 px-12 py-10">
          <div className="text-tr-red text-2xl font-bold text-center sm:text-xl">
            Our Specialty
          </div>

          <div className="grid grid-cols-3 gap-3 mt-5 font-medium sm:flex sm:flex-row sm:gap-0">
            {TR_SPECIALTY_ITEMS.map((item, index) => {
              return (
                <div
                  className="flexcenter flex-col flex-1"
                  key={`${item.title}-${index}`}
                >
                  <div className="mb-2">{item.title}</div>

                  <item.icon />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      

      {/* Customer reviews section */}
      <div className="flexcenter flex-col mt-10">
        <div className="py-4 text-tr-blue text-xl font-bold">Customer Reviews</div>

        <Link className="text-tr-skyBlue" href={TR_GOOGLE_REVIEW_LINK}>
          See all reviews
        </Link>

        <div className="grid grid-rows-3 sm:grid-cols-3 p-4">
          {reviewItems.map((item, i) => (
            <div className="flex-col p-4" key={`${item.name}-${i}`}>
              <div className="relative bg-tr-lightGray speech-bubble p-4 shadow-xl">
                <div className="flex mb-3">
                  {Array.from({ length: 5 }, (_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>

                <div className="text-sm">{item.review}</div>
              </div>

              <div className="flex pt-8 ml-6">
                <div>{item.image}</div>

                <div className="flex-col ml-4">
                  <div>{item.name}</div>

                  <div>{item.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Google Map section */}
      <Map />
      
    </div>
  );
}
