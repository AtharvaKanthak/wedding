import { Link } from 'react-router-dom'
import PhotoCarousel from '../components/PhotoCarousel'
import { useScrollReveal } from '../hooks/useScrollReveal'

const managementRoles = [
  'Hospitality Manager',
  'Logistics Manager',
  'Food and Beverages Manager',
  'Bride Shadow',
  'Groom Shadow',
  'Bride and Groom parents shadow',
  'Overall Coordinator',
  'Ritual Manager',
  'Porter',
]

const highlightServices = [
  'Venue selection and bespoke decor',
  'Theme-led props and ambience',
  'Valet, security, and guest care',
  'Welcome troupe, gifts, and special entries',
  'Photography, reels, and DJ or band',
  'Pandit ji, varmala, and ceremonial rituals',
  'Room hampers, fresh kits, and hospitality',
  'Makeup, mehendi, choreography, and more',
]

const whyChoose = [
  {
    title: 'Expertise',
    text: '8 years across Maharashtra with 25+ in-house experts delivering seamless celebrations.',
  },
  {
    title: 'Care',
    text: 'A dedicated expert answers every question, ensuring calm, personal guidance.',
  },
  {
    title: 'Technology',
    text: 'Cutting-edge tools for precise pricing, amazing experiences, and flawless execution.',
  },
]

const storyPoints = [
  { label: '8+ years', desc: 'of curated celebrations' },
  { label: '25+ experts', desc: 'in-house specialists' },
  { label: 'Across Maharashtra', desc: 'and destination-ready' },
]

const carouselImages = [
  '/WhatsApp Image 2026-01-27 at 3.11.15 PM.jpeg',
  '/WhatsApp Image 2026-01-27 at 3.11.32 PM.jpeg',
  '/WhatsApp Image 2026-01-27 at 3.11.41 PM.jpeg',
  '/WhatsApp Image 2026-01-27 at 3.11.42 PM.jpeg',
  '/WhatsApp Image 2026-01-27 at 3.11.44 PM.jpeg',
  '/WhatsApp Image 2026-01-27 at 3.11.46 PM.jpeg',
  '/WhatsApp Image 2026-01-27 at 3.11.47 PM.jpeg',
]

export default function Home() {
  useScrollReveal()
  return (
    <div className="space-y-20">
      <section className="hero-frame min-h-[92vh] flex items-center relative overflow-hidden grainy">
        <div className="hero-overlay" />
        <div className="floating-ribbon" style={{ top: '-12%', left: '-14%' }} />
        <div className="floating-ribbon alt" style={{ bottom: '-16%', right: '-12%' }} />

        <div className="container-shell relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 py-16 items-center">
          <div className="space-y-7 fade-up cascade-1">
            <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--primary-700)] leading-tight">
              Transforming every occasion into unforgettable, seamless experiences.
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              We plan, curate, and orchestrate weddings with precision and artistry. Every detail is cared for so you can stay present in your moments.
            </p>

            <div className="flex flex-wrap gap-3">
              {storyPoints.map((point) => (
                <span key={point.label} className="stat-chip">
                  <strong>{point.label}</strong>
                  <span className="text-sm text-gray-700 font-semibold">{point.desc}</span>
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link to="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link to="/gallery" className="btn-outline">
                View Gallery
              </Link>
            </div>
          </div>

          <div className="relative fade-up cascade-2 flex items-center justify-center">
            <div className="soft-card p-8 shine-border bg-white/70">
              <img
                src="/WhatsApp Image 2026-01-27 at 3.11.47 PM.jpeg"
                alt="Muhurtham Logo"
                className="w-[260px] h-auto object-contain drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell fade-up">
        <PhotoCarousel images={carouselImages} />
      </section>

      <section className="container-shell petal-bg relative py-12 md:py-16">
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-stretch">
          <div className="panel-blur p-8 shine-border fade-up cascade-1">
            <div className="section-heading">Our Vision</div>
            <h3 className="text-3xl font-semibold text-[color:var(--primary-700)] mb-4">Client satisfaction at every step</h3>
            <p className="text-gray-700 leading-relaxed">
              We ensure loyalty and quality service at fair, competitive pricing. Every event represents our clients' brand, and we thrive on exceeding expectations for weddings, corporate gatherings, or any special occasion.
            </p>
          </div>

          <div className="panel-blur p-8 shine-border fade-up cascade-2">
            <div className="section-heading">Our Mission</div>
            <h3 className="text-3xl font-semibold text-[color:var(--primary-700)] mb-4">Personalized, thoughtful planning</h3>
            <p className="text-gray-700 leading-relaxed">
              We deliver event planning tailored to each client's unique needs and preferences. Our goal is to make planning stress-free, enjoyable, and gracefully executed.
            </p>
            <div className="divider-line" />
            <div className="grid sm:grid-cols-3 gap-3">
              {whyChoose.map((item, idx) => (
                <div key={item.title} className={`soft-card p-4 fade-up cascade-${idx + 3}`}>
                  <h4 className="text-lg font-semibold text-[color:var(--primary-700)]var(--primary-700)] mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell space-y-8 relative overflow-hidden py-10 rounded-2xl">
        <div className="absolute inset-0 bg-[url('/team2.jpeg')] bg-cover bg-center opacity-25" aria-hidden="true" />
        <div className="absolute inset-0 bg-white/82" aria-hidden="true" />

        <div className="relative text-center fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--primary-700)]">
            <span className="uppercase tracking-[0.15em] font-extrabold">Management Team </span>
            Specialists for every detail
          </h2>
        </div>
        <div className="relative grid-list fade-up cascade-1">
          {managementRoles.map((role) => (
            <div key={role} className="list-tile text-gray-800 font-semibold">
              {role}
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell space-y-8">
        <div className="text-center fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--primary-700)]">
            <span className="uppercase tracking-[0.15em] font-extrabold">Signature Services </span>
            From welcome to farewell
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            A complete suite of offerings across decor, hospitality, rituals, entertainment, and guest experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {highlightServices.map((item, idx) => (
            <div key={item} className={`soft-card p-6 flex gap-3 items-start fade-up cascade-${idx % 4}`}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffd9e6] to-[#ffecd9] border border-[rgba(182,49,88,0.16)] flex items-center justify-center text-[color:var(--primary-700)] font-bold">•</div>
              <p className="text-gray-800 font-medium leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="text-center fade-up">
          <Link to="/services" className="btn-outline">
            View the complete services list
          </Link>
        </div>
      </section>

      <section className="container-shell soft-card p-10 text-center fade-up relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/team.jpeg')] bg-cover bg-center opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 bg-white/75" aria-hidden="true" />

        <div className="relative">
          <div className="section-heading justify-center">Plan your day</div>
          <h3 className="text-3xl font-semibold text-[color:var(--primary-700)] mb-4">Ready for an elegant, effortless celebration?</h3>
          <p className="text-gray-700 mb-6">Tell us your vision and we will orchestrate every detail with grace and precision.</p>
          <div className="flex gap-4 justify-center flex-wrap mt-6 mb-4">
            <Link to="/contact" className="btn-primary btn-compact">
              Connect With Us
            </Link>
            <Link to="/gallery" className="btn-outline btn-compact">
              See recent celebrations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
