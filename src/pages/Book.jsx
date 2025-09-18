import { useMemo } from 'react'

export default function Book() {
  const calendlyUrl = useMemo(() => {
    // Use env var if provided, else fallback to example
    return import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/your-calendly-username/20min';
  }, [])

  return (
    <main>
      <section className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">Book a Free Consult</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Pick a time that works for you. Parent and student are both welcome on the call.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="relative" style={{paddingTop: '0', height: '750px'}}>
              <iframe
                title="Calendly Scheduling"
                src={`${calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1`}
                width="100%"
                height="100%"
                frameBorder="0"
              />
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">If the scheduler does not load, <a className="text-indigo-600 underline" href={calendlyUrl} target="_blank" rel="noreferrer">open on Calendly</a>.</p>
        </div>
      </section>
    </main>
  )
}

