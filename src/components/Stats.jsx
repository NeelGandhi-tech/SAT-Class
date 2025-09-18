export default function Stats() {
  const stats = [
    { label: "Avg. Score Increase", value: "+210" },
    { label: "Students Tutored", value: "150+" },
    { label: "Perfect Scores", value: "10+" },
    { label: "Years of Experience", value: "5+" },
  ]

  return (
    <section id="stats" className="py-16 bg-indigo-600 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-extrabold">{s.value}</div>
              <p className="mt-2 text-sm md:text-base opacity-80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
