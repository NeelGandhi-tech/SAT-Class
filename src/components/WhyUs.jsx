export default function WhyUs() {
  const rows = [
    { feature: "Personalized Plans", us: "✔", others: "✖" },
    { feature: "Top Tutors (99th percentile)", us: "✔", others: "✖" },
    { feature: "Score Tracking Dashboard", us: "✔", others: "✖" },
    { feature: "Transparent Pricing", us: "✔", others: "$120+/hr" },
  ]
  return (
    <section id="whyus" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us vs Others
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 text-left">Feature</th>
                <th className="p-3">SATPrep</th>
                <th className="p-3">Other Tutors</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.feature} className="odd:bg-white even:bg-gray-100">
                  <td className="p-3 font-medium">{r.feature}</td>
                  <td className="p-3 text-center text-green-600 font-bold">{r.us}</td>
                  <td className="p-3 text-center text-red-500 font-bold">{r.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
