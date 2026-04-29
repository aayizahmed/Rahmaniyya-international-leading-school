"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ahmad Raza",
    role: "Alumni, Class of 2023",
    image: "https://i.pravatar.cc/150?img=11",
    quote: "RILS gave me the perfect balance of modern scientific education and deep Islamic values. The leadership programs transformed my confidence.",
  },
  {
    name: "Fatima Zainab",
    role: "Parent of Class +1 Student",
    image: "https://i.pravatar.cc/150?img=5",
    quote: "As a parent, what I appreciate most is the safe, co-educational environment and the dedicated teachers who focus on character building.",
  },
  {
    name: "Mohammed Bilal",
    role: "Student, Class 10",
    image: "https://i.pravatar.cc/150?img=12",
    quote: "The computer academy courses here are excellent. We get to learn the latest technologies while staying grounded in our moral studies.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#0A1A14] relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold font-medium uppercase tracking-widest text-sm">Voices of Excellence</span>
            <div className="h-[1px] w-12 bg-gold" />
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            className="pb-20"
          >
            {testimonials.map((test, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center px-4 md:px-12">
                  <span className="font-serif text-[#FAF7F2]/10 text-8xl md:text-[12rem] leading-none absolute top-0 -translate-y-12 select-none pointer-events-none">
                    "
                  </span>
                  
                  <p className="font-serif text-3xl md:text-5xl text-[#FAF7F2] leading-tight md:leading-snug mb-12 max-w-4xl relative z-10 font-normal">
                    {test.quote}
                  </p>
                  
                  <div className="flex flex-col items-center gap-4 mt-8">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold p-1 shadow-lg shadow-gold/20">
                      <img src={test.image} alt={test.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-lg text-[#FAF7F2] tracking-wide uppercase">{test.name}</h4>
                      <p className="text-sm text-gold font-medium tracking-wider">{test.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
