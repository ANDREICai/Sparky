import { Link } from "react-router-dom";

export default function Section1() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url(/background.jpg)",
      }}
    >
      <div className="bg-black/50 absolute inset-0" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Reliable Electrician in West Lothian
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Fast, affordable, and professional electrical services.
        </p>

        {/* Correct usage: no nested <a> */}
        <Link
          to="/contact"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 hover:scale-110 transition-transform duration-300 text-black px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Contact Now
        </Link>
      </div>
    </section>
  );
}
