import { useState } from 'react'
import s from './Amenities.module.css'

const CATEGORIES = [
  {
    key:'piscinas',
    label:'🏊 Piletas',
    items:[
      {icon:'☀️',t:'Pileta al aire libre',sub:'Temporada · Todas las edades'},
      {icon:'🌡',t:'Pileta cubierta',sub:'Climatizada · Abierta todo el año'},
      {icon:'👶',t:'Pileta infantil',sub:'Climatizada · Segura'},
    ]
  },
  {
    key:'habitacion',
    label:'🛏 Habitación',
    items:[
      {icon:'🛁',t:'Baño privado',sub:'Bidé · Secador de pelo · Artículos de tocador gratis'},
      {icon:'🛋',t:'Zona de estar',sub:'Sofá · Zona de comedor · Sofá cama'},
      {icon:'📺',t:'TV pantalla plana',sub:'Televisor en la habitación'},
      {icon:'🛏',t:'Ropa de cama',sub:'Cama con sommier'},
    ]
  },
  {
    key:'cocina',
    label:'🍳 Cocina',
    items:[
      {icon:'🔥',t:'Hornalla + Horno',sub:'Cocina completa equipada'},
      {icon:'📡',t:'Microondas',sub:'Calentado rápido'},
      {icon:'🍞',t:'Tostadora',sub:'Desayuno fácil'},
      {icon:'🍽',t:'Utensilios',sub:'Mesa de comedor · Kitchenette'},
    ]
  },
  {
    key:'exterior',
    label:'🌿 Exterior',
    items:[
      {icon:'🔥',t:'Quincho cerrado',sub:'Parrilla · TV · Metegol'},
      {icon:'🧺',t:'Zona de pícnic',sub:'Mobiliario exterior · Terraza · Jardín'},
      {icon:'🎮',t:'Sala de juegos',sub:'Juegos de mesa · Puzzles · Zona infantil'},
      {icon:'🐾',t:'Pet-friendly',sub:'Mascotas bienvenidas · Gratis'},
    ]
  },
  {
    key:'servicios',
    label:'⚡ Servicios',
    items:[
      {icon:'📶',t:'WiFi gratis',sub:'En todo el establecimiento'},
      {icon:'🚗',t:'Estacionamiento',sub:'Gratis · Privado · Sin reserva'},
      {icon:'🌡',t:'Calefacción + A/C',sub:'Climatización dual'},
      {icon:'🔒',t:'Caja fuerte',sub:'Seguridad individual'},
      {icon:'🕐',t:'Recepción 24hs',sub:'Siempre disponibles'},
      {icon:'🚲',t:'Alquiler bicis',sub:'Explorá el Barrio Golf'},
    ]
  },
  {
    key:'actividades',
    label:'🥾 Actividades',
    items:[
      {icon:'🥾',t:'Senderismo',sub:'Fuera del establecimiento'},
      {icon:'🎣',t:'Pesca',sub:'Fuera del establecimiento'},
      {icon:'⛳',t:'Golf',sub:'Campo a menos de 3 km'},
    ]
  },
]

export default function Amenities() {
  const [active, setActive] = useState('piscinas')
  const activeCat = CATEGORIES.find(c => c.key === active)

  return (
    <section className={`section ${s.wrap}`} id="servicios">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line"/>
          <p className="label" style={{color:'var(--forest-light)',marginBottom:'.5rem'}}>Todo incluido</p>
          <h2 className={s.h2}>Servicios y amenities</h2>
          <p className={s.sub}>Todo lo que necesitás para una estadía perfecta, sin importar la estación del año.</p>
        </div>

        <div className={`reveal ${s.tabs}`}>
          {CATEGORIES.map(c => (
            <button key={c.key} className={`${s.tab} ${active===c.key?s.tabActive:''}`} onClick={() => setActive(c.key)}>
              {c.label}
            </button>
          ))}
        </div>

        <div className={s.grid} key={active}>
          {activeCat.items.map((item,i) => (
            <div key={item.t} className={`${s.chip} ${s.fadeIn}`} style={{animationDelay:`${i*.07}s`}}>
              <span className={s.chipIcon}>{item.icon}</span>
              <div>
                <p className={s.chipTitle}>{item.t}</p>
                <p className={s.chipSub}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal ${s.highlights}`}>
          <Hi icon="🚗" text="Estacionamiento gratis · Sin reserva"/>
          <Hi icon="📶" text="WiFi gratis en todo el establecimiento"/>
          <Hi icon="🐾" text="Mascotas admitidas · Sin cargo"/>
          <Hi icon="🚭" text="Habitaciones para no fumadores"/>
          <Hi icon="👨‍👩‍👧‍👦" text="Habitaciones familiares"/>
          <Hi icon="🇦🇷" text="Se habla Español"/>
        </div>
      </div>
    </section>
  )
}

function Hi({icon, text}) {
  return (
    <div className={s.hi}>
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  )
}
