import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";
import { Phone, MessageCircle } from "lucide-react";
// ssr:false components must come from a Client Component wrapper
import { SplashScreen, ParticlesBackground } from "@/components/ui/ClientOnlyComponents";

const StatsStrip = dynamic(() => import("@/components/sections/StatsStrip"));
const About = dynamic(() => import("@/components/sections/About"));
const Academics = dynamic(() => import("@/components/sections/Academics"));
const Process = dynamic(() => import("@/components/sections/Process"));
const WhyRILS = dynamic(() => import("@/components/sections/WhyRILS"));
const VideoPreview = dynamic(() => import("@/components/sections/VideoPreview"));
const Results = dynamic(() => import("@/components/sections/Results"));
const NewsSection = dynamic(() => import("@/components/sections/NewsSection"));
const CampusGallery = dynamic(() => import("@/components/sections/CampusGallery"));
const SocialConnect = dynamic(() => import("@/components/sections/SocialConnect"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Footer = dynamic(() => import("@/components/layout/Footer"));

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
      <VideoPreview />
      <Results />
      <NewsSection />
      <CampusGallery />
      <SocialConnect />
      <Contact />

      <Footer />

      {/* Global Floating Action Buttons */}
      <div className="fixed right-4 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-[100]">
        <a
          href="tel:+919605270250"
          aria-label="Call RILS"
          className="w-14 h-14 md:w-16 md:h-16 bg-[#2B59FF] hover:bg-blue-600 rounded-full flex items-center justify-center shadow-2xl text-white transition-transform hover:scale-110 border border-white/20 group relative"
        >
          <Phone className="w-7 h-7 md:w-8 md:h-8" aria-hidden="true" />
          <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 shadow-md">
            Call Us
          </span>
        </a>
        <a
          href="https://wa.me/919605270250"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-green-500 rounded-full flex items-center justify-center shadow-2xl text-white transition-transform hover:scale-110 border border-white/20 group relative"
        >
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8" aria-hidden="true" />
          <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 shadow-md">
            WhatsApp
          </span>
        </a>
      </div>
    </main>
  );
}
