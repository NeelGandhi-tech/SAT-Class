import { trackEvent } from '../analytics'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="hero-bg">
      <div className="container grid md:grid-cols-2 gap-12 items-center py-28">
        <div>
          <span className="pill">🎯 150–300+ point improvements</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-[1.1]">
            Raise Your SAT Score with <span className="headline-gradient">SATBear</span>
          </h1>
          <p className="mt-5 text-lg muted">
            Personalized strategies, official-style practice, and data-driven plans — built around your test date and target score.
          </p>
          <div className="mt-4 text-sm subtle">
            The new digital SAT is shorter, adaptive, and unforgiving on timing. Success now requires focused practice, strategic guessing, and tight pacing. We train exactly that.
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" onClick={() => trackEvent('cta_click', { location: 'hero', action: 'see_programs' })} className="btn-primary">See Programs</a>
            <a href="#contact" onClick={() => trackEvent('cta_click', { location: 'hero', action: 'free_eval' })} className="btn-outline">Get a Free Evaluation</a>
          </div>
          <p className="mt-3 text-xs muted">No obligation • 20-minute call • Parent & student welcome</p>
          <div className="mt-6 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="muted">Spots open for Oct & Dec tests</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-500" />
              <span className="muted">Avg +210 points</span>
            </div>
          </div>
        </div>

        <div className="md:justify-self-end">
          <div className="aspect-video w-full max-w-xl rounded-2xl shadow-sm bg-white/90 backdrop-blur flex items-center justify-center overflow-hidden ring-1 ring-slate-200/60">
            <img
              alt="Students celebrating high SAT scores"
              src="https://images.unsplash.com/photo-1559737558-2f8c2fd1163c?q=80&w=1200&auto=format&fit=crop"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 flex items-center gap-4 text-sm">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-sky-400 border-2 border-white" />
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 to-cyan-400 border-2 border-white" />
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-indigo-400 border-2 border-white" />
            </div>
            <span className="muted">Trusted by families across the US</span>
          </div>
        </div>
      </div>
    </section>
  );
}
