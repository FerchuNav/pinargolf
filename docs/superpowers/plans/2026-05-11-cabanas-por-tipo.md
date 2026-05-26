# Cabañas por Tipo — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar la sección Rooms genérica por 3 cards horizontales separadas (Cabaña Simple, Dúplex y Departamento), cada una con galería de fotos, specs y video tour virtual con modal.

**Architecture:** Capa de datos en `src/data/cabins.js` consumida por `Rooms.jsx` reeescrito con layout de 3 columnas. El modal de video vive en `VideoModal.jsx` como componente independiente. La galería usa estado local y el autoplay del video usa IntersectionObserver.

**Tech Stack:** React 18, CSS Modules, Vite, IntersectionObserver API nativa

---

## Archivos

| Acción | Archivo |
|--------|---------|
| CREAR | `src/data/cabins.js` |
| CREAR | `src/sections/Rooms/VideoModal.jsx` |
| CREAR | `src/sections/Rooms/VideoModal.module.css` |
| REEMPLAZAR | `src/sections/Rooms/Rooms.jsx` |
| REEMPLAZAR | `src/sections/Rooms/Rooms.module.css` |
| MODIFICAR | `.gitignore` (agregar `.superpowers/`) |

---

## Task 1: Agregar `.superpowers/` al `.gitignore`

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Agregar la línea al final del archivo**

Abrir `.gitignore` y agregar al final:

```
# Brainstorm mockups
.superpowers/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: ignorar carpeta .superpowers de brainstorming"
```

---

## Task 2: Crear la capa de datos `src/data/cabins.js`

**Files:**
- Create: `src/data/cabins.js`

- [ ] **Step 1: Crear el directorio y el archivo**

Crear `src/data/cabins.js` con el siguiente contenido completo:

```js
export const CABINS = [
  {
    id: 'simple',
    name: 'Cabaña Simple',
    count: 3,
    capacityLabel: 'Hasta 4 personas',
    specs: [
      { icon: '🛏', text: '1 dormitorio matrimonial' },
      { icon: '🛋', text: '2 sofá-camas en living' },
      { icon: '🍳', text: 'Cocina completa equipada' },
      { icon: '🌡', text: 'Calefacción dual + Aire A/C' },
      { icon: '📺', text: 'Smart TV' },
      { icon: '🐾', text: 'Pet-friendly · Sin cargo' },
      { icon: '🔒', text: 'Caja de seguridad' },
    ],
    photos: [
      '/images/simple/simple1.jpg',
      '/images/simple/simple2.jpg',
    ],
    videos: [
      {
        src:   '/images/tour/simple/simple1.mp4',
        thumb: '/images/tour/simple/simple1_thm.mp4',
        label: 'Recorrido completo',
      },
    ],
  },
  {
    id: 'duplex',
    name: 'Cabaña Dúplex',
    count: 2,
    capacityLabel: 'Hasta 6 personas',
    specs: [
      { icon: '🛏', text: 'Hab. principal: cama matrimonial' },
      { icon: '🛏', text: 'Hab. secundaria: 2 camas individuales' },
      { icon: '🛋', text: '2 sofá-camas en living' },
      { icon: '🍳', text: 'Cocina completa equipada' },
      { icon: '🌡', text: 'Calefacción dual + Aire A/C' },
      { icon: '🐾', text: 'Pet-friendly · Sin cargo' },
      { icon: '🔒', text: 'Caja de seguridad' },
    ],
    photos: [
      '/images/duplex/duplex1.jpg',
      '/images/duplex/duplex2.jpg',
    ],
    videos: [
      {
        src:   '/images/tour/duplex/duplex1.mp4',
        thumb: '/images/tour/duplex/duplex1_thm.mp4',
        label: 'Planta baja — living y cocina',
      },
      {
        src:   '/images/tour/duplex/duplex2.mp4',
        thumb: '/images/tour/duplex/duplex2_thm.mp4',
        label: 'Planta alta — dormitorios',
      },
    ],
  },
  {
    id: 'departamento',
    name: 'Departamento',
    count: 1,
    capacityLabel: '2 a 3 personas',
    specs: [
      { icon: '🛏', text: '1 dormitorio matrimonial' },
      { icon: '🛋', text: '1 sofá-cama en living' },
      { icon: '🍳', text: 'Cocina completa equipada' },
      { icon: '🌡', text: 'Calefacción dual + Aire A/C' },
      { icon: '📺', text: 'Smart TV' },
      { icon: '🐾', text: 'Pet-friendly · Sin cargo' },
      { icon: '🔒', text: 'Caja de seguridad' },
    ],
    photos: [
      '/images/departamento/dpto1.jpg',
      '/images/departamento/dpto2.jpg',
    ],
    videos: [
      {
        src:   '/images/tour/departamento/dpto1.mp4',
        thumb: '/images/tour/departamento/dpto1_thm.mp4',
        label: 'Recorrido completo',
      },
    ],
  },
]
```

