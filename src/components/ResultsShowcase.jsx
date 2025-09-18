// src/components/ResultsShowcase.jsx
import {
  ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  LineChart, Line
} from 'recharts'

const kpis = [
  { label: "Avg. Increase", value: 210, suffix: '+' },
  { label: "Students Tutored", value: 150, suffix: '+' },
  { label: "Perfect Scores", value: 10, suffix: '+' },
]

const tutors = [
  { name: 'Emmi', score: 1570, tag: 'Reading/Writing ace' },
  { name: 'Neel', score: 1560, tag: 'Math 790+, all-round' },
  { name: 'Tejas', score: 1600, tag: 'Perfect scorer' },
]

// Fake demo data
const compareBars = [
  { name: 'Us', avgGain: 210 },
  { name: 'Others', avgGain: 90 },
]

const weeklyLine = [
  { week: 'W1', pts: 1000 },
  { week: 'W2', pts: 1100 },
  { week: 'W3', pts: 1150 },
  { week: 'W4', pts: 1200 },
  { week: 'W5', pts: 1220 },
  { week: 'W6', pts: 1350 },
]

import { useEffect, useRef, useState } from 'react'

function Counter({ target, suffix = '', duration = 900, className = '' }) {
  const [val, setVal] = useState(0)
  const startRef = useRef(null)
  useEffect(() => {
    let raf
    const step = (ts) => {
      if (!startRef.current) startRef.current = ts
      const p = Math.min((ts - startRef.current) / duration, 1)
      setVal(Math.floor(p * target))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return <div className={className}>{val}{suffix}</div>
}

export default function ResultsShowcase() {
  return (
    <section id="results" className="section">
      <div className="mx-auto max-w-7xl px-4">

        {/* KPI band */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {kpis.map(k => (
            <div key={k.label} className="soft-surface p-6 tilt">
              <Counter target={k.value} suffix={k.suffix} duration={900} className="text-2xl md:text-3xl font-extrabold" />
              <div className="mt-2 text-slate-600">{k.label}</div>
            </div>
          ))}
        </div>

        {/* Tutor score cards */}
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tutors.map(t => (
            <article key={t.name} className="soft-surface p-6 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-indigo-400 to-sky-400 border-2 border-white" />
              <h3 className="mt-4 font-semibold">{t.name}</h3>
              <div className="text-2xl font-extrabold" style={{ color: '#0B4F8A' }}>{t.score}</div>
              <p className="text-sm text-slate-600 mt-1">{t.tag}</p>
            </article>
          ))}
        </div>

        {/* Charts */}
        <div className="mt-6 lg:mt-8 grid lg:grid-cols-2 gap-4">
          {/* Bar compare */}
          <div className="soft-surface p-5">
            <h3 className="font-semibold">Average Point Improvement (Demo)</h3>
            <div className="h-56 mt-3">
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
          <div className="soft-surface p-5">
            <h3 className="font-semibold">Weekly Progress (Demo)</h3>
            <div className="h-56 mt-3">
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
