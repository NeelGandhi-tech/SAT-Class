const services = [
  { name: '1:1 Elite Tutoring', points: ['Custom plan + weekly sessions', 'Homework + live feedback', 'Flexible scheduling'] },
  { name: 'Small Group (3–6 students)', points: ['Lower cost per student', 'Structured curriculum', 'Peer accountability'] },
  { name: 'Bootcamp (4 weeks)', points: ['Intensive review', 'Timing strategies', 'Full-length practice tests'] },
];

export default function Services() {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <h2 className="heading-2 text-center">Programs</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.name} className="card">
              <h3 className="font-semibold text-lg">{s.name}</h3>
              <ul className="mt-3 list-disc list-inside subtle space-y-2">
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
