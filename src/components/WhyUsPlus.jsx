// src/components/WhyUsPlus.jsx
export default function WhyUsPlus() {
  const rows = [
    { feature: "Personalized diagnostic plan", us: "✔", other: "△" },
    { feature: "Official-style weekly sets", us: "✔", other: "△" },
    { feature: "Live error analysis & dashboard", us: "✔", other: "✖" },
    { feature: "Timing & mindset coaching", us: "✔", other: "△" },
    { feature: "Flexible 1:1 + small group", us: "✔", other: "△" },
  ]

  const highlights = [
    { title: "Data-Driven", desc: "We target weak skills by the numbers, not guesses." },
    { title: "Official-Style Practice", desc: "Students get realistic drills and full-length tests." },
    { title: "Score Strategy", desc: "Timing, guessing, and review systems that compound." },
  ]

  return (
    <>
      {/* Comparison */}
      <br></br>
      <br></br>
      <section id="whyus" className=" bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Why Us vs. Others</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-indigo-50/60">
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="p-4">Us</th>
                  <th className="p-4">Other Tutors</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.feature} className="border-t">
                    <td className="p-4 font-medium">{r.feature}</td>
                    <td className="p-4 text-center text-green-700">{r.us}</td>
                    <td className="p-4 text-center text-gray-600">{r.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-gray-600 text-sm">
            We focus on measurable progress each week — not just homework volume.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-lg">{h.title}</h3>
                <p className="mt-2 text-slate-600">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
