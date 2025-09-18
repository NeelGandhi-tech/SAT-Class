import { FadeIn } from '../components/Motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <h1 className="text-5xl font-extrabold leading-[1.1]">
            Raise Your SAT Score with <span className="bg-gradient-to-r from-indigo-700 via-sky-600 to-cyan-600 bg-clip-text text-transparent">Expert Tutors</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Personalized strategies, official-style practice, and data-driven plans.
          </p>
          <div className="mt-8 flex gap-3">
            <Link to="/programs" className="inline-flex items-center rounded-xl bg-indigo-600 text-white px-5 py-3 font-semibold shadow hover:bg-indigo-700">See Programs</Link>
            <Link to="/contact" className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:border-slate-400">Get a Free Evaluation</Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="aspect-video w-full max-w-xl rounded-2xl border border-slate-200 shadow-sm bg-white flex items-center justify-center text-slate-400">
            <span className="text-sm">Your promo image / video here</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