- [ ] **Step 2: Verificar que Vite no rompe al importar el archivo**

```bash
npm run build
```

Expected: build exitoso sin errores (el archivo no está importado aún, solo se verifica sintaxis).

- [ ] **Step 3: Commit**

```bash
git add src/data/cabins.js
git commit -m "feat: agregar datos de tipos de cabañas en src/data/cabins.js"
```

---

## Task 3: Crear `VideoModal.jsx` y sus estilos

**Files:**
- Create: `src/sections/Rooms/VideoModal.jsx`
- Create: `src/sections/Rooms/VideoModal.module.css`

- [ ] **Step 1: Crear `VideoModal.module.css`**

```css
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.88);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  backdrop-filter: blur(6px);
}

.box {
  background: #111;
  border: 1px solid rgba(200,151,58,.25);
  border-radius: 18px;
  overflow: hidden;
  width: min(92vw, 960px);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .9rem 1.2rem;
  border-bottom: 1px solid rgba(255,255,255,.07);
}

.title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.1rem;
  color: #fff;
  font-weight: 600;
}

.close {
  background: rgba(255,255,255,.08);
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background .15s;
}
.close:hover { background: rgba(255,255,255,.18); }

.videoWrap {
  aspect-ratio: 15/8;
  background: #000;
}
.video { width: 100%; height: 100%; display: block; }

.strip {
  display: flex;
  gap: .6rem;
  padding: .9rem 1.2rem;
  border-top: 1px solid rgba(255,255,255,.07);
  overflow-x: auto;
}

.stripBtn {
  background: rgba(255,255,255,.05);
  border: 1.5px solid rgba(200,151,58,.2);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  width: 130px;
  padding: 0;
  transition: border-color .15s;
  text-align: left;
}
.stripBtn.active { border-color: var(--gold); }
.stripBtn:hover { border-color: rgba(200,151,58,.6); }

.stripVideo {
  width: 100%;
  aspect-ratio: 15/8;
  display: block;
  object-fit: cover;
  pointer-events: none;
}

.stripLabel {
  display: block;
  font-size: .72rem;
  color: rgba(255,255,255,.65);
  padding: .3rem .5rem .4rem;
}

.hint {
  font-size: .78rem;
  color: rgba(255,255,255,.3);
}
```

- [ ] **Step 2: Crear `VideoModal.jsx`**

