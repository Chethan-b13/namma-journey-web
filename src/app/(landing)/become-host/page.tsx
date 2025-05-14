import React from "react";
import { FaHeart, FaUsers, FaMapMarkedAlt } from "react-icons/fa";
import NavBar from "@/components/landing/NavBar";

const BecomeHostPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Floating Navbar */}
      <NavBar alwaysVisible={true} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069')] bg-cover bg-center opacity-5 z-0"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full text-primary font-medium">
                Join Our Community
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Become a <span className="text-primary">Host</span>. <br />
                Lead the Change.
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                You&apos;re not just planning events. You&apos;re helping people
                remember what it means to live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Info */}
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">
                    Who is a Hangout Host or Journey Captain?
                  </h2>
                  <p className="text-gray-600 mb-4">
                    You don&apos;t need to be an influencer. You just need the
                    heart to bring people together.
                  </p>
                  <div className="space-y-3 mt-4">
                    {[
                      "A coffee catchup or board game night in your city",
                      "A weekend trek into the hills",
                      "A quiet journaling circle in the park",
                      "A full-blown 3-day nature escape",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      icon: <FaHeart className="text-primary text-xl" />,
                      title: "Impact Lives",
                      desc: "Create moments where people feel seen again",
                    },
                    {
                      icon: <FaUsers className="text-chart-3 text-xl" />,
                      title: "Find Your Tribe",
                      desc: "Connect with purpose-driven people like you",
                    },
                    {
                      icon: <FaMapMarkedAlt className="text-chart-4 text-xl" />,
                      title: "Lead Your Way",
                      desc: "You bring the spark, we help you light the fire",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-xl shadow-sm text-center"
                    >
                      <div className="w-10 h-10 mx-auto bg-black/5 rounded-full flex items-center justify-center mb-3">
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 p-6 rounded-xl">
                  <p className="text-primary font-medium italic">
                    &quot;This isn&apos;t just about events. It&apos;s about
                    creating spaces where people come alive again.&quot;
                  </p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Apply to Become a Host
                </h2>
                <form className="space-y-6">
                  <div className="space-y-4">
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

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Where you're based"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hostType"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        I want to be a
                      </label>
                      <select
                        id="hostType"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="hangout">
                          Hangout Host (local events)
                        </option>
                        <option value="journey">
                          Journey Captain (multi-day experiences)
                        </option>
                        <option value="both">Both</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="experience"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Tell us about any experience you have bringing people
                        together
                      </label>
                      <textarea
                        id="experience"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Your experience (it's okay if you're just starting out!)"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md"
                  >
                    Submit Application
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    We&apos;ll reach out to you within 48 hours to discuss next
                    steps.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeHostPage;
