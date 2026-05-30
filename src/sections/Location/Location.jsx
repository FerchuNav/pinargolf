import { MapPin, Smartphone, Clock, CreditCard, Car, ShieldCheck, CheckCircle } from 'lucide-react'
import s from './Location.module.css'

export default function Location() {
  return (
    <section className={`section ${s.wrap}`} id="ubicacion">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line" />
          <p className="label" style={{ color: 'var(--forest-light)', marginBottom: '.5rem' }}>Dónde estamos</p>
          <h2 className={s.h2}>Cómo llegar</h2>
          <p className={s.sub}>En el corazón del Barrio Parque Golf, el polo de exclusividad de Sierra de la Ventana.</p>
        </div>
        
        <div className={s.grid}>
          <div className={`reveal-left ${s.info}`}>
            <InfoItem icon={MapPin} title="Dirección">
              Av. Sauce Grande y Los Picaflores<br />
              Barrio Parque Golf, Sierra de la Ventana<br />
              Partido de Tornquist, Buenos Aires
            </InfoItem>
            
            <InfoItem icon={Smartphone} title="WhatsApp directo">
              <a href="https://wa.me/5492914260589" target="_blank" rel="noopener noreferrer" className={s.link}>
                +54 9 291 426-0589
              </a>
            </InfoItem>
            
            <InfoItem icon={Clock} title="Horarios">
              Check-in: 15:00 hs · Check-out: 10:00 hs
            </InfoItem>
            
            <InfoItem icon={CreditCard} title="Formas de pago">
              Efectivo · Depósito bancario · Transferencia
            </InfoItem>
            
            <div className={s.directions}>
              <p className={s.dirTitle}>
                <Car size={15} className={s.dirTitleIcon} />
                <span>Cómo llegar desde Bahía Blanca</span>
              </p>
              <ul className={s.dirList}>
                <li>Ruta Provincial 76 hacia el norte ~100 km (1h 20min)</li>
                <li>Ingresar a Sierra de la Ventana por la entrada principal</li>
                <li>Seguir por Av. San Martín hasta el Barrio Parque Golf</li>
                <li>Doblar en Av. Sauce Grande hasta intersección con Los Picaflores</li>
                <li>Buscar el cartel "Pinar Golf Sierra" a mano derecha</li>
              </ul>
            </div>
            
            <a 
              href="https://www.google.com/maps/search/Pinar+Golf+Cabañas+Resort,+Sierra+de+la+Ventana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`btn btn-forest ${s.mapBtn}`}
            >
              <MapPin size={15} /> Abrir en Google Maps
            </a>
          </div>
          
          <div className={`reveal-right ${s.mapWrap}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1536.0!2d-61.7851332!3d-38.1400426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eddd0e3e2a9c6d%3A0x6f8c1e2a3b4c5d6e!2sPinar+Golf!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              title="Pinar Golf — Sierra de la Ventana"
              allowFullScreen 
              loading="lazy"
              className={s.iframe}
            />
          </div>
        </div>
        
        <div className={`reveal ${s.legal}`}>
          <span className={s.badge}>
            <ShieldCheck size={14} className={s.badgeIcon} />
            <span>Habilitación Municipal N° 000695 — Partido de Tornquist</span>
          </span>
          <span className={s.badge}>
            <CheckCircle size={14} className={s.badgeIcon} />
            <span>Normativas de seguridad, salubridad y seguros vigentes</span>
          </span>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ icon: Icon, title, children }) {
  return (
    <div className={s.item}>
      <div className={s.itemIconWrapper}>
        <Icon size={18} className={s.itemIcon} />
      </div>
      <div>
        <p className={s.itemTitle}>{title}</p>
        <div className={s.itemText}>{children}</div>
      </div>
    </div>
  )
}
