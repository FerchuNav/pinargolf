import { useState } from 'react'
import { IMAGES } from '../../utils/images'
import VideoModal from '../Rooms/VideoModal'
import s from './Gallery.module.css'

const TABS = [
  { key:'exterior',  label:'Exterior & Parque' },
  { key:'pileta',    label:'Piscina & Jacuzzi' },
  { key:'interior',  label:'Interiores' },
  { key:'amenities', label:'Amenities' },
]

export default function Gallery() {
  const [active, setActive] = useState('exterior')
  const [lb, setLb] = useState(null)
  const [videoModal, setVideoModal] = useState(null)
  const imgs = IMAGES[active] ?? []

  return (
    <section className={`section ${s.wrap}`} id="galeria">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line"/>
          <p className="label" style={{color:'var(--forest-light)',marginBottom:'.5rem'}}>Fotos reales del complejo</p>
          <h2 className={s.h2}>El entorno que te espera</h2>
        </div>
        <div className={`reveal ${s.tabs}`}>
          {TABS.map(t => (
            <button key={t.key} className={`${s.tab} ${active===t.key?s.tabActive:''}`} onClick={() => setActive(t.key)}>
              {t.label}
              <span className={s.cnt}>{IMAGES[t.key]?.length}</span>
            </button>
          ))}
        </div>
        <div className={s.grid} key={active}>
          {imgs.map((img,i) => {
            const isVideo = img.isVideo;
            return (
              <div
                key={img.id}
                className={`${s.fadeInScale} ${s.item} ${i===0?s.featured:''}`}
                style={{animationDelay:`${i*.04}s`, cursor: isVideo ? 'pointer' : 'zoom-in'}}
                onClick={() => {
                  if (isVideo) {
                    setVideoModal({
                      videos: [{ youtubeId: img.youtubeId, label: img.label, thumb: img.src }],
                      initialIdx: 0
                    })
                  } else {
                    setLb(img)
                  }
                }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className={s.img}/>
                
                {isVideo && (
                  <div className={s.playBtnCenter}>
                    <div className={s.playBtnCircle}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <polygon points="6 4 20 12 6 20" />
                      </svg>
                    </div>
                  </div>
                )}

                <div className={s.overlay}>
                  <span className={s.imgLabel}>{img.label}</span>
                  <span className={s.zoom}>{isVideo ? '▶' : '↗'}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {lb && (
        <div className={s.lb} onClick={() => setLb(null)}>
          <button className={s.lbClose} onClick={() => setLb(null)}>✕</button>
          <img src={lb.src} alt={lb.alt} className={s.lbImg} onClick={e => e.stopPropagation()}/>
          <p className={s.lbCaption}>{lb.alt}</p>
        </div>
      )}
      {videoModal && (
        <VideoModal
          videos={videoModal.videos}
          initialIdx={videoModal.initialIdx}
          onClose={() => setVideoModal(null)}
        />
      )}
    </section>
  )
}
