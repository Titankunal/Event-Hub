import Image from "next/image"
import Navbar from "./components/Navbar/page"
import About from "./components/About/page"
import Contact from "./components/Contact/page"
import Footer from "./components/Footer/page"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        {/* Hero Section */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1400"
            alt="Sydney Event Banner"
            fill
            priority
            className="object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Welcome to EventHub Sydney</h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl">
              Your one-stop hub for Sydney’s best events
            </p>
          </div>
        </div>

        {/* Hover Image Section */}
        <section className="max-w-6xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1200"
              alt="Concerts"
              width={600}
              height={400}
              className="object-cover w-full h-60 sm:h-64 md:h-72 transform group-hover:scale-110 transition duration-500 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg sm:text-xl font-semibold">Concerts</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200"
              alt="Meetups"
              width={600}
              height={400}
              className="object-cover w-full h-60 sm:h-64 md:h-72 transform group-hover:scale-110 transition duration-500 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg sm:text-xl font-semibold">Meetups</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200"
              alt="Festivals"
              width={600}
              height={400}
              className="object-cover w-full h-60 sm:h-64 md:h-72 transform group-hover:scale-110 transition duration-500 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg sm:text-xl font-semibold">Festivals</p>
            </div>
          </div>
        </section>
      </main>

      <About />
      <Contact />
      <Footer />
    </>
  )
}
