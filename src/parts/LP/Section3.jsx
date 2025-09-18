export default function Section3() {
  return (
    <section className="py-20 w-full px-6 bg-gray-900 flex flex-col items-center text-center">
      <div className="max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-white">Why Choose Us</h2>
        <p className="text-lg text-gray-300 mb-10">
          Fast, reliable, and professional electrical services designed to keep your home and business safe.
        </p>

        <div className="grid md:grid-cols-3 gap-8 justify-center">
          <div className="p-6 bg-gray-100 rounded-xl shadow flex flex-col items-center text-center">
            <h3 className="font-semibold text-xl mb-2 text-black">Licensed & Insured</h3>
            <p className="text-gray-600">Certified for your safety and peace of mind.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow flex flex-col items-center text-center">
            <h3 className="font-semibold text-xl mb-2 text-black">Affordable Pricing</h3>
            <p className="text-gray-600">Transparent rates with no hidden fees.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow flex flex-col items-center text-center">
            <h3 className="font-semibold text-xl mb-2 text-black">Trusted Locally</h3>
            <p className="text-gray-600">Proudly serving our community for over a decade.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
