const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const DIRS = [
  path.join(__dirname, 'public'),
  path.join(__dirname, 'public', 'images'),
];

const EXTS = ['.jpg', '.jpeg', '.png'];

async function convertDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!EXTS.includes(ext)) continue;

    const inputPath = path.join(dir, file);
    const baseName = path.basename(file, ext);
    const outputPath = path.join(dir, `${baseName}.webp`);

    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      const inSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
      const outSize = (fs.statSync(outputPath).size / 1024).toFixed(1);
      console.log(`✅  ${file}  (${inSize} KB)  →  ${baseName}.webp  (${outSize} KB)`);
    } catch (err) {
      console.error(`❌  ${file}: ${err.message}`);
    }
  }
}

(async () => {
  for (const dir of DIRS) {
    await convertDir(dir);
  }
  console.log('\nDone! You can now delete the original files if everything looks good.');
})();
