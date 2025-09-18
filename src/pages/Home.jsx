import Hero from '../components/hero'
import WhyUsPlus from '../components/WhyUsPlus'
import ResultsShowcase from '../components/ResultsShowcase'
import Services from '../components/services'
import Pricing from '../components/pricing'
import Instructors from '../components/instructors'
import FAQ from '../components/faq'
import Contact from '../components/contact'
import { FadeIn } from '../components/Motion'
import Marquee from '../components/Marquee'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import Gallery from '../components/Gallery'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <FadeIn delay={0.05}><WhyUsPlus /></FadeIn>
      {/* Results + charts */}
      <FadeIn delay={0.1}><ResultsShowcase /></FadeIn>
      <FadeIn delay={0.1}><Services /></FadeIn>
      <FadeIn delay={0.12}><Pricing /></FadeIn>
      <FadeIn delay={0.12}><TestimonialsCarousel /></FadeIn>
      <FadeIn delay={0.12}><Gallery /></FadeIn>
      <FadeIn delay={0.12}><Instructors /></FadeIn>
      <FadeIn delay={0.14}><FAQ /></FadeIn>
      <FadeIn delay={0.16}><Contact /></FadeIn>
    </main>
  )
}
