"use client"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    const data = await res.json()
    if (res.ok) {
      setStatus("Message sent successfully!")
      setForm({ name: "", email: "", message: "" })
    } else {
      setStatus(data.error || "Something went wrong.")
    }
  }

  return (
    <main className="min-h-screen pt-20 px-6 bg-white text-black">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-10">
          Have a question or want to collaborate? Reach out — we’d love to hear from you.
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <Mail className="w-5 h-5 text-black" />
            <span className="text-gray-800">kunalbisht909@gmail.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-5 h-5 text-black" />
            <span className="text-gray-800">+91 8865853089</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <MapPin className="w-5 h-5 text-black" />
            <span className="text-gray-800">Pithoragarh, Uttarakhand, India</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-4">
          <div>
            <label className="block text-left text-gray-800 font-medium mb-2">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/60"
            />
          </div>

          <div>
            <label className="block text-left text-gray-800 font-medium mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/60"
            />
          </div>

          <div>
            <label className="block text-left text-gray-800 font-medium mb-2">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/60"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-2 rounded-lg hover:bg-black/60 transition"
          >
            Send Message
          </button>

          {status && <p className="text-sm text-gray-600 mt-3">{status}</p>}
        </form>
      </section>
    </main>
  )
}
