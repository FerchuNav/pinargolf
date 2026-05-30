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
  const [videoOpen, setVideoOpen] = useState(false)

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
      {/* Video de fondo inmersivo */}
      <div className={s.videoBgContainer}>
        <video 
          src="/images/hero-video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={s.bgVideo} 
        />
        <div className={s.videoOverlay} />
      </div>

      <div className={`container ${s.gridContainer}`}>
        {/* Contenido Editorial Centrado */}
        <div className={`reveal ${s.contentCol}`}>
          <div className={s.logoHeroWrapper}>
            <img 
              src="/images/Logo_Pinar Golf.png.png?v=3" 
              alt="Pinar Golf Sierra" 
              className={s.logoHero} 
            />
          </div>
          
          <h1 className={`${s.title} text-balance`}>
            El lugar donde las familias y amigos se reúnen para crear recuerdos inolvidables, todo el año.
          </h1>
          
          <p className={`${s.sub} text-pretty`}>
            Reservá una o varias cabañas y disfrutá de espacios pensados para compartir: quincho para 24 personas 
            y piscina cubierta climatizada los 365 días del año.
          </p>
          
          <div className={s.btns}>
            <a href="#reservar" className="btnBinB btnBinB-gold">
              <span>Reservar ahora</span>
              <span className="btnBinBIcon">
                <ArrowUpRight size={14} />
              </span>
            </a>
            <button onClick={() => setVideoOpen(true)} className={s.btnBinBOutline}>
              <span>Ver video tour</span>
              <span className={s.btnBinBOutlineIcon}>
                <Play size={12} fill="currentColor" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Barra de Estadisticas en el Pie */}
      <div className={s.statsBar}>
        <div className={`container ${s.statsContainer}`}>
          {STATS.map(stat => (
            <div key={stat.l} className={s.stat}>
              <strong className={s.statVal}>{stat.v}</strong>
              <span className={s.statLbl}>{stat.l}</span>
            </div>
          ))}
        </div>
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

