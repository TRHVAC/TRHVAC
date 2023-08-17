import Link from "next/link";
import {MapIcon} from '@components/icons/nav/MapIcon'
import {MailIcon} from '@components/icons/nav/MailIcon'
import {InstagramIcon} from "./icons/nav/InstagramIcon";
import PhoneIconFooter from '@components/icons/footer/PhoneIconFooter'

export default function Footer() {
  return(
    <footer >
      <div className="bg-black text-white ">
        <ul className="flex justify-between">
          <li className="px-6 py-6"><div className="text-2xl font-semibold mb-4">Contact us</div>
            <ul>
              <li className="mb-1 flex"><div className="invert mr-2"><MapIcon/></div><Link href="https://www.google.com/maps/place/L3P+6Y5+%EC%98%A8%ED%83%80%EB%A6%AC%EC%98%A4+%EB%A7%88%ED%81%AC%ED%97%98/@43.8831285,-79.2672715,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d63d214740bb:0x5a68fbad18e633!8m2!3d43.8831802!4d-79.2643196!16s%2Fg%2F1tfmpcmm?entry=ttu" className="hover:text-tr-footerGray">L3P6Y5, North York, ON</Link></li>
              <li className="mb-1 flex"><div className="mr-1"><PhoneIconFooter/></div><Link href="tel:647-522-5652" className="hover:text-tr-footerGray">(647) 522-5652</Link></li>
              <li className="mb-1 flex"><div className="invert mr-2"><MailIcon/></div><Link href="mailto:recipient@example.com" className="hover:text-tr-footerGray">trhvac@hotmail.com</Link></li>
              <li className="mb-1 flex"><div className="invert mr-2"><InstagramIcon/></div><Link className="hover:text-tr-footerGray" href="https://www.instagram.com/trhvac/">instagram.com/trhvac</Link></li>
            </ul>
          </li>
          <li className="px-6 py-6"><div className="text-2xl font-semibold mb-4">Hours</div>
            <ul>
              <li className="mb-1">Monday - Saturday</li>
              <li className="mb-1">09:00 am - 19:00 pm</li>
            </ul>
          </li>
          <li className="px-6 py-6"><div className="text-2xl font-semibold mb-4">Our Products</div>
            <ul>
              <li className="mb-1"><Link href="/service/heating" className="hover:text-tr-footerGray">Heating</Link></li>
              <li className="mb-1"><Link href="/service/cooling" className="hover:text-tr-footerGray">Cooling</Link></li>
              <li className="mb-1"><Link href="/service/waterheater" className="hover:text-tr-footerGray">Water Heaters</Link></li>
              <li className="mb-1"><Link href="/service/iaq" className="hover:text-tr-footerGray">Indoor Air Quality Products</Link></li>
            </ul>
          </li>
          <li className="px-6 py-6"><div className="text-2xl font-semibold mb-4">Our Service</div>
            <ul>
              <li className="mb-1">A/C</li>
              <li className="mb-1">Furnace</li>
              <li className="mb-1">Maintenance</li>
              <li className="mb-1">Gas Line</li>
              <li className="mb-1">Tankless</li>
              <li className="mb-1">Boiler</li>
            </ul>
          </li>
        </ul>
        <div className="px-6 py-6"><p>&copy; TR HVAC, All Right Reserved.</p></div>
      </div>
    </footer>
  )
}
