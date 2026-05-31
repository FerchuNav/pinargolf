import { Users } from 'lucide-react'
import s from './Groups.module.css'

export default function Groups() {
  return (
    <section className={`section ${s.wrap}`} id="grupos">
      <div className="container">
        <div className={`reveal ${s.inner}`}>
          <div className={s.badge}>
            <Users size={14} style={{ marginRight: '8px' }} />
            Ideal para Grupos y Familias
          </div>
          
          <h2 className={s.h2}>
            Diseñado para compartir, con independencia.
          </h2>
          
          <p className={s.lead}>
            Pocas opciones en Sierra de la Ventana permiten alojar varias familias o grupos de amigos 
            manteniendo independencia y espacios comunes de calidad. Nuestro quincho totalmente equipado 
            para 24 personas y la piscina climatizada cubierta convierten cada reunión en una experiencia única.
          </p>

          <div className={s.imgGrid}>
            <div className={s.imgWrap}>
              <img 
                src="/images/fogon/fogon-mesas-comedor.webp" 
                alt="Quincho para 24 personas" 
                className={s.img} 
                loading="lazy" 
              />
            </div>
            <div className={s.imgWrap}>
              <img 
                src="/images/pileta/pileta-cubierta-02.webp" 
                alt="Piscina cubierta ideal para grupos" 
                className={s.img} 
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
