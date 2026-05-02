"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Newspaper, Calendar, GraduationCap, Leaf, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    date: "02/12/2025",
    title: "Rahmaniyya News",
    snippet: "Stay updated with the latest happenings at Rahmaniyya International Leading School — from academic milestones and sports triumphs to cultural events and community achievements.",
    useLogo: true,
    link: "/news?page=2"
  },
  // Add more items here if needed for carousel
];

export default function NewsSection() {
  const [activeItem, setActiveItem] = useState(0);

  const goToPrev = () =>
    setActiveItem((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  const goToNext = () =>
    setActiveItem((prev) => (prev + 1) % newsItems.length);

  return (
    <section className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
              <Newspaper className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Latest News &amp; Updates</h2>
          </div>
          {newsItems.length > 1 && (
            <div className="flex gap-2">
              <button
                onClick={goToPrev}
                aria-label="Previous news"
                className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                aria-label="Next news"
                className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Main News Card */}
          <div className="lg:col-span-4">
            <motion.div 
              key={activeItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-primary/5 h-full group"
            >
              {/* Card image area — logo on brand bg OR regular photo */}
              <Link
                href={newsItems[activeItem].link}
                className={`block aspect-[4/3] overflow-hidden relative ${
                  newsItems[activeItem].useLogo
                    ? "bg-gradient-to-br from-[#0D4F3C] to-[#061A14] flex items-center justify-center"
                    : ""
                }`}
              >
                {newsItems[activeItem].useLogo ? (
                  <>
                    {/* subtle Islamic pattern overlay */}
                    <div className="absolute inset-0 bg-pattern-islamic-gold opacity-[0.06] pointer-events-none" />
                    <img
                      src="/logo.png"
                      alt="RILS Logo"
                      className="relative z-10 w-36 h-36 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </>
                ) : (
                  <img
                    src={(newsItems[activeItem] as {image?: string}).image ?? ""}
                    alt={newsItems[activeItem].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
              </Link>
              <div className="p-8">
                <span className="text-gold font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  DATE: {newsItems[activeItem].date}
                </span>
                <h3 className="font-serif text-xl font-bold text-primary mb-3 leading-snug">
                  {newsItems[activeItem].title}
                </h3>
                {newsItems[activeItem].snippet && (
                  <p className="text-primary/60 text-sm leading-relaxed mb-6">
                    {newsItems[activeItem].snippet}
                  </p>
                )}
                <Link
                  href={newsItems[activeItem].link}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest border-b-2 border-gold/30 pb-1 hover:border-gold transition-all"
                >
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Middle: Highlights Card */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-primary rounded-3xl p-10 h-full text-white flex flex-col justify-between relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8 border border-white/10">
                  <GraduationCap className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">Campus Highlights</h3>
                <p className="text-white/70 leading-relaxed">
                  Discover the latest milestones, cultural celebrations, and academic triumphs that define our vibrant student community.
                </p>
              </div>
              <Link
                href="/news?page=1"
                className="relative z-10 w-full py-4 bg-gold text-primary font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View All Highlights <ArrowRight className="w-4 h-4" />
              </Link>
              {/* Decorative Circle */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full" />
            </motion.div>
          </div>

          {/* Right: Why Choose Us Sidebar */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-10 h-full border border-primary/5 shadow-sm"
            >
              <span className="inline-block px-4 py-1 bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Our Values
              </span>
              <h3 className="font-serif text-3xl font-bold text-primary mb-10">Why Choose Us</h3>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 border border-green-100 shrink-0">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl flex items-center gap-2">
                      100% <span className="text-base font-medium text-foreground/70 font-sans">Green Campus</span>
                    </h4>
                    <p className="text-sm text-foreground/60">Eco-friendly infrastructure</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 border border-rose-100 shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl flex items-center gap-2">
                      100% <span className="text-base font-medium text-foreground/70 font-sans">Happiness Curriculum</span>
                    </h4>
                    <p className="text-sm text-foreground/60">Focus on well-being</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl flex items-center gap-2">
                      100% <span className="text-base font-medium text-foreground/70 font-sans">Moral Values</span>
                    </h4>
                    <p className="text-sm text-foreground/60">Character development</p>
                  </div>
                </div>
              </div>


            </motion.div>
          </div>

        </div>

        {/* Footer Link */}
        <div className="text-center mt-12">
          <Link
            href="/news"
            className="text-gold font-bold uppercase tracking-widest text-xs inline-flex items-center gap-2 hover:gap-4 transition-all"
          >
            View All School News &amp; Achievements <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
