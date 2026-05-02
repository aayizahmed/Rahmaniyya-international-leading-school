"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Shield, HeartPulse, Cpu, Globe, MapPin, HeartHandshake, Users } from "lucide-react";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const programs = [
  {
    title: "Regular Schooling (Grade 8–10)",
    overview: "A balanced Kerala State Syllabus foundation that builds strong literacy, numeracy, and character through premium classroom coaching and guided mentorship.",
    icon: <BookOpen className="w-6 h-6" />,
    image: "/images/classroom.jpg"
  },

  {
    title: "Civil Service Coaching",
    overview: "Foundation to advanced IAS coaching designed to sharpen reasoning, ethics, and exam strategy for ambitious civil service aspirants.",
    icon: <Shield className="w-6 h-6" />,
    image: "/images/campus.jpg"
  },
  {
    title: "NEET Coaching",
    overview: "High-impact medical entrance preparation with concept mastery, continuous mock practice, and personal performance reviews.",
    icon: <HeartPulse className="w-6 h-6" />,
    image: "/images/gallery-8.jpg"
  },
  {
    title: "JEE / IIT Coaching",
    overview: "Engineering entrance training that balances advanced problem solving, speed, and accuracy to deliver top-tier competitive readiness.",
    icon: <Cpu className="w-6 h-6" />,
    image: "/images/lab.jpg"
  },

  {
    title: "Moral Studies & Madrasa Education",
    overview: "Integrated spiritual learning and ethical values that support academic growth, emotional resilience, and community leadership.",
    icon: <HeartHandshake className="w-6 h-6" />,
    image: "/images/hall.jpg"
  },
  {
    title: "Leadership & Personality Development",
    overview: "Personal excellence training for communication, discipline, confidence, and leadership across campus and beyond.",
    icon: <Users className="w-6 h-6" />,
    image: "/images/gallery-9.jpg"
  }
];

export default function Academics() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="academics" className="py-32 relative overflow-hidden bg-[#06140F]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#0D4F3C_0%,transparent_70%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#0D4F3C_0%,transparent_70%)] opacity-40" />
      </div>
      
      {/* Refined Gold Pattern */}
      <div className="absolute inset-0 bg-pattern-islamic-gold opacity-[0.04] pointer-events-none mix-blend-overlay" />
      
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        
        <div className="text-center md:text-left mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-2/3"
          >
            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-medium uppercase tracking-widest text-sm">Disciplic Mastery</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#FAF7F2] leading-tight">
              Elite Academic <br className="hidden md:block" /> Ecosystem
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/3 flex justify-center md:justify-end"
          >
            <p className="text-[#FAF7F2]/60 font-sans text-right hidden md:block">
              Explore our core pillars of excellence, <br/> crafted for the modern visionary.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1200}
                scale={1}
                transitionSpeed={2000}
                glareEnable={false}
                className="h-full"
              >
                <div 
                  className={`relative h-[450px] lg:h-[550px] w-full rounded-2xl overflow-hidden group cursor-pointer border border-[#FAF7F2]/10 bg-[#0A1A14] ${activeIndex === index ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  
                  {/* Background Image with slight scale on hover */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-60 group-[.is-active]:opacity-60" />
                    <img 
                      src={prog.image} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 group-[.is-active]:scale-110 filter brightness-75" 
                      alt={prog.title}
                    />
                  </div>
                  
                  {/* Dark overlay for text readability mapping to bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061A14] via-[#061A14]/60 to-transparent z-10" />

                  {/* Top Icon Layer */}
                  <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-gold border border-white/20">
                    {prog.icon}
                  </div>

                  {/* Glassmorphic content block that slides up on hover */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-12 group-hover:translate-y-0 group-[.is-active]:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="font-serif text-3xl text-white mb-3 group-hover:text-gold group-[.is-active]:text-gold transition-colors duration-300">
                      {prog.title}
                    </h3>
                    
                    {/* The text paragraph fades and slides in fully on hover visually */}
                    <div className="opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto group-[.is-active]:h-auto overflow-hidden">
                      <p className="text-white/70 font-sans text-sm leading-relaxed mb-6">
                        {prog.overview}
                      </p>
                    </div>

                    <div className="w-full h-[1px] bg-white/10 mb-5 relative overflow-hidden group-hover:bg-gold/30 group-[.is-active]:bg-gold/30 transition-colors duration-500">
                      <div className="absolute top-0 left-0 bottom-0 w-0 bg-gold group-hover:w-full group-[.is-active]:w-full transition-all duration-[1s] ease-out delay-200" />
                    </div>


                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
