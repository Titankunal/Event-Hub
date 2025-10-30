"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

interface Event {
  id: string
  title: string
  description: string
  venue: string
  date: string
  image: string
  url: string
}

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events")
        const data = await res.json()
        setEvents(data.events || [])
      } catch (err) {
        console.error("Failed to fetch events:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  if (loading) {
    return <p className="text-center text-gray-400 py-20">Loading events...</p>
  }

  // only first 6 shown unless showAll is true
  const displayedEvents = showAll ? events : events.slice(0, 6)

  return (
    <section className="bg-white text-black px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Upcoming Events in Sydney</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {displayedEvents.map(event => (
          <div
            key={event.id}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-lg hover:border-black"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
              <p className="text-gray-700 text-sm mb-2 line-clamp-2">{event.description}</p>
              <p className="text-gray-500 text-sm mb-3">{event.venue}</p>
              <p className="text-gray-500 text-sm mb-3">
                {new Date(event.date).toLocaleDateString("en-AU", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>

              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-black text-white py-2 rounded-lg hover:bg-black/80 transition"
              >
                Get Tickets
              </a>
            </div>
          </div>
        ))}
      </div>

      {events.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            {showAll ? "Show Less" : "Show All Events"}
          </button>
        </div>
      )}
    </section>
  )
}
