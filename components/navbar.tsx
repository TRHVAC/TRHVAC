import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className=" flex gap-3 bg-white p-3">
        <p>hihi</p>

      </div>
      <div className="top-nav">
        <ul className="flex gap-3 bg-slate-100 p-3">
          <Link href='/'>TR HVAC</Link>
          <Link href="/">Home</Link>
          <Link href="/service">Service</Link>
          <Link href="/booking">Booking</Link>
        </ul>
      </div>
    </>
  );
}
