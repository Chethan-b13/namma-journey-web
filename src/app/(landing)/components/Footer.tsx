import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="col-span-1">
          <img
            src="/images/logo-without-text.svg"
            alt="Namma Journey Logo"
            className="h-20 mb-4"
          />

          <p className="text-gray-600 mt-2">4517 Washington Ave.</p>
          <p className="text-gray-600">Manchester, Kentucky 39495</p>

          {/* Social Icons */}
          <div className="flex space-x-2 mt-4">
            <div className="bg-yellow-400 p-2 rounded-full shadow-md">
              <FaFacebookF className="text-gray-900 w-4 h-4" />
            </div>
            <div className="bg-yellow-400 p-2 rounded-full shadow-md">
              <FaInstagram className="text-gray-900 w-4 h-4" />
            </div>
            <div className="bg-yellow-400 p-2 rounded-full shadow-md">
              <FaYoutube className="text-gray-900 w-4 h-4" />
            </div>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="font-bold text-gray-900">About</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>About us</li>
            <li>How It Works</li>
            <li>Features</li>
            <li>Our Mission</li>
            <li>Plans</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-gray-900">Company</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>Why Choose Us?</li>
            <li>Partner with us</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold text-gray-900">Support</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Feedback</li>
            <li>Event Guidelines</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="col-span-1 flex flex-col">
          <h4 className="font-bold text-gray-900">
            Stay Updated on the Best Offline Events & Trips!
          </h4>
          <p className="text-gray-600 mt-2">
            Subscribe to get exclusive invites, travel tips, and community
            updates.
          </p>

          {/* Email Input Box */}
          <div className="mt-4 flex items-center bg-white shadow-md rounded-full p-1 w-full md:w-[300px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-2 text-gray-700 rounded-l-full focus:outline-none"
            />
            <button className="bg-yellow-400 p-3 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
