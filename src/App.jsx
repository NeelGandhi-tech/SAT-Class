import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'

import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}
