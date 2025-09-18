import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'

import Home from './pages/Home'
import About from './pages/About'
import Book from './pages/Book'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC', color: '#0f172a' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </div>
  )
}
