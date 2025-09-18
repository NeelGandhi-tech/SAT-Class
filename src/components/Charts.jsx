import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Before', avg: 1230 },
  { name: 'After', avg: 1470 },
  { name: 'Top', avg: 1570 },
]

export default function Charts() {
  return (
    <section id="charts" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Score Improvements
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Average student gains after 8 weeks of prep
        </p>
        <div className="mt-12 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[1100, 1600]} />
              <Tooltip />
              <Bar dataKey="avg" fill="#6366f1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}
