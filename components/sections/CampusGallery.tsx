"use client";

import { motion } from "framer-motion";

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
  "/images/gallery-9.jpg",
  "/images/gallery-10.jpg",
  "/images/campus.jpg",
  "/images/classroom.jpg",
  "/images/hall.jpg",
  "/images/lab.jpg",
];

// Split evenly across two rows, duplicate for seamless loop
const half = Math.ceil(galleryImages.length / 2);
const row1 = [...galleryImages.slice(0, half), ...galleryImages.slice(0, half)];
const row2 = [...galleryImages.slice(half),    ...galleryImages.slice(half)];

function MarqueeRow({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden w-full">
      <div
        className={`flex gap-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ width: "max-content" }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-[260px] h-[180px] flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-black/5 group"
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
      <div className="max-w-[1200px] mx-auto px-4 text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="px-6 py-2 border border-primary/30 rounded-full text-primary text-sm font-medium tracking-wide bg-white shadow-sm">
            Our Gallery
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-5"
        >
          Rahmaniyya <span className="text-gold">Gallery</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary/60 font-sans max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          From mentorship and immersive learning to hands-on practice and
          real-world exposure — every step is designed to shape confident,
          future-ready achievers.
        </motion.p>
      </div>

      {/* Two marquee rows */}
      <div className="flex flex-col gap-4">
        <MarqueeRow images={row1} />
        <MarqueeRow images={row2} reverse />
      </div>
    </section>
  );
}
