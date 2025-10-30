import { NextResponse } from "next/server"

export async function GET() {
  const mockEvents = [
    {
      id: "1",
      title: "Sydney Music Festival",
      description: "A grand celebration of live performances and local talent.",
      venue: "Sydney Opera House",
      date: "2025-11-12T18:00:00Z",
      image: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=1400",
      url: "https://www.eventbrite.com.au/"
    },
    {
      id: "2",
      title: "Food & Wine Expo",
      description: "Taste the best wines and cuisines from around the world.",
      venue: "ICC Sydney",
      date: "2025-12-05T12:00:00Z",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1400",
      url: "https://www.eventbrite.com.au/"
    },
  ]

  return NextResponse.json({ events: mockEvents })
}
