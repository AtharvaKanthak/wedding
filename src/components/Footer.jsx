import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white/85 backdrop-blur border-t border-[rgba(182,49,88,0.2)] mt-24">
      <div className="container-shell pt-32 pb-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="space-y-3">
            <div className="text-sm uppercase tracking-[0.3em] text-[color:var(--primary-700)] font-semibold">Muhurtham</div>
            <h3 className="text-2xl font-semibold text-[color:var(--ink)]">Weddings & Events</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Crafting seamless, memorable celebrations with detail-driven planning, elegant design, and a calm, dedicated team by your side.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[color:var(--ink)] mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link to="/" className="hover:text-[color:var(--primary-700)] transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-[color:var(--primary-700)] transition">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-[color:var(--primary-700)] transition">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-[color:var(--primary-700)] transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[color:var(--ink)] mb-4">Capabilities</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>End-to-end event design</li>
              <li>On-day orchestration</li>
              <li>Venue and vendor curation</li>
              <li>Guest and hospitality care</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-[color:var(--ink)]">Connect</h4>
            <p className="text-sm text-gray-700">Phone: +91 98765 43210</p>
            <p className="text-sm text-gray-700">Email: contact@muhurtum.com</p>
            <p className="text-sm text-gray-700">Location: Maharashtra, India</p>
            <p className="text-xs text-gray-500">Available for destination and in-city celebrations.</p>
          </div>
        </div>

        <div className="divider-line" />

        <div className="text-center text-sm text-gray-600">
          © 2026 Muhurtham Weddings & Events. Crafted with care for unforgettable moments.
        </div>
      </div>
    </footer>
  )
}
