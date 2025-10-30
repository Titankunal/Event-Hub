import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.TICKETMASTER_API_KEY;
    if (!apiKey) {
      throw new Error("Missing Ticketmaster API key");
    }

    const res = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=Sydney&countryCode=AU&size=50&sort=date,asc`
    );

    const data = await res.json();

    if (!data._embedded || !data._embedded.events) {
      return NextResponse.json({ status: "success", count: 0, events: [] });
    }

    const events = data._embedded.events.map((e: any) => ({
      id: e.id,
      title: e.name,
      date: e.dates?.start?.localDate || "",
      time: e.dates?.start?.localTime || "",
      url: e.url,
      image: e.images?.[0]?.url || "",
      venue: e._embedded?.venues?.[0]?.name || "Unknown venue",
      city: e._embedded?.venues?.[0]?.city?.name || "Sydney",
    }));

    return NextResponse.json({ status: "success", count: events.length, events });
  } catch (error: any) {
    console.error("Error fetching events:", error);
    return NextResponse.json({ error: "Failed to fetch events", details: error.message });
  }
}
