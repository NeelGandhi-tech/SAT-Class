const quotes = [
{ text: 'I jumped 210 points in 8 weeks. The feedback after each test was the game‑changer.', name: 'Maya, Class of 2026' },
{ text: 'Clear strategies for every section. Timing tips were gold.', name: 'Ethan, Class of 2025' },
]

export default function Testimonials() {
return (
<section id="testimonials" className="py-20">
<div className="mx-auto max-w-7xl px-4">
<h2 className="text-3xl md:text-4xl font-bold text-center">Results & Reviews</h2>
<div className="mt-12 grid md:grid-cols-2 gap-6">
{quotes.map((q) => (
<figure key={q.name} className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
<blockquote className="text-gray-700">“{q.text}”</blockquote>
<figcaption className="mt-3 text-sm text-gray-500">— {q.name}</figcaption>
</figure>
))}
</div>
</div>
</section>
)
}