import Link from "next/link";
import Image from 'next/image';
import {PhoneIcon} from '@components/icons/nav/PhoneIcon'
import {MapIcon} from '@components/icons/nav/MapIcon'
import {MailIcon} from '@components/icons/nav/MailIcon'
import {InstagramIcon} from "./icons/nav/InstagramIcon";


export default function Navbar() {
  return (
    <>
      <div className="flex bg-white">
        <div className="flexcenter">
          <Image src="/../public/home/nav_logo.png" alt="company logo" width="80" height="80"/>
        </div>
        <div className="flexcenter">
          <ul className="flex gap-3">
            <li className="flexcenter"><MapIcon/>L3P 6Y5, North York, ON</li>
            <li className="flexcenter"><MailIcon/>trhvac@hotmail.com</li>
            <Link className="flexcenter" href="https://www.instagram.com/trhvac/"><InstagramIcon/></Link>
          </ul>
        </div>
      </div>

      <div className="sticky top-0 z-[1000] flex gap-3 bg-tr-lightGray p-3">
        <div className="flexcenter">
          <Link href='/'>TR HVAC</Link>
        </div>
        <div className="flexcenter">
          <ul className="flex gap-3">
            <Link href="/">Home</Link>
            <Link href="/service">Service</Link>
            <Link href="/booking">Booking</Link>
          </ul>
        </div>
        <div className="bg-tr-skyBlue text-white">
          <div><PhoneIcon/></div>
          <p>Emergency 24/7</p>
          <p>(647) 522-5652</p>
        </div>
      </div>
        
    </>
  );
}
