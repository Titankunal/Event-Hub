import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          EventHub
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
           <Link href="/events" className="text-black hover:text-gray-600 transition">Events</Link>
          <Link href="/about" className="text-black hover:text-gray-600 transition">About</Link>
          <Link href="/contact" className="text-black hover:text-gray-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
