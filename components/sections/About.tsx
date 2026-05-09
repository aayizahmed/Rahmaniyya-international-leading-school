"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const journeySteps = [
  {
    id: 1,
    title: "Foundation of Faith",
    text: "Building character begins with our integrated Moral Studies and Madrasa framework, establishing a resilient mindset for a rapidly changing world.",
    img: "/images/hall.webp",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    title: "Rigorous Discovery",
    text: "Students seamlessly transition into an advanced academic workflow, supported by Continuous and Comprehensive Evaluation to ensure mastery at every step.",
    img: "/images/classroom.webp",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    title: "Ultimate Mastery",
    text: "We don't just teach; we challenge. Cultivating leadership and an undeniable global prestige that prepares them to conquer any domain.",
    img: "/images/campus.webp",
    width: 800,
    height: 600,
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block">The RILS Transformation</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight max-w-4xl mx-auto">
            A premium education built on <br />
            <span className="italic font-light">knowledge, faith, and leadership.</span>
          </h2>
        </motion.div>

        {/* Journey Steps */}
        <div className="space-y-32">
          {journeySteps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2 w-full">
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={78}
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:w-1/2 w-full">
                <div className="max-w-xl">
                  <span className="text-[#E63946] font-bold uppercase tracking-widest text-xs mb-4 block">OUR JOURNEY</span>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">{step.title}</h3>
                  <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                    {step.text}
                  </p>
                  <div className="h-1 w-20 bg-gold/30 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
