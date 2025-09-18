import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} SATPrep. All rights reserved.</p>
        <nav className="flex gap-4">
          <Link to="/faq" className="hover:text-gray-700">FAQ</Link>
          <Link to="/programs" className="hover:text-gray-700">Programs</Link>
          <Link to="/contact" className="hover:text-gray-700">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
