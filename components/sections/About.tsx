"use client";

import { motion } from "framer-motion";

const journeySteps = [
  {
    id: 1,
    title: "Foundation of Faith",
    text: "Building character begins with our integrated Moral Studies and Madrasa framework, establishing a resilient mindset for a rapidly changing world.",
    img: "/images/hall.jpg"
  },
  {
    id: 2,
    title: "Rigorous Discovery",
    text: "Students seamlessly transition into an advanced academic workflow, supported by Continuous and Comprehensive Evaluation to ensure mastery at every step.",
    img: "/images/classroom.jpg"
  },
  {
    id: 3,
    title: "Ultimate Mastery",
    text: "We don't just teach; we challenge. Cultivating leadership and an undeniable global prestige that prepares them to conquer any domain.",
    img: "/images/campus.jpg"
  }
];

export default function About() {
  return (
    <section id="about" className="relative bg-bg-light overflow-hidden">
      {/* Decorative vertical lines for structure */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-sand-dark/10 pointer-events-none" />
      <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-sand-dark/10 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row relative">
          
          {/* Left Pinned Sticky Content */}
          <div className="lg:w-5/12 py-20 lg:py-0 lg:pt-40 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-start">
            
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-gold" />
                <span className="text-gold font-medium uppercase tracking-widest text-sm">The RILS Transformation</span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8 leading-[1.1]">
                A premium education built on <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold">knowledge, faith, and leadership.</span>
              </h2>

              <p className="text-foreground/70 font-sans text-lg leading-relaxed max-w-md mb-12">
                Rahmaniyya International Leading School blends modern curriculum with moral wisdom to create scholars who excel academically, lead ethically, and serve with confidence. Our mission is to develop disciplined learners, compassionate citizens, and resilient achievers.
                <br /><br />
                Through mentorship, structure, and community, each student transforms into a confident leader ready for board exams, competitive success, and lifelong impact.
              </p>

              <div className="border-l-2 border-gold pl-6 py-2">
                <p className="font-serif text-2xl italic text-primary">
                  "Nurturing minds rooted in faith, driven by knowledge."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Scrolling Content */}
          <div className="lg:w-7/12 py-32 lg:py-64 flex flex-col gap-32">
            {journeySteps.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-200px" }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                {/* Number indicator */}
                <span className="absolute -left-12 top-0 font-serif text-6xl text-gold/20 font-bold hidden lg:block">
                  0{step.id}
                </span>

                <div className="w-full h-[60vh] rounded-2xl overflow-hidden relative shadow-2xl">
                  {/* Overlay for premium look */}
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 transition-colors duration-700 group-hover:bg-transparent" />
                  
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                  />
                  
                  {/* Glassmorphic Info Box */}
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="bg-bg-light/40 backdrop-blur-xl p-8 rounded-xl border border-white/30 shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="font-serif text-3xl font-bold text-primary mb-3">{step.title}</h3>
                      <p className="font-sans text-foreground/80 leading-relaxed text-sm md:text-base">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
