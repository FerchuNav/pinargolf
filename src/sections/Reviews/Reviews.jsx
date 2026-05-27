import { Star, Quote } from 'lucide-react'
import s from './Reviews.module.css'

const REVIEWS = [
  {
    ini: 'MG',
    name: 'Marcela G.',
    origin: 'Buenos Aires · Familia con hijos',
    stars: 5,
    text: 'La cabaña es excelente, muy bien equipada y calefaccionada. La piscina climatizada es hermosa, ideal para relajarse después de una caminata por los cerros. Lucas es un gran anfitrión, siempre predispuesto a darnos las mejores recomendaciones turísticas y gastronómicas.'
  },
  {
    ini: 'RV',
    name: 'Roberto V.',
    origin: 'Bahía Blanca · Pareja + mascota',
    stars: 5,
    text: 'Excelente estadía en Parque Golf. Las cabañas son modernas, muy luminosas y con perfecta aislación térmica. El parque y los juegos para niños son fantásticos si viajas en familia. La pileta techada es espectacular.'
  },
  {
    ini: 'LP',
    name: 'Laura P.',
    origin: 'Mar del Plata · Grupo de amigos',
    stars: 5,
    text: 'Fuimos en grupo de amigos y el dúplex fue comodísimo. Excelente calefacción por radiadores, camas súper confortables e hidromasaje. La ubicación cerca del arroyo Sauce Grande y la cancha de golf es inmejorable para descansar.'
  },
  {
    ini: 'DK',
    name: 'Daniel K.',
    origin: 'La Plata · Pareja',
    stars: 5,
    text: 'La atención personalizada de Lucas hace la diferencia. Nos ayudó con los paseos por la comarca serrana. Las cabañas tienen todo lo necesario, cocina completa, parrilla individual y una gran tranquilidad en el predio.'
  },
  {
    ini: 'SM',
    name: 'Silvia M.',
    origin: 'Santa Rosa · Familia con mascota',
    stars: 5,
    text: 'Hermoso complejo rodeado de naturaleza. Las instalaciones impecables y la piscina climatizada impecable para ir con chicos. Es pet-friendly, así que pudimos disfrutar con nuestro perro sin problemas. Volveremos sin dudas.'
  },
  {
    ini: 'AT',
    name: 'Andrés T.',
    origin: 'Neuquén · Pareja',
    stars: 5,
    text: 'La aislación acústica y térmica es increíble. El hidromasaje y la comodidad de la cabaña te invitan a no salir. Ubicación excelente en el barrio Parque Golf, súper silencioso. Volveremos pronto.'
  }
]

export default function Reviews() {
  // Duplicar para crear la animacion circular continua
  const doubleReviews = [...REVIEWS, ...REVIEWS]

  return (
    <section className={`section ${s.wrap}`} id="resenas">
      <div className="container">
        <div className={s.headerRow}>
          <div className={`reveal ${s.hdr}`}>
            <span className="gold-line" />
            <p className="label" style={{ color: 'var(--forest-light)', marginBottom: '.5rem' }}>Lo que dicen nuestros huéspedes</p>
            <h2 className={s.h2}>Reseñas verificadas</h2>
          </div>
        </div>

        {/* Carrusel Circular Marquee */}
        <div className={s.carouselWrapper}>
          <div className={s.carousel}>
            {doubleReviews.map((r, i) => (
              <div 
                key={`${r.name}-${i}`} 
                className={`outerShell ${s.card}`}
              >
                <div className={`innerCore ${s.cardInner}`}>
                  <div className={s.cardHeader}>
                    <div className={s.stars}>
                      {[...Array(r.stars)].map((_, idx) => (
                        <Star key={idx} size={15} fill="currentColor" className={s.starIcon} />
                      ))}
                    </div>
                    <Quote size={32} className={s.quoteIcon} />
                  </div>
                  
                  <blockquote className={s.quote}>"{r.text}"</blockquote>
                  
                  <div className={s.author}>
                    <div className={`${s.avatar} squircle`}>{r.ini}</div>
                    <div>
                      <strong className={s.aName}>{r.name}</strong>
                      <span className={s.aOrigin}>{r.origin}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`reveal ${s.strip}`}>
          <div className={s.scores}>
            <div className={s.score}>
              <span className={s.scoreNum}>8.8</span>
              <span className={s.scoreLbl}>Puntaje general<br />Booking.com</span>
            </div>
            <div className={s.score}>
              <span className={s.scoreNum}>9.4</span>
              <span className={s.scoreLbl}>Ubicación y<br />atención personalizada</span>
            </div>
          </div>
          <a href="#reservar" className="btn btn-gold">Reservar ahora →</a>
        </div>
      </div>
    </section>
  )
}

