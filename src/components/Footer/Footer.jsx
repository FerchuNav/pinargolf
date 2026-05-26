import s from './Footer.module.css'
const LINKS = [
  {href:'#galeria',l:'Galería'},
  {href:'#cabanas',l:'Cabañas'},
  {href:'#servicios',l:'Servicios'},
  {href:'#resenas',l:'Reseñas'},
  {href:'#reservar',l:'Reservar'},
]
export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.grid}`}>
        <div>
          <p className={s.brand}>Pinar Golf</p>
          <p className={s.brandSub}>Cabañas Resort · Sierra de la Ventana</p>
          <p className={s.desc}>5 cabañas + 1 departamento con tecnología Retak, piscina climatizada 24hs y atención directa en el Barrio Parque Golf.</p>
        </div>
        <div>
          <p className={s.colTitle}>Navegación</p>
          <ul className={s.list}>
            {LINKS.map(l => <li key={l.href}><a href={l.href} className={s.link}>{l.l}</a></li>)}
          </ul>
        </div>
        <div>
          <p className={s.colTitle}>Contacto</p>
          <ul className={s.list}>
            <li><a href="https://wa.me/5492914260589" target="_blank" rel="noopener" className={s.link}>WhatsApp: 291 426-0589</a></li>
            <li className={s.addr}>Av. Sauce Grande y Los Picaflores</li>
            <li className={s.addr}>Barrio Parque Golf, Sierra de la Ventana</li>
            <li className={s.addr}>Check-in: 15:00 · Check-out: 10:00</li>
          </ul>
        </div>
      </div>
      <div className={`container ${s.bottom}`}>
        <span>© 2025 Pinar Golf Cabañas Resort. Hab. Mun. N° 000695.</span>
        <span>Diseñado para el viajero contemporáneo</span>
      </div>
    </footer>
  )
}
