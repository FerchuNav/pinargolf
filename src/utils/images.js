/**
 * CATÁLOGO DE IMÁGENES — Pinar Golf Cabañas Resort
 * ─────────────────────────────────────────────────
 * Las fotos están en /public/images/ organizadas por tema:
 *   /pileta/     → piscinas y jacuzzi
 *   /exterior/   → fachada, jardines, parque, nieve
 *   /interior/   → dormitorios, living, cocina, baños
 *   /amenities/  → quincho, parrilla, metegol
 *
 * Para cambiar una foto: reemplazá el archivo en la carpeta
 * correspondiente manteniendo el mismo nombre.
 * Para agregar fotos nuevas: copiá el archivo y agregá una
 * entrada en el array de abajo.
 */

export const IMAGES = {
  pileta: [
    { id:'pil-01', src:'/images/pileta/pileta-cubierta-01.webp',  alt:'Piscina cubierta climatizada con vista al jardín',          label:'Piscina Cubierta',    featured:false },
    { id:'pil-02', src:'/images/pileta/pileta-cubierta-02.webp',  alt:'Piscina cubierta con techo traslúcido',                     label:'Piscina Cubierta',    featured:false },
    { id:'pil-03', src:'/images/pileta/pileta-cubierta-03.webp',  alt:'Piscina cubierta — vista frontal con reposeras',            label:'Piscina Cubierta',    featured:false },
    { id:'pil-04', src:'/images/pileta/pileta-invierno-01.webp',  alt:'Piscina cubierta en invierno con flotadores',              label:'Piscina en Invierno', featured:false },
    { id:'pil-05', src:'/images/pileta/jacuzzi-01.webp',          alt:'Jacuzzi terapéutico exterior',                              label:'Jacuzzi',             featured:true  },
    { id:'pil-06', src:'/images/pileta/jacuzzi-02.webp',          alt:'Jacuzzi exterior detalle',                                  label:'Jacuzzi',             featured:false },
    { id:'pil-07', src:'/images/pileta/complejo-pileta.webp',     alt:'Vista del complejo con piscina y jacuzzi exterior',        label:'Complejo',            featured:true  },
    { id:'pil-08', src:'/images/pileta/pileta-exterior-solarium.jpg', alt:'Piscina exterior de temporada con solárium',             label:'Piscina Exterior',    featured:false },
    { id:'pil-cub-01', src:'/images/pileta/pileta-cubierta-actual-01.jpg', alt:'Piscina cubierta climatizada y ventanales al parque', label:'Piscina Cubierta', featured:true  },
    { id:'pil-cub-02', src:'/images/pileta/pileta-cubierta-actual-02.jpg', alt:'Piscina cubierta climatizada vista amplia',           label:'Piscina Cubierta', featured:true  },
    { id:'pil-cub-03', src:'/images/pileta/pileta-cubierta-actual-03.jpg', alt:'Ventanales y piscina cubierta climatizada',           label:'Piscina Cubierta', featured:true  },
    { id:'pil-ext-actual', src:'/images/pileta/pileta-exterior-actual.jpg', alt:'Piscina exterior de temporada con solárium y reposeras', label:'Piscina Exterior', featured:true },
    { id:'pil-35', src:'/images/pileta/Pinar-35.webp',            alt:'Piscina cubierta climatizada al atardecer',                 label:'Piscina Cubierta',    featured:false },
    { id:'pil-36', src:'/images/pileta/Pinar-36.webp',            alt:'Detalle de reposeras en piscina climatizada',               label:'Piscina Cubierta',    featured:false },
    { id:'pil-37', src:'/images/pileta/Pinar-37.webp',            alt:'Piscina exterior al atardecer',                             label:'Piscina Exterior',    featured:false },
    { id:'pil-38', src:'/images/pileta/Pinar-38.webp',            alt:'Iluminación nocturna en piscina exterior',                  label:'Piscina Exterior',    featured:false },
    { id:'pil-39', src:'/images/pileta/Pinar-39.webp',            alt:'Piscina exterior y parque lindante',                        label:'Piscina Exterior',    featured:false },
  ],
  exterior: [
    { id:'ext-video', src:'https://img.youtube.com/vi/DJUIrCyRtSA/maxresdefault.jpg', alt:'Video Tour Exterior de las Cabañas Pinar Golf Sierra', label:'Video Tour Exterior', featured:true, isVideo:true, youtubeId:'DJUIrCyRtSA' },
    { id:'ext-01', src:'/images/exterior/vista-aerea.webp',              alt:'Vista aérea del complejo con las sierras de fondo',          label:'Vista Aérea',          featured:true  },
    { id:'ext-02', src:'/images/exterior/fachada-estacionamiento.webp',  alt:'Fachada con estacionamiento cubierto',                      label:'Fachada',              featured:true  },
    { id:'ext-03', src:'/images/exterior/pergola-flores-02.webp',        alt:'Pérgola con sillones de madera y flores lilas',             label:'Pérgola',              featured:true  },
    { id:'ext-04', src:'/images/exterior/pergola-flores-03.webp',        alt:'Pérgola ángulo 3 — sillones y living exterior',             label:'Pérgola',              featured:false },
    { id:'ext-05', src:'/images/exterior/bicicletas-parque.webp',        alt:'Bicicletas gratuitas en el parque',                         label:'Bicicletas',           featured:false },
    { id:'ext-06', src:'/images/exterior/juegos-infantiles-01.webp',     alt:'Juegos infantiles de madera en el parque',                  label:'Parque Infantil',      featured:false },
    { id:'ext-juegos-actual', src:'/images/exterior/juegos-infantiles-actual.jpg', alt:'Juegos infantiles en el parque',                label:'Parque Infantil',      featured:true  },
    { id:'ext-08', src:'/images/exterior/picnic-arbol.webp',             alt:'Mesa de picnic bajo árbol centenario',                      label:'Parque',               featured:false },
    { id:'ext-09', src:'/images/exterior/entrada.webp',                  alt:'Entrada principal al complejo de cabañas Pinar Golf',       label:'Entrada',              featured:true  },
    { id:'ext-10', src:'/images/exterior/ventana-flores.webp',           alt:'Ventana con flores y vista al jardín',                      label:'Vista desde la cabaña',featured:false },
    { id:'ext-11', src:'/images/exterior/pileta.webp',                    alt:'Piscina al aire libre en el parque',                        label:'Pileta Exterior',      featured:true  },
    { id:'ext-12', src:'/images/exterior/juegos-infantiles.webp',         alt:'Juegos infantiles en el parque',                            label:'Parque Infantil',      featured:false },
    { id:'ext-13', src:'/images/exterior/juegos-exterior-01.webp',       alt:'Juegos exteriores de madera',                               label:'Juegos',               featured:false },
    { id:'ext-15', src:'/images/exterior/metegol-01.webp',               alt:'Metegol en el área de juegos exterior',                     label:'Metegol',              featured:false },
    { id:'ext-arbol', src:'/images/exterior/arbol1.webp',                alt:'Gran árbol centenario en el parque del complejo',            label:'Parque',               featured:false },
    { id:'ext-duplex-f', src:'/images/exterior/exterior-duplex.webp',    alt:'Fachada exterior de la cabaña Dúplex',                      label:'Fachada',              featured:false },
    { id:'ext-ext4', src:'/images/exterior/exterior4.webp',              alt:'Parque y exterior de las cabañas',                          label:'Exterior',             featured:false },
    { id:'ext-ext5', src:'/images/exterior/exterior5.webp',              alt:'Camino y arboleda entre cabañas',                           label:'Exterior',             featured:false },
    { id:'ext-fachada-pil', src:'/images/exterior/fachada-pileta.webp',  alt:'Fachada exterior del edificio de piscina climatizada',       label:'Piscina',              featured:false },
    { id:'ext-fac0', src:'/images/exterior/fachada0.webp',              alt:'Vista del complejo al amanecer',                            label:'Fachada',              featured:false },
    { id:'ext-fac1', src:'/images/exterior/fachada1.webp',              alt:'Detalle de balcones y exterior de cabañas',                 label:'Fachada',              featured:false },
    { id:'ext-fac2', src:'/images/exterior/fachada2.webp',              alt:'Fachada de ladrillo y madera del resort',                   label:'Fachada',              featured:false },
    { id:'ext-fac3', src:'/images/exterior/fachada3.webp',              alt:'Fachada de cabañas rodeadas de naturaleza',                 label:'Fachada',              featured:false },
    { id:'ext-fac4', src:'/images/exterior/fachada4.webp',              alt:'Acceso vehicular al complejo',                              label:'Fachada',              featured:false },
    { id:'ext-fac6', src:'/images/exterior/fachada6.webp',              alt:'Fachada iluminada por el sol de las cabañas',               label:'Fachada',              featured:false },
    { id:'ext-fac7', src:'/images/exterior/fachada7.webp',              alt:'Cabañas y frondosa arboleda del resort',                    label:'Fachada',              featured:false },
    { id:'ext-fac8', src:'/images/exterior/fachada8.webp',              alt:'Entrada y parque frontal del complejo',                     label:'Fachada',              featured:false },
    { id:'ext-juegos-ext02', src:'/images/exterior/juegos-exterior-02.webp', alt:'Espacio recreativo al aire libre',                    label:'Juegos',               featured:false },
    { id:'ext-juegos-inf02', src:'/images/exterior/juegos-infantiles-02.webp', alt:'Sector de juegos infantiles de madera',              label:'Parque Infantil',      featured:false },
    { id:'ext-nieve-02', src:'/images/exterior/nieve-02.webp',           alt:'El complejo cubierto de nieve en temporada invernal',        label:'Nieve',                featured:false },
    { id:'ext-pan-patio', src:'/images/exterior/panoramica-patio.webp',   alt:'Vista panorámica de los jardines centrales',                label:'Parque',               featured:false },
    { id:'ext-patio-c', src:'/images/exterior/patio.webp',               alt:'Área de descanso al aire libre en el jardín',               label:'Parque',               featured:false },
    { id:'ext-pil-afuera', src:'/images/exterior/pileta-afuera.webp',     alt:'Piscina exterior con deck y solárium',                      label:'Pileta Exterior',      featured:false },
    { id:'ext-pil-ext1', src:'/images/exterior/pileta-exterior1.webp',   alt:'Reposeras de madera junto a la piscina exterior',           label:'Solárium',             featured:false },
    { id:'ext-pil-ext2', src:'/images/exterior/pileta-exterior2.webp',   alt:'Piscina exterior de temporada bajo el sol',                 label:'Pileta Exterior',      featured:false },
    { id:'ext-sillones-p', src:'/images/exterior/sillones-exterior.webp', alt:'Sillones de madera en deck privado',                      label:'Deck',                 featured:false },
  ],
  interior: [
    { id:'int-01', src:'/images/interior/dormitorio-01.webp',    alt:'Dormitorio con cama doble y ventanal con vista a la piscina', label:'Dormitorio',      featured:true  },
    { id:'int-02', src:'/images/interior/living-01.webp',        alt:'Living con sillón negro, sillas rojas y ventanal',           label:'Living',          featured:true  },
    { id:'int-03', src:'/images/interior/living-comedor-01.webp',alt:'Living-comedor con mesa, cocina integrada y ventanales',     label:'Living-Comedor',  featured:true  },
    { id:'int-04', src:'/images/interior/living-02.webp',        alt:'Living con sillón y acceso al deck exterior',               label:'Living',          featured:false },
    { id:'int-05', src:'/images/interior/cocina-01.webp',        alt:'Cocina con barra americana, taburetes y muebles modernos',  label:'Cocina',          featured:true  },
    { id:'int-06', src:'/images/interior/bano-01.webp',          alt:'Baño moderno con toallero calefactor y porcelanato',        label:'Baño',            featured:true  },
    { id:'int-07', src:'/images/interior/fogon.webp',             alt:'Fogón interior — calefacción y ambiente',                   label:'Fogón',           featured:false },
  ],
  amenities: [
    { id:'ame-01', src:'/images/amenities/quincho-interior.webp', alt:'Quincho cerrado con mesas de madera y TV', label:'Quincho',       featured:true  },
    { id:'ame-02', src:'/images/amenities/parrilla-quincho.webp', alt:'Parrilla del quincho — fogón amplio',      label:'Parrilla',      featured:true  },
    { id:'ame-02-ind', src:'/images/amenities/parrilla-individual.jpg', alt:'Parrilla individual de la cabaña',   label:'Parrilla Individual', featured:true },
    { id:'ame-03', src:'/images/amenities/cocina-quincho.webp',   alt:'Cocina del quincho — mesada equipada',     label:'Cocina Quincho',featured:false },
    { id:'ame-04', src:'/images/amenities/metegol.webp',          alt:'Metegol en el quincho',                    label:'Metegol',       featured:false },
    { id:'ame-05', src:'/images/amenities/fachada-bicicletas.webp', alt:'Fachada con bicicletas del complejo',      label:'Fachada',       featured:false },
    { id:'ame-juegos-inf', src:'/images/amenities/juegos-infantiles.webp', alt:'Sector de recreación infantil en el parque', label:'Juegos Infantiles', featured:false },
    { id:'ame-juegos-inf2', src:'/images/amenities/juegos-infantiles2.webp', alt:'Zona de entretenimiento infantil con metegol', label:'Juegos Infantiles', featured:false },
    { id:'ame-parrilla-ind-webp', src:'/images/amenities/parrilla-individual.webp', alt:'Parrilla individual a leña o carbón', label:'Parrilla Individual', featured:false },
  ],
}

export const get = (cat, id) => IMAGES[cat]?.find(i => i.id === id)
export const featured = (cat) => IMAGES[cat]?.filter(i => i.featured) ?? []
