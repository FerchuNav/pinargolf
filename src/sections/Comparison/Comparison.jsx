import s from './Comparison.module.css'
const ROWS = [
  {f:'Materialidad',   trad:'Piedra/Madera — puntos de fuga térmica',       pg:'Hormigón celular autoclave — aislamiento total'},
  {f:'Climatización',  trad:'Inestable y de alto consumo',                   pg:'Radiadores centrales + Aire A/C eficiente'},
  {f:'Higiene & Pisos',trad:'Superficies porosas difíciles de limpiar',      pg:'Porcelanato y pisos flotantes de alta jerarquía'},
  {f:'Piscina',        trad:'Solo disponible en temporada de verano',        pg:'Cubierta climatizada, disponible 365 días · 24hs'},
  {f:'Sostenibilidad', trad:'Dependencia total de combustibles fósiles',     pg:'Cargador eléctrico incluido · Infraestructura eficiente'},
  {f:'Seguridad legal',trad:'Sin habilitación municipal verificable',        pg:'Habilitación N° 000695 · Alarma monitoreada'},
]
export default function Comparison() {
  return (
    <section className={`section ${s.wrap}`}>
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line"/>
          <p className="label" style={{color:'var(--forest-light)',marginBottom:'.5rem'}}>Comparativa</p>
          <h2 className={s.h2}>Cabaña tradicional vs<br/>Pinar Golf · Tecnología Retak</h2>
        </div>
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead><tr>
              <th>Característica</th>
              <th><span style={{color:'rgba(255,255,255,.55)',fontStyle:'italic'}}>Cabaña tradicional</span></th>
              <th><span style={{color:'var(--gold-light)'}}>Pinar Golf · Retak</span></th>
            </tr></thead>
            <tbody className="stagger">
              {ROWS.map((r, i) => (
                <tr key={r.f} className="reveal" style={{transitionDelay:`${i*.08}s`}}>
                  <td className={s.feat}>{r.f}</td>
                  <td><span className={s.bad}>✗</span> {r.trad}</td>
                  <td><span className={s.good}>✓</span> {r.pg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
