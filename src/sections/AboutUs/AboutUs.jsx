import { useState, useEffect } from 'react'
import { ArrowUpRight, Users, Waves, Play, X } from 'lucide-react'
import s from './AboutUs.module.css'

export default function AboutUs() {
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
    <section className={`section ${s.wrap}`} id="nosotros">
      <div className="container">
        <div className={s.inner}>

          {/* Columna de texto */}
          <div className={`reveal-left ${s.textCol}`}>
            <span className="gold-line" />
            <p className="label" style={{ color: 'var(--forest-light)', marginBottom: '.5rem' }}>
              Pinar Golf Sierra
            </p>
            <h2 className={s.h2}>
              Espacios exclusivos para compartir momentos únicos
            </h2>

            <p className={s.lead}>
              Si estás buscando <strong>cabañas para alquilar en Sierra de la Ventana</strong>, en nuestro complejo no solo vas a disfrutar de la tranquilidad de la naturaleza, sino también de espacios exclusivos para compartir momentos únicos con quienes más querés.
            </p>

            <p className={s.body}>
              Contamos con un quincho totalmente equipado para hasta 24 personas, ideal para reuniones familiares,
              encuentros de amigos, cumpleaños, celebraciones o escapadas grupales. Cocina completa, parrilla,
              amplios espacios y todas las comodidades para que solo te preocupes por disfrutar.
            </p>

            <p className={s.body}>
              Junto al quincho se encuentra nuestra piscina cubierta climatizada, disponible durante todo el año,
              para que grandes y chicos puedan relajarse y divertirse sin importar la estación.
            </p>

            <div className={s.highlight}>
              <Users size={20} />
              <span>
                Reuní a tu grupo, reservá una o varias de nuestras 5 cabañas y viví una experiencia diferente en Sierra de la Ventana.
              </span>
            </div>

            <a href="#reservar" className={`btnBinB btnBinB-gold ${s.cta}`}>
              <span>Reservar cabañas</span>
              <span className="btnBinBIcon">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>

          {/* Columna de imágenes + video */}
          <div className={`reveal-right ${s.imageCol}`}>
            {/* Video del cordero — click abre modal */}
            <div className={s.videoThumb} onClick={() => setVideoOpen(true)}>
              <video
                src="/images/fogon/asador-cordero.mp4"
                muted
                loop
                playsInline
                preload="none"
                poster="/images/fogon/asador-cordero-Cover.jpg"
                className={s.videoPreview}
              />
              <div className={s.videoOverlay}>
                <div className={s.playBtn}>
                  <Play size={22} fill="currentColor" />
                </div>
                <span className={s.videoLabel}>Ver video misicalizado</span>
              </div>
            </div>

            {/* Imágenes */}
            <div className={s.imgWrap}>
              <img
                src="/images/fogon/fogon-freezer.webp"
                alt="Equipamiento completo del quincho en Pinar Golf"
                loading="lazy"
                className={s.img}
              />
              <span className={s.badge}>Quincho equipado</span>
            </div>
            <div className={s.imgWrap}>
              <img
                src="/images/pileta/pileta-cubierta-02.webp"
                alt="Piscina cubierta climatizada disponible todo el año"
                loading="lazy"
                className={s.img}
              />
              <span className={s.badge}>
                <Waves size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                365 días
              </span>
            </div>
            <div className={s.imgWrap}>
              <img
                src="/images/exterior/pileta-exterior1.webp"
                alt="Pileta exterior para disfrutar del sol"
                loading="lazy"
                className={s.img}
              />
              <span className={s.badge}>Pileta de verano</span>
            </div>
          </div>

        </div>
      </div>

      {/* Modal de video con audio */}
      {videoOpen && (
        <div className={s.modal} onClick={() => setVideoOpen(false)}>
          <div className={s.modalContent} onClick={e => e.stopPropagation()}>
            <button className={s.closeBtn} onClick={() => setVideoOpen(false)} aria-label="Cerrar video">
              <X size={20} />
            </button>
            <div className={s.modalVideoWrap}>
              <video
                src="/images/fogon/asador-cordero.mp4"
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
