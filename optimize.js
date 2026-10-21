// optimize.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directorio donde tienes tus imágenes originales (ajustálo según tu proyecto)
const inputDir = path.join(__dirname, 'src/assets/images'); 
// Directorio de salida para las imágenes optimizadas
const outputDir = path.join(__dirname, 'public/optimized');

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

async function processImages() {
    try {
        const files = fs.readdirSync(inputDir);
        
        for (const file of files) {
            const filePath = path.join(inputDir, file);
            const ext = path.extname(file).toLowerCase();
            const baseName = path.basename(file, ext);

            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                const image = sharp(filePath);
                
                // 1. Optimizar y guardar en formato WebP (Recomendado para web)
                await image
                    .webp({ quality: 80 }) // Calidad ajustable (0-100)
                    .toFile(path.join(outputDir, `${baseName}.webp`));

                // 2. Opcional: Optimizar el formato original sin perder calidad excesiva
                if (ext === '.png') {
                    await image.png({ compressionLevel: 9 }).toFile(path.join(outputDir, file));
                } else {
                    await image.jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(outputDir, file));
                }

                console.log(`✔️ Optimizado y convertido: ${file} -> WebP`);
            }
        }
        console.log('🚀 ¡Todas las imágenes se han optimizado con éxito!');
    } catch (error) {
        console.error('❌ Error al procesar las imágenes:', error);
    }
}

processImages();