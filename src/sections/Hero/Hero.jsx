import { useState, useEffect } from 'react'
import { Play, ArrowUpRight, X } from 'lucide-react'
import s from './Hero.module.css'

const STATS = [
  { v: '8.8', l: 'Booking.com' },
  { v: '5+1', l: 'Cabañas + Dpto' },
  { v: '365', l: 'Días al año' },
  { v: '24hs', l: 'Piscina climatizada' },
]

export default function Hero() {
  const [y, setY] = useState(0)
  const [videoOpen, setVideoOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (videoOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [videoOpen])

  return (
    <section className={s.hero} id="inicio">
      {/* Fondo con imagen aérea y efecto parallax */}
      <div 
        className={s.bgWrap} 
        style={{ 
          transform: `translateY(${y * 0.25}px)`,
          backgroundImage: "url('/images/exterior/vista-aerea.webp')"
        }}
      />
      <div className={s.overlay} />

      <div className={`container ${s.content}`}>
        <div className={`reveal ${s.badge}`}>
          <span className={s.badgeText}>
            Barrio Parque Golf · Sierra de la Ventana
          </span>
        </div>
        
        <h1 className={`${s.title} text-balance`}>
          Tu refugio en el 
          <span 
            className="inlineImg" 
            style={{ backgroundImage: "url('/images/exterior/pergola-flores-02.webp')" }} 
          />
          corazón de la Comarca
        </h1>
        
        <p className={`${s.sub} text-pretty`}>
          Cabañas y departamentos de diseño en un entorno natural único. Piscina climatizada cubierta, 
          jacuzzi exterior y acceso exclusivo al golf y al Parque Tornquist.
        </p>
        
        <div className={s.btns}>
          <a href="#reservar" className="btnBinB btnBinB-gold">
            <span>Reservar ahora</span>
            <span className="btnBinBIcon">
              <ArrowUpRight size={14} />
            </span>
          </a>
          <button onClick={() => setVideoOpen(true)} className={`${s.btnBinBOutline}`}>
            <span>Ver video tour</span>
            <span className={s.btnBinBOutlineIcon}>
              <Play size={12} fill="currentColor" />
            </span>
          </button>
        </div>
      </div>

      <div className={s.stats}>
        {STATS.map(stat => (
          <div key={stat.l} className={s.stat}>
            <strong className={s.statVal}>{stat.v}</strong>
            <span className={s.statLbl}>{stat.l}</span>
          </div>
        ))}
      </div>

      {/* Modal de video optimizado */}
      {videoOpen && (
        <div className={s.modal} onClick={() => setVideoOpen(false)}>
          <div className={s.modalContent} onClick={e => e.stopPropagation()}>
            <button className={s.closeBtn} onClick={() => setVideoOpen(false)} aria-label="Cerrar modal">
              <X size={20} />
            </button>
            <div className={s.videoWrapper}>
              <video 
                src="/images/hero-video.mp4" 
                controls 
                autoPlay 
                playsInline
                className={s.modalVideo}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
