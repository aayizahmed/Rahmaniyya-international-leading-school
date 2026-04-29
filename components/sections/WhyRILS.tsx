"use client";

import { motion } from "framer-motion";
import { Users, Award, Shield, HeartHandshake, Building2, Globe } from "lucide-react";

const usps = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Integrated Education",
    desc: "Academic excellence and moral values are taught together so every student learns to lead with integrity and wisdom.",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Experienced Faculty",
    desc: "Our mentors are subject experts, exam strategists, and character coaches who guide every student from day one.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Proven Results",
    desc: "Consistent board toppers, competitive exam achievers, and university selections that make parents proud.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Disciplined Environment",
    desc: "A structured campus routine supports focused study, strong habits, and mindful rest for lasting performance.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Leadership & Growth",
    desc: "From debate clubs to service projects, our students build confidence, communication, and real leadership skills.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Vision",
    desc: "Empowering students with international perspectives, ensuring they are prepared to excel in a rapidly evolving global landscape.",
  },
];

export default function WhyRILS() {
  return (
    <section className="py-32 bg-sand relative border-b border-sand-dark/20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] opacity-70 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
           >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-medium uppercase tracking-widest text-sm">The Distinctions</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary leading-tight">
              Why Choose Rahmaniyya <br />
              <span className="italic font-light">for Your Child's Future</span>
            </h2>
           </motion.div>
           <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
           >
             <p className="text-foreground/70 font-sans text-lg border-l border-gold pl-6 py-2">
               Beyond academics, we offer an unparalleled environment. Every program is meticulously curated to shape profound, dynamic, and resilient personalities ready for the world.
             </p>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-white group"
            >
              <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-bg-light text-gold group-hover:bg-primary group-hover:text-gold transition-colors duration-500 mb-8 border border-sand-dark/10 shadow-inner">
                {usp.icon}
              </div>
              <h3 className="font-serif font-bold text-2xl text-primary mb-4 group-hover:text-gold transition-colors">
                {usp.title}
              </h3>
              <p className="text-foreground/70 text-base leading-relaxed">
                {usp.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
