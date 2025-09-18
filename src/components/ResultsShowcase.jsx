// src/components/ResultsShowcase.jsx
import {
  ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  LineChart, Line
} from 'recharts'

const kpis = [
  { label: "Avg. Increase", value: "+210" },
  { label: "Students Tutored", value: "150+" },
  { label: "Perfect Scores", value: "10+" },
]

const tutors = [
  { name: 'Emmi', score: 1570, tag: 'Reading/Writing ace' },
  { name: 'Neel', score: 1580, tag: 'Math 790+, all-round' },
  { name: 'Tejas', score: 1600, tag: 'Perfect scorer' },
]

// Fake demo data
const compareBars = [
  { name: 'Us', avgGain: 210 },
  { name: 'Others', avgGain: 90 },
]

const weeklyLine = [
  { week: 'W1', pts: 10 },
  { week: 'W2', pts: 25 },
  { week: 'W3', pts: 45 },
  { week: 'W4', pts: 70 },
  { week: 'W5', pts: 95 },
  { week: 'W6', pts: 120 },
]

export default function ResultsShowcase() {
  return (
    <section id="results" className="py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* KPI band */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {kpis.map(k => (
            <div key={k.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-600">{k.value}</div>
              <div className="mt-2 text-slate-600">{k.label}</div>
            </div>
          ))}
        </div>

        {/* Tutor score cards */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tutors.map(t => (
            <article key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-indigo-400 to-sky-400 border-2 border-white" />
              <h3 className="mt-4 font-semibold">{t.name}</h3>
              <div className="text-3xl font-extrabold text-indigo-600">{t.score}</div>
              <p className="text-sm text-slate-600 mt-1">{t.tag}</p>
            </article>
          ))}
        </div>

        {/* Charts */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {/* Bar compare */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Average Point Improvement (Demo)</h3>
            <div className="h-72 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={compareBars}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="avgGain" radius={[8,8,0,0]} fill="#6366F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Line weekly */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Weekly Progress (Demo)</h3>
            <div className="h-72 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyLine}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="pts" stroke="#0EA5E9" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-center text-slate-500">
          Demo data for illustration. Replace with your real metrics when ready.
        </p>
      </div>
    </section>
  )
}
