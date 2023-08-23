import Link from 'next/link';
import Image from 'next/image';

import { TR_SERVICE_ITEMS, TR_CONTACT_INFO } from '@utils/constants';
import NAV_LOGO from '@public/home/nav_logo.png';

export default function Navbar() {
  return (
    <>
      {/* Intro Header */}
      <div className="flex justify-between items-center bg-white">
        <Link className="ml-10" href="/">
          <Image src={NAV_LOGO} alt="company logo" width={80} height={80} />
        </Link>

        <div className="flexcenter gap-5 mr-2">
          {['Address', 'Email', 'Instagram'].map((item, index) => {
            return (
              <Link
                href={TR_CONTACT_INFO[item].ref}
                key={`${item}-${index}`}
                className="hover:text-tr-skyBlue flexcenter gap-1"
              >
                {TR_CONTACT_INFO[item].icon()}
                {TR_CONTACT_INFO[item].title}
              </Link>
            );
          })}
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
              {TR_SERVICE_ITEMS.map((item, i) => (
                <Link
                  key={`${item.title}-${i}`}
                  href={`/service/${item.queryName}`}
                  className="hover:text-tr-skyBlue block px-4 py-2"
                >
                  <div>{item.title}</div>
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
            {TR_CONTACT_INFO['Phone'].icon('#FD2156', 26, 26)}
          </div>

          <div>
            <div className="text-tr-blue font-medium text-sm mb-2">Mon-Sat 9am-7pm</div>

            <Link className="font-bold text-white" href={TR_CONTACT_INFO['Phone'].ref}>
              {TR_CONTACT_INFO['Phone'].title}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
