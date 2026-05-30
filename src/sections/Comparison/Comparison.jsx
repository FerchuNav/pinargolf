import { Layers, Thermometer, Sparkles, Waves, Zap, ShieldCheck, Check, X } from 'lucide-react'
import s from './Comparison.module.css'

const COMPARISONS = [
  {
    icon: Layers,
    feature: 'Materialidad',
    trad: 'Construcción con piedra o madera tradicionales que presentan fugas térmicas, frío y humedad.',
    pg: 'Hormigón celular autoclave (Retak) de alta eficiencia que garantiza un aislamiento total del clima serrano.',
    highlight: true,
    image: '/images/exterior/vista-aerea.webp',
    imagePos: 'left'
  },
  {
    icon: Thermometer,
    feature: 'Climatización',
    trad: 'Sistemas inestables y calefactores individuales ineficientes que generan alto consumo y baja cobertura.',
    pg: 'Calefacción central por radiadores de agua en todos los ambientes + equipos split de aire acondicionado.',
    highlight: true,
    image: '/images/amenities/radiador-aire.webp',
    imagePos: 'right'
  },
  {
    icon: Waves,
    feature: 'Piscina & Relax',
    trad: 'Piletas descubiertas tradicionales habilitadas de forma exclusiva durante los meses de verano.',
    pg: 'Piscina cubierta climatizada y jacuzzi exterior terapéutico disponibles todo el día (24hs), todo el año.',
    highlight: true,
    image: '/images/pileta/jacuzzi-01.webp',
    imagePos: 'right'
  },
  {
    icon: Sparkles,
    feature: 'Higiene y Pisos',
    trad: 'Pisos de madera porosa o alfombras antiguas propensas a retener suciedad y humedad del ambiente.',
    pg: 'Porcelanatos modernos y pisos flotantes de alta calidad, higiénicos, limpios y de fácil desinfección.',
    highlight: false
  },
  {
    icon: Zap,
    feature: 'Sostenibilidad',
    trad: 'Dependencia absoluta de gas envasado y combustibles tradicionales sin alternativas modernas.',
    pg: 'Pioneros en la comarca con cargador exclusivo para vehículos eléctricos e híbridos a disposición.',
    highlight: false
  },
  {
    icon: ShieldCheck,
    feature: 'Seguridad Legal',
    trad: 'Propiedades de alquiler informal sin habilitación turística, control de seguridad o alarmas.',
    pg: 'Estadía oficial con Habilitación N° 000695, alarmas monitoreadas y cajas de seguridad individuales.',
    highlight: false
  }
]

export default function Comparison() {
  return (
    <section className={`section ${s.wrap}`} id="comparativa">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line" />
          <p className="label" style={{ color: 'var(--forest-light)', marginBottom: '.5rem' }}>Comparativa</p>
          <h2 className={`${s.h2} text-balance`}>Cabaña tradicional vs<br />Pinar Golf Sierra</h2>
          <p className={`${s.sub} text-pretty`}>
            Descubrí por qué la ingeniería constructiva y los servicios del complejo marcan
            la diferencia en confort y tranquilidad para tu estadía.
          </p>
        </div>
        
        <div className={`stagger ${s.grid}`}>
          {COMPARISONS.map((item, idx) => {
            const Icon = item.icon
            const hasImg = !!item.image
            
            return (
              <div 
                key={item.feature}
                className={`reveal outerShell ${s.card} ${item.highlight ? s.cardHighlight : ''}`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className={`innerCore ${s.cardInner} ${hasImg ? s.innerWithImg : ''}`}>
                  
                  {/* Si tiene imagen y se posiciona a la izquierda, la renderizamos primero */}
                  {hasImg && item.imagePos === 'left' && (
                    <div className={s.cardImageCol}>
                      <img src={item.image} alt={item.feature} className={s.cardBgImg} />
                    </div>
                  )}

                  {/* Bloque de Contenido de la Tarjeta */}
                  <div className={hasImg ? s.cardContentCol : s.fullWidthCol}>
                    {/* Cabecera de la Comparativa */}
                    <div className={s.cardHeader}>
                      <div className={s.titleGroup}>
                        <div className={s.iconWrapper}>
                          <Icon size={20} className={s.icon} />
                        </div>
                        <h3 className={s.cardTitle}>{item.feature}</h3>
                      </div>
                      {item.highlight && <span className={s.badge}>Diferencia Clave</span>}
                    </div>

                    {/* Paneles de Comparación */}
                    <div className={s.compareGrid}>
                      {/* Lado Tradicional */}
                      <div className={s.panelTrad}>
                        <div className={s.panelHeader}>
                          <X size={15} className={s.badIcon} />
                          <h4 className={s.panelTitle}>Cabaña Tradicional</h4>
                        </div>
                        <p className={s.panelDesc}>{item.trad}</p>
                      </div>

                      {/* Lado Pinar Golf */}
                      <div className={s.panelPg}>
                        <div className={s.panelHeader}>
                          <Check size={16} className={s.goodIcon} />
                          <h4 className={s.panelTitlePg}>Pinar Golf Sierra</h4>
                        </div>
                        <p className={s.panelDescPg}>{item.pg}</p>
                      </div>
                    </div>
                  </div>

                  {/* Si tiene imagen y se posiciona a la derecha, la renderizamos al final */}
                  {hasImg && item.imagePos === 'right' && (
                    <div className={s.cardImageCol}>
                      <img src={item.image} alt={item.feature} className={s.cardBgImg} />
                    </div>
                  )}

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
