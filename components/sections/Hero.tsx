"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="RILS Graduation" 
          className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60 z-10" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 h-full flex flex-col justify-center pt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl"
        >
          {/* Accent Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-gold" />
            <span className="text-gold font-bold tracking-[0.3em] text-sm uppercase">
              Rahmaniyya International Leading School
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] tracking-tight mb-8">
            Where Academic Excellence <br />
            Meets <span className="text-gold">Values & Leadership</span>
          </h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-xl text-white/90 font-sans max-w-2xl mb-12 leading-relaxed"
          >
            Shaping future leaders through world-class education, moral strength, and career-focused training. From Grade 8 to Higher Secondary, every student is prepared for academic success and personal excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link 
              href="https://wa.me/919605270250" target="_blank" rel="noopener noreferrer"
              className="group bg-gold hover:bg-gold/90 text-primary px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
            >
              Apply for Admission
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link 
              href="#academics" 
              className="px-10 py-5 rounded-2xl font-bold text-white border-2 border-white/20 hover:bg-white/10 backdrop-blur-md transition-all text-center"
            >
              Explore Programs
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-white/40 text-xs tracking-[0.4em] uppercase font-bold">Scroll to Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>

    </section>
  );
}
