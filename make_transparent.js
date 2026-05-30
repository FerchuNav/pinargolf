import sharp from 'sharp';

const inputPath = './public/images/Logo_Pinar Golf.png.png';
const outputPath = './public/images/Logo_Pinar Golf.png.png';

async function processImage() {
  try {
    console.log('Procesando imagen con sharp en la raíz del proyecto...');
    
    // Cargar la imagen y obtener su buffer en crudo RGBA
    const { data, info } = await sharp(inputPath)
      .ensureAlpha() 
      .raw()
      .toBuffer({ resolveWithObject: true });

    console.log(`Imagen leída: ${info.width}x${info.height}, canales: ${info.channels}`);

    // Modificar los píxeles: si es blanco o casi blanco (R > 240, G > 240, B > 240), hacerlo transparente
    let transparentPixelsCount = 0;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Chequear si es blanco con un umbral de tolerancia
      if (r > 240 && g > 240 && b > 240) {
        data[i + 3] = 0; // Transparencia total
        transparentPixelsCount++;
      }
    }

    console.log(`Se hicieron transparentes ${transparentPixelsCount} píxeles de un total de ${data.length / 4}.`);

    // Guardar la nueva imagen PNG procesada
    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
      .png()
      .toFile(outputPath);

    console.log('¡Procesamiento finalizado con éxito! Logo guardado.');
  } catch (error) {
    console.error('Error al procesar la imagen:', error);
  }
}

processImage();
