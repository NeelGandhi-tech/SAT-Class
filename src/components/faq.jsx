const faqs = [
  { q: 'How do we start?', a: 'Book a free 20-minute consult below. We discuss current scores, goals, and schedule.' },
  { q: 'Do you offer online tutoring?', a: 'Yes, via Zoom with shared whiteboards and real-time feedback.' },
  { q: 'What materials do you use?', a: 'Official-style practice, custom drills, and timing exercises for the new SAT.' },
];

export default function FAQ() {
  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container max-w-3xl">
        <h2 className="heading-2 text-center">FAQ</h2>
        <div className="mt-10 divide-y divide-gray-200 border border-gray-200 rounded-2xl bg-white">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between">
                <span className="font-semibold">{q}</span>
                <span className="text-xl transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 subtle">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
