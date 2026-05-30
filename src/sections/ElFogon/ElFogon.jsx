import { useState } from 'react'
import {
  Flame,
  ChefHat,
  Utensils,
  Users,
  Gamepad2,
  Music
} from 'lucide-react'
import ImageLightbox from '../Rooms/ImageLightbox'
import s from './ElFogon.module.css'

const BENTO_PHOTOS = [
  { src: '/images/fogon/fogon-cordero-fuego.webp', caption: 'Cordero asado al fuego' },
  { src: '/images/fogon/fogon-familia-jardin-noche.webp', caption: 'Noches en familia' },
  { src: '/images/fogon/fogon-picada-mesa.webp', caption: 'Tabla de fiambres y quesos' },
  { src: '/images/fogon/fogon-parrilla-cocina.webp', caption: 'Parrilla de ladrillo' },
  { src: '/images/fogon/fogon-comedor-vidrios.webp', caption: 'Comedor amplio con vidrios' },
  { src: '/images/fogon/fogon-pareja-cordero.webp', caption: 'Juntarse en torno al fuego' },
  { src: '/images/fogon/fogon-tragamonedas.webp', caption: 'Diversión sin fin' },
  { src: '/images/fogon/fogon-cajon-juegos.webp', caption: 'Juegos de mesa' },
  { src: '/images/fogon/fogon-cocina-general.webp', caption: 'Cocina completa y equipada' },
]

const ALL_LIGHTBOX_PHOTOS = [
  '/images/fogon/fogon-cordero-fuego.webp',
  '/images/fogon/fogon-familia-jardin-noche.webp',
  '/images/fogon/fogon-picada-mesa.webp',
  '/images/fogon/fogon-pareja-cordero.webp',
  '/images/fogon/fogon-comedor-vidrios.webp',
  '/images/fogon/fogon-cajon-juegos.webp',
  '/images/fogon/fogon-parlante-juegos.webp',
  '/images/fogon/fogon-cocina-ollas.webp',
  '/images/fogon/fogon-cocina-estufa.webp',
  '/images/fogon/fogon-cocina-general.webp',
  '/images/fogon/fogon-parrilla-cocina.webp',
  '/images/fogon/fogon-comedor-cocina.webp',
  '/images/fogon/fogon-cocina-lavabo.webp',
  '/images/fogon/fogon-freezer.webp',
  '/images/fogon/fogon-tragamonedas.webp',
  '/images/fogon/fogon-mesas-comedor.webp',
  '/images/fogon/fogon-cocina-electro.webp',
  '/images/fogon/fogon-parlante-cajon.webp',
  '/images/fogon/fogon-vajilla-alacena.webp',
  '/images/fogon/fogon-cubiertos-cajon.webp',
  '/images/fogon/fogon-cubiertos.webp',
  '/images/fogon/fogon-horno-controles.webp',
  '/images/fogon/fogon-horno-6quemadores.webp',
  '/images/fogon/fogon-cocina-lavabo2.webp',
  '/images/fogon/fogon-cocina-general2.webp',
]

const HIGHLIGHTS = [
  { icon: Flame, text: 'Parrilla de ladrillo a leña', sub: 'Asados y cordero al fuego' },
  { icon: ChefHat, text: 'Cocina completa', sub: 'Horno 6 quemadores, heladera, freezer y más' },
  { icon: Utensils, text: 'Vajilla y cubiertos', sub: 'Completos para grupos grandes' },
  { icon: Users, text: 'Comedor amplio', sub: 'Mesas de madera para toda la familia' },
  { icon: Gamepad2, text: 'Juegos de mesa', sub: 'Scrabble, Damas, Crisis y tragamonedas' },
  { icon: Music, text: 'Música y ambiente', sub: 'Parlante Panacom y jardín nocturno' },
]

export default function ElFogon() {
  const [lightboxIdx, setLightboxIdx] = useState(null)

  return (
    <section className={`section ${s.wrap}`} id="fogon">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line" />
          <p className="label" style={{ color: 'var(--forest-light)', marginBottom: '.5rem' }}>
            Encuentros
          </p>
          <h2 className={s.h2}>El Fogón</h2>
          <p className={s.sub}>
            El corazón de cada reunión. Un espacio común para juntarse con familia o amigos alrededor del fuego — asados
            completos, una cocina impecable, comedor amplio y juegos para todos. Todo pensado para que disfrutes momentos
            inolvidables.
          </p>
        </div>

        <div className={`reveal ${s.videoWrap}`}>
          <video
            className={s.video}
            autoPlay
            muted
            loop
            playsInline
            poster="/images/fogon/asador-cordero-Cover.jpg"
          >
            <source src="/images/fogon/asador-cordero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={s.bentoWrap}>
          <div className={s.bento}>
            {BENTO_PHOTOS.map((photo, idx) => (
              <div
                key={idx}
                className={`reveal ${s.bentoTile}`}
                onClick={() => setLightboxIdx(idx)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className={s.bentoImg}
                />
                <div className={s.bentoCaption}>
                  <p>{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`reveal ${s.highlights}`}>
          {HIGHLIGHTS.map((h, i) => {
            const HIcon = h.icon
            return (
              <div key={i} className={s.highlightChip}>
                <div className={s.chipIcon}>
                  <HIcon size={20} />
                </div>
                <div>
                  <p className={s.chipTitle}>{h.text}</p>
                  <p className={s.chipSub}>{h.sub}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className={`reveal ${s.viewAll}`}>
          <button className="btn btn-gold" onClick={() => setLightboxIdx(0)}>
            Ver las 25 fotos del Fogón
          </button>
        </div>
      </div>

      {lightboxIdx !== null && (
        <ImageLightbox
          photos={ALL_LIGHTBOX_PHOTOS}
          initialIdx={lightboxIdx}
          title="El Fogón"
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </section>
  )
}
