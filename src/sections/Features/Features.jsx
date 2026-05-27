import { Layers, Waves, Trees, Footprints, Zap, ShieldCheck } from 'lucide-react'
import s from './Features.module.css'

const DATA = [
  {
    icon: Layers,
    title: 'Construcción Retak',
    desc: 'Hormigón celular autoclave con inercia térmica superior. Adentro siempre la temperatura perfecta sin importar el clima serrano.',
    featured: true
  },
  {
    icon: Waves,
    title: 'Piscina 24 horas',
    desc: 'Piscina cubierta climatizada disponible todo el día, todo el año. La lluvia y el frío no interrumpen tu descanso.',
    featured: false
  },
  {
    icon: Trees,
    title: 'Solo 5 cabañas + 1 dpto',
    desc: 'Máxima privacidad en el exclusivo Barrio Parque Golf. Sin multitudes, sin ruido — solo vos y la naturaleza.',
    featured: false
  },
  {
    icon: Footprints,
    title: 'Pet-Friendly sin cargo',
    desc: 'Tu mascota es bienvenida como parte de la familia. Limpieza impecable para que todos disfruten sin restricciones.',
    featured: false
  },
  {
    icon: Zap,
    title: 'Cargador Eléctrico',
    desc: 'Pioneros en la comarca: cargador exclusivo para vehículos eléctricos e híbridos a tu disposición.',
    featured: false
  },
  {
    icon: ShieldCheck,
    title: 'Habilitación Legal',
    desc: 'Habilitación Municipal N° 000695. Alarmas monitoreadas y caja de seguridad individual en cada unidad.',
    featured: true
  },
]

export default function Features() {
  return (
    <section className={`section ${s.wrap}`} id="features">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line" />
          <p className="label" style={{ color: 'var(--forest-light)', marginBottom: '.5rem' }}>Ingeniería del confort</p>
          <h2 className={`${s.h2} text-balance`}>Diseño pensado para tu tranquilidad</h2>
          <p className={`${s.sub} text-pretty`}>
            Estándares constructivos y servicios que trascienden la cabaña tradicional —
            cálido y eficiente en verano, abrigado y confortable en invierno.
          </p>
        </div>
        
        <div className={`stagger ${s.grid}`}>
          {DATA.map((f, i) => {
            const IconComponent = f.icon
            return (
              <div 
                key={f.title} 
                className={`reveal outerShell ${s.card} ${f.featured ? s.featuredCard : ''}`} 
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className={`innerCore ${s.cardInner}`}>
                  <div className={s.iconWrapper}>
                    <IconComponent className={s.icon} size={22} />
                  </div>
                  <div className={s.cardBody}>
                    <h3 className={s.cardTitle}>{f.title}</h3>
                    <p className={s.cardDesc}>{f.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
