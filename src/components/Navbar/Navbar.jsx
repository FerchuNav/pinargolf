import { useState, useEffect } from 'react'
import s from './Navbar.module.css'

const LINKS = [
  { href:'#galeria', label:'Galería' },
  { href:'#cabanas', label:'Cabañas' },
  { href:'#servicios',label:'Servicios' },
  { href:'#resenas', label:'Reseñas' },
  { href:'#ubicacion',label:'Ubicación' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={s.inner}>
        <a href="#" className={s.logo}>
          <span className={s.logoMain}>Pinar Golf</span>
          <span className={s.logoSub}>Cabañas Resort · Sierra de la Ventana</span>
        </a>
        <nav className={s.links}>
          {LINKS.map(l => <a key={l.href} href={l.href} className={s.link}>{l.label}</a>)}
          <a href="#reservar" className="btn btn-gold" style={{fontSize:'.85rem',padding:'.55rem 1.3rem'}}>Reservar</a>
        </nav>
        <button className={`${s.burger} ${open ? s.open : ''}`} onClick={() => setOpen(o=>!o)} aria-label="Menú">
          <span/><span/><span/>
        </button>
      </div>
      <div className={`${s.mobile} ${open ? s.mOpen : ''}`}>
        {LINKS.map(l => <a key={l.href} href={l.href} className={s.mLink} onClick={() => setOpen(false)}>{l.label}</a>)}
        <a href="#reservar" className="btn btn-gold" onClick={() => setOpen(false)} style={{alignSelf:'flex-start',marginTop:'.5rem'}}>Reservar</a>
      </div>
    </header>
  )
}
