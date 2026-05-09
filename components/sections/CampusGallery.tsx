"use client";

import { motion } from "framer-motion";

const galleryImages = [
  "/images/gallery-1.webp",
  "/images/gallery-2.webp",
  "/images/gallery-3.webp",
  "/images/gallery-4.webp",
  "/images/gallery-5.webp",
  "/images/gallery-6.webp",
  "/images/gallery-7.webp",
  "/images/gallery-8.webp",
  "/images/gallery-9.webp",
  "/images/gallery-10.webp",
  "/images/campus.webp",
  "/images/classroom.webp",
  "/images/hall.webp",
  "/images/lab.webp",
];

// Split into two rows and triple-duplicate for seamless infinite loop
const half = Math.ceil(galleryImages.length / 2);
const row1Images = galleryImages.slice(0, half);
const row2Images = galleryImages.slice(half);

// Triple-duplicate so there's always content visible during scroll
const row1 = [...row1Images, ...row1Images, ...row1Images];
const row2 = [...row2Images, ...row2Images, ...row2Images];

function MarqueeRow({
  images,
  reverse = false,
  speed = 35,
}: {
  images: string[];
  reverse?: boolean;
  speed?: number;
}) {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{
          width: "max-content",
          ["--marquee-duration" as string]: `${speed}s`,
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-[280px] h-[190px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-black/5 group cursor-pointer"
          >
            <img
              src={img}
              alt={`Gallery ${(idx % (images.length / 3)) + 1}`}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CampusGallery() {
  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-4 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold font-medium uppercase tracking-widest text-sm">Campus Life</span>
            <div className="h-[1px] w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6">
            Rahmaniyya{" "}
            <span className="italic font-light text-gold">Gallery</span>
          </h2>
          <p className="text-primary/60 font-sans max-w-2xl mx-auto text-lg leading-relaxed">
            From mentorship and immersive learning to hands-on practice and real-world exposure — every step is designed to shape confident, future-ready achievers.
          </p>
        </motion.div>
      </div>

      {/* Two-Row Marquee Slideshow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        {/* Row 1 — scrolls left */}
        <MarqueeRow images={row1} reverse={false} speed={40} />

        {/* Row 2 — scrolls right */}
        <MarqueeRow images={row2} reverse={true} speed={35} />
      </motion.div>
    </section>
  );
}
