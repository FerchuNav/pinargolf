import { useState, useEffect, useRef } from 'react'
import s from './VideoModal.module.css'

export default function VideoModal({ videos, initialIdx = 0, onClose }) {
  const [idx, setIdx] = useState(initialIdx)
  const videoRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [idx])

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.box} onClick={e => e.stopPropagation()}>
        <div className={s.header}>
          <h3 className={s.title}>{videos[idx].label}</h3>
          <button className={s.close} onClick={onClose} aria-label="Cerrar">✕</button>
        </div>
        <div className={s.videoWrap}>
          {videos[idx].youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videos[idx].youtubeId}?autoplay=1`}
              title={videos[idx].label}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={s.video}
            />
          ) : (
            <video
              ref={videoRef}
              key={idx}
              src={videos[idx].src}
              controls
              playsInline
              className={s.video}
            />
          )}
        </div>
        {videos.length > 1 && (
          <div className={s.strip}>
            {videos.map((v, i) => (
              <button
                key={i}
                className={`${s.stripBtn} ${i === idx ? s.active : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Ver video: ${v.label}`}
              >
                {v.thumb && /\.(webp|jpg|jpeg|png|gif|svg)$/i.test(v.thumb) ? (
                  <img src={v.thumb} alt={v.label} className={s.stripVideo} />
                ) : v.youtubeId ? (
                  <img
                    src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                    alt={v.label}
                    className={s.stripVideo}
                  />
                ) : (
                  <video
                    src={`${v.thumb}#t=0.1`}
                    muted
                    playsInline
                    preload="metadata"
                    className={s.stripVideo}
                  />
                )}
                <span className={s.stripLabel}>{v.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <p className={s.hint}>Presioná Esc o hacé click fuera para cerrar</p>
    </div>
  )
}
