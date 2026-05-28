import s from './Experiences.module.css'

const EXPERIENCES = [
  { img:'/images/exterior/vista-aerea.webp',     title:'Senderismo',         desc:'Cerro Ventana, Cerro Tres Picos y decenas de circuitos en el Parque Tornquist.' },
  { img:'/images/exterior/bicicletas-parque.webp', title:'Golf & Bicicletas', desc:'Campo de golf de 9 hoyos dentro del Barrio Parque Golf. Bicicletas incluidas.' },
  { img:'/images/exterior/juegos-infantiles-actual.jpg', title:'Parque Infantil', desc:'Juegos de madera, tobogán y hamacas para los más chicos.' },
  { img:'/images/exterior/pergola-flores-02.webp', title:'Descanso & Relax', desc:'Disfrutá de la pérgola exterior, el parque arbolado y un entorno de absoluta tranquilidad.' },
]

export default function Experiences() {
  return (
    <section className={`section ${s.wrap}`} id="experiencias">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line"/>
          <p className="label" style={{color:'var(--forest-light)',marginBottom:'.5rem'}}>Qué hacer en la zona</p>
          <h2 className={s.h2}>Experiencias en la Comarca</h2>
          <p className={s.sub}>Sierra de la Ventana es mucho más que cabañas. Descubrí actividades para todos los gustos a minutos de tu puerta.</p>
        </div>
        <div className={`stagger ${s.grid}`}>
          {EXPERIENCES.map((e,i) => (
            <div key={e.title} className={`reveal ${s.card}`} style={{transitionDelay:`${i*.1}s`}}>
              <div className={s.imgWrap}>
                <img src={e.img} alt={e.title} loading="lazy" className={s.img}/>
              </div>
              <div className={s.body}>
                <h3 className={s.cardTitle}>{e.title}</h3>
                <p className={s.cardDesc}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
