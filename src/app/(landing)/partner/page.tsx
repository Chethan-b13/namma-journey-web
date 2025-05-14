import React from "react";
import { FaUsers, FaHandshake, FaGlobeAmericas } from "react-icons/fa";
import NavBar from "@/components/landing/NavBar";
import Footer from "@/components/landing/Footer";

const PartnerPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Floating Navbar - always visible */}
      <NavBar alwaysVisible={true} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-5 z-0"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-chart-3/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-1 bg-secondary/10 rounded-full text-secondary font-medium">
                Partnership Opportunities
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                🤝 Partner With <span className="text-primary">LogoutLoud</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your events. Our platform. One shared mission.
              </p>
            </div>

            <div className="mt-8 text-lg text-gray-600 space-y-6">
              <p>
                You&apos;re already doing the work — curating experiences,
                building communities, helping people feel alive again. Now,
                imagine your efforts reaching even more hearts.
              </p>
              <p className="font-medium text-black">
                At LogoutLoud, we&apos;re building a movement.
              </p>
              <p>
                A home for all those who believe that real connection happens
                offline — through shared journeys, meetups, retreats, game
                nights, or that one unforgettable weekend under the stars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Partner With Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">If you&apos;re:</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  </div>
                  <p>
                    An experience curator bringing strangers together for
                    something meaningful
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  </div>
                  <p>A community page hosting meetups or workshops</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  </div>
                  <p>
                    A local travel agency offering treks, escapes, or weekend
                    getaways
                  </p>
                </li>
              </ul>
              <p className="mt-6 text-xl font-medium text-primary">
                We&apos;d love to partner with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">🧭 Why Join Us?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <FaUsers className="text-secondary text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Reach a New Audience</h3>
                <p className="text-gray-600">
                  Our platform connects you with people actively looking to
                  unplug and experience life offline.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-chart-3/10 rounded-full flex items-center justify-center mb-4">
                  <FaHandshake className="text-chart-3 text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Do What You Love</h3>
                <p className="text-gray-600">
                  Focus on what you do best: crafting memorable experiences.
                  We&apos;ll help with visibility, booking, and community.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <FaGlobeAmericas className="text-blue-500 text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Be Part of a Movement
                </h3>
                <p className="text-gray-600">
                  You&apos;re not just listing an event. You&apos;re joining a
                  mission to bring people back to each other — and yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">🛍️ How It Works</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-medium">
                    List your events on LogoutLoud
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-medium">
                    Get discovered by an audience that values presence over
                    pixels
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-medium">
                    Grow your brand as a trusted experience curator
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-medium">
                    Join a network of passionate humans changing the way people
                    connect
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Partner With Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">🤲 Who We Partner With</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Anyone curating offline-first, people-first experiences",
                "Instagram-based meetup communities",
                "Travel collectives",
                "Solo trip planners",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-primary/5 relative overflow-hidden">
        <div className="absolute -top-40 right-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-chart-3/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                📣 Let&apos;s Create Magic Together
              </h2>
              <p className="text-xl">
                You bring the vibe.
                <br />
                We bring the tribe.
              </p>
              <p className="mt-4 text-lg">
                Together, we&apos;ll help people logout — and live out loud.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">
                Contact Us for Partnership
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Organization/Brand Name
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your organization"
                    required
                  />
                </div>

                {/* instagram profile */}
                <div>
                  <label
                    htmlFor="instagram"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Instagram Profile
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your Instagram profile"
                  />
                </div>

                <div>
                  <label
                    htmlFor="partnerType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Partnership Type
                  </label>
                  <select
                    id="partnerType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="community">
                      Community/Meetup Organizer
                    </option>
                    <option value="travel">Travel Agency/Collective</option>
                    <option value="other">Something Unique</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tell us about your experiences and how you&apos;d like to
                    partner
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Share details about your events, community, or vision..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary hover:text-white text-black font-medium py-3 px-6 rounded-lg transition-all shadow-md"
                >
                  Submit Partnership Request
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We&apos;ll get back to you within 48 hours to discuss
                  partnership opportunities.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerPage;
