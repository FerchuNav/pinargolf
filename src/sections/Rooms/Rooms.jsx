import { useState, useRef, useEffect } from 'react'
import { 
  BedDouble, 
  Sofa, 
  Utensils, 
  Thermometer, 
  Tv, 
  Footprints, 
  Lock, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Video,
  ArrowUpRight
} from 'lucide-react'
import { CABINS } from '../../data/cabins'
import VideoModal from './VideoModal'
import ImageLightbox from './ImageLightbox'
import s from './Rooms.module.css'

const SPEC_ICONS = {
  bed: BedDouble,
  sofa: Sofa,
  kitchen: Utensils,
  heat: Thermometer,
  tv: Tv,
  pet: Footprints,
  safe: Lock
}

export default function Rooms() {
  const [modal, setModal] = useState(null)
  const [photoModal, setPhotoModal] = useState(null)

  return (
    <section className={`section ${s.wrap}`} id="cabanas">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line" style={{ background: 'var(--gold)' }} />
          <p className="label" style={{ color: 'var(--gold)', marginBottom: '.5rem' }}>Nuestras unidades</p>
          <h2 className={`${s.h2} text-balance`}>5 Cabañas + 1 Departamento</h2>
          <p className={`${s.sub} text-pretty`}>
            Todas las unidades cuentan con construcción Retak de alta eficiencia térmica,
            2 piletas (cubierta climatizada + al aire libre) y acceso directo al Parque Tornquist.
            Diseñadas para parejas, familias y grupos que buscan el mejor descanso en la Comarca.
          </p>
        </div>

        <div className={s.cards}>
          {CABINS.map(cabin => (
            <CabinCard
              key={cabin.id}
              cabin={cabin}
              onVideoOpen={(idx) => setModal({ videos: cabin.videos, initialIdx: idx })}
              onPhotoOpen={(idx) => setPhotoModal({ photos: cabin.photos, initialIdx: idx, title: cabin.name })}
            />
          ))}
        </div>
      </div>

      {modal && (
        <VideoModal
          videos={modal.videos}
          initialIdx={modal.initialIdx}
          onClose={() => setModal(null)}
        />
      )}

      {photoModal && (
        <ImageLightbox
          photos={photoModal.photos}
          initialIdx={photoModal.initialIdx}
          title={photoModal.title}
          onClose={() => setPhotoModal(null)}
        />
      )}
    </section>
  )
}

function CabinCard({ cabin, onVideoOpen, onPhotoOpen }) {
  const [photoIdx, setPhotoIdx] = useState(0)
  const videoRefs = useRef([])
  const touchStartX = useRef(null)

  const prevPhoto = () => setPhotoIdx(i => (i - 1 + cabin.photos.length) % cabin.photos.length)
  const nextPhoto = () => setPhotoIdx(i => (i + 1) % cabin.photos.length)

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx > 50) prevPhoto()
    else if (dx < -50) nextPhoto()
    touchStartX.current = null
  }

  useEffect(() => {
    const observers = videoRefs.current.map((videoEl) => {
      if (!videoEl) return null
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) videoEl.play().catch(() => {})
          else videoEl.pause()
        },
        { threshold: 0.3 }
      )
      io.observe(videoEl)
      return io
    })
    return () => observers.forEach(io => io?.disconnect())
  }, [cabin.videos.length])

  const waMsg = encodeURIComponent(
    `Hola! Me interesa conocer la ${cabin.name} — quisiera saber disponibilidad y precios.`
  )

  return (
    <div className={`reveal outerShell ${s.card}`}>
      {/* Columna interna que implementa el grid de contenido */}
      <div className={`innerCore ${s.cardInner}`}>
        {/* Columna izquierda: galería */}
        <div
          className={s.colPhoto}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={cabin.photos[photoIdx]}
            alt={`${cabin.name} — foto ${photoIdx + 1}`}
            className={s.photo}
            onClick={() => onPhotoOpen(photoIdx)}
            style={{ cursor: 'zoom-in' }}
          />
          {cabin.photos.length > 1 && (
            <>
              <button className={`${s.arrow} ${s.arrowL}`} onClick={prevPhoto} aria-label="Foto anterior">
                <ChevronLeft size={18} />
              </button>
              <button className={`${s.arrow} ${s.arrowR}`} onClick={nextPhoto} aria-label="Foto siguiente">
                <ChevronRight size={18} />
              </button>
              <div className={s.dots}>
                {cabin.photos.map((_, i) => (
                  <span
                    key={i}
                    className={i === photoIdx ? s.dotOn : s.dot}
                    onClick={() => setPhotoIdx(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Columna central: specs */}
        <div className={s.colBody}>
          <span className={s.badge}>
            {cabin.count} {cabin.count === 1 ? 'unidad disponible' : 'unidades disponibles'}
          </span>
          <h3 className={s.name}>{cabin.name}</h3>
          <p className={s.cap}>
            <Users size={14} className={s.capIcon} />
            <span>{cabin.capacityLabel}</span>
          </p>
          <div className={s.specs}>
            {cabin.specs.map((spec, i) => {
              const Icon = SPEC_ICONS[spec.icon] || BedDouble
              return (
                <span key={i} className={s.pill}>
                  <Icon size={13} className={s.pillIcon} />
                  <span>{spec.text}</span>
                </span>
              )
            })}
          </div>
          <div className={s.cta}>
            <a
              href={`https://wa.me/5492914260589?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btnBinB btnBinB-gold"
              style={{ width: '100%' }}
            >
              <span>Consultar disponibilidad</span>
              <span className="btnBinBIcon">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </div>

        {/* Columna derecha: video preview */}
        <div className={s.colVideo}>
          <p className={s.vidLabel}>
            <Video size={12} className={s.vidLabelIcon} />
            <span>Tour virtual{cabin.videos.length > 1 ? ` · ${cabin.videos.length} vids` : ''}</span>
          </p>
          {cabin.videos.map((vid, i) => {
            const isImage = vid.thumb && /\.(webp|jpg|jpeg|png|gif|svg)$/i.test(vid.thumb);
            return (
              <div key={i} className={s.vidThumb} onClick={() => onVideoOpen(i)}>
                {isImage ? (
                  <img src={vid.thumb} alt={vid.label} className={s.vidPreview} />
                ) : (
                  <video
                    ref={el => { videoRefs.current[i] = el }}
                    src={vid.thumb}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className={s.vidPreview}
                  />
                )}
                <div className={s.playOverlay}>
                  <div className={s.playBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <polygon points="6 4 20 12 6 20" />
                    </svg>
                  </div>
                </div>
                <span className={s.vidTitle}>{vid.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
