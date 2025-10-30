export default function Navbar() {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-black">
          EventHub
        </a>

        <div className="flex space-x-6">
          <a href="#events" className="text-black hover:text-gray-600 transition">
            Events
          </a>
          <a href="#about" className="text-black hover:text-gray-600 transition">
            About
          </a>
          <a href="#contact" className="text-black hover:text-gray-600 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
