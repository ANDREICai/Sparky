"use client";

import { Wrench, Zap, Lightbulb, Home } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Reusable animated card like GlassCard
function AnimatedCard({ children, className = "" }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-gray-100 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-transform transform ${className}`}
    >
      {children}
    </div>
  );
}

export default function Section2() {
  const services = [
    { icon: <Zap size={32} />, title: "Emergency Repairs", desc: "24/7 quick response for urgent issues." },
    { icon: <Home size={32} />, title: "Residential Wiring", desc: "Safe installations for your home." },
    { icon: <Lightbulb size={32} />, title: "Lighting Installations", desc: "Indoor & outdoor lighting solutions." },
    { icon: <Wrench size={32} />, title: "Maintenance & Upgrades", desc: "Keep your system running smoothly." },
  ];

  return (
    <section className="py-20 bg-gray-200 text-center">
      <h2 className="font-bold mb-12 text-black text-6xl">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <AnimatedCard key={i}>
            <div className="flex justify-center text-yellow-500 mb-5">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-black">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
