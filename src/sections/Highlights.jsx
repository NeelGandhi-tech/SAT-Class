import { Stagger, Item } from '../components/Motion'

const items = [
  { title: 'Digital SAT is Different', desc: 'Shorter, adaptive, and timing-heavy. We coach the focus and pacing needed to thrive.' },
  { title: 'Diagnostic → Plan', desc: 'Start with a diagnostic, then a plan around your date, target, and weak spots.' },
  { title: 'Official-Style Practice', desc: 'Drills and tests that mirror the new SAT format with crisp explanations.' },
]

export default function Highlights() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-bold text-center">Why SATBear Works</h2>
        <Stagger className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((f) => (
            <Item key={f.title}>
              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:shadow">
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-slate-600">{f.desc}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
