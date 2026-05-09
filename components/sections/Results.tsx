"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, BarChart3, Sparkles } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    title: "Board Excellence",
    value: "100%",
    description: "Our students consistently achieve 100% pass rates with top-tier Full A+ honors in board examinations.",
    image: "/images/achievement-board.webp"
  },
  {
    title: "Competitive Success",
    value: "644/720",
    description: "Extraordinary success in NEET 2024 and competitive coaching, paving the way for elite professional careers.",
    image: "/images/achievement-neet.webp"
  },
  {
    title: "Moral Leadership",
    value: "Values First",
    description: "Nurturing leaders who excel in moral studies and institutional representation across the state.",
    image: "/images/achievement-leadership.webp"
  },
];



export default function Results() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F7F3E8] to-transparent pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="h-px w-10 bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold">Results & Achievements</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
            Proof of Performance and Promise
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-primary/70 font-sans leading-relaxed">
            Our students achieve beyond expectations. We combine rigorous teaching, spiritual balance, and leadership cultivation so every success story is built on lasting values.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-8 lg:grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16 snap-x snap-mandatory hide-scrollbar">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative group h-[450px] lg:h-[400px] w-[85%] md:w-[45%] lg:w-full shrink-0 snap-center rounded-[2.5rem] overflow-hidden cursor-pointer ${activeIndex === idx ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Normal State Card (Desktop only or hidden on mobile) */}
              <div className="absolute inset-0 bg-bg-light border border-sand-dark/10 p-10 flex flex-col transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 group-hover:-translate-y-4 group-[.is-active]:opacity-0 group-[.is-active]:scale-95 group-[.is-active]:-translate-y-4 opacity-100 pointer-events-auto">
                <div className="flex items-center justify-center w-16 h-16 rounded-3xl bg-gold/10 text-gold mb-6">
                  {idx === 0 ? <BarChart3 className="w-7 h-7" /> : idx === 1 ? <Trophy className="w-7 h-7" /> : <Sparkles className="w-7 h-7" />}
                </div>
                <p className="text-4xl font-serif font-bold text-primary mb-4">{item.value}</p>
                <h3 className="text-2xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-primary/70 leading-relaxed">{item.description}</p>
              </div>

              {/* Image State: Visible by default on mobile, hover reveal on desktop */}
              <div className="absolute inset-0 opacity-0 scale-110 translate-y-8 group-hover:opacity-100 group-[.is-active]:opacity-100 group-hover:scale-100 group-[.is-active]:scale-100 group-hover:translate-y-0 group-[.is-active]:translate-y-0 transition-all duration-500 ease-out z-20">
                 <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent z-10" />
                 <Image
                   src={item.image}
                   alt={item.title}
                   fill
                   sizes="(max-width: 1024px) 85vw, 33vw"
                   quality={70}
                   className="object-cover"
                 />
                 
                 <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4">
                      {idx === 0 ? <BarChart3 className="w-6 h-6" /> : idx === 1 ? <Trophy className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-4xl font-serif font-bold text-gold mb-4">{item.value}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                 </div>
              </div>

              {/* Decorative border on hover */}
              <div className="absolute inset-0 border-2 border-gold rounded-[2.5rem] opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity duration-500 z-30 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
