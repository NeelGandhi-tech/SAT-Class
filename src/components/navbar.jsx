import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold tracking-tight">
          SAT<span className="text-indigo-600">Prep</span>
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-indigo-600' : 'hover:text-indigo-600'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-indigo-600' : 'hover:text-indigo-600'}>About</NavLink>
        </nav>
        <Link
          to="/about"
          className="inline-flex items-center rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-indigo-700"
        >
          Learn More
        </Link>
      </div>
    </header>
  )
}
