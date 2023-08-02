import Link from "next/link";

export default function Navbar() {
  return (
    <ul className="flex gap-3 bg-slate-400 p-3">
      <Link href="/">Home</Link>
      <Link href="/service">Service</Link>
      <Link href="/booking">Booking</Link>
    </ul>
  );
}
