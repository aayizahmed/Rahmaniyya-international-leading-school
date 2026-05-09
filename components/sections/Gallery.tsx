"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Keyboard, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// Local images only
const galleryImages = [
  "/images/gallery-1.webp",
  "/images/gallery-2.webp",
  "/images/gallery-3.webp",
  "/images/gallery-4.webp",
  "/images/gallery-5.webp",
  "/images/campus.webp",
  "/images/classroom.webp",
  "/images/hall.webp",
  "/images/lab.webp",
];


export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-gradient-to-br from-[#061220] via-[#0A1A30] to-[#040B14] min-h-[90vh] flex flex-col justify-center">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight">
            A year of RILS, <span className="italic text-[#D4AF37] font-light">in orbit.</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto group">
          
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: true,
            }}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            modules={[EffectCoverflow, Autoplay, Keyboard, Navigation]}
            className="w-full py-12"
          >
            {galleryImages.map((img, index) => (
              <SwiperSlide key={index} className="w-[200px] sm:w-[260px] md:w-[320px] aspect-[3/4] rounded-[24px] group/slide">
                <div className="w-full h-full relative transition-all duration-700 ease-in-out rounded-[24px] overflow-hidden opacity-60 blur-[3px] group-[.swiper-slide-active]/slide:opacity-100 group-[.swiper-slide-active]/slide:blur-0 group-[.swiper-slide-active]/slide:scale-105 group-[.swiper-slide-active]/slide:shadow-[0_0_50px_rgba(212,175,55,0.3)] group-[.swiper-slide-active]/slide:border-2 group-[.swiper-slide-active]/slide:border-[#D4AF37]/60 group-[.swiper-slide-active]/slide:z-20 border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061220]/80 via-transparent to-transparent z-10" />
                  <img 
                    src={img} 
                    alt={`Gallery ${index}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="swiper-button-prev-custom absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/10 transition-all opacity-0 group-hover:opacity-100 hidden md:flex hover:scale-110">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next-custom absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/10 transition-all opacity-0 group-hover:opacity-100 hidden md:flex hover:scale-110">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Helper Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mt-12 text-white/40 text-sm font-sans tracking-widest uppercase"
        >
          Drag • Arrow keys • Hover to pause
        </motion.p>
      </div>



    </section>
  );
}
