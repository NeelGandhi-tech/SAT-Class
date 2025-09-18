import { trackEvent } from '../analytics'

const tiers = [
  { name: "Starter", price: "$59/hr", features: ["Weekly 1:1 session", "Homework plan", "Email support"] },
  { name: "Plus", price: "$89/hr", features: ["2× weekly 1:1", "Full analytics dashboard", "Priority support"], featured: true },
  { name: "Bootcamp", price: "$299", features: ["4-week course", "4 practice tests", "Exam-day strategy kit"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="text-center text-5xl font-extrabold">Transparent <span className="headline-gradient">Pricing</span></h2>
        <p className="mt-2 text-center text-slate-600 max-w-2xl mx-auto">Pick the plan that fits your goals. Upgrade or adjust any time.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`card p-7 hover:-translate-y-0.5 ${t.featured ? "ring-2 ring-offset-2 ring-offset-white ring-indigo-200" : ""}`}
            >
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-2 text-4xl font-extrabold">{t.price}</div>
              <ul className="mt-4 list-disc list-inside muted space-y-2">
                {t.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a href="#contact" onClick={() => trackEvent('cta_click', { location: 'pricing', tier: t.name })} className="btn-primary w-full mt-6 py-3">Choose {t.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
