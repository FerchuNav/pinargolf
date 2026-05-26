import s from './WinterBanner.module.css'
export default function WinterBanner() {
  return (
    <section className={s.wrap}>
      <div className={s.imgs}>
        <div className={s.imgWrap}><img src="/images/exterior/nieve-01.jpg" alt="Pinar Golf bajo la nieve junio 2025" className={s.img}/></div>
        <div className={s.imgWrap}><img src="/images/exterior/nieve-02.jpg" alt="Piscina con nieve invierno 2025" className={s.img}/></div>
      </div>
      <div className={`container ${s.content}`}>
        <div className={`reveal ${s.text}`}>
          <span className="gold-line"/>
          <p className="label" style={{color:'var(--gold)',marginBottom:'.75rem'}}>Destino 365 días</p>
          <h2 className={s.h2}>Abierto todo el año —<br/><em>incluso bajo la nieve</em></h2>
          <p className={s.sub}>Mientras afuera cae nieve, adentro la piscina climatizada te espera a temperatura perfecta. El invierno es una experiencia, no un obstáculo.</p>
          <a href="#reservar" className="btn btn-gold">Reservar mi estadía</a>
        </div>
      </div>
    </section>
  )
}
