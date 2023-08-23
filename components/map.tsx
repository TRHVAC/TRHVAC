import { useMemo } from 'react';
import Link from 'next/link';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

import { bookingDetails } from 'pages/booking';

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
  });

  const center = useMemo(() => ({ lat: 43.79860982418934, lng: -79.41922629260577 }), []);

  return (
    <div className="flexcenter mt-10">
      <div className="flex flex-row w-3/4 h-96">
        <div className="flex-1 flexcenter">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap mapContainerClassName="h-full w-full" center={center} zoom={10}>
              <Marker position={center} />
            </GoogleMap>
          )}
        </div>

        <div className="bg-tr-skyBlue flex justify-around items-center flex-col flex-1 text-white py-16">
          <Link href="/booking" className="bg-tr-red text-2xl p-4 font-semibold mb-4">
            Book a service
          </Link>

          <div className="flex flex-col gap-2 ml-8 text-lg leading-8">
            {bookingDetails('#FFFFFF')}
          </div>
        </div>
      </div>
    </div>
  );
}
