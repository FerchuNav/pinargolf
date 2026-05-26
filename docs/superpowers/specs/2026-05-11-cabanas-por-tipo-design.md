# Diseño: Sección Cabañas por Tipo

**Fecha:** 2026-05-11  
**Proyecto:** Pinar Golf Cabañas Resort  
**Estado:** Aprobado

---

## Objetivo

Reemplazar la sección Rooms actual (lista genérica de amenities) por una sección que muestra los 3 tipos de unidades de forma separada, con galería de fotos, especificaciones y video tour virtual para cada tipo.

---

## Tipos de unidades

| Tipo | Cantidad | Capacidad | Dormitorios |
|------|----------|-----------|-------------|
| Cabaña Simple | 3 | Hasta 4 personas | 1 matrimonial + 2 sofá-camas |
| Cabaña Dúplex | 2 | Hasta 6 personas | 1 matrimonial + 2 individuales + 2 sofá-camas |
| Departamento | 1 | 2 a 3 personas | 1 matrimonial + 1 sofá-cama |

---

## Archivos de assets

### Fotos
Organizadas por tipo en `public/images/`:
- `public/images/simple/simple1.jpg`, `simple2.jpg`, etc.
- `public/images/duplex/duplex1.jpg`, `duplex2.jpg`, etc.
- `public/images/departamento/dpto1.jpg`, `dpto2.jpg`, etc.

### Videos
Organizados por tipo en `public/images/tour/`:
- `public/images/tour/simple/simple1.mp4` — full-res
- `public/images/tour/simple/simple1_thm.mp4` — thumbnail liviano (baja resolución)
- `public/images/tour/duplex/duplex1.mp4`, `duplex1_thm.mp4`
- `public/images/tour/duplex/duplex2.mp4`, `duplex2_thm.mp4` (2 videos)
- `public/images/tour/departamento/dpto1.mp4`, `dpto1_thm.mp4`

Resolución full-res: 1920×1024 (ratio 15:8).

---

## Arquitectura

### Archivos nuevos / modificados

```
src/
  data/
    cabins.js               ← NUEVO: datos de los 3 tipos
  sections/
    Rooms/
      Rooms.jsx             ← REEMPLAZAR: layout horizontal con 3 cards
      Rooms.module.css      ← ACTUALIZAR: estilos del nuevo layout
      VideoModal.jsx        ← NUEVO: modal de video tour
      VideoModal.module.css ← NUEVO: estilos del modal
public/
  images/
    simple/                 ← fotos cabaña simple
    duplex/                 ← fotos cabaña dúplex
    departamento/           ← fotos departamento
    tour/
      simple/               ← videos cabaña simple
      duplex/               ← videos cabaña dúplex
      departamento/         ← videos departamento
```

---

## Estructura de datos (`src/data/cabins.js`)

```js
export const CABINS = [
  {
    id: 'simple',
    name: 'Cabaña Simple',
    count: 3,
    capacity: 4,
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
      { src: '/images/tour/simple/simple1.mp4', thumb: '/images/tour/simple/simple1_thm.mp4', label: 'Recorrido completo' },
    ],
  },
  {
    id: 'duplex',
    name: 'Cabaña Dúplex',
    count: 2,
    capacity: 6,
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
      { src: '/images/tour/duplex/duplex1.mp4', thumb: '/images/tour/duplex/duplex1_thm.mp4', label: 'Planta baja — living y cocina' },
      { src: '/images/tour/duplex/duplex2.mp4', thumb: '/images/tour/duplex/duplex2_thm.mp4', label: 'Planta alta — dormitorios' },
    ],
  },
  {
    id: 'departamento',
    name: 'Departamento',
    count: 1,
    capacity: 3,
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
      { src: '/images/tour/departamento/dpto1.mp4', thumb: '/images/tour/departamento/dpto1_thm.mp4', label: 'Recorrido completo' },
    ],
  },
]
```

---

## Layout de cada card

Card de 3 columnas horizontales:

```
┌──────────────┬─────────────────────────┬──────────────┐
│  Galería     │  Badge "N unidades"     │  Tour virtual│
│  de fotos    │  Nombre tipo            │  [video thm] │
│  [foto]      │  Capacidad              │  [video thm] │
│  ‹  dots  ›  │  Specs (pills)          │  (si hay 2)  │
│              │  [Btn Consultar]        │              │
└──────────────┴─────────────────────────┴──────────────┘
```

Proporciones: `340px | 1fr | 220px`. Máximo ancho de la sección: 980px centrado.

En mobile (< 768px): las 3 columnas colapsan a 1 columna apilada verticalmente (foto → specs → video).

---

## Comportamiento de la galería de fotos

- Flechas ‹ › para navegar entre fotos (estado local `photoIdx` por card)
- Dots indicadores debajo (dot activo = foto actual)
- En mobile: soporte swipe básico con touchstart/touchend

---

## Comportamiento del video preview

- Elemento `<video muted loop playsInline preload="none">` con el `_thm.mp4`
- **Autoplay por IntersectionObserver**: cuando la card entra al 30% del viewport → `.play()`. Al salir → `.pause()`. Solo un video corre a la vez por diseño (IntersectionObserver individual por card).
- Overlay con botón ▶ semitransparente siempre visible encima del video
- Click en el área de video → abre `VideoModal` con el video correspondiente

---

## VideoModal

- Overlay oscuro con `backdrop-filter: blur(6px)`, cierra con Esc o click fuera
- Video full-res (`sin _thm`) en ratio `aspect-ratio: 15/8` (1920×1024)
- Controles nativos del browser (`controls`)
- Si `videos.length > 1`: fila de thumbnails clickeables debajo para cambiar de video
  - Al cambiar: pausa el video actual, carga el nuevo
- Recibe props: `videos[]`, `initialIdx`, `onClose`

---

## WhatsApp CTA

El botón "Consultar disponibilidad" en cada card abre WhatsApp con un mensaje que incluye el tipo de unidad:

```
https://wa.me/5492914260589?text=Hola!%20Me%20interesa%20la%20Cabaña%20Simple...
```

El mensaje se construye dinámicamente según el `name` de la cabaña.

---

## Lo que NO cambia

- El header de la sección (título "Nuestras unidades", subtítulo con Retak y 2 piletas)
- Los amenities compartidos (WiFi, estacionamiento, piletas) siguen en `Features.jsx`
- El orden de secciones en `App.jsx` no cambia

---

## Criterios de éxito

1. Las 3 cards se renderizan correctamente con fotos, specs y video preview
2. La galería de fotos navega con flechas y dots
3. El video thumbnail autoplays al entrar en viewport y se pausa al salir
4. El modal abre con el video full-res y cierra con Esc/click fuera
5. La Dúplex muestra 2 videos en el preview y 2 thumbnails en el modal
6. El layout colapsa correctamente en mobile
7. El botón de WhatsApp incluye el nombre del tipo de cabaña
