import Image from "next/image"
import Navbar from "./components/Navbar/page"
import About from "./components/About/page"
import Contact from "./components/Contact/page"
import Footer from "./components/Footer/page"
import EventList from "./components/Events/page"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20 px-4 sm:px-6 lg:px-8 bg-white text-black scroll-smooth">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              Welcome to EventHub Sydney
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl">
              Your one-stop hub for Sydney’s best events
            </p>
          </div>
        </div>

        {/* Hover Image Section */}
        <section className="max-w-6xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* cards... */}
        </section>
      </main>

      {/* Add IDs for scroll targets */}
      <section id="events">
        <EventList />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  )
}
