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
import s from './ElQuincho.module.css'

const BENTO_PHOTOS = [
  { src: '/images/fogon/fogon-tragamonedas.webp', caption: 'Salón comedor amplio' },
  { src: '/images/fogon/fogon-mesas-comedor.webp', caption: 'Parrilla de ladrillo a leña' },
  { src: '/images/fogon/fogon-cocina-estufa.webp', caption: 'Heladera y horno 6 hornallas' },
  { src: '/images/fogon/fogon-cajon-juegos.webp', caption: 'Juegos de mesa para todos' },
]

const ALL_LIGHTBOX_PHOTOS = [
  '/images/fogon/fogon-cocina-ollas.webp',
  '/images/fogon/fogon-cocina-general.webp',
  '/images/fogon/fogon-parrilla-cocina.webp',
  '/images/fogon/fogon-comedor-cocina.webp',
  '/images/fogon/fogon-freezer.webp',
  '/images/fogon/fogon-tragamonedas.webp',
  '/images/fogon/fogon-mesas-comedor.webp',
  '/images/fogon/fogon-vajilla-alacena.webp',
  '/images/fogon/fogon-cubiertos-cajon.webp',
  '/images/fogon/fogon-cubiertos.webp',
  '/images/fogon/fogon-horno-controles.webp',
  '/images/fogon/fogon-cocina-lavabo2.webp',
  '/images/fogon/fogon-cocina-general2.webp',
  '/images/fogon/fogon-parlante-cajon.webp',
  '/images/fogon/fogon-cajon-juegos.webp',
  '/images/fogon/fogon-cocina-electro.webp',
  '/images/fogon/fogon-cordero-fuego.webp',
  '/images/fogon/fogon-picada-mesa.webp',
]

const HIGHLIGHTS = [
  { icon: Flame, text: 'Parrilla de ladrillo a leña', sub: 'Asados y cordero al fuego' },
  { icon: ChefHat, text: 'Cocina completa', sub: 'Horno 6 quemadores, heladera, freezer y más' },
  { icon: Utensils, text: 'Vajilla y cubiertos', sub: 'Completos para grupos grandes' },
  { icon: Users, text: 'Comedor amplio', sub: 'Mesas de madera para toda la familia' },
  { icon: Gamepad2, text: 'Juegos de mesa', sub: 'Scrabble, Damas, Crisis y Sapo' },
  { icon: Music, text: 'Música y ambiente', sub: 'Musica con el gran Parlante Bluethooth ' },
]

export default function ElQuincho() {
  const [lightboxIdx, setLightboxIdx] = useState(null)

  return (
    <section className={`section ${s.wrap}`} id="quincho">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line" />
          <p className="label" style={{ color: 'var(--forest-light)', marginBottom: '.5rem' }}>
            Encuentros
          </p>
          <h2 className={s.h2}>El Quincho & Fogón</h2>
          <p className={s.sub}>
            El corazón de cada reunión. Un espacio común para juntarse con familia o amigos alrededor del fuego — asados
            completos, una cocina impecable, comedor amplio y juegos para todos. Todo pensado para que disfrutes momentos
            inolvidables.
          </p>
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
            Ver más fotos del Quincho & Fogón          </button>
        </div>
      </div>

      {lightboxIdx !== null && (
        <ImageLightbox
          photos={ALL_LIGHTBOX_PHOTOS}
          initialIdx={lightboxIdx}
          title="El Quincho"
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </section>
  )
}
