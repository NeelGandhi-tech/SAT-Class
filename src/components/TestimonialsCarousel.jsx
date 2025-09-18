import { useMemo } from 'react'

const testimonials = [
  { text: 'I jumped 210 points in 8 weeks. The reviews were game‑changing.', name: 'Maya • 2026' },
  { text: 'Timing tips were gold. Practice felt just like the real test.', name: 'Ethan • 2025' },
  { text: 'My plan adapted every week. I knew exactly what to do.', name: 'Sofia • 2025' },
  { text: 'Clear strategies for every section. Confidence went way up.', name: 'Noah • 2026' },
]

export default function TestimonialsCarousel() {
  const items = useMemo(() => [...testimonials, ...testimonials], [])
  return (
    <section className="section">
      <div className="container">
        <h2 className="heading-2 text-center">What Families Say</h2>
        <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex gap-5 animate-marquee will-change-transform">
            {items.map((t, i) => (
              <figure key={`${t.name}-${i}`} className="soft-surface p-5 w-[320px] shrink-0">
                <blockquote className="text-slate-800">“{t.text}”</blockquote>
                <figcaption className="mt-3 text-sm subtle">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

