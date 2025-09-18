export default function HowItWorks() {
  const steps = [
    {
      title: "1. Free Consultation",
      desc: "We meet with parent and student to review current scores, goals, and schedule.",
    },
    {
      title: "2. Diagnostic & Plan",
      desc: "Students complete a diagnostic. We build a custom roadmap with milestones.",
    },
    {
      title: "3. Weekly Tutoring",
      desc: "1:1 or group sessions, official-style practice, and feedback each week.",
    },
    {
      title: "4. Track & Adjust",
      desc: "Progress dashboard and score tracking, with strategy adjustments along the way.",
    },
  ]

  return (
    <section id="howitworks" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">How It Works</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="text-indigo-600 text-2xl font-bold mb-2">
                {s.title}
              </div>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
