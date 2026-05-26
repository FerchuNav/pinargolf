import { useState, useEffect } from 'react'
import s from './Hero.module.css'

const STATS = [
  {v:'8.8', l:'Booking.com'},
  {v:'5+1', l:'Cabañas + Dpto'},
  {v:'365', l:'Días al año'},
  {v:'24hs',l:'Piscina climatizada'},
]

export default function Hero() {
  const [y, setY] = useState(0)

  useEffect(() => {
    const onScroll = () => setY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={s.hero} id="inicio">
      <div className={s.videoWrap} style={{transform:`translateY(${y*.35}px)`}}>
        <video className={s.video} autoPlay muted loop playsInline preload="auto"
          poster="/images/exterior/vista-aerea.webp">
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={s.overlay}/>
      <div className={`container ${s.content}`}>
        <div className={s.badge}>
          <span style={{fontSize:'.72rem',letterSpacing:'.18em',textTransform:'uppercase',fontFamily:'monospace'}}>
            ⛳ Barrio Parque Golf · Sierra de la Ventana
          </span>
        </div>
        <h1 className={s.title}>
          Tu refugio en el<br/><em>corazón</em> de la Comarca
        </h1>
        <p className={s.sub}>
          5 cabañas + 1 departamento de diseño premium con piscina climatizada 24hs,
          jacuzzi y el Parque Tornquist a pasos de tu puerta.
        </p>
        <div className={s.btns}>
          <a href="#reservar" className="btn btn-gold">Reservar ahora</a>
          <a href="#galeria"  className="btn btn-outline">Ver el complejo</a>
        </div>
      </div>
      <div className={s.stats}>
        {STATS.map(s2 => (
          <div key={s2.l} className={s.stat}>
            <strong className={s.statVal}>{s2.v}</strong>
            <span className={s.statLbl}>{s2.l}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
