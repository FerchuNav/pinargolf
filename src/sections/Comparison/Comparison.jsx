import { Check, X } from 'lucide-react'
import s from './Comparison.module.css'

const ROWS = [
  { f: 'Materialidad', trad: 'Piedra o madera — puntos de fuga térmica', pg: 'Hormigón celular autoclave (Retak) — aislamiento total' },
  { f: 'Climatización', trad: 'Inestable y de alto consumo energético', pg: 'Calefacción central por radiadores + aire acondicionado eficiente' },
  { f: 'Higiene y Pisos', trad: 'Superficies de alfombra o madera porosas', pg: 'Porcelanato y pisos flotantes modernos de fácil desinfección' },
  { f: 'Piscina', trad: 'Disponible únicamente durante la temporada estival', pg: 'Cubierta climatizada habilitada las 24 horas, todo el año' },
  { f: 'Sostenibilidad', trad: 'Dependencia total de combustibles fósiles tradicionales', pg: 'Cargador de auto eléctrico e híbrido exclusivo en el predio' },
  { f: 'Seguridad Legal', trad: 'Sin habilitación municipal visible o verificable', pg: 'Habilitación Oficial N° 000695 · Sistema de alarma monitoreada' },
]

export default function Comparison() {
  return (
    <section className={`section ${s.wrap}`}>
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
        
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th className={s.thFeat}>Característica</th>
                <th className={s.thTrad}>Cabaña tradicional</th>
                <th className={s.thPg}>Pinar Golf Sierra</th>
              </tr>
            </thead>
            <tbody className="stagger">
              {ROWS.map((r, i) => (
                <tr key={r.f} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <td className={s.feat}>{r.f}</td>
                  <td className={s.tdTrad}>
                    <div className={s.cellContent}>
                      <X size={15} className={s.badIcon} />
                      <span>{r.trad}</span>
                    </div>
                  </td>
                  <td className={s.tdPg}>
                    <div className={s.cellContent}>
                      <Check size={16} className={s.goodIcon} />
                      <span>{r.pg}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
