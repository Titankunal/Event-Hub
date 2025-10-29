import { Calendar, MapPin, Users } from "lucide-react"

export default function About() {
  return (
    <section className="min-h-[70vh] bg-white flex items-center justify-center px-6 py-10">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-black">About EventHub Sydney</h1>
        <p className="text-gray-700 text-lg">
          Discover Sydney’s best events — concerts, meetups, and cultural moments — all in one place.
        </p>

        <div className="flex justify-center gap-10 mt-6">
          <div className="flex flex-col items-center hover:text-gray-600 transition">
            <Calendar className="w-10 h-10 mb-2" />
            <p className="font-medium">Live Events</p>
          </div>
          <div className="flex flex-col items-center hover:text-gray-600 transition">
            <MapPin className="w-10 h-10 mb-2" />
            <p className="font-medium">Sydney Focused</p>
          </div>
          <div className="flex flex-col items-center hover:text-gray-600 transition">
            <Users className="w-10 h-10 mb-2" />
            <p className="font-medium">Community Driven</p>
          </div>
        </div>

        <p className="text-gray-600 text-md mt-8">
          EventHub automatically updates events as they go live — you’ll never miss what’s next.
        </p>
      </div>
    </section>
  )
}
