import { Link } from "react-router";

export default function Section13() {
  return (
    <section className="py-20 bg-yellow-400 text-center px-6">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
        Ready to Get Started?
      </h2>
      <p className="text-lg sm:text-xl mb-8 text-gray-900 max-w-2xl mx-auto">
        Contact us today for a free quote or schedule your electrical service. Fast, reliable, and professional service guaranteed.
      </p>
      <Link
        to="/Contact"
        className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-transform hover:scale-105 shadow-lg"
      >
        Contact Now
      </Link>
    </section>
  );
}
