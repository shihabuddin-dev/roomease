import { Mail, Phone, MapPin, Briefcase } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="mt-10 min-h-screen flex items-center justify-center bg-blue-50 py-8 px-2 md:py-16 md:px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-10 border border-gray-100">

        {/* Left Side: Contact Form */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2 md:mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4 md:mb-8 max-w-lg text-sm md:text-base">
            Whether you have a question about our features, pricing, or anything else, our team is ready to answer all your questions.
          </p>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-xs md:text-base" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-xs md:text-base" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="3" className="mt-1 block w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-xs md:text-base" placeholder="Tell us how we can help you..."></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 md:py-3 px-3 md:px-4 border border-transparent rounded-xl shadow-sm text-xs md:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Information Sections */}
  <div className="flex flex-col space-y-6 md:space-y-10">
          {/* Contact Information */}
          <div className="p-4 md:p-8 bg-blue-50 rounded-2xl shadow-inner">
            <h3 className="text-lg md:text-2xl font-bold text-blue-800 mb-2 md:mb-4 flex items-center gap-2">
              <Phone className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
              Contact Information
            </h3>
            <ul className="space-y-2 md:space-y-4">
              <li className="flex items-center gap-2 md:gap-4 text-gray-700 text-xs md:text-base">
                <Mail className="w-4 md:w-5 h-4 md:h-5 text-gray-500" />
                <a href="mailto:support@roomease.com" className="hover:text-blue-600 transition-colors duration-200">support@roomease.com</a>
              </li>
              <li className="flex items-center gap-2 md:gap-4 text-gray-700 text-xs md:text-base">
                <Phone className="w-4 md:w-5 h-4 md:h-5 text-gray-500" />
                <a href="tel:+1234567890" className="hover:text-blue-600 transition-colors duration-200">+1 234 567 890</a>
              </li>
              <li className="flex items-start gap-2 md:gap-4 text-gray-700 text-xs md:text-base">
                <MapPin className="w-4 md:w-5 h-4 md:h-5 text-gray-500 mt-1" />
                <span>123 RoomEase Ave, City, Country</span>
              </li>
            </ul>
          </div>

          {/* Careers Section */}
          <div className="p-4 md:p-8 bg-blue-50 rounded-2xl shadow-inner">
            <h3 className="text-lg md:text-2xl font-bold text-blue-800 mb-2 md:mb-4 flex items-center gap-2">
              <Briefcase className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
              Careers
            </h3>
            <p className="text-gray-600 mb-2 md:mb-4 text-xs md:text-base">
              Want to join our team? We're always looking for passionate people. Email your CV and a brief cover letter to:
            </p>
            <a href="mailto:careers@roomease.com" className="inline-block px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 text-xs md:text-base">
              careers@roomease.com
            </a>
          </div>

          {/* Location Map */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg h-40 md:h-64">
            <iframe
              title="RoomEase Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=90.4125%2C23.8103%2C90.4125%2C23.8103&amp;layer=mapnik"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}