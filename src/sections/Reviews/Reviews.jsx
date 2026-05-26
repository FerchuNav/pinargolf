import s from './Reviews.module.css'
const REVIEWS = [
  {ini:'MG',name:'Marcela G.',origin:'Buenos Aires · Familia con 2 hijos',stars:5,text:'Nos asesoraron en cada paseo y restaurante. El agua de la piscina a temperatura ideal aún con el frío serrano. Una experiencia que no esperábamos encontrar en la zona.'},
  {ini:'RV',name:'Roberto V.',origin:'Bahía Blanca · Pareja + mascota',stars:5,text:'La construcción Retak se nota enseguida: afuera el frío más intenso, adentro temperatura perfecta. Llegamos con nuestro perro y fue bienvenido sin problemas. Limpieza impecable.'},
  {ini:'LP',name:'Laura P.',origin:'Mar del Plata · Grupo de 5 amigos',stars:5,text:'El dúplex es increíble para grupos. Cada planta tiene su propio baño y el jacuzzi es el cierre perfecto después de subir el Cerro Ventana. Definitivamente volvemos.'},
]
export default function Reviews() {
  return (
    <section className={`section ${s.wrap}`} id="resenas">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line"/>
          <p className="label" style={{color:'var(--forest-light)',marginBottom:'.5rem'}}>Lo que dicen nuestros huéspedes</p>
          <h2 className={s.h2}>Reseñas verificadas</h2>
        </div>
        <div className={`stagger ${s.grid}`}>
          {REVIEWS.map((r,i) => (
            <div key={r.name} className={`reveal ${s.card}`} style={{transitionDelay:`${i*.12}s`}}>
              <div className={s.stars}>{'★'.repeat(r.stars)}</div>
              <blockquote className={s.quote}>"{r.text}"</blockquote>
              <div className={s.author}>
                <div className={s.avatar}>{r.ini}</div>
                <div><strong className={s.aName}>{r.name}</strong><span className={s.aOrigin}>{r.origin}</span></div>
              </div>
            </div>
          ))}
        </div>
        <div className={`reveal ${s.strip}`}>
          <div className={s.scores}>
            <div className={s.score}><span className={s.scoreNum}>8.8</span><span className={s.scoreLbl}>Puntaje general<br/>Booking.com</span></div>
            <div className={s.score}><span className={s.scoreNum}>9.4</span><span className={s.scoreLbl}>Ubicación &<br/>atención personalizada</span></div>
          </div>
          <a href="#reservar" className="btn btn-gold">Reservar ahora →</a>
        </div>
      </div>
    </section>
  )
}
