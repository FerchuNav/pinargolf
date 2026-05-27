import { useState } from 'react'
import { Calendar, Users, User, Footprints, AlertCircle } from 'lucide-react'
import s from './Booking.module.css'

const today = () => new Date().toISOString().split('T')[0]

export default function Booking() {
  const [f, setF] = useState({ ci: '', co: '', hues: '2 personas', nom: '', masc: 'No' })
  const [error, setError] = useState('')
  
  const set = k => e => {
    setF(v => ({ ...v, [k]: e.target.value }))
    if (error) setError('')
  }

  const send = () => {
    if (!f.ci || !f.co || !f.nom.trim()) {
      setError('Por favor completá tu nombre y las fechas de ingreso y salida.')
      return
    }
    setError('')
    const msg = `Hola! Quisiera hacer una reserva:\n\nCheck-in: ${f.ci}\nCheck-out: ${f.co}\nHuéspedes: ${f.hues}\nMascota: ${f.masc}\nNombre: ${f.nom}\n\n¿Tienen disponibilidad?`
    window.open(`https://wa.me/5492914260589?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section className={`section ${s.wrap}`} id="reservar">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line" />
          <p className="label" style={{ color: 'rgba(255,255,255,.55)', marginBottom: '.5rem' }}>
            Reserva directa · Sin comisiones · Sin intermediarios
          </p>
          <h2 className={s.h2}>Reservá tu estadía</h2>
          <p className={s.sub}>Completá el formulario y te confirmamos disponibilidad al instante por WhatsApp.</p>
        </div>
        
        {/* Contenedor del formulario con Double-Bezel */}
        <div className={`reveal outerShell ${s.box}`}>
          <div className={`innerCore ${s.boxInner}`}>
            {error && (
              <div className={s.errorBox}>
                <AlertCircle size={18} className={s.errorIcon} />
                <span>{error}</span>
              </div>
            )}

            <div className={s.row}>
              <Fld label="Check-in" icon={Calendar}>
                <input type="date" value={f.ci} min={today()} onChange={set('ci')} />
              </Fld>
              <Fld label="Check-out" icon={Calendar}>
                <input type="date" value={f.co} min={f.ci || today()} onChange={set('co')} />
              </Fld>
              <Fld label="Huéspedes" icon={Users}>
                <select value={f.hues} onChange={set('hues')}>
                  {['1 persona', '2 personas', '3 personas', '4 personas', '5 personas', '6 personas'].map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Fld>
            </div>
            
            <div className={s.row}>
              <Fld label="Tu nombre y apellido" icon={User}>
                <input type="text" placeholder="Ej: Juan Pérez" value={f.nom} onChange={set('nom')} />
              </Fld>
              <Fld label="¿Traés mascota?" icon={Footprints}>
                <select value={f.masc} onChange={set('masc')}>
                  <option value="No">No, sin mascota</option>
                  <option value="Sí, con mascota">Sí, viajo con mascota</option>
                </select>
              </Fld>
            </div>
            
            <button className={s.submit} onClick={send}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a8.6 8.6 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.535 5.857L.057 23.882a.75.75 0 00.92.92l6.086-1.474A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.96 9.96 0 01-5.2-1.373l-.372-.213-3.865.937.957-3.796-.23-.389A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              <span>Consultar disponibilidad por WhatsApp</span>
            </button>
            
            <p className={s.note}>Reserva directa sin comisiones · Efectivo, depósito o transferencia bancaria</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Fld({ label, icon: Icon, children }) {
  return (
    <div className={s.fld}>
      <label className={s.fldLabel}>
        {Icon && <Icon size={14} className={s.fldIcon} />}
        <span>{label}</span>
      </label>
      {children}
    </div>
  )
}
