export default function Hero() {
  return (
    <section id="home" className="hero-bg">
      <div className="container grid md:grid-cols-2 gap-12 items-center py-28">
        <div>
          <span className="pill">🎯 150–300+ point improvements</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-[1.1]">
            Raise Your SAT Score with <span className="headline-gradient">Expert Tutors</span>
          </h1>
          <p className="mt-5 text-lg muted">
            Personalized strategies, official-style practice, and data-driven plans — built around your test date and target score.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="btn-primary">See Programs</a>
            <a href="#contact" className="btn-outline">Get a Free Evaluation</a>
          </div>
          <p className="mt-3 text-xs muted">No obligation • 20-minute call • Parent & student welcome</p>
        </div>

        <div className="md:justify-self-end">
          <div className="aspect-video w-full max-w-xl rounded-2xl border border-slate-200 shadow-sm bg-white/90 backdrop-blur flex items-center justify-center text-slate-400">
            <span className="text-sm">Your promo image / video here</span>
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
