import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const SVG_PATH = path.resolve('public/favicon.svg');
const PUBLIC_DIR = path.resolve('public');

const TARGETS = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 }
];

async function generateFavicons() {
  try {
    console.log(`[INFO] Leyendo archivo SVG de origen: ${SVG_PATH}`);
    
    // Validar existencia de favicon.svg
    try {
      await fs.access(SVG_PATH);
    } catch {
      console.error(`[ERROR] No se encontró el archivo ${SVG_PATH}`);
      process.exit(1);
    }

    // Generar imágenes PNG
    for (const target of TARGETS) {
      const destPath = path.join(PUBLIC_DIR, target.name);
      console.log(`[GEN] Renderizando PNG ${target.size}x${target.size} -> ${target.name}`);
      
      await sharp(SVG_PATH)
        .resize(target.size, target.size)
        .png()
        .toFile(destPath);
    }

    // Generar archivo favicon.ico (48x48 px en contenedor ICO)
    const icoDestPath = path.join(PUBLIC_DIR, 'favicon.ico');
    console.log('[GEN] Renderizando favicon.ico (48x48 px)');
    
    const png48Buffer = await sharp(SVG_PATH)
      .resize(48, 48)
      .png()
      .toBuffer();

    const icoHeader = Buffer.alloc(22);
    
    // ICO Header
    icoHeader.writeUInt16LE(0, 0);   // Reservado (siempre 0)
    icoHeader.writeUInt16LE(1, 2);   // Tipo (1 para ICO)
    icoHeader.writeUInt16LE(1, 4);   // Cantidad de imágenes (1)

    // Directory Entry
    icoHeader.writeUInt8(48, 6);     // Ancho de imagen (48)
    icoHeader.writeUInt8(48, 7);     // Alto de imagen (48)
    icoHeader.writeUInt8(0, 8);      // Cantidad de colores (0 si >= 256)
    icoHeader.writeUInt8(0, 9);      // Reservado (0)
    icoHeader.writeUInt16LE(1, 10);  // Planos de color (1)
    icoHeader.writeUInt16LE(32, 12); // Bits por píxel (32)
    icoHeader.writeUInt32LE(png48Buffer.length, 14); // Tamaño del PNG en bytes
    icoHeader.writeUInt32LE(22, 18); // Offset de la imagen (22 bytes, después del Header + Directory Entry)

    const icoBuffer = Buffer.concat([icoHeader, png48Buffer]);
    await fs.writeFile(icoDestPath, icoBuffer);

    console.log('[OK] ¡Todos los favicons se han generado correctamente!');
  } catch (error) {
    console.error('[ERROR] Ocurrió un error al generar los favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
