"use client";

import { motion } from "framer-motion";
import { Camera, Video, Globe, ArrowRight, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  {
    platform: "Instagram",
    handle: "@rahmaniyyainternational",
    icon: <FaInstagram className="w-8 h-8" />,
    color: "from-pink-500 via-red-500 to-yellow-500",
    link: "https://www.instagram.com/rahmaniyyainternational/",
    img: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop"
  },
  {
    platform: "WhatsApp",
    handle: "+91 9605270250",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-400",
    link: "https://wa.me/919605270250",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
  }
];

export default function SocialConnect() {
  return (
    <section id="social" className="py-32 bg-[#0A1A14] relative overflow-hidden">
      {/* Background abstract layout */}
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-gradient-to-bl from-gold/10 to-transparent blur-[80px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
           >
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-medium uppercase tracking-widest text-sm">Join the Community</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#FAF7F2] leading-tight">
              Connect With Us
            </h2>
           </motion.div>
           
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-[#FAF7F2]/60 font-sans md:w-1/3 md:text-right hidden md:block"
           >
             Follow our journey, witness student life, and stay updated with the latest events at RILS.
           </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-12">
          {socialLinks.map((social, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <Link href={social.link} target="_blank" className="block relative h-[400px] rounded-3xl overflow-hidden group">
                 {/* Background Imagery */}
                 <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#061B14]/80 group-hover:bg-[#061B14]/40 transition-colors duration-700 z-10 mix-blend-multiply" />
                    <img 
                      src={social.img} 
                      alt={social.platform} 
                      className="w-full h-full object-cover filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                    />
                 </div>
                 
                 {/* Social Platform Gradient overlay mapping */}
                 <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                 
                  {/* Content */}
                  <div className="relative z-20 h-full flex flex-col justify-between p-8">
                    <div className="flex justify-between items-start">
                      <div className="bg-white/10 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center text-white border border-white/20 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500">
                        {social.icon}
                      </div>
                      <div className="w-10 h-10 relative opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                        <img src="/logo.webp" alt="RILS Logo" className="w-full h-full object-contain filter brightness-0 invert" />
                      </div>
                    </div>

                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-serif text-3xl font-bold text-white mb-2">{social.platform}</h3>
                      <p className="font-sans text-white/80 font-medium tracking-wide">{social.handle}</p>
                      
                      <div className="mt-6 flex items-center justify-between text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                        <span className="text-sm font-semibold uppercase tracking-widest">Follow Now</span>
                        <ArrowRight className="w-5 h-5 -translate-x-4 group-hover:translate-x-0 transition-transform duration-700" />
                      </div>
                    </div>
                 </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
