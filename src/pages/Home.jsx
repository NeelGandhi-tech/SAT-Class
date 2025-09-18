import Hero from '../components/hero'
import WhyUsPlus from '../components/WhyUsPlus'
import ResultsShowcase from '../components/ResultsShowcase'
import Services from '../components/services'
import Pricing from '../components/pricing'
import Instructors from '../components/instructors'
import FAQ from '../components/faq'
import Contact from '../components/contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUsPlus />
      {/* Results + charts */}
      <ResultsShowcase />
      <Services />
      <Pricing />
      <Instructors />
      <FAQ />
      <Contact />
    </main>
  )
}
