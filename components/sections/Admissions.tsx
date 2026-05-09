"use client";

import { motion } from "framer-motion";
import { Download, MessagesSquare, Phone, Mail, Award, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export default function Admissions() {
  return (
    <section id="admissions" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061A14] via-[#0A1A14] to-[#113125] z-0" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-islamic-gold opacity-[0.05] pointer-events-none z-10" />

      <div className="max-w-[1200px] mx-auto px-4 relative z-20 text-center">
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 mb-6 relative"
            >
              <img src="/logo.png" alt="RILS Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(201,151,58,0.3)]" />
            </motion.div>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="px-6 py-2 border border-gold/30 rounded-full text-gold text-xs font-bold uppercase tracking-[0.2em] bg-gold/5 mb-8 inline-block"
            >
              Live News Report
            </motion.span>
            
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAF7F2] mb-10 tracking-tight leading-[0.95]">
              RILS Live: <br className="hidden md:block" />
              School <span className="text-gold">Updates.</span>
            </h2>

            <Link 
              href="https://wa.me/919605270250" target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gold hover:bg-[#F3E5AB] text-[#061A14] px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 shadow-xl"
            >
              Apply Now
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Link>
          </div>

          <p className="text-lg text-[#FAF7F2]/70 font-sans max-w-2xl mx-auto mb-16 leading-relaxed">
            Stay connected with our vibrant campus life. From academic achievements to cultural celebrations, follow our journey in real-time.
          </p>

          {/* Instagram Feed Widget */}
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md p-4 md:p-8 min-h-[600px] flex flex-col items-center justify-center">
            <div className="elfsight-app-a83d7368-2a47-4664-9937-20d1dc3d0d75 w-full" data-elfsight-app-lazy></div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
