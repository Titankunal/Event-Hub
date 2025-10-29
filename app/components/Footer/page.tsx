import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-5">
        <h2 className="text-xl font-semibold text-white tracking-wide hover:text-gray-600 transition">
          EventHub Sydney
        </h2>
        <p className="text-sm text-gray-400">
          Discover Sydney’s heartbeat — events, people, and stories that connect.
        </p>

        <div className="flex justify-center space-x-6 mt-6">
          <Link href="#" className="hover:text-gray-600 transition"><Facebook className="w-5 h-5" /></Link>
          <Link href="#" className="hover:text-gray-600 transition"><Twitter className="w-5 h-5" /></Link>
          <Link href="#" className="hover:text-gray-600 transition"><Instagram className="w-5 h-5" /></Link>
        </div>

        <div className="border-t border-gray-800 pt-5 text-xs text-gray-500">
          © {new Date().getFullYear()} EventHub Sydney — All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
