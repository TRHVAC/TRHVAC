import Link from 'next/link';

import { bookingDetails } from 'pages/booking';

export default function BookingInfoBox() {
  return (
    <div className="bg-tr-skyBlue flex items-center flex-col w-full text-white py-8 sm:px-40">
      <div className="flex flex-col leading-9 text-xl">{bookingDetails('#FFFFFF')}</div>

      <Link
        href="/booking"
        className="bg-tr-red text-lg p-4 font-semibold mt-8 sm:text-2xl sm:mb-4"
      >
        Book a service
      </Link>
    </div>
  );
}
