import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
//
// .App {
//   height: 100vh;
//   width: 100vw;
// }

// .map-container {
//   height: 100%;
//   width: 100%;
// }

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
  });
  const center = useMemo(
    () => ({ lat: 43.79860982418934, lng: -79.41922629260577 }),
    []
  );

  return (
    <div className=" flex flex-row w-full h-56 mt-10 justify-center">
      <div className="">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="h-56 w-96"
            center={center}
            zoom={10}
          >
            <Marker
              position={{ lat: 43.79860982418934, lng: -79.41922629260577 }}
            />
          </GoogleMap>
        )}
      </div>
      <div className="bg-tr-skyBlue flex flex-col justify-center items-center h-56 min-w-96 w-96 gap-3">
        <button className="bg-tr-red text-white px-2 py-3 font-semibold">
          Book a service
        </button>
        <div className="text-white flex flex-col gap-1">
          <span>Monday - Saturday</span>
          <span>9:00 am - 7:00 pm</span>
          <span>(647) 522 - 5652</span>
          <span>L3P6Y5, North York, ON</span>
        </div>
      </div>
    </div>
  );
};

export default App;
