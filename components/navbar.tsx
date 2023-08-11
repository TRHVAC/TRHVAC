import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Navbar() {
  return (
    <>
      <div className="flex bg-white p-3">
        <p>hihi</p>

      </div>
      <div className="top-nav flex gap-3 bg-slate-100 p-3">
        <div>
          <Link href='/'>TR HVAC</Link>
        </div>
        <ul className="flex gap-3">
          <Link href="/">Home</Link>
          <Link href="/service">Service</Link>
          <Link href="/booking">Booking</Link>
        </ul>
        <div className="emergency-box text-white">
          {/* <FontAwesomeIcon icon={faCalendar as IconProp} />
          <FontAwesomeIcon icon="fa-solid fa-phone" /> */}
          <p>Emergency 24/7</p>
          <p>(647) 522-5652</p>
        </div>
      </div>
    </>
  );
}
