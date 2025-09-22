import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { trackEvent } from '../analytics'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold tracking-tight">
          <span style={{ color: '#003262' }}>SAT</span><span style={{ color: '#FDB515' }}>Bear</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'hover:text-indigo-600'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'hover:text-indigo-600'}>About</NavLink>
          {/* <NavLink to="/book" className={({isActive}) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'hover:text-indigo-600'}>Book</NavLink> */}
          {/* <a href="/#services" className="hover:text-indigo-600">Programs</a>
          <a href="/#pricing" className="hover:text-indigo-600">Pricing</a>
          <a href="/#faq" className="hover:text-indigo-600">FAQ</a> */}
        </nav>
        <Link
          to="/book"
          onClick={() => trackEvent('cta_click', { location: 'navbar', action: 'book_free_consult' })}
          className="inline-flex items-center rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-indigo-700"
        >
          Book Consult
        </Link>
      </div>
    </header>
  )
}
