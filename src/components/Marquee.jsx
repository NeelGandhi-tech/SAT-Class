import { useMemo } from 'react'

const items = ['Official-Style Practice', 'Avg +210 Points', '1:1 Expert Tutors', 'Flexible Scheduling', 'Small Groups', 'Bootcamps']

export default function Marquee() {
  const doubled = useMemo(() => [...items, ...items, ...items, ...items], [])
  return (
    <div className="overflow-hidden border-y border-slate-200/60" style={{ backgroundColor: '#E6EEF2' }}>
      <div className="py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-8 whitespace-nowrap animate-marquee will-change-transform" style={{ animationDuration: '12s' }}>
          {doubled.map((t, i) => (
            <span key={`${t}-${i}`} className="text-sm font-medium text-slate-700">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

