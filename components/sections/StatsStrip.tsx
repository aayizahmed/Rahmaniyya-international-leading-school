"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { Users, BookOpen, Award, Shield } from "lucide-react";

export default function StatsStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <Users className="w-6 h-6 text-gold" />,
      value: 500,
      suffix: "+",
      label: "Students Empowered",
    },
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      value: 50,
      suffix: "+",
      label: "Years of Legacy",
    },
    {
      icon: <Shield className="w-6 h-6 text-gold" />,
      value: 100,
      suffix: "%",
      label: "Academic Success",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-gold" />,
      value: 8,
      suffix: "+",
      label: "Focused Programs",
    },
  ];

  return (
    <section className="bg-white py-12 relative z-20 border-y border-sand/30 shadow-sm" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-4 gap-4 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-3 px-4">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="font-serif font-bold text-4xl text-primary flex items-end justify-center">
                {isInView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  <span>0</span>
                )}
                <span className="text-3xl ml-0.5">{stat.suffix}</span>
              </div>
              <p className="font-medium text-primary/70 text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
