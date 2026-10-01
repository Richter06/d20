import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Tavern from './components/Tavern'
import MenuSection from './components/MenuSection'
import Quest from './components/Quest'
import Gallery from './components/Gallery'
import Visit from './components/Visit'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingOrder from './components/FloatingOrder'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-kicker', { opacity: 0, y: 16, duration: .6 })
        .from('.hero-logo', { opacity: 0, scale: .9, duration: .8 }, '-=.3')
        .from('.hero-copy > *', { opacity: 0, y: 24, duration: .7, stagger: .08 }, '-=.4')
        .from('.hero-actions', { opacity: 0, y: 18, duration: .5 }, '-=.3')
        .from('.hero-d20', { opacity: 0, scale: .8, duration: 1 }, '-=.7')
      gsap.to('.hero-d20', { yPercent: -12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hero-video', { scale: 1.08, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.utils.toArray('[data-reveal]').forEach((el) => gsap.from(el, { opacity: 0, y: 34, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 84%', once: true } }))
      gsap.to('.quest-line', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.quest', start: 'top 75%', end: 'bottom 65%', scrub: true } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={root} className="site">
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <Tavern />
        <MenuSection />
        <Quest />
        <Gallery />
        <Visit />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingOrder />
    </div>
  )
}
