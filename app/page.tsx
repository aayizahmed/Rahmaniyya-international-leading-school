import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import About from "@/components/sections/About";
import Academics from "@/components/sections/Academics";
import WhyRILS from "@/components/sections/WhyRILS";
import Process from "@/components/sections/Process";
import Results from "@/components/sections/Results";
import NewsSection from "@/components/sections/NewsSection";
import CampusGallery from "@/components/sections/CampusGallery";
import SocialConnect from "@/components/sections/SocialConnect";
import Contact from "@/components/sections/Contact";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import SplashScreen from "@/components/ui/SplashScreen";
import { Phone, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-light">
      <SplashScreen />
      <ParticlesBackground />
      <Navbar />
      
      {/* Sections */}
      <Hero />
      <StatsStrip />
      <About />
      <Academics />
      <Process />
      <WhyRILS />
      <Results />
      <NewsSection />
      <CampusGallery />
      <SocialConnect />
      <Contact />

      <Footer />

      {/* Global Floating Action Buttons */}
      <div className="fixed right-4 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-[100]">
        <a href="tel:+919605270250" className="w-14 h-14 md:w-16 md:h-16 bg-[#2B59FF] hover:bg-blue-600 rounded-full flex items-center justify-center shadow-2xl text-white transition-transform hover:scale-110 border border-white/20 group relative">
          <Phone className="w-7 h-7 md:w-8 md:h-8" />
          <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 shadow-md">
            Call Us
          </span>
        </a>
        <a href="https://wa.me/919605270250" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-green-500 rounded-full flex items-center justify-center shadow-2xl text-white transition-transform hover:scale-110 border border-white/20 group relative">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
          <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 shadow-md">
            WhatsApp
          </span>
        </a>
      </div>
    </main>
  );
}
