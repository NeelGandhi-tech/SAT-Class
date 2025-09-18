export default function PracticeQuestion() {
  return (
    <section id="practice" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Try a Practice Question
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Here’s a sample question like what we give our students each week.
        </p>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="font-medium">
            A train travels 120 miles in 2 hours. If it maintains the same
            average speed, how far will it travel in 5 hours?
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>A) 200 miles</li>
            <li>B) 250 miles</li>
            <li>C) 300 miles</li>
            <li>D) 320 miles</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            (Answer: C. Speed = 60 mph → 60 × 5 = 300 miles)
          </p>
        </div>
      </div>
    </section>
  )
}
