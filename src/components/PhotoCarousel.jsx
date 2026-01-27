export default function PhotoCarousel({ images = [] }) {
  const loopImages = [...images, ...images]
  return (
    <div className="carousel">
      <div className="carousel-track">
        {loopImages.map((src, idx) => (
          <div className="carousel-item" key={`${idx}-${src}`}>
            <img src={src} alt="Wedding moment" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}
