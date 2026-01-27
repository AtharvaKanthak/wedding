const serviceColumns = [
  [
    'Venue Selection',
    'All Types of Decor',
    'Theme wise decor (props and ambience)',
    'Welcome troupe and gifts',
    'Punjabi Dhol / Kacchi Ghodi',
    'Valet parking and security',
    'Bouncers',
    'Pandit ji',
    'Theme varmala',
    'Pheta, safa, pagdi',
    'Couple special entries',
    'Room hampers and food basket',
    'Room fresh-kit',
  ],
  [
    'Choreographer',
    'Photographer',
    'Reels maker',
    'Akshada',
    'Kanthika',
    'Band / DJ',
    'Ghodi',
    'Zumber batti',
    'Baarat on wheels',
    'Car decoration',
    'Mehendi artist',
    'Makeup artist',
    'Musical group',
    'Anchor',
  ],
  [
    'Haldi platter',
    'Mehendi platter',
    'Mangalsutra platter',
    'Ring platter',
    'Trays',
    'Puja thali with Kumkum Chawal',
    'Tilak sticks',
    'Chak Kalash set',
    'Maya Thapana set',
    'Vinayak Pujan material',
  ],
  [
    'Chaurang & Pata',
    'Chidi Toran',
    'Neem Chadi',
    'Special effects',
  ],
]

const packages = [
  {
    name: 'Essentials',
    price: 'Custom as per scope',
    features: ['Venue and decor', 'Core rituals and varmala', 'On-day coordination', 'Guest hospitality'],
  },
  {
    name: 'Signature',
    price: 'Tailored proposal',
    features: [
      'Everything in Essentials',
      'Entertainment and choreography',
      'Photography / reels coverage',
      'Hospitality and logistics team',
    ],
    featured: true,
  },
  {
    name: 'Royal',
    price: 'Bespoke experience',
    features: [
      'Everything in Signature',
      'Multi-day celebrations',
      'Custom thematic production',
      'VIP guest services',
    ],
  },
]

export default function Services() {
  return (
    <div className="space-y-16 pb-16">
      <header className="relative overflow-hidden min-h-[60vh] flex items-center">
        <img
          src="/WhatsApp Image 2026-01-27 at 3.11.32 PM.jpeg"
          alt="Wedding decor"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1a1a]/80 via-[#2b1a1a]/60 to-transparent" />
        <div className="container-shell relative z-10 text-left space-y-5 text-white max-w-3xl py-16">
          <div className="tagline text-white/80">Our Services</div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Crafted end-to-end for your day</h1>
          <p className="text-lg text-white/80">
            From venue and decor to rituals, entertainment, hospitality, and guest care — we curate every layer of your celebration.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="stat-chip bg-white/90 border-white/40 text-[color:var(--primary-700)]">Concept to execution</span>
            <span className="stat-chip bg-white/90 border-white/40 text-[color:var(--primary-700)]">On-day command center</span>
            <span className="stat-chip bg-white/90 border-white/40 text-[color:var(--primary-700)]">Guest & hospitality care</span>
          </div>
        </div>
      </header>

      <section className="container-shell space-y-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceColumns.map((col, idx) => (
            <div key={idx} className="soft-card p-5 shadow-lg">
              <h3 className="text-lg font-semibold text-[color:var(--primary-700)] mb-3">{idx < 2 ? 'Experiences' : 'Rituals & Details'}</h3>
              <div className="space-y-2">
                {col.map((item) => (
                  <div key={item} className="list-tile text-gray-800 text-sm font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--primary-700)]">
            <span className="uppercase tracking-[0.15em] font-extrabold">Signature packages </span>
            Choose your flow
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">Packages adapt to your scope. We refine pricing after understanding your venues, guest count, and ceremonies.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`p-8 rounded-2xl border relative overflow-hidden ${
                pkg.featured
                  ? 'bg-gradient-to-br from-[#ffd9e6] via-[#ffecd9] to-white border-[rgba(182,49,88,0.25)] shadow-xl'
                  : 'bg-white border-[rgba(182,49,88,0.16)] shadow-sm'
              }`}
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#e76a8a,transparent_30%),radial-gradient(circle_at_80%_0%,#f4c95d,transparent_26%)]" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-[color:var(--primary-700)]">{pkg.name}</h3>
                  {pkg.featured && <span className="badge">Most Popular</span>}
                </div>
                <p className="text-[color:var(--primary-700)] font-semibold mb-6">{pkg.price}</p>
                <ul className="space-y-3 text-gray-800 text-sm">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-[color:var(--primary-500)]">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full py-3 rounded-full btn-primary">
                  Discuss this tier
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
