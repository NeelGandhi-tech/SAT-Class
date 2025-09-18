// Optional: if you added Motion helpers earlier, you can import and wrap sections.
// import { FadeIn, Stagger, Item } from '../components/Motion'

export default function About() {
  const values = [
    { title: 'Student-First', desc: 'Plans built around each student’s goals, schedule, and learning style.' },
    { title: 'Evidence-Based', desc: 'Practice that mirrors the SAT. We coach timing, accuracy, and mindset.' },
    { title: 'Transparent', desc: 'Clear progress reviews and honest expectations—no fluff.' },
  ]

  const team = [
    { name: 'Emmi', score: 1570, role: 'Reading/Writing Lead' },
    { name: 'Neel', score: 1580, role: 'Math Lead' },
    { name: 'Tejas', score: 1600, role: 'Perfect Scorer • Strategy' },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              About <span className="bg-gradient-to-r from-indigo-700 via-sky-600 to-cyan-600 bg-clip-text text-transparent">SATPrep</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              We’re a small team of high-scoring tutors who turn diagnostics into
              personalized roadmaps—and measure progress every week.
            </p>
          </div>
          <div className="md:justify-self-end">
            <div className="aspect-video w-full max-w-xl rounded-2xl border border-slate-200 shadow-sm bg-white flex items-center justify-center text-slate-400">
              <span className="text-sm">Add a team photo or video</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">What We Believe</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {values.map(v => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-lg">{v.title}</h3>
                <p className="mt-2 text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Meet the Team</h2>
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map(p => (
              <article key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-indigo-400 to-sky-400 border-2 border-white" />
                <h3 className="mt-4 font-semibold">{p.name}</h3>
                <div className="text-2xl font-extrabold text-indigo-600">{p.score}</div>
                <p className="text-sm text-slate-600 mt-1">{p.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach / CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
          <p className="mt-4 text-slate-600">
            Diagnose → Plan → Practice → Review. We coach strategy and timing,
            track accuracy by skill, and adjust the plan as scores rise.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex items-center rounded-xl bg-indigo-600 text-white px-5 py-3 font-semibold shadow hover:bg-indigo-700"
          >
            Back to Home
          </a>
        </div>
      </section>
    </main>
  )
}
