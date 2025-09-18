export default function Curriculum() {
  const topics = [
    "Reading Comprehension strategies",
    "Grammar & Writing rules",
    "Math fundamentals + advanced topics",
    "Data analysis & word problems",
    "Timing strategies and pacing",
    "Full-length practice exams",
  ]

  return (
    <section id="curriculum" className="py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Curriculum Overview</h2>
        <p className="mt-2 text-gray-600">
          Our curriculum is designed to cover every skill tested on the SAT,
          while focusing on your personal weak spots.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {topics.map((t) => (
            <div
              key={t}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <p className="font-medium text-indigo-600">✓</p>
              <p className="mt-2 text-gray-700">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
