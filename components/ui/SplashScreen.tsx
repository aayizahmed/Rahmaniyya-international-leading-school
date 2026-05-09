"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function SplashScreen() {
  // Check sessionStorage immediately so we never flash the splash on return visits
  const [isVisible, setIsVisible] = useState(false);

  // Mouse interactivity
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-500, 500], [10, -10]);
  const rotateY = useTransform(springX, [-500, 500], [-10, 10]);

  const bgX = useTransform(springX, (val) => val * 0.1);
  const bgY = useTransform(springY, (val) => val * 0.1);

  useEffect(() => {
    // Only show splash once per browser session
    const alreadySeen = sessionStorage.getItem("rils_splash_seen");
    if (alreadySeen) {
      // Skip splash entirely — user is returning from another page
      return;
    }

    // First visit: mark as seen and show the splash
    sessionStorage.setItem("rils_splash_seen", "1");
    setIsVisible(true);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }, 3200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const word = "Rahmaniyya".split("");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1, 
            filter: "blur(20px)" 
          }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          onMouseMove={handleMouseMove}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF7F2] overflow-hidden"
          style={{ perspective: 1000 }}
        >
          {/* Subtle elegant background radial gradient tracking mouse */}
          <motion.div 
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)",
              x: bgX,
              y: bgY,
            }}
          />

          <motion.div 
            style={{ rotateX, rotateY }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Logo Morphing Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30, filter: "blur(20px)" }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: 0,
                filter: "blur(0px)"
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-48 h-48 md:w-64 md:h-64 mb-8 flex items-center justify-center drop-shadow-2xl"
            >
              <img 
                src="/logo.webp" 
                alt="Rahmaniyya Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Text Reveal Animation */}
            <motion.div className="flex flex-col items-center">
              <div className="flex overflow-hidden pb-2 mb-2">
                {word.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.8 + i * 0.05, 
                      ease: [0.33, 1, 0.68, 1] 
                    }}
                    className="font-serif text-4xl md:text-6xl font-bold text-[#4A2511] tracking-tight origin-bottom"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex items-center gap-4"
              >
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs md:text-sm font-medium">
                  International Leading School
                </p>
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </motion.div>
            </motion.div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
