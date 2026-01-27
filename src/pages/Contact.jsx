import { useState } from 'react'

const WHATSAPP_NUMBER = '918446827505' // replace with your actual WhatsApp number

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please fill in all fields')
      return
    }

    const message = `Hello! My name is ${formData.name}.\n\n${formData.message}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappURL, '_blank')
    setFormData({ name: '', message: '' })
  }

  return (
    <div className="space-y-16 pb-16">
      <header className="relative overflow-hidden min-h-[55vh] flex items-center">
        <img
          src="/WhatsApp Image 2026-01-27 at 3.11.41 PM.jpeg"
          alt="Wedding decor"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1a1a]/85 via-[#2b1a1a]/65 to-transparent" />
        <div className="container-shell relative z-10 text-left space-y-3 text-white max-w-3xl py-12">
          <div className="tagline text-white/80">Contact</div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Let&apos;s plan your celebration</h1>
          <p className="text-white/80 max-w-2xl">Share your vision—we will respond with a calm, detail-first plan for your day.</p>
        </div>
      </header>

      <section className="container-shell grid md:grid-cols-2 gap-12 items-start">
        <div className="panel-blur p-8 shine-border space-y-6">
          <h2 className="text-2xl font-semibold text-[color:var(--primary-700)]">Meet the founders</h2>
          <p className="text-gray-700 leading-relaxed">Varad and Bhagyashri Thakare personally guide every celebration with calm, detail-first planning.</p>

          <div className="soft-card p-6 flex flex-col items-center text-center gap-4">
            <div className="w-full rounded-lg overflow-hidden bg-[color:var(--primary-50)] border border-[rgba(182,49,88,0.16)]">
              <img src="/owner.jpeg" alt="Varad and Bhagyashri Thakare" className="w-full h-auto object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[color:var(--primary-700)]">Varad & Bhagyashri Thakare</h3>
              <p className="text-sm text-gray-700">Founders</p>
            </div>
          </div>
        </div>

        <div className="soft-card p-4 w-fit mx-auto">
          <h2 className="text-base font-semibold text-[color:var(--primary-700)] mb-1.5">Send a WhatsApp note</h2>
          <p className="text-sm text-gray-700 mb-3">Tell us about your venues, dates, guest count, and the moments you want crafted.</p>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-3 py-1.5 text-sm rounded-lg border border-[rgba(182,49,88,0.22)] bg-white/90 focus:outline-none focus:border-[color:var(--primary-500)] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your wedding vision, dates, and any must-haves."
                rows="3"
                className="w-full px-3 py-1.5 text-sm rounded-lg border border-[rgba(182,49,88,0.22)] bg-white/90 focus:outline-none focus:border-[color:var(--primary-500)] transition resize-none"
              />
            </div>

            <button type="submit" className="w-full btn-primary btn-compact text-sm py-2">
              Send via WhatsApp
            </button>
            <p className="text-center text-sm text-gray-600 mt-1.5">Opens WhatsApp with your message pre-filled.</p>
          </form>
        </div>
      </section>
    </div>
  )
}
