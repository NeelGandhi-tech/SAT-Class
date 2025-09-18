const instructors = [
{ name: 'Alex Kim', role: 'Lead Tutor', blurb: 'Top 1% SAT, 5+ years tutoring, curriculum design.' },
{ name: 'Jordan Patel', role: 'Math Specialist', blurb: 'Perfect Math, expert in timing strategies.' },
{ name: 'Sam Lee', role: 'Reading/Writing', blurb: 'Focus on evidence‑based reading and grammar.' },
]

export default function Instructors() {
return (
<section id="instructors" className="py-20 bg-gray-50">
<div className="mx-auto max-w-7xl px-4">
<h2 className="text-3xl md:text-4xl font-bold text-center">Meet the Instructors</h2>
<div className="mt-12 grid md:grid-cols-3 gap-6">
{instructors.map((i) => (
<div key={i.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
<div className="h-24 w-24 rounded-full bg-gray-100 border border-gray-200" />
<h3 className="mt-4 font-semibold">{i.name}</h3>
<p className="text-sm text-indigo-600">{i.role}</p>
<p className="mt-2 text-gray-600 text-sm">{i.blurb}</p>
</div>
))}
</div>
</div>
</section>
)
}