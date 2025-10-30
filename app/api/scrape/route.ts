import { NextResponse } from "next/server"
import * as cheerio from "cheerio"
import { adminDB } from "@/lib/firebaseAdmin"
import fetch from "node-fetch"

export async function GET() {
  const url = "https://www.eventbrite.com/d/australia--sydney/events/"
  const res = await fetch(url)
  const html = await res.text()
  const $ = cheerio.load(html)

  const events: any[] = []

  $(".search-event-card-wrapper").each((_, el) => {
    const title = $(el).find(".eds-event-card-content__primary-content h3").text().trim()
    const link = $(el).find("a.eds-event-card-content__action-link").attr("href")
    const date = $(el).find(".eds-text-bs--fixed").first().text().trim()
    const image = $(el).find("img").attr("src")

    if (title && link) {
      events.push({ title, link, date, image })
    }
  })

  // Save to Firestore
  const batch = adminDB.batch()
  const collection = adminDB.collection("events")

  events.forEach((event) => {
    const docRef = collection.doc()
    batch.set(docRef, event)
  })

  await batch.commit()

  return NextResponse.json({ status: "success", count: events.length })
}
