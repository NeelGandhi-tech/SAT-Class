const scores = [
  { name: 'Emmi', score: 1570 },
  { name: 'Neel', score: 1580 },
  { name: 'Tejas', score: 1600 },
]

export default function Scores() {
  return (
    <section id="scores" className="py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Our Student Success</h2>
        <p className="mt-2 text-gray-600">
          Real stories from students hitting near-perfect scores.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {scores.map(s => (
            <div
              key={s.name}
              className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm"
            >
              <div className="text-4xl font-extrabold text-indigo-600">
                {s.score}
              </div>
              <p className="mt-2 font-medium">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
