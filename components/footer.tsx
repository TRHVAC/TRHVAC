import Link from "next/link";

export default function Footer() {
  return(
    <footer >
      <div className="bg-black text-white container mx-auto">
        <ul className="flex justify-between">
          <li className="">Contant us
            <ul className="">
              <li>L3P6Y5, North York, ON</li>
              <li>(647) 522-5652</li>
              <li>trhvac@hotmail.com</li>
              <li>instagram.com/trhvac</li>
            </ul>
          </li>
          <li>Hours
            <ul>
              <li>Monday - Saturday</li>
              <li>09:00 am - 19:00 pm</li>
            </ul>
          </li>
          <li>Our Products
            <ul>
              <li>Heating</li>
              <li>Cooling</li>
              <li>Water Heaters</li>
              <li>Indoor Air Quality Products</li>
            </ul>
          </li>
          <li>Our Service
            <ul>
              <li>A/C</li>
              <li>Furnace</li>
              <li>Maintenance</li>
              <li>Gas Line</li>
              <li>Tankless</li>
              <li>Boiler</li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  )
}
