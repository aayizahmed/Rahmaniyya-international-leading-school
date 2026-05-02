"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Academics", href: "/#academics" },
  { name: "Activities", href: "/#gallery" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="#home" className="flex items-center gap-3 relative z-50">
            {/* Logo */}
            <div className="w-12 h-12 md:w-14 md:h-14 relative flex items-center justify-center">
              <img src="/logo.png" alt="RILS Logo" className="w-full h-full object-contain drop-shadow-md" />
            </div>
            <span
              className={`font-serif font-bold text-xl md:text-2xl transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-bg-light"
              }`}
            >
              RILS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isScrolled ? "text-bg-dark" : "text-bg-light"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="bg-[#D4AF37] hover:bg-[#C9973A] text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl inline-block uppercase tracking-wider"
            >
              Apply Now 2026–27
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-primary" : "text-white"} size={28} />
            ) : (
              <Menu className={isScrolled ? "text-primary" : "text-white"} size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-primary z-40 flex flex-col justify-center items-center"
          >
            {/* Islamic geometric pattern overly */}
            <div className="bg-pattern-islamic-gold pointer-events-none" />

            <div className="flex flex-col items-center space-y-8 z-10 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white font-serif text-3xl font-medium tracking-wide hover:text-gold transition-colors block text-center"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.3, duration: 0.4 }}
                className="w-full max-w-xs pt-8 border-t border-gold/30 flex justify-center"
              >
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-gold text-white w-full py-4 text-center rounded-full text-lg font-medium shadow-xl hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Apply Now 2026–27
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
