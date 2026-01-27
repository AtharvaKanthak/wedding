import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  const navItemClass = (to) =>
    `relative font-semibold transition-colors ${
      pathname === to ? 'text-[color:var(--primary-700)]' : 'text-[color:var(--ink)]'
    }`

  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-white/85 border-b border-[rgba(182,49,88,0.16)] shadow-sm">
      <div className="container-shell py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="leading-tight">
            <div className="text-[color:var(--primary-700)] font-extrabold tracking-[0.22em] text-xs uppercase">Muhurtham</div>
            <div className="text-xl font-semibold text-[color:var(--primary-700)] font-['Playfair_Display',serif]">Weddings & Events</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="group">
              <span className={navItemClass(link.to)}>
                {link.label}
                <span
                  className={`absolute left-0 -bottom-2 h-0.5 rounded-full transition-all origin-left ${
                    pathname === link.to
                      ? 'w-full bg-[linear-gradient(90deg,#ffb7c3,#f4c95d)]'
                      : 'w-0 bg-[color:var(--primary-500)]'
                  }`}
                />
              </span>
            </Link>
          ))}

          <Link to="/contact" className="px-4 py-2 rounded-lg bg-[color:var(--primary-500)] text-white font-bold text-sm shadow-md hover:bg-[color:var(--primary-700)] hover:shadow-lg transition-all">
            Plan With Us
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden px-3 py-2 rounded-full border border-[rgba(182,49,88,0.25)] text-[color:var(--ink)] bg-white/85"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[rgba(182,49,88,0.18)] bg-white/92 backdrop-blur">
          <div className="container-shell py-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-semibold py-2 ${
                  pathname === link.to ? 'text-[color:var(--primary-700)]' : 'text-[color:var(--ink)]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2 px-4 py-2 rounded-lg bg-[color:var(--primary-500)] text-white font-bold text-sm shadow-md text-center" onClick={() => setIsOpen(false)}>
              Plan With Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
