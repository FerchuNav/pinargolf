import { ChevronDown } from 'lucide-react'
import s from './FAQ.module.css'

const FAQS = [
  {
    q: '¿Pinar Golf tiene piscina climatizada?',
    a: 'Sí. Contamos con piscina cubierta climatizada disponible durante todo el año, sin importar la estación o el clima exterior.'
  },
  {
    q: '¿Aceptan mascotas?',
    a: 'Sí. Somos un complejo pet-friendly. Tu mascota es bienvenida sin cargos ocultos como parte de la familia.'
  },
  {
    q: '¿Cuántas personas entran en el quincho?',
    a: 'El quincho cerrado cuenta con capacidad para alojar hasta 24 personas cómodamente, ideal para reuniones familiares o de amigos.'
  },
  {
    q: '¿Están cerca del centro de Sierra de la Ventana?',
    a: 'Nos encontramos en el exclusivo Barrio Parque Golf, a pocos minutos del centro. Un entorno natural tranquilo, alejado del ruido, pero con rápido acceso a todos los servicios.'
  }
]

export default function FAQ() {
  return (
    <section className={`section ${s.wrap}`} id="faq">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line" />
          <p className="label" style={{ color: 'var(--forest-light)' }}>Información Útil</p>
          <h2 className={s.h2}>Preguntas Frecuentes</h2>
        </div>

        <div className={s.faqContainer}>
          {FAQS.map((faq, i) => (
            <details key={i} className={`reveal ${s.details}`} name="faq">
              <summary className={s.summary}>
                {faq.q}
                <ChevronDown className={s.icon} size={20} />
              </summary>
              <div className={s.answer}>
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
