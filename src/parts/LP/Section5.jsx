export default function Section5() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-4">Call us today or send us a message!</p>
          <p className="mb-2">📞 <a href="tel:+1234567890" className="underline">+1 (234) 567-890</a></p>
          <p className="mb-2">📧 <a href="mailto:info@electrician.com" className="underline">info@electrician.com</a></p>
          <p className="mb-6">📍 123 Main Street, Your City</p>
        </div>

        {/* Map Embed */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092795!2d144.95373631531663!3d-37.81627974202112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAxLjMiUyAxNDTCsDU3JzE5LjQiRQ!5e0!3m2!1sen!2sus!4v1617174321234!5m2!1sen!2sus"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
