import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import s from './Navbar.module.css'

const LINKS = [
  { href: '#galeria', label: 'Galería' },
  { href: '#cabanas', label: 'Cabañas' },
  { href: '#fogon', label: 'El Fogón' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#resenas', label: 'Reseñas' },
  { href: '#ubicacion', label: 'Ubicación' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ''} ${open ? s.navOpen : ''}`}>
      <div className={s.inner}>
        <a href="#" className={s.logo} aria-label="Volver al inicio">
          <img 
            src="/images/Logo_Pinar Golf.png.png?v=3" 
            alt="Pinar Golf Sierra" 
            className={s.logoImg} 
          />
        </a>
        
        <nav className={s.links}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className={s.link}>
              {l.label}
            </a>
          ))}
          <a href="#reservar" className="btnBinB btnBinB-gold" style={{ fontSize: '0.82rem', padding: '0.4rem 0.5rem 0.4rem 1.4rem' }}>
            <span>Reservar</span>
            <span className="btnBinBIcon" style={{ width: '28px', height: '28px' }}>
              <ArrowUpRight size={12} />
            </span>
          </a>
        </nav>
        
        <button 
          className={`${s.burger} ${open ? s.open : ''}`} 
          onClick={() => setOpen(o => !o)} 
          aria-label="Menú de navegación"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      
      <div className={`${s.mobile} ${open ? s.mOpen : ''}`}>
        <div className={s.mobileInner}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className={s.mLink} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a 
            href="#reservar" 
            className="btnBinB btnBinB-gold" 
            onClick={() => setOpen(false)}
            style={{ marginTop: '1.5rem', alignSelf: 'stretch', justifyContent: 'center' }}
          >
            <span>Reservar estadía</span>
            <span className="btnBinBIcon">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
