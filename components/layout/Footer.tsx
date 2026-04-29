"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white relative pt-20 pb-10 overflow-hidden">
      
      {/* Background pattern */}
      <div className="bg-pattern-islamic-gold pointer-events-none absolute inset-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Tagline */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 relative flex items-center justify-center">
                <img src="/logo.png" alt="RILS Logo" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-gold">RILS</h3>
                <p className="text-xs text-sand/80 uppercase tracking-widest mt-1">
                  Katameri, Vatakara
                </p>
              </div>
            </div>

            <p className="text-sand/90 italic text-lg">
              "Excellence in Education · Integrity in Character"
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              <Link
                href="https://www.instagram.com/rahmaniyyainternational/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-white transition"
              >
                <FaInstagram size={20} />
              </Link>



              <Link
                href="https://wa.me/919605270250"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-white transition"
              >
                <MessageCircle size={20} />
              </Link>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sand/80">
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#academics">Academics</Link></li>
              <li><Link href="#gallery">Campus Gallery</Link></li>
              <li><Link href="#contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-xl font-semibold text-gold mb-6">
              Information
            </h4>
            <ul className="space-y-3 text-sand/80">
              <li><Link href="#about">Vision & Mission</Link></li>
              <li><Link href="#academics">Kerala State Syllabus</Link></li>
              <li><Link href="#academics">Moral Studies</Link></li>
              <li><Link href="#admissions">Admissions 2026-27</Link></li>
              <li><Link href="#contact">School Policies</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-gold mb-6">
              Contact
            </h4>

            <ul className="space-y-2 text-sand/80 text-sm mb-6">
              <li>Katameri PO, Vatakara</li>
              <li>Kozhikode, Kerala, India</li>
              <li className="text-gold">📞 +91 9605270250</li>
              <li className="text-gold">✉️ rileadingschool@gmail.com</li>
            </ul>

            <div className="space-y-3">
              <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-center">
                Kerala State Recognized Institution
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-center">
                Run by Jamia Rahmaniyya Islamiyya
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-sand/60">
          <p>
            © {new Date().getFullYear()} Rahmaniyya International Leading School
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}