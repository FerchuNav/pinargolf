import s from './Location.module.css'
export default function Location() {
  return (
    <section className={`section ${s.wrap}`} id="ubicacion">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line"/>
          <p className="label" style={{color:'var(--forest-light)',marginBottom:'.5rem'}}>Dónde estamos</p>
          <h2 className={s.h2}>Cómo llegar</h2>
          <p className={s.sub}>En el corazón del Barrio Parque Golf, el polo de exclusividad de Sierra de la Ventana.</p>
        </div>
        <div className={s.grid}>
          <div className={`reveal-left ${s.info}`}>
            <InfoItem icon="📍" title="Dirección">
              Av. Sauce Grande y Los Picaflores<br/>
              Barrio Parque Golf, Sierra de la Ventana<br/>
              Partido de Tornquist, Buenos Aires
            </InfoItem>
            <InfoItem icon="📱" title="WhatsApp directo">
              <a href="https://wa.me/5492914260589" target="_blank" rel="noopener">+54 9 291 426-0589</a>
            </InfoItem>
            <InfoItem icon="🕐" title="Horarios">
              Check-in: 15:00 hs · Check-out: 10:00 hs
            </InfoItem>
            <InfoItem icon="💳" title="Formas de pago">
              Efectivo · Depósito bancario · Transferencia
            </InfoItem>
            <div className={s.directions}>
              <p className={s.dirTitle}>🚗 Cómo llegar desde Bahía Blanca</p>
              <ul className={s.dirList}>
                <li>Ruta Provincial 76 hacia el norte ~100 km (1h 20min)</li>
                <li>Ingresar a Sierra de la Ventana por la entrada principal</li>
                <li>Seguir por Av. San Martín hasta el Barrio Parque Golf</li>
                <li>Doblar en Av. Sauce Grande hasta intersección con Los Picaflores</li>
                <li>Buscar el cartel "Pinar Golf Sierra" a mano derecha</li>
              </ul>
            </div>
            <a href="https://maps.google.com/?q=Av.+Sauce+Grande+y+Los+Picaflores,+Barrio+Parque+Golf,+Sierra+de+la+Ventana" target="_blank" rel="noopener" className={`btn btn-forest ${s.mapBtn}`}>
              📍 Abrir en Google Maps
            </a>
          </div>
          <div className={`reveal-right ${s.mapWrap}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6535.2!2d-62.0058!3d-38.1275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edde1d1c2c2b1d%3A0x0!2sSierra+de+la+Ventana%2C+Buenos+Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              title="Pinar Golf — Sierra de la Ventana"
              allowFullScreen loading="lazy"
              className={s.iframe}
            />
          </div>
        </div>
        <div className={`reveal ${s.legal}`}>
          <span className={s.badge}>🛡 Habilitación Municipal N° 000695 — Partido de Tornquist</span>
          <span className={s.badge}>✅ Normativas de seguridad, salubridad y seguros vigentes</span>
        </div>
      </div>
    </section>
  )
}
function InfoItem({icon,title,children}) {
  return (
    <div style={{display:'flex',gap:'1rem',alignItems:'flex-start'}}>
      <div style={{width:42,height:42,minWidth:42,background:'var(--parchment)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.1rem'}}>{icon}</div>
      <div>
        <p style={{fontSize:'.78rem',fontWeight:700,color:'var(--forest)',textTransform:'uppercase',letterSpacing:'.08em',marginBottom:'.2rem'}}>{title}</p>
        <div style={{fontSize:'.93rem',color:'var(--muted)',lineHeight:1.55}}>{children}</div>
      </div>
    </div>
  )
}
