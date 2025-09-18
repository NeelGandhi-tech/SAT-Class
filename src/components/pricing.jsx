const tiers = [
  { name: "Starter", price: "$59/hr", features: ["Weekly 1:1 session", "Homework plan", "Email support"] },
  { name: "Plus", price: "$89/hr", features: ["2× weekly 1:1", "Full analytics dashboard", "Priority support"], featured: true },
  { name: "Bootcamp", price: "$299", features: ["4-week course", "4 practice tests", "Exam-day strategy kit"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="text-center text-4xl font-bold">Transparent <span className="headline-gradient">Pricing</span></h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`card ${t.featured ? "ring-2 ring-offset-2 ring-offset-white ring-indigo-200" : ""}`}
            >
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">{t.price}</div>
              <ul className="mt-4 list-disc list-inside muted space-y-2">
                {t.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a href="#contact" className="btn-primary w-full mt-6">Choose {t.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
