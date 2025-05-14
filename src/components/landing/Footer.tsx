import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="py-16 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-chart-3 to-chart-1"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold">
                  <span className="text-white">Logout</span>
                  <span className="text-primary">loud</span>
                </h3>
                <p className="text-gray-400">Offline is the new vibe.</p>
                <p className="text-gray-500 text-sm mt-4">
                  We&apos;re on a mission to help people disconnect from
                  technology and reconnect with each other through meaningful
                  in-person experiences.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-lg">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="/about"
                      className="hover:text-primary transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/become-host"
                      className="hover:text-primary transition-colors"
                    >
                      Host with Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/partner"
                      className="hover:text-primary transition-colors"
                    >
                      Partner
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-lg">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="/support"
                      className="hover:text-primary transition-colors"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-lg">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>
                © {new Date().getFullYear()} Logoutloud. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
