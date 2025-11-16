export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-950 text-white px-4 py-16">
      
      {/* HERO SECTION */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us 📬</h2>
        <p className="text-lg">
          Email:{" "}
          <a
            href="mailto:info@tegridyfarms.com"
            className="text-green-500 underline"
          >
            info@tegridyfarms.com
          </a>
        </p>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12 text-center">
        <div className="p-6 bg-green-800 rounded-lg shadow-lg">
          <div className="text-3xl mb-2">📍</div>
          <h3 className="font-bold mb-1">Location</h3>
          <p className="text-white/80 text-sm">
            Tegridy Farms<br />
            Colorado, USA
          </p>
        </div>

        <div className="p-6 bg-green-800 rounded-lg shadow-lg">
          <div className="text-3xl mb-2">⏰</div>
          <h3 className="font-bold mb-1">Hours</h3>
          <p className="text-white/80 text-sm">
            Mon - Fri: 9AM - 6PM<br />
            Weekend: 10AM - 4PM
          </p>
        </div>
      </div>

      {/* SIMPLE CONTACT FORM */}
      <div className="max-w-2xl mx-auto bg-green-800 rounded-lg p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md text-black"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full p-3 rounded-md text-black"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-3 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
}
