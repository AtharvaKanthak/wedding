import { useEffect } from 'react'

export function useScrollReveal({ selector = '.fade-up', root = null, rootMargin = '0px', threshold = 0.15 } = {}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target
          if (entry.isIntersecting) {
            el.classList.add('in-view')
          } else {
            el.classList.remove('in-view')
          }
        })
      },
      { root, rootMargin, threshold }
    )

    const elements = Array.from(document.querySelectorAll(selector))
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selector, root, rootMargin, threshold])
}
