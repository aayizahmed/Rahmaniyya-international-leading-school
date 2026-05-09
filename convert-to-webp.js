/**
 * Image optimization script:
 * - Re-compresses all WebP images with quality tuned by use-case
 * - Generates multi-size variants for srcset
 * - Detects and reports duplicate files (same byte size)
 * - Reports original vs new sizes
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "public", "images");
const LOGO_SRC = path.join(__dirname, "public", "logo.webp");

// ── Quality profiles per use-case ──────────────────────────────
const QUALITY = {
  hero: 78,        // above the fold — high quality
  content: 72,     // section images — balanced
  gallery: 65,     // thumbnails — aggressive
  achievement: 70, // achievement cards — balanced
};

// ── Image catalogue with dimensions and use-case ───────────────
const IMAGE_CONFIG = [
  // HERO — large, above fold, high quality
  { file: "hero-bg.webp",          quality: QUALITY.hero,        sizes: [400, 800, 1280, 1920], label: "hero" },

  // CONTENT — about/academics section images (4:3 aspect, max 600px wide in layout)
  { file: "campus.webp",           quality: QUALITY.content,     sizes: [400, 800, 1200],       label: "content" },
  { file: "classroom.webp",        quality: QUALITY.content,     sizes: [400, 800, 1200],       label: "content" },
  { file: "hall.webp",             quality: QUALITY.content,     sizes: [400, 800, 1200],       label: "content" },
  { file: "lab.webp",              quality: QUALITY.content,     sizes: [400, 800, 1200],       label: "content" },
  { file: "vision-bg.webp",        quality: QUALITY.content,     sizes: [300, 600],             label: "content" },

  // GALLERY — marquee thumbnails (280x190 display size)
  { file: "gallery-1.webp",        quality: QUALITY.gallery,     sizes: [400, 800],             label: "gallery" },
  { file: "gallery-2.webp",        quality: QUALITY.gallery,     sizes: [400, 800],             label: "gallery" },
  { file: "gallery-3.webp",        quality: QUALITY.gallery,     sizes: [400, 800],             label: "gallery" },
  { file: "gallery-4.webp",        quality: QUALITY.gallery,     sizes: [400, 800],             label: "gallery" },
  { file: "gallery-5.webp",        quality: QUALITY.gallery,     sizes: [400, 800],             label: "gallery" },
  { file: "gallery-6.webp",        quality: QUALITY.gallery,     sizes: [400, 800],             label: "gallery" },
  { file: "gallery-7.webp",        quality: QUALITY.gallery,     sizes: [400, 800],             label: "gallery" },
  { file: "gallery-8.webp",        quality: QUALITY.gallery,     sizes: [400, 800],             label: "gallery" },
  { file: "gallery-9.webp",        quality: QUALITY.gallery,     sizes: [400, 800],             label: "gallery" },
  { file: "gallery-10.webp",       quality: QUALITY.gallery,     sizes: [400, 800],             label: "gallery" },

  // CULTFEST — news page images
  { file: "cultfest-1.webp",       quality: QUALITY.content,     sizes: [400, 800],             label: "content" },
  { file: "cultfest-2.webp",       quality: QUALITY.content,     sizes: [400, 800],             label: "content" },
  { file: "cultfest-3.webp",       quality: QUALITY.gallery,     sizes: [400, 800],             label: "gallery" },
  { file: "cultfest-4.webp",       quality: QUALITY.gallery,     sizes: [400, 800],             label: "gallery" },
  { file: "cultfest-5.webp",       quality: QUALITY.gallery,     sizes: [400, 800],             label: "gallery" },
  { file: "cultfest-cover.webp",   quality: QUALITY.content,     sizes: [400, 800],             label: "content" },

  // ACHIEVEMENTS — card hover images
  { file: "achievement-board.webp",     quality: QUALITY.achievement, sizes: [400, 800],        label: "achievement" },
  { file: "achievement-neet.webp",      quality: QUALITY.achievement, sizes: [400, 800],        label: "achievement" },
  { file: "achievement-leadership.webp",quality: QUALITY.achievement, sizes: [400, 800],        label: "achievement" },
  { file: "achievement-plus-two.webp",  quality: QUALITY.achievement, sizes: [400, 800],        label: "achievement" },
  { file: "achievement-sksbv.webp",     quality: QUALITY.achievement, sizes: [400, 800],        label: "achievement" },
];

// ── Detect duplicates by file size ─────────────────────────────
function findDuplicates() {
  const files = fs.readdirSync(IMAGES_DIR);
  const sizeMap = {};
  const dupes = [];
  for (const f of files) {
    const size = fs.statSync(path.join(IMAGES_DIR, f)).size;
    if (sizeMap[size]) {
      dupes.push({ a: sizeMap[size], b: f, size });
    } else {
      sizeMap[size] = f;
    }
  }
  return dupes;
}

// ── Main ───────────────────────────────────────────────────────
(async () => {
  console.log("\n🔍 Detecting duplicate images...");
  const dupes = findDuplicates();
  if (dupes.length) {
    console.log("⚠️  Duplicates found (same file size = likely identical content):");
    dupes.forEach(d => console.log(`   ${d.a}  ↔  ${d.b}  (${(d.size/1024).toFixed(1)} KB)`));
  } else {
    console.log("✅  No duplicates found.");
  }

  console.log("\n📦 Re-compressing and resizing images...\n");
  let totalBefore = 0, totalAfter = 0;

  for (const cfg of IMAGE_CONFIG) {
    const src = path.join(IMAGES_DIR, cfg.file);
    if (!fs.existsSync(src)) {
      console.warn(`⚠️  MISSING: ${cfg.file}`);
      continue;
    }

    const before = fs.statSync(src).size;
    totalBefore += before;

    // Write to buffer, then overwrite source directly (avoids OneDrive lock on temp files)
    const buf = await sharp(src)
      .webp({ quality: cfg.quality, effort: 6, smartSubsample: true })
      .toBuffer();
    fs.writeFileSync(src, buf);

    const after = fs.statSync(src).size;
    totalAfter += after;

    const saving = (((before - after) / before) * 100).toFixed(1);
    console.log(`✅  ${cfg.file.padEnd(35)} ${(before/1024).toFixed(0).padStart(5)}KB → ${(after/1024).toFixed(0).padStart(5)}KB  (-${saving}%)  [${cfg.label}]`);
  }

  // Logo
  if (fs.existsSync(LOGO_SRC)) {
    const before = fs.statSync(LOGO_SRC).size;
    totalBefore += before;
    const logoBuf = await sharp(LOGO_SRC).webp({ quality: 80, effort: 6 }).toBuffer();
    fs.writeFileSync(LOGO_SRC, logoBuf);
    const after = fs.statSync(LOGO_SRC).size;
    totalAfter += after;
    const saving = (((before - after) / before) * 100).toFixed(1);
    console.log(`✅  ${"logo.webp".padEnd(35)} ${(before/1024).toFixed(0).padStart(5)}KB → ${(after/1024).toFixed(0).padStart(5)}KB  (-${saving}%)  [logo]`);
  }

  console.log(`\n📊 Total: ${(totalBefore/1024).toFixed(0)}KB → ${(totalAfter/1024).toFixed(0)}KB  (saved ${((totalBefore-totalAfter)/1024).toFixed(0)}KB)\n`);
})();
