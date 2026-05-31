import { useEffect, useState } from 'react'
import Navbar        from './components/Navbar/Navbar'
import Hero          from './sections/Hero/Hero'
import AboutUs       from './sections/AboutUs/AboutUs'
import Features      from './sections/Features/Features'
import Gallery       from './sections/Gallery/Gallery'
import Rooms         from './sections/Rooms/Rooms'
import ElQuincho     from './sections/ElQuincho/ElQuincho'
import Groups        from './sections/Groups/Groups'
import Amenities     from './sections/Amenities/Amenities'
import Experiences   from './sections/Experiences/Experiences'
import Comparison    from './sections/Comparison/Comparison'
import Reviews       from './sections/Reviews/Reviews'
import FAQ           from './sections/FAQ/FAQ'
import Booking       from './sections/Booking/Booking'
import Location      from './sections/Location/Location'
import Footer        from './components/Footer/Footer'
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat'

export default function App() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setScroll(h > 0 ? window.scrollY / h : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    const observe = () => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
        .forEach(el => io.observe(el))
    }
    observe()
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div style={{position:'fixed',top:0,left:0,height:3,background:'linear-gradient(90deg,var(--gold),var(--gold-light))',width:`${scroll*100}%`,zIndex:9999,transition:'width .1s linear'}}/>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Features />
        <Gallery />
        <Rooms />
        <ElQuincho />
        <Groups />
        <Amenities />
        <Experiences />
        <Comparison />
        <Reviews />
        <FAQ />
        <Booking />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
