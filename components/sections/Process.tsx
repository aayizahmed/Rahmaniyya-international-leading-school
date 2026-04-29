"use client";

import { motion } from "framer-motion";
import { Rocket, Target, Quote } from "lucide-react";
import Tilt from "react-parallax-tilt";

export default function VisionMission() {
  const cards = [
    {
      title: "Vision",
      icon: <Target className="w-12 h-12 text-gold" />,
      text: "To nurture morally upright, intellectually capable, and spiritually enriched individuals prepared to lead with integrity and purpose.",
      color: "from-[#0D4F3C]/40 to-[#061A14]/60",
    },
    {
      title: "Mission",
      icon: <Rocket className="w-12 h-12 text-gold" />,
      text: "To provide holistic, value-based education that blends academic excellence with Islamic principles, fostering ethical, skilled, and socially responsible leaders.",
      color: "from-[#C9973A]/40 to-[#8E6A29]/60",
    },
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/vision-bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover grayscale opacity-20 filter blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-light via-bg-light/80 to-bg-light z-10" />
      </div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-pattern-islamic opacity-[0.03] pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold font-medium uppercase tracking-widest text-sm">Our Foundation</span>
            <div className="h-[1px] w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary">
            Purpose & Promise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                className="h-full"
              >
                <div className="relative h-full min-h-[400px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl border border-white/20 backdrop-blur-xl">
                  {/* Card Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} transition-transform duration-700 group-hover:scale-110`} />
                  
                  {/* Inner Content Container */}
                  <div className="relative z-10 h-full p-10 md:p-14 flex flex-col justify-between">
                    <div className="flex justify-between items-start relative">
                      <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                        {card.icon}
                      </div>
                      <Quote className="w-16 h-16 text-white/10 group-hover:text-gold/40 transition-colors duration-500 transform -rotate-12 group-hover:rotate-0" />
                      {/* Large background quote */}
                      <span className="absolute -right-4 -top-8 font-serif text-[12rem] text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors duration-700">"</span>
                    </div>

                    <div>
                      <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                        {card.title}
                      </h3>
                      <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed">
                        {card.text}
                      </p>
                    </div>

                    {/* Decorative bottom line */}
                    <div className="w-0 group-hover:w-full h-1 bg-gold mt-8 transition-all duration-700" />
                  </div>

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
