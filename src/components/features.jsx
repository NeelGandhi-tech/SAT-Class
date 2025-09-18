const features = [
  { icon: "🧭", title: "Diagnostic → Plan", desc: "Start with a diagnostic to build a personalized plan around your target score and test date." },
  { icon: "📘", title: "Official-Style Practice", desc: "Weekly practice sets aligned to the new SAT with clear explanations." },
  { icon: "📈", title: "Data-Driven Feedback", desc: "Track accuracy by skill, timing, and careless errors on a live dashboard." },
];

export default function Features() {
  return (
    <section id="features" className="section brand-gradient-2">
      <div className="container">
        <h2 className="text-center text-4xl font-bold">
          Why Families <span className="headline-gradient">Choose Us</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card">
              <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center text-lg">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
