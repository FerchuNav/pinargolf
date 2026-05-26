import s from './Features.module.css'
const DATA = [
  {icon:'🏗',title:'Construcción Retak',desc:'Hormigón celular autoclave con inercia térmica superior. Adentro siempre la temperatura perfecta sin importar el clima serrano.'},
  {icon:'🏊',title:'Piscina 24 horas',desc:'Piscina cubierta climatizada disponible todo el día, todo el año. La lluvia y la nieve no interrumpen tu descanso.'},
  {icon:'🔒',title:'Solo 5 cabañas + 1 dpto',desc:'Máxima privacidad en el exclusivo Barrio Parque Golf. Sin multitudes, sin ruido — solo vos y la naturaleza.'},
  {icon:'🐾',title:'Pet-Friendly',desc:'Tu mascota es parte de la familia. Limpieza impecable para que todos disfruten sin restricciones.'},
  {icon:'⚡',title:'Cargador Eléctrico',desc:'Pioneros en la región: cargador para vehículos eléctricos e híbridos incluido para el viajero contemporáneo.'},
  {icon:'🛡',title:'Habilitación Legal',desc:'Habilitación Municipal N° 000695. Alarmas monitoreadas y caja de seguridad individual en cada cabaña.'},
]
export default function Features() {
  return (
    <section className={`section ${s.wrap}`} id="features">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line"/>
          <p className="label" style={{color:'var(--forest-light)',marginBottom:'.5rem'}}>¿Por qué elegirnos?</p>
          <h2 className={s.h2}>Ingeniería del confort</h2>
          <p className={s.sub}>Diseñado bajo estándares constructivos que trascienden la cabaña tradicional — cálido en verano, abrigado en invierno.</p>
        </div>
        <div className={`stagger ${s.grid}`}>
          {DATA.map((f,i) => (
            <div key={f.title} className={`reveal ${s.card}`} style={{transitionDelay:`${i*.1}s`}}>
              <div className={s.icon}>{f.icon}</div>
              <h3 className={s.cardTitle}>{f.title}</h3>
              <p className={s.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
