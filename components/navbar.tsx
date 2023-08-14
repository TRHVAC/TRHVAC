import Link from "next/link";
import Image from 'next/image';
import {PhoneIcon} from '@components/icons/nav/PhoneIcon'
import {MapIcon} from '@components/icons/nav/MapIcon'
import {MailIcon} from '@components/icons/nav/MailIcon'
import {InstagramIcon} from "./icons/nav/InstagramIcon";


export default function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-white">
        <div className="flexcenter ml-10">
          <Link href="/"><Image src="/../public/home/nav_logo.png" alt="company logo" width="80" height="80"/></Link>
        </div>
        <div className="flexcenter">
          <ul className="flex gap-8">
            <li className="flexcenter"><div className="mr-1"><MapIcon/></div>L3P 6Y5, North York, ON</li>
            <li className="flexcenter"><div className="mr-1"><MailIcon/></div><Link href="mailto:recipient@example.com">trhvac@hotmail.com</Link></li>
            <Link className="flexcenter mr-5" href="https://www.instagram.com/trhvac/"><InstagramIcon/></Link>
          </ul>
        </div>
      </div>

      <div className="justify-between sticky top-0 z-[1000] flex gap-3 bg-tr-lightGray">
        <div className="flexcenter text-4xl font-extrabold text-tr-skyBlue ml-5 font-sans">
          <Link href='/'>TR HVAC</Link>
        </div>
        <div className="flexcenter text-lg">
          <ul className="flex gap-16">
            <Link href="/">HOME</Link>
            <Link href="/service">SERVICE</Link>
            <Link href="/booking">BOOKING</Link>
          </ul>
        </div>
        <div className="bg-tr-skyBlue text-white flex gap-3 items-center ">
          <div className="ml-4">
            <div className="bg-white p-3"><PhoneIcon/></div>
          </div>
          <div>
            <p className="text-tr-blue font-medium text-sm mt-5 mb-2">Mon-Fri 9am-7pm</p>
            <p className="font-bold mr-4 mb-3"><Link href="tel:647-522-5652">(647) 522-5652</Link></p>
          </div>
        </div>
      </div>
        
    </>
  );
}
