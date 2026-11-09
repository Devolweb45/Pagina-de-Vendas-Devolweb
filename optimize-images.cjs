const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'src', 'assets', 'images');

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);
  const pngFiles = files.filter(f => f.endsWith('.png') && f !== 'devolweb-removebg-preview.png');
  const jpgFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));

  console.log(`Found ${pngFiles.length} PNG files and ${jpgFiles.length} JPG files to optimize\n`);

  for (const file of pngFiles) {
    const inputPath = path.join(imagesDir, file);
    const outputName = file.replace('.png', '.webp');
    const outputPath = path.join(imagesDir, outputName);

    try {
      const inputStats = fs.statSync(inputPath);
      const inputSizeMB = (inputStats.size / (1024 * 1024)).toFixed(2);

      await sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const outputSizeMB = (outputStats.size / (1024 * 1024)).toFixed(2);

      console.log(`✅ ${file} (${inputSizeMB}MB) → ${outputName} (${outputSizeMB}MB)`);
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err.message);
    }
  }

  for (const file of jpgFiles) {
    const inputPath = path.join(imagesDir, file);
    const outputName = file.replace(/\.(jpg|jpeg)$/, '.webp');
    const outputPath = path.join(imagesDir, outputName);

    try {
      const inputStats = fs.statSync(inputPath);
      const inputSizeMB = (inputStats.size / (1024 * 1024)).toFixed(2);

      await sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const outputSizeMB = (outputStats.size / (1024 * 1024)).toFixed(2);

      console.log(`✅ ${file} (${inputSizeMB}MB) → ${outputName} (${outputSizeMB}MB)`);
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err.message);
    }
  }

  console.log('\n🎉 Done! All images optimized.');
}

optimizeImages();
