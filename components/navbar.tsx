import Link from "next/link";
import Image from 'next/image';
import {PhoneIcon} from '@components/icons/nav/PhoneIcon'
import {MapIcon} from '@components/icons/nav/MapIcon'
import {MailIcon} from '@components/icons/nav/MailIcon'
import {InstagramIcon} from "./icons/nav/InstagramIcon";

const trGoogleLink = "https://www.google.com/maps/place/L3P+6Y5+%EC%98%A8%ED%83%80%EB%A6%AC%EC%98%A4+%EB%A7%88%ED%81%AC%ED%97%98/@43.8831285,-79.2672715,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d63d214740bb:0x5a68fbad18e633!8m2!3d43.8831802!4d-79.2643196!16s%2Fg%2F1tfmpcmm?entry=ttu"

const serviceItems = [
  { title: 'Heating', queryName: 'heating' },
  { title: 'Cooling', queryName: 'cooling' },
  { title: 'Water Heaters', queryName: 'waterheater' },
  { title: 'Indoor Air Quality Products', queryName: 'iaq' },
];

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-white">
        <div className="flexcenter ml-10">
          <Link href="/"><Image src="/../public/home/nav_logo.png" alt="company logo" width="80" height="80"/></Link>
        </div>
        <div className="flexcenter">
          <ul className="flex gap-8">
            <li className="flexcenter">
              <Link 
                href={trGoogleLink}
                className="hover:text-tr-skyBlue flex">
                  <div className="mr-1"><MapIcon/></div>L3P 6Y5, North York, ON
                </Link>
            </li>
            <li className="">
              <Link 
                href="mailto:recipient@example.com" 
                className="hover:text-tr-skyBlue flex">
                  <div className="mr-1"><MailIcon/></div>trhvac@hotmail.com
              </Link>
            </li>
            <Link 
              href="https://www.instagram.com/trhvac/" 
              className="hover:text-tr-skyBlue flexcenter mr-5" >
                <div className="mr-1"><InstagramIcon/></div>trhvac
            </Link>
          </ul>
        </div>
      </div>

      <div className="relative justify-between flex bg-tr-lightGray drop-shadow-lg sticky top-0 z-[1000]">
        <div className="flexcenter text-4xl font-extrabold text-tr-skyBlue ml-5 font-sans ">
          <Link href='/'>TR HVAC</Link>
        </div>
        <div className="flexcenter text-lg">
          <ul className="flex">
            <Link href="/" className="hover:text-tr-skyBlue px-7 py-7">HOME</Link>

            <div className="group px-7 py-7 cursor-pointer">
              <div className="group-hover:text-tr-skyBlue">SERVICE</div>
              <div className="absolute drop-shadow-lg bg-tr-lightGray z-10 hidden group-hover:block mt-7">
                  {serviceItems.map((menu, i)=>(
                    <Link
                      key={`${menu.title}-${i}`}
                      href={`/service/${menu.queryName}`}
                      className="hover:text-tr-skyBlue block px-4 py-2"
                    >
                      <div>
                        {menu.title}
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
            
            <Link href="/booking" className="hover:text-tr-skyBlue px-7 py-7">BOOKING</Link>
          </ul>
        </div>
        <div className="bg-tr-skyBlue text-white flex gap-3 items-center ">
          <div className="ml-4">
            <div className="bg-white p-3"><PhoneIcon/></div>
          </div>
          <div>
            <p className="text-tr-blue font-medium text-sm mt-5 mb-2">Mon-Sat 9am-7pm</p>
            <p className="font-bold mr-4 mb-3"><Link href="tel:647-522-5652">(647) 522-5652</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}