```jsx
import { useState, useEffect, useRef } from 'react'
import s from './VideoModal.module.css'

export default function VideoModal({ videos, initialIdx = 0, onClose }) {
  const [idx, setIdx] = useState(initialIdx)
  const videoRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [idx])

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.box} onClick={e => e.stopPropagation()}>
        <div className={s.header}>
          <h3 className={s.title}>{videos[idx].label}</h3>
          <button className={s.close} onClick={onClose} aria-label="Cerrar">✕</button>
        </div>
        <div className={s.videoWrap}>
          <video
            ref={videoRef}
            key={idx}
            src={videos[idx].src}
            controls
            playsInline
            className={s.video}
          />
        </div>
        {videos.length > 1 && (
          <div className={s.strip}>
            {videos.map((v, i) => (
              <button
                key={i}
                className={`${s.stripBtn} ${i === idx ? s.active : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Ver video: ${v.label}`}
              >
                <video src={v.thumb} muted playsInline className={s.stripVideo} />
                <span className={s.stripLabel}>{v.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <p className={s.hint}>Presioná Esc o hacé click fuera para cerrar</p>
    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/sections/Rooms/VideoModal.jsx src/sections/Rooms/VideoModal.module.css
git commit -m "feat: agregar componente VideoModal para tour virtual de cabañas"
```

---

## Task 4: Reescribir `Rooms.jsx`

**Files:**
- Modify: `src/sections/Rooms/Rooms.jsx` (reemplazar contenido completo)

- [ ] **Step 1: Reemplazar `Rooms.jsx` completo**

```jsx
import { useState, useRef, useEffect } from 'react'
import { CABINS } from '../../data/cabins'
import VideoModal from './VideoModal'
import s from './Rooms.module.css'

export default function Rooms() {
  const [modal, setModal] = useState(null)

  return (
    <section className={`section ${s.wrap}`} id="cabanas">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line" style={{ background: 'var(--gold)' }} />
          <p className="label" style={{ color: 'var(--gold)', marginBottom: '.5rem' }}>Nuestras unidades</p>
          <h2 className={s.h2}>5 Cabañas + 1 Departamento</h2>
          <p className={s.sub}>
            Todas las unidades cuentan con construcción Retak de alta eficiencia térmica,
            2 piletas (cubierta climatizada + al aire libre), y acceso directo al Parque Tornquist.
            Diseñadas para parejas, familias y grupos que buscan el mejor descanso en la Comarca.
          </p>
        </div>

        <div className={s.cards}>
          {CABINS.map(cabin => (
            <CabinCard
              key={cabin.id}
              cabin={cabin}
              onVideoOpen={(idx) => setModal({ videos: cabin.videos, initialIdx: idx })}
            />
          ))}
        </div>
      </div>

      {modal && (
        <VideoModal
          videos={modal.videos}
          initialIdx={modal.initialIdx}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  )
}

function CabinCard({ cabin, onVideoOpen }) {
  const [photoIdx, setPhotoIdx] = useState(0)
  const videoRefs = useRef([])
  const touchStartX = useRef(null)

  const prevPhoto = () => setPhotoIdx(i => (i - 1 + cabin.photos.length) % cabin.photos.length)
  const nextPhoto = () => setPhotoIdx(i => (i + 1) % cabin.photos.length)

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx > 50) prevPhoto()
    else if (dx < -50) nextPhoto()
    touchStartX.current = null
  }

  useEffect(() => {
    const observers = videoRefs.current.map((videoEl) => {
      if (!videoEl) return null
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) videoEl.play().catch(() => {})
          else videoEl.pause()
        },
        { threshold: 0.3 }
      )
      io.observe(videoEl)
      return io
    })
    return () => observers.forEach(io => io?.disconnect())
  }, [])

  const waMsg = encodeURIComponent(
    `Hola! Me interesa conocer la ${cabin.name} — quisiera saber disponibilidad y precios.`
  )

  return (
    <div className={`reveal ${s.card}`}>
      {/* Columna izquierda: galería */}
      <div
        className={s.colPhoto}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={cabin.photos[photoIdx]}
          alt={`${cabin.name} — foto ${photoIdx + 1}`}
          className={s.photo}
        />
        {cabin.photos.length > 1 && (
          <>
            <button className={`${s.arrow} ${s.arrowL}`} onClick={prevPhoto} aria-label="Foto anterior">‹</button>
            <button className={`${s.arrow} ${s.arrowR}`} onClick={nextPhoto} aria-label="Foto siguiente">›</button>
            <div className={s.dots}>
              {cabin.photos.map((_, i) => (
                <span
                  key={i}
                  className={i === photoIdx ? s.dotOn : s.dot}
                  onClick={() => setPhotoIdx(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Columna central: specs */}
      <div className={s.colBody}>
        <span className={s.badge}>
          {cabin.count} {cabin.count === 1 ? 'unidad disponible' : 'unidades disponibles'}
        </span>
        <h3 className={s.name}>{cabin.name}</h3>
        <p className={s.cap}>👥 {cabin.capacityLabel}</p>
        <div className={s.specs}>
          {cabin.specs.map((spec, i) => (
            <span key={i} className={s.pill}>{spec.icon} {spec.text}</span>
          ))}
        </div>
        <div className={s.cta}>
          <a
            href={`https://wa.me/5492914260589?text=${waMsg}`}
            target="_blank"
            rel="noopener"
            className={`btn btn-gold ${s.btnCta}`}
          >
            Consultar disponibilidad →
          </a>
        </div>
      </div>

      {/* Columna derecha: video preview */}
      <div className={s.colVideo}>
        <p className={s.vidLabel}>
          Tour virtual{cabin.videos.length > 1 ? ` · ${cabin.videos.length} videos` : ''}
        </p>
        {cabin.videos.map((vid, i) => (
          <div key={i} className={s.vidThumb} onClick={() => onVideoOpen(i)}>
            <video
              ref={el => { videoRefs.current[i] = el }}
              src={vid.thumb}
              muted
              loop
              playsInline
              preload="none"
              className={s.vidPreview}
            />
            <div className={s.playOverlay}>
              <div className={s.playBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <polygon points="6 4 20 12 6 20" />
                </svg>
              </div>
            </div>
            <span className={s.vidTitle}>{vid.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verificar que el build no tiene errores**

```bash
npm run build
```

Expected: build exitoso. Si hay errores de import, verificar que `src/data/cabins.js` existe y el path `../../data/cabins` es correcto desde `src/sections/Rooms/`.

- [ ] **Step 3: Commit**

```bash
git add src/sections/Rooms/Rooms.jsx
git commit -m "feat: reescribir Rooms con cards por tipo de cabaña y galería de fotos"
```

---

## Task 5: Reemplazar `Rooms.module.css`

**Files:**
- Modify: `src/sections/Rooms/Rooms.module.css` (reemplazar contenido completo)

- [ ] **Step 1: Reemplazar el CSS completo**

```css
.wrap { background: var(--dark); position: relative; }
.wrap::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(to right, transparent, var(--gold), transparent); }

.hdr { margin-bottom: 2.5rem; }
.h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.8rem,3.5vw,2.8rem); font-weight: 600; color: white; line-height: 1.15; }
.sub { color: rgba(255,255,255,.65); font-size: 1.05rem; max-width: 720px; line-height: 1.6; }

/* Lista de cards */
.cards { display: flex; flex-direction: column; gap: 1.5rem; max-width: 980px; margin: 0 auto; }

/* Card: 3 columnas */
.card { display: grid; grid-template-columns: 340px 1fr 220px; background: var(--charcoal); border: 1px solid rgba(200,151,58,.15); border-radius: 22px; overflow: hidden; min-height: 280px; }

/* Columna foto */
.colPhoto { position: relative; overflow: hidden; background: #181818; min-height: 280px; }
.photo { width: 100%; height: 100%; object-fit: cover; display: block; }
.arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,.5); border: none; color: white; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; font-size: 1.1rem; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px); transition: background .15s; z-index: 1; }
.arrow:hover { background: rgba(0,0,0,.75); }
.arrowL { left: 8px; }
.arrowR { right: 8px; }
.dots { position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); display: flex; gap: 5px; z-index: 1; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,.3); cursor: pointer; }
.dotOn { width: 7px; height: 7px; border-radius: 50%; background: var(--gold); cursor: pointer; }

/* Columna specs */
.colBody { padding: 1.6rem 1.4rem; display: flex; flex-direction: column; gap: .75rem; border-right: 1px solid rgba(255,255,255,.06); }
.badge { display: inline-block; background: rgba(200,151,58,.15); color: var(--gold); font-size: .72rem; font-weight: 700; padding: .28rem .75rem; border-radius: 999px; letter-spacing: .06em; text-transform: uppercase; width: fit-content; }
.name { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.55rem; color: #fff; font-weight: 600; line-height: 1.2; }
.cap { color: rgba(255,255,255,.55); font-size: .9rem; }
.specs { display: flex; flex-wrap: wrap; gap: .45rem; }
.pill { background: rgba(255,255,255,.06); border-radius: 8px; padding: .3rem .7rem; font-size: .82rem; color: rgba(255,255,255,.75); }
.cta { margin-top: auto; }
.btnCta { width: 100%; justify-content: center; }

/* Columna video */
.colVideo { padding: 1.2rem; display: flex; flex-direction: column; gap: .6rem; background: rgba(0,0,0,.15); }
.vidLabel { font-size: .72rem; color: var(--gold); text-transform: uppercase; letter-spacing: .08em; font-weight: 700; }
.vidThumb { position: relative; border-radius: 12px; overflow: hidden; cursor: pointer; background: #111; aspect-ratio: 15/8; border: 1.5px solid rgba(200,151,58,.2); transition: border-color .2s; }
.vidThumb:hover { border-color: var(--gold); }
.vidPreview { width: 100%; height: 100%; object-fit: cover; display: block; }
.playOverlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.2); transition: background .2s; }
.vidThumb:hover .playOverlay { background: rgba(0,0,0,.08); }
.playBtn { width: 40px; height: 40px; background: rgba(200,151,58,.85); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(0,0,0,.5); transition: transform .15s, background .15s; }
.vidThumb:hover .playBtn { transform: scale(1.1); background: var(--gold); }
.vidTitle { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,.85), transparent); padding: .5rem .6rem .4rem; font-size: .72rem; color: rgba(255,255,255,.8); }

/* Mobile */
@media(max-width: 768px) {
  .card { grid-template-columns: 1fr; }
  .colBody { border-right: none; border-top: 1px solid rgba(255,255,255,.06); }
  .colVideo { flex-direction: row; flex-wrap: wrap; gap: .5rem; }
  .vidThumb { flex: 1; min-width: 140px; }
}
```

- [ ] **Step 2: Levantar el servidor de desarrollo y verificar visualmente**

```bash
npm run dev
```

Abrir `http://localhost:5173` y navegar a la sección `#cabanas`. Verificar:
- Las 3 cards se ven en columnas correctas (foto | specs | video)
- El badge de cantidad aparece arriba del nombre
- Las pills de specs se muestran correctamente
- La columna de video tiene el placeholder `aspect-ratio: 15/8`
- En mobile (DevTools < 768px): las 3 columnas colapsan a 1

- [ ] **Step 3: Commit**

```bash
git add src/sections/Rooms/Rooms.module.css
git commit -m "feat: actualizar estilos Rooms para layout 3 columnas por tipo de cabaña"
```

---

## Task 6: Organizar archivos de assets en `public/`

**Files:**
- Create dirs: `public/images/simple/`, `public/images/duplex/`, `public/images/departamento/`
- Create dirs: `public/images/tour/simple/`, `public/images/tour/duplex/`, `public/images/tour/departamento/`

- [ ] **Step 1: Crear la estructura de carpetas**

```bash
mkdir -p public/images/simple
mkdir -p public/images/duplex
mkdir -p public/images/departamento
mkdir -p public/images/tour/simple
mkdir -p public/images/tour/duplex
mkdir -p public/images/tour/departamento
```

- [ ] **Step 2: Copiar los videos del departamento**

Los videos ya están en `dist\images\tour\departamento\`. Copiarlos a la ubicación correcta de Vite:

```bash
copy "dist\images\tour\departamento\dpto1.mp4"     "public\images\tour\departamento\dpto1.mp4"
copy "dist\images\tour\departamento\dpto1_thm.mp4" "public\images\tour\departamento\dpto1_thm.mp4"
```

Repetir el mismo proceso para los videos de `simple` y `duplex` cuando estén disponibles.

- [ ] **Step 3: Copiar las fotos de cada tipo**

Copiar las fotos de cada tipo de cabaña a sus carpetas respectivas en `public/images/`:
- Fotos de Cabaña Simple → `public/images/simple/simple1.jpg`, `simple2.jpg`, etc.
- Fotos de Cabaña Dúplex → `public/images/duplex/duplex1.jpg`, `duplex2.jpg`, etc.
- Fotos de Departamento → `public/images/departamento/dpto1.jpg`, `dpto2.jpg`, etc.

- [ ] **Step 4: Actualizar `cabins.js` con la lista real de fotos**

Una vez copiadas todas las fotos, abrir `src/data/cabins.js` y actualizar los arrays `photos` de cada cabaña con los nombres reales de archivo. Ejemplo si Cabaña Simple tiene 5 fotos:

```js
photos: [
  '/images/simple/simple1.jpg',
  '/images/simple/simple2.jpg',
  '/images/simple/simple3.jpg',
  '/images/simple/simple4.jpg',
  '/images/simple/simple5.jpg',
],
```

Igual para `videos[]` si hay más de un video por tipo.

- [ ] **Step 5: Verificar en el navegador con assets reales**

```bash
npm run dev
```

Verificar en `http://localhost:5173/#cabanas`:
- Las fotos cargan correctamente en cada card
- El video thumbnail autoplays al hacer scroll hasta la card
- Al hacer click en el video preview se abre el modal con el video full-res
- La Dúplex muestra 2 thumbs en el modal (strip inferior) si tiene 2 videos

- [ ] **Step 6: Commit final**

```bash
git add public/images/simple/ public/images/duplex/ public/images/departamento/ public/images/tour/ src/data/cabins.js
git commit -m "feat: agregar assets de cabañas y actualizar paths en cabins.js"
```

---

## Criterios de éxito

- [ ] Las 3 cards se renderizan correctamente: foto · specs · video preview
- [ ] La galería navega con flechas ‹ › y dots indicadores
- [ ] El video `_thm.mp4` autoplays (sin audio) cuando la card entra al viewport
- [ ] Click en el video → modal con video full-res y controles del browser
- [ ] Dúplex: 2 thumbs en el strip inferior del modal, cambian el video al clickear
- [ ] Layout colapsa a 1 columna en mobile < 768px
- [ ] Botón WhatsApp incluye el nombre del tipo de cabaña en el mensaje
- [ ] `npm run build` finaliza sin errores
