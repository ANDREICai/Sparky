export default function section1111() {
  return (
    <section className="py-20 bg-gray-100 px-6 mt-5">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Contact Us</h1>
        <p className="text-lg text-gray-700">
          Get in touch for a free quote or to schedule your electrical service.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Form */}
        <form className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            rows={5}
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 hover:scale-105 transition-transform text-black font-semibold px-6 py-3 rounded-lg shadow-lg"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info + Map */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a href="tel:+1234567890" className="text-gray-900 hover:text-yellow-500">
              +1 (234) 567-890
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a href="mailto:info@example.com" className="text-gray-900 hover:text-yellow-500">
              info@example.com
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>123 Main Street, Your City, Country</p>
          </div>
          <div className="mt-6">
            <iframe
              title="map"
              className="w-full h-64 rounded-2xl border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.348952423603!2d-0.12775818416604273!3d51.507350879634695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333abcd!2sLondon!5e0!3m2!1sen!2suk!4v1689999999999!5m2!1sen!2suk"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
