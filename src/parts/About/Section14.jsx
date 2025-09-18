import { Award, Clock, CheckCircle, Zap } from "lucide-react";

export default function Section14() {
  const differentiators = [
    { icon: <Zap size={32} className="text-yellow-500" />, title: "Fast Response", desc: "We arrive quickly when you need us most." },
    { icon: <CheckCircle size={32} className="text-yellow-500" />, title: "Satisfaction Guarantee", desc: "We make sure every job is done right." },
    { icon: <Clock size={32} className="text-yellow-500" />, title: "Transparent Pricing", desc: "No hidden fees, clear upfront quotes." },
    { icon: <Award size={32} className="text-yellow-500" />, title: "Professional Team", desc: "Certified, courteous, and experienced electricians." },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-5xl font-bold mb-12 text-gray-900">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {differentiators.map((d, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="mb-4 flex justify-center">{d.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{d.title}</h3>
            <p className="text-gray-700">{d.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
