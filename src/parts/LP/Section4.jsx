import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const testimonials = [
  {
    name: "John D.",
    text: "They rewired my entire house safely and efficiently. Highly recommend for any electrical work!",
  },
  {
    name: "Mary S.",
    text: "Professional, punctual, and friendly. Fixed our faulty circuits quickly and at a fair price.",
  },
  {
    name: "Mike T.",
    text: "Installed new lighting throughout my office. Excellent attention to detail and safety standards.",
  },
  {
    name: "Linda P.",
    text: "Fast response and knowledgeable electricians. My home has never been safer.",
  },
  {
    name: "Chris L.",
    text: "Upgraded our electrical panel flawlessly. Great service and very professional team.",
  },
  {
    name: "Rachel H.",
    text: "Emergency call-out was quick and reliable. Highly skilled and trustworthy electricians.",
  },
];

function TestimonialCard({ review }) {
  return (
    <motion.div
      className="bg-gray-900 w-56 sm:w-64 md:w-72 p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col justify-between"
      whileHover={{ scale: 1.05 }}
    >
      <p className=" mb-3 sm:mb-4 text-sm sm:text-base">
        “{review.text}”
      </p>
      <p className="font-semibold text-yellow-400 text-sm sm:text-base">
        - {review.name}
      </p>
    </motion.div>
  );
}

export default function Section4() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Desktop scroll-driven effect
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  const repeatedTestimonials = Array(3).fill(testimonials).flat();

  return (
    <section ref={ref} className="bg-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Reviews
        </h2>
      </div>

      {/* Row 1 - desktop scroll, mobile auto */}
      <motion.div className="hidden md:flex space-x-6 mb-10 w-[200%]" style={{ x: x1 }}>
        {repeatedTestimonials.map((t, i) => (
          <TestimonialCard key={`row1-${i}`} review={t} />
        ))}
      </motion.div>
      <motion.div
        className="flex md:hidden space-x-6 mb-8 w-[200%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {repeatedTestimonials.map((t, i) => (
          <TestimonialCard key={`row1m-${i}`} review={t} />
        ))}
      </motion.div>

      {/* Row 2 - desktop scroll, mobile auto */}
      <motion.div className="hidden md:flex space-x-6 w-[200%]" style={{ x: x2 }}>
        {repeatedTestimonials.map((t, i) => (
          <TestimonialCard key={`row2-${i}`} review={t} />
        ))}
      </motion.div>
      <motion.div
        className="flex md:hidden space-x-6 w-[200%]"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {repeatedTestimonials.map((t, i) => (
          <TestimonialCard key={`row2m-${i}`} review={t} />
        ))}
      </motion.div>
    </section>
  );
}
