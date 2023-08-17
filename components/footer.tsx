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
              <li className="mb-1 flex"><div className="invert mr-2"><MapIcon/></div>L3P6Y5, North York, ON</li>
              <li className="mb-1 flex"><div className="mr-1"><PhoneIconFooter/></div>(647) 522-5652</li>
              <li className="mb-1 flex"><div className="invert mr-2"><MailIcon/></div>trhvac@hotmail.com</li>
              <li className="mb-1 flex"><div className="invert mr-2"><InstagramIcon/></div>instagram.com/trhvac</li>
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
              <li className="mb-1">Heating</li>
              <li className="mb-1">Cooling</li>
              <li className="mb-1">Water Heaters</li>
              <li className="mb-1">Indoor Air Quality Products</li>
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
