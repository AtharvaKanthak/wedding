import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    title: 'Grand Wedding Ceremony',
    category: 'Ceremony',
    image: '/WhatsApp Image 2026-01-27 at 3.11.15 PM.jpeg',
    description: 'Elegant mandap with sophisticated styling and warm lighting.',
  },
  {
    id: 2,
    title: 'Reception Décor',
    category: 'Decoration',
    image: '/WhatsApp Image 2026-01-27 at 3.11.32 PM.jpeg',
    description: 'Layered drapes, chandeliers, and candlelit tables for a luxe reception.',
  },
  {
    id: 3,
    title: 'Bridal Glow',
    category: 'Makeup',
    image: '/WhatsApp Image 2026-01-27 at 3.11.41 PM.jpeg',
    description: 'Soft, timeless bridal makeup with artisanal detailing.',
  },
  {
    id: 4,
    title: 'Wedding Feast',
    category: 'Catering',
    image: '/WhatsApp Image 2026-01-27 at 3.11.42 PM.jpeg',
    description: 'Curated multi-course menus with impeccable presentation.',
  },
  {
    id: 5,
    title: 'Dance & Entertainment',
    category: 'Entertainment',
    image: '/WhatsApp Image 2026-01-27 at 3.11.44 PM.jpeg',
    description: 'High-energy dance floor and live sets that keep guests engaged.',
  },
  {
    id: 6,
    title: 'Floral Artistry',
    category: 'Decoration',
    image: '/WhatsApp Image 2026-01-27 at 3.11.46 PM.jpeg',
    description: 'Romantic florals in blush and ivory with gold accents.',
  },
  {
    id: 7,
    title: 'Couple Portrait',
    category: 'Photography',
    image: '/WhatsApp Image 2026-01-27 at 3.11.47 PM.jpeg',
    description: 'Editorial-style portraits capturing timeless emotion.',
  },
  {
    id: 8,
    title: 'Venue Styling',
    category: 'Venue',
    image: '/WhatsApp Image 2026-01-27 at 3.11.15 PM.jpeg',
    description: 'Balanced layouts, guest flow, and lighting for immersive ambience.',
  },
]

const categories = ['All', ...new Set(galleryImages.map((img) => img.category))]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? galleryImages : galleryImages.filter((g) => g.category === activeCategory)

  return (
    <div className="space-y-14 pb-14">
      <header className="relative overflow-hidden min-h-[50vh] flex items-center">
        <img
          src="/WhatsApp Image 2026-01-27 at 3.11.46 PM.jpeg"
          alt="Wedding moment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1a1a]/85 via-[#2b1a1a]/65 to-transparent" />
        <div className="container-shell relative z-10 text-left space-y-3 text-white max-w-3xl py-12">
          <div className="tagline text-white/80">Gallery</div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Moments we crafted</h1>
          <p className="text-white/80 max-w-2xl">Glimpses across ceremonies, décor, hospitality, and experiences.</p>
        </div>
      </header>

      <section className="container-shell space-y-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                activeCategory === cat
                  ? 'btn-primary border-transparent shadow'
                  : 'bg-white/90 border-[rgba(182,49,88,0.2)] text-[color:var(--primary-700)] hover:border-[rgba(182,49,88,0.35)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="masonry">
          {filtered.map((image) => (
            <div
              key={image.id}
              className="mb-5 break-inside-avoid group cursor-pointer overflow-hidden rounded-2xl border border-[rgba(182,49,88,0.12)] bg-white shadow-sm hover:shadow-xl transition"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
                  <div className="p-4 w-full text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex justify-between items-center p-4 bg-white border-b border-[rgba(182,49,88,0.15)]">
              <div>
                <h2 className="text-xl font-semibold text-[color:var(--primary-700)]">{selectedImage.title}</h2>
                <p className="text-sm text-gray-600">{selectedImage.category}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="btn-outline"
              >
                Close
              </button>
            </div>
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full" />
            <div className="p-6">
              <p className="text-gray-700">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
