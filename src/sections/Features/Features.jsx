import { Layers, Waves, Trees, Footprints, Zap, ShieldCheck } from 'lucide-react'
import s from './Features.module.css'

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
          
          {/* Tarjeta 1: Construcción Retak (span 2 en desktop) */}
          <div className={`reveal outerShell ${s.card} ${s.cardRetak}`}>
            <div className={`innerCore ${s.cardInner} ${s.innerRetak}`}>
              <div className={s.retakImageCol}>
                <img 
                  src="/images/exterior/fachada-estacionamiento.webp" 
                  alt="Fachada del complejo Pinar Golf mostrando construcción Retak"
                  className={s.cardBgImg}
                />
              </div>
              <div className={s.retakTextCol}>
                <div className={s.cardHeader}>
                  <div className={s.iconWrapper}>
                    <Layers className={s.icon} size={22} />
                  </div>
                  <span className={s.cardBadge}>Eficiencia Térmica</span>
                </div>
                <div className={s.cardBody}>
                  <h3 className={s.cardTitle}>Construcción Retak</h3>
                  <p className={s.cardDesc}>
                    Nuestras cabañas están edificadas con hormigón celular autoclave (Retak), que proporciona una inercia térmica superior. 
                    Garantiza ambientes siempre frescos en verano y cálidos en invierno sin consumo excesivo de energía.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta 2: Piscina 24 horas (span 1 en ancho, span 2 en alto) */}
          <div className={`reveal outerShell ${s.card} ${s.cardPiscina}`}>
            <div className={`innerCore ${s.cardInner} ${s.innerPiscina}`}>
              <img 
                src="/images/pileta/pileta-cubierta-02.webp" 
                alt="Piscina cubierta climatizada Pinar Golf"
                className={s.cardBgImg}
              />
              <div className={s.overlayGradient} />
              <div className={s.cardContentOver}>
                <div className={s.cardHeader}>
                  <div className={`${s.iconWrapper} ${s.iconGold}`}>
                    <Waves className={s.icon} size={22} />
                  </div>
                  <span className={s.cardBadgeGold}>24 Horas Climatizada</span>
                </div>
                <div className={s.cardBody}>
                  <h3 className={`${s.cardTitle} ${s.textWhite}`}>Piscina cubierta 24hs</h3>
                  <p className={`${s.cardDesc} ${s.textLight}`}>
                    La piscina cubierta y climatizada está disponible las 24 horas del día durante todo el año. 
                    El descanso y el relax no se detienen, sin importar el clima exterior.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta 3: Solo 5 cabañas + 1 dpto (span 1) */}
          <div className={`reveal outerShell ${s.card} ${s.cardCabins}`}>
            <div className={`innerCore ${s.cardInner} ${s.innerCabins}`}>
              <img 
                src="/images/exterior/pergola-flores-02.webp" 
                alt="Pérgola en el parque de Pinar Golf"
                className={s.cardBgImg}
              />
              <div className={s.overlayGradient} />
              <div className={s.cardContentOver}>
                <div className={s.cardHeader}>
                  <div className={`${s.iconWrapper} ${s.iconForest}`}>
                    <Trees className={s.icon} size={22} />
                  </div>
                </div>
                <div className={s.cardBody}>
                  <h3 className={`${s.cardTitle} ${s.textWhite}`}>Máxima Privacidad</h3>
                  <p className={`${s.cardDesc} ${s.textLight}`}>
                    Solo 5 cabañas y 1 departamento inmersos en el exclusivo Barrio Parque Golf. 
                    Disfrutá del silencio absoluto de la comarca, sin multitudes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta 4: Cargador Eléctrico (span 1) */}
          <div className={`reveal outerShell ${s.card} ${s.cardCargador}`}>
            <div className={`innerCore ${s.cardInner}`}>
              <div className={s.iconWrapper}>
                <Zap className={s.icon} size={22} />
              </div>
              <div className={s.cardBody}>
                <h3 className={s.cardTitle}>Cargador Eléctrico</h3>
                <p className={s.cardDesc}>
                  Pioneros en la comarca. Ofrecemos cargador de vehículos eléctricos e híbridos exclusivo para nuestros huéspedes en el área de estacionamiento.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 5: Pet-Friendly sin cargo (span 1) */}
          <div className={`reveal outerShell ${s.card} ${s.cardPet}`}>
            <div className={`innerCore ${s.cardInner}`}>
              <div className={s.iconWrapper}>
                <Footprints className={s.icon} size={22} />
              </div>
              <div className={s.cardBody}>
                <h3 className={s.cardTitle}>Pet-Friendly sin cargo</h3>
                <p className={s.cardDesc}>
                  Tu mascota es bienvenida como parte de la familia. Nos aseguramos de mantener un estándar de limpieza impecable para el confort de todos.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 6: Seguridad & Habilitación (span 2) */}
          <div className={`reveal outerShell ${s.card} ${s.cardSeguridad}`}>
            <div className={`innerCore ${s.cardInner} ${s.innerSeguridad}`}>
              <div className={s.iconWrapper}>
                <ShieldCheck className={s.icon} size={22} />
              </div>
              <div className={s.cardBody}>
                <div className={s.titleRow}>
                  <h3 className={s.cardTitle}>Seguridad & Habilitación Legal</h3>
                  <span className={s.cardBadge}>Habilitación N° 000695</span>
                </div>
                <p className={s.cardDesc}>
                  Brindamos absoluta tranquilidad para tu estadía. Cada una de nuestras unidades cuenta con sistema de alarmas monitoreadas de última generación y caja de seguridad individual.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
