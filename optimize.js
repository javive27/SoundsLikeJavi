import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public/images');

async function processImages() {
    try {
        if (!fs.existsSync(inputDir)) {
            console.error(`❌ El directorio ${inputDir} no existe.`);
            return;
        }

        const files = fs.readdirSync(inputDir);
        
        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            const baseName = path.basename(file, ext);

            if (['.jpg', '.jpeg', '.png', '.heic', '.JPG'].includes(ext)) {
                const filePath = path.join(inputDir, file);
                const outputFilePath = path.join(inputDir, `${baseName}.webp`);

                try {
                    // Leer, comprimir al 80% de calidad y guardar como WebP
                    await sharp(filePath)
                        .webp({ quality: 80 })
                        .toFile(outputFilePath);

                    console.log(`✔️ Convertido y optimizado: ${file} -> ${baseName}.webp`);

                    // Reemplazar el original eliminándolo
                    if (filePath !== outputFilePath) {
                        fs.unlinkSync(filePath);
                        console.log(`🗑️ Original eliminado: ${file}`);
                    }
                } catch (err) {
                    console.error(`❌ Error procesando ${file}:`, err.message);
                }
            }
        }
        console.log('🚀 ¡Todas las imágenes se han optimizado a WebP y reemplazado con éxito!');
    } catch (error) {
        console.error('❌ Error general al procesar las imágenes:', error);
    }
}

processImages();
