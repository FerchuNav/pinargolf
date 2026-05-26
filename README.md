# Pinar Golf Cabañas Resort — Sitio Web

React + Vite · Listo para Vercel

## Estructura del proyecto

```
pinar-golf/
├── public/
│   └── images/
│       ├── simple/           ← fotos Cabaña Simple (simple103.jpg, etc.)
│       ├── duplex/           ← fotos Cabaña Dúplex (duplex107.jpg, etc.)
│       ├── departamento/     ← fotos Departamento (dpto96.jpg, etc.)
│       ├── pileta/           ← fotos de piscinas y jacuzzi
│       ├── exterior/         ← fachada, jardines, nieve, parque
│       ├── interior/         ← dormitorios, living, cocina, baños
│       ├── amenities/        ← quincho, parrilla, metegol
│       ├── tour/
│       │   ├── simple/       ← videos tour cabaña simple (simple1.mp4, simple1_thm.mp4…)
│       │   ├── duplex/       ← videos tour cabaña dúplex
│       │   └── departamento/ ← videos tour departamento
│       └── hero-video.mp4
├── src/
│   ├── data/
│   │   └── cabins.js         ← ⭐ CATÁLOGO DE CABAÑAS (fotos, specs y videos por tipo)
│   ├── sections/             ← cada sección de la página (independiente)
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── Gallery/
│   │   ├── Rooms/            ← 3 cards por tipo + VideoModal
│   │   │   ├── Rooms.jsx
│   │   │   ├── Rooms.module.css
│   │   │   ├── VideoModal.jsx
│   │   │   └── VideoModal.module.css
│   │   ├── Amenities/
│   │   ├── WinterBanner/
│   │   ├── Comparison/
│   │   ├── Reviews/
│   │   ├── Booking/
│   │   └── Location/
│   ├── components/           ← componentes reutilizables
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── WhatsAppFloat/
│   ├── utils/
│   │   └── images.js         ← catálogo de fotos generales (galería, exterior, etc.)
│   └── styles/
│       └── global.css
```

## Unidades disponibles

| Tipo | Unidades | Capacidad |
|------|----------|-----------|
| Cabaña Simple | 3 | Hasta 4 personas |
| Cabaña Dúplex | 2 | Hasta 6 personas |
| Departamento | 1 | 2 a 3 personas |

## Cómo agregar fotos a una cabaña

1. Copiá la foto a `/public/images/<tipo>/` (ej: `/public/images/simple/simple107.jpg`)
2. Abrí `src/data/cabins.js`
3. Agregá la ruta al array `photos` del tipo correspondiente

## Cómo agregar un video tour

Los videos van en pares: versión completa + versión reducida para preview.

1. Copiá los archivos a `/public/images/tour/<tipo>/`
   - `simple2.mp4` — video completo
   - `simple2_thm.mp4` — versión reducida (para preview en página)
2. Abrí `src/data/cabins.js`
3. Agregá un objeto al array `videos` del tipo:

```js
{ src: '/images/tour/simple/simple2.mp4', thumb: '/images/tour/simple/simple2_thm.mp4', label: 'Recorrido completo — parte 2' }
```

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo en localhost:5173
npm run build     # build para producción
```

## Deploy en Vercel

1. Subí la carpeta a GitHub
2. En vercel.com → New Project → importá el repo
3. Framework: Vite (se detecta automáticamente)
4. Deploy → listo
