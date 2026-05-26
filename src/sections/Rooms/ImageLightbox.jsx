import { useState, useEffect, useCallback } from 'react'
import s from './ImageLightbox.module.css'

export default function ImageLightbox({ photos, initialIdx = 0, title, onClose }) {
  const [idx, setIdx] = useState(initialIdx)

  const prev = useCallback(() => setIdx(i => (i - 1 + photos.length) % photos.length), [photos.length])
  const next = useCallback(() => setIdx(i => (i + 1) % photos.length), [photos.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [prev, next, onClose])

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState(null)
  
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX)
  }
  
  const handleTouchEnd = (e) => {
    if (touchStart === null) return
    const dx = e.changedTouches[0].clientX - touchStart
    if (dx > 50) {
      prev()
    } else if (dx < -50) {
      next()
    }
    setTouchStart(null)
  }

  return (
    <div className={s.overlay} onClick={onClose}>
      <button className={s.close} onClick={onClose} aria-label="Cerrar">✕</button>
      
      {photos.length > 1 && (
        <button 
          className={`${s.navBtn} ${s.prev}`} 
          onClick={(e) => { e.stopPropagation(); prev(); }} 
          aria-label="Anterior"
        >
          ‹
        </button>
      )}

      <div 
        className={s.box} 
        onClick={e => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img 
          src={photos[idx]} 
          alt={`${title} - Foto ${idx + 1}`} 
          className={s.img} 
        />
        <div className={s.meta}>
          <h4 className={s.title}>{title}</h4>
          <span className={s.counter}>{idx + 1} de {photos.length}</span>
        </div>
      </div>

      {photos.length > 1 && (
        <button 
          className={`${s.navBtn} ${s.next}`} 
          onClick={(e) => { e.stopPropagation(); next(); }} 
          aria-label="Siguiente"
        >
          ›
        </button>
      )}

      {photos.length > 1 && (
        <div className={s.dots} onClick={e => e.stopPropagation()}>
          {photos.map((_, i) => (
            <span 
              key={i} 
              className={`${s.dot} ${i === idx ? s.dotActive : ''}`} 
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      )}
      
      <p className={s.hint}>Presioná Esc o hacé click fuera para cerrar</p>
    </div>
  )
}
