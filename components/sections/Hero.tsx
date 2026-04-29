"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0A1A14]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/hero-bg.jpg" 
          alt="RILS Graduation" 
          className="w-full h-full object-cover filter brightness-[0.6] sepia-[0.2] hue-rotate-[-10deg]"
        />
      </div>

      {/* Gradient Overlay for Depth and Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A14]/80 via-transparent to-[#0A1A14] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-center pt-20 lg:pt-24">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          {/* Accent Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-gold" />
            <span className="text-gold font-medium tracking-[0.2em] text-xs uppercase">
              Rahmaniyya International Leading School
            </span>
          </motion.div>

          {/* Strong Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-bg-light leading-[1.1] tracking-tight mb-6">
            Where Academic Excellence <br />
            Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#F3E5AB]">Values & Leadership</span>
          </h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base md:text-lg text-bg-light/80 font-sans max-w-xl mb-8 leading-relaxed"
          >
            Shaping future leaders through world-class education, moral strength, and career-focused training. From Grade 8 to Higher Secondary, every student is prepared for academic success and personal excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link href="#admissions" className="group relative overflow-hidden bg-gold text-[#0A1A14] px-8 py-4 rounded-full font-sans font-semibold transition-all hover:scale-105 flex items-center justify-center gap-3">
              <span className="relative z-10">Apply for Admission</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link href="#academics" className="flex items-center justify-center px-8 py-4 rounded-full font-sans font-semibold text-bg-light border border-bg-light/20 hover:bg-bg-light/10 backdrop-blur-sm transition-all focus:ring-2 focus:ring-gold">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-bg-light/50 text-xs tracking-widest uppercase font-sans">Scroll to Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </motion.div>

    </section>
  );
}
