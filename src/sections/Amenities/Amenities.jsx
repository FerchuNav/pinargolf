import { useState } from 'react'
import { 
  Waves, 
  Bed, 
  Utensils, 
  Trees, 
  Zap, 
  Compass,
  Sun,
  Thermometer,
  Baby,
  Bath,
  Sofa,
  Tv,
  BedDouble,
  Flame,
  ChefHat,
  Coffee,
  Gamepad2,
  Footprints,
  Wifi,
  Car,
  Lock,
  Clock,
  Bike,
  Ban,
  Users,
  Languages
} from 'lucide-react'
import s from './Amenities.module.css'

const CATEGORIES = [
  {
    key: 'piscinas',
    label: 'Piletas',
    icon: Waves,
    items: [
      { icon: Sun, t: 'Pileta al aire libre', sub: 'Temporada · Todas las edades' },
      { icon: Thermometer, t: 'Pileta cubierta', sub: 'Climatizada · Abierta todo el año' },
      { icon: Baby, t: 'Pileta infantil', sub: 'Climatizada · Segura' },
    ]
  },
  {
    key: 'habitacion',
    label: 'Habitación',
    icon: Bed,
    items: [
      { icon: Bath, t: 'Baño privado', sub: 'Bidé · Secador de pelo · Artículos gratis' },
      { icon: Sofa, t: 'Zona de estar', sub: 'Sillones · Zona de comedor · Sofá cama' },
      { icon: Tv, t: 'TV pantalla plana', sub: 'Televisor Smart en la habitación' },
      { icon: BedDouble, t: 'Ropa de cama', sub: 'Camas equipadas con sommier' },
    ]
  },
  {
    key: 'cocina',
    label: 'Cocina',
    icon: Utensils,
    items: [
      { icon: Flame, t: 'Cocina con horno', sub: 'Equipamiento completo para cocinar' },
      { icon: ChefHat, t: 'Microondas', sub: 'Calentado rápido y de fácil uso' },
      { icon: Coffee, t: 'Tostadora y pava', sub: 'Ideal para desayunos cómodos' },
      { icon: Utensils, t: 'Vajilla completa', sub: 'Mesas, cubiertos y kitchenette' },
    ]
  },
  {
    key: 'exterior',
    label: 'Exterior',
    icon: Trees,
    items: [
      { icon: Flame, t: 'Quincho cerrado', sub: 'Parrilla · TV · Metegol equipado' },
      { icon: Trees, t: 'Zona de pícnic', sub: 'Mobiliario exterior · Terraza · Parque' },
      { icon: Gamepad2, t: 'Sala de juegos', sub: 'Metegol y zona de esparcimiento' },
      { icon: Footprints, t: 'Pet-friendly', sub: 'Mascotas bienvenidas en el predio' },
    ]
  },
  {
    key: 'servicios',
    label: 'Servicios',
    icon: Zap,
    items: [
      { icon: Wifi, t: 'WiFi gratuito', sub: 'Disponible en todo el establecimiento' },
      { icon: Car, t: 'Estacionamiento', sub: 'Gratis · Privado · Semicubierto' },
      { icon: Thermometer, t: 'Calefacción y A/C', sub: 'Climatización dual eficiente' },
      { icon: Lock, t: 'Caja fuerte', sub: 'Seguridad individual en la unidad' },
      { icon: Clock, t: 'Recepción y soporte', sub: 'Atención personalizada para paseos' },
      { icon: Bike, t: 'Bicicletas gratuitas', sub: 'Explorá el exclusivo Barrio Golf' },
    ]
  },
  {
    key: 'actividades',
    label: 'Actividades',
    icon: Compass,
    items: [
      { icon: Compass, t: 'Senderismo', sub: 'Cerros y circuitos de trekking cercanos' },
      { icon: Waves, t: 'Pesca y arroyos', sub: 'Actividades en entornos naturales' },
      { icon: Compass, t: 'Campo de Golf', sub: 'Polo de golf a menos de 3 km' },
    ]
  },
]

const HIGHLIGHTS = [
  { icon: Car, text: 'Estacionamiento gratis' },
  { icon: Wifi, text: 'WiFi gratis en todo el predio' },
  { icon: Footprints, text: 'Mascotas admitidas sin cargo' },
  { icon: Ban, text: 'Ambientes para no fumadores' },
  { icon: Users, text: 'Cabañas familiares amplias' },
  { icon: Languages, text: 'Atención en Español' }
]

export default function Amenities() {
  const [active, setActive] = useState('piscinas')
  const activeCat = CATEGORIES.find(c => c.key === active)

  return (
    <section className={`section ${s.wrap}`} id="servicios">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line" />
          <p className="label" style={{ color: 'var(--forest-light)', marginBottom: '.5rem' }}>Todo incluido</p>
          <h2 className={`${s.h2} text-balance`}>Servicios y amenities</h2>
          <p className={`${s.sub} text-pretty`}>Todo lo que necesitás para una estadía perfecta, sin sorpresas ni cargos ocultos.</p>
        </div>

        <div className={`reveal ${s.tabs}`}>
          {CATEGORIES.map(c => {
            const TabIcon = c.icon
            return (
              <button 
                key={c.key} 
                className={`${s.tab} ${active === c.key ? s.tabActive : ''}`} 
                onClick={() => setActive(c.key)}
              >
                <TabIcon size={14} className={s.tabIcon} />
                <span>{c.label}</span>
              </button>
            )
          })}
        </div>

        <div className={s.grid} key={active}>
          {activeCat.items.map((item, i) => {
            const ItemIcon = item.icon
            return (
              <div 
                key={item.t} 
                className={`${s.chip} ${s.fadeIn}`} 
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className={s.chipInner}>
                  <div className={s.chipIconWrapper}>
                    <ItemIcon className={s.chipIcon} size={20} />
                  </div>
                  <div>
                    <p className={s.chipTitle}>{item.t}</p>
                    <p className={s.chipSub}>{item.sub}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className={`reveal ${s.highlights}`}>
          {HIGHLIGHTS.map((h, i) => {
            const HighIcon = h.icon
            return (
              <div key={i} className={s.hi}>
                <HighIcon size={14} className={s.hiIcon} />
                <span>{h.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
