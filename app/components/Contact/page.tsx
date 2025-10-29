import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <main className="min-h-screen pt-20 px-6 bg-white text-black">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-10">
          Have a question or want to collaborate? Reach out — we’d love to hear from you.
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <Mail className="w-5 h-5 text-black hover:text-gray-600 transition" />
            <span className="text-gray-800">contact@eventhubsy.com</span>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-5 h-5 text-black hover:text-gray-600 transition" />
            <span className="text-gray-800">+61 412 345 678</span>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <MapPin className="w-5 h-5 text-black hover:text-gray-600 transition" />
            <span className="text-gray-800">Sydney, Australia</span>
          </div>
        </div>

        <form className="mt-12 bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-4">
          <div>
            <label className="block text-left text-gray-800 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/60"
            />
          </div>

          <div>
            <label className="block text-left text-gray-800 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/60"
            />
          </div>

          <div>
            <label className="block text-left text-gray-800 font-medium mb-2">Message</label>
            <textarea
              rows={4}
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
        </form>
      </section>
    </main>
  )
}
