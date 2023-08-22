import Link from 'next/link';
import Image from 'next/image';

import { PhoneIcon } from '@components/icons/nav/PhoneIcon';
import { MapIcon } from '@components/icons/nav/MapIcon';
import { MailIcon } from '@components/icons/nav/MailIcon';
import {
  TR_EMAIL_ADDRESS,
  TR_GOOGLE_LINK,
  TR_INSTAGRAM_LINK,
  TR_TEL_NUMBER,
} from '@utils/constants';
import NAV_LOGO from '@public/home/nav_logo.png';

import { InstagramIcon } from './icons/nav/InstagramIcon';

const serviceItems = [
  { title: 'Heating', queryName: 'heating' },
  { title: 'Cooling', queryName: 'cooling' },
  { title: 'Water Heaters', queryName: 'waterheater' },
  { title: 'Indoor Air Quality Products', queryName: 'iaq' },
];

export default function Navbar() {
  return (
    <>
      {/* Intro Header */}
      <div className="flex justify-between items-center bg-white">
        <Link className="ml-10" href="/">
          <Image src={NAV_LOGO} alt="company logo" width={80} height={80} />
        </Link>

        <div className="flexcenter gap-5 mr-2">
          <Link href={TR_GOOGLE_LINK} className="hover:text-tr-skyBlue flexcenter gap-1">
            <MapIcon />
            L3P 6Y5, North York, ON
          </Link>

          <Link
            href={TR_EMAIL_ADDRESS}
            className="hover:text-tr-skyBlue flexcenter gap-1"
          >
            <MailIcon />
            trhvac@hotmail.com
          </Link>

          <Link
            href={TR_INSTAGRAM_LINK}
            className="hover:text-tr-skyBlue flexcenter gap-1"
          >
            <InstagramIcon />
            trhvac
          </Link>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="justify-between flex bg-tr-lightGray drop-shadow-lg sticky top-0 z-[1000]">
        <Link
          className="flexcenter text-4xl font-extrabold text-tr-skyBlue ml-5 font-sans "
          href="/"
        >
          TR HVAC
        </Link>

        <div className="flexcenter text-lg flex">
          <Link href="/" className="hover:text-tr-skyBlue px-7 py-7">
            HOME
          </Link>

          <div className="group px-7 py-7 cursor-pointer">
            <div className="group-hover:text-tr-skyBlue">SERVICE</div>

            <div className="absolute drop-shadow-lg bg-tr-lightGray z-10 hidden group-hover:block mt-7">
              {serviceItems.map((menu, i) => (
                <Link
                  key={`${menu.title}-${i}`}
                  href={`/service/${menu.queryName}`}
                  className="hover:text-tr-skyBlue block px-4 py-2"
                >
                  <div>{menu.title}</div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/booking" className="hover:text-tr-skyBlue px-7 py-7">
            BOOKING
          </Link>
        </div>

        <div className="bg-tr-skyBlue gap-3 flexcenter pr-3">
          <div className="bg-white p-3 ml-4">
            <PhoneIcon />
          </div>

          <div>
            <div className="text-tr-blue font-medium text-sm mb-2">Mon-Sat 9am-7pm</div>

            <Link className="font-bold text-white" href={TR_TEL_NUMBER}>
              (647) 522-5652
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
