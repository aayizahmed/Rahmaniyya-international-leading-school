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
      <div className="max-w-[1200px] mx-auto px-4 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6">
            Rahmaniyya <span className="font-script text-gold block md:inline mt-2 md:mt-0 italic font-light">Gallery</span>
          </h2>
          <p className="text-primary/60 font-sans max-w-2xl mx-auto text-lg leading-relaxed">
            From mentorship and immersive learning to hands-on practice and real-world exposure — every step is designed to shape confident, future-ready achievers.
          </p>
        </motion.div>
      </div>

      {/* Masonry-style Grid */}
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative group rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
