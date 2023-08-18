import Link from "next/link"
import {MapIcon} from '@components/icons/nav/MapIcon'
import {MailIcon} from '@components/icons/nav/MailIcon'
import {InstagramIcon} from "./icons/nav/InstagramIcon"
import PhoneIconFooter from '@components/icons/footer/PhoneIconFooter'
import { info } from "console"

const serviceItems = [
  { title: 'Heating', queryName: 'heating' },
  { title: 'Cooling', queryName: 'cooling' },
  { title: 'Water Heaters', queryName: 'waterheater' },
  { title: 'Indoor Air Quality Products', queryName: 'iaq' },
];

const specialtyItems = [
  { title: 'A/C'},
  { title: 'Furnace'},
  { title: 'Maintenance'},
  { title: 'Gas Line'},
  { title: 'Tankless'},
  { title: 'Boiler'},
];

const contactItems = [
  {title: 'L3P6Y5, North York, ON', ref: "https://www.google.com/maps/place/L3P+6Y5+%EC%98%A8%ED%83%80%EB%A6%AC%EC%98%A4+%EB%A7%88%ED%81%AC%ED%97%98/@43.8831285,-79.2672715,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d63d214740bb:0x5a68fbad18e633!8m2!3d43.8831802!4d-79.2643196!16s%2Fg%2F1tfmpcmm?entry=ttu", icon: <MapIcon/>},
  {title: '(647) 522-5652', ref: "tel:647-522-5652", icon: <PhoneIconFooter/>},
  {title: 'trhvac@hotmail.com', ref: "mailto:recipient@example.com", icon: <MailIcon/>},
  {title: 'instagram.com/trhvac', ref: "https://www.instagram.com/trhvac/", icon: <InstagramIcon/>},
];


export default function Footer() {
  return(
    <footer>
      <div className="bg-black text-white ">
        <ul className="flex justify-between">
          <li className="px-6 py-6">
            <div className="text-2xl font-semibold mb-4">Contact us</div>
            {contactItems.map((contact, i)=>(
                <Link href={contact.ref} className="hover:text-tr-footerGray flex mb-1">
                  <div className="invert mr-2">{contact.icon}</div>
                  {contact.title}
                </Link>
            ))}
          </li>
          <li className="px-6 py-6">
            <div className="text-2xl font-semibold mb-4">Hours</div>
              <div className="mb-1">Monday - Saturday</div>
              <div className="mb-1">09:00 am - 19:00 pm</div>
          </li>
          <li className="px-6 py-6">
            <div className="text-2xl font-semibold mb-4">Our Products</div>
            {serviceItems.map((service, i)=>(
              <Link href={`/service/${service.queryName}`} className="hover:text-tr-footerGray">
                <div className="mb-1">{service.title}</div>
              </Link>
            ))}
          </li>
          <li className="px-6 py-6">
            <div className="text-2xl font-semibold mb-4">Our Service</div>
            {specialtyItems.map((specialty, i)=>(
              <div className="mb-1">{specialty.title}</div>
            ))}
          </li>
        </ul>
        <div className="px-6 py-6"><p>&copy; TR HVAC, All Right Reserved.</p></div>
      </div>
    </footer>
  )
}
