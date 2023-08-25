import Link from 'next/link';

import { TR_CONTACT_INFO, TR_SERVICE_ITEMS, TR_SPECIALTY_ITEMS } from '@utils/constants';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-screen-2xl mx-auto felx-col p-6">
        <div className="flex justify-between">
          {/* Contact Section */}
          <div>
            <div className="text-2xl font-semibold mb-4">Contact us</div>


            {['Address', 'Phone', 'Email', 'Instagram'].map((item, index) => {
              return (
                <Link
                  key={`${item}-${index}`}
                  href={TR_CONTACT_INFO[item].ref}
                  className="hover:text-tr-footerGray flex mb-2"
                >
                  <div className="invert mr-2">{TR_CONTACT_INFO[item].icon()}</div>

                  {TR_CONTACT_INFO[item].title}

                </Link>
              );
            })}
          </div>

          {/* Hours Section */}
          <div>
            <div className="text-2xl font-semibold mb-4">Hours</div>

            <div className="mb-2">Monday - Saturday</div>

            <div className="mb-2">09:00 am - 19:00 pm</div>
          </div>

          {/* Products Section */}
          <div>
            <div className="text-2xl font-semibold mb-4">Our Products</div>

            {TR_SERVICE_ITEMS.map((item, index) => (
              <Link
                key={`${item}-${index}`}
                href={`/service/${item.queryName}`}
                className="hover:text-tr-footerGray"
              >
                <div className="mb-1">{item.title}</div>

              </Link>
            ))}
          </div>

          {/* Service Section */}
          <div>
            <div className="text-2xl font-semibold mb-4">Our Service</div>

            {TR_SPECIALTY_ITEMS.map((item, index) => (
              <div className="mb-1" key={`${item}-${index}`}>
                {item.title}

              </div>
            ))}
          </div>
        </div>

        <div>&copy; TR HVAC, All Right Reserved.</div>
      </div>
    </footer>
  );
}
