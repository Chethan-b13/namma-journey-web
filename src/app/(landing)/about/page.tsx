import React from "react";
import Image from "next/image";
import { FaLeaf, FaHeart, FaHandHoldingHeart } from "react-icons/fa";
import NavBar from "@/components/landing/NavBar";
import Footer from "@/components/landing/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Floating Navbar - appears on scroll with CSS */}
      <NavBar alwaysVisible={true} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/about-bg.jpg')] bg-cover bg-center opacity-5 z-0"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-chart-3/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-6 py-20 z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full text-primary font-medium">
                About LogoutLoud
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                We&apos;re building a way <br />
                <span className="text-primary">back to each other</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In a world flooded with notifications, filters, and endless
                scrolling… something quietly slipped away — our ability to be
                present.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-40 left-20 w-80 h-80 bg-chart-2/10 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full text-primary font-medium">
                  Our Journey
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  It began with two{" "}
                  <span className="text-secondary">best friends</span> working
                  in IT
                </h2>
                <p className="text-lg text-gray-600">
                  We tried to plan hangouts. Trips. Anything to break the cycle.
                  But life kept getting in the way — mismatched schedules,
                  silent group chats, and a growing disconnect.
                </p>
                <p className="text-lg text-gray-600">
                  So one day, we just left. Four of us. No big plan, no crowd.
                  Just Udupi, the sea, and no phones.
                </p>
                <p className="text-lg text-gray-600 font-medium">
                  That one unplanned trip changed everything.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-2xl blur-xl"></div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <Image
                    src="/images/about.jpg"
                    alt="Friends at beach"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-chart-4/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute -bottom-40 right-20 w-80 h-80 bg-chart-1/10 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full text-primary font-medium">
                Why We Exist
              </div>
              <h2 className="text-4xl font-bold mb-6">
                The solution isn&apos;t more content.
                <br />
                It&apos;s more <span className="text-primary">connection</span>.
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We&apos;ve seen it firsthand — people glued to screens at
                concerts, kids swiping instead of playing, old parents learning
                to scroll just to cope. People everywhere, scrolling through
                life instead of living it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <FaLeaf className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Offline Hangouts</h3>
                <p className="text-gray-600">
                  Game nights, meetups, workshops — to spark fun and friendships
                  in the real world.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <FaHeart className="text-secondary text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Curated Journeys</h3>
                <p className="text-gray-600">
                  Getaways that strip away digital noise and let you be present
                  with yourself and others.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-chart-3/10 rounded-full flex items-center justify-center mb-6">
                  <FaHandHoldingHeart className="text-chart-3 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Meaningful Connections
                </h3>
                <p className="text-gray-600">
                  Every experience is designed to make real bonds happen,
                  effortlessly and authentically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Belief */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-chart-3/20 to-primary/20 rounded-2xl blur-xl"></div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <Image
                    src="/images/belief.jpg"
                    alt="Friends laughing together"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-chart-2/30 rounded-full"></div>
              </div>

              <div className="space-y-8 order-1 md:order-2">
                <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full text-primary font-medium">
                  Our Belief
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  A walk. A laugh.
                  <br />A real conversation.
                </h2>
                <p className="text-lg text-gray-600">
                  We believe the solution to stress, loneliness, and burnout
                  isn&apos;t more content. It&apos;s more connection.
                </p>
                <p className="text-lg text-gray-600">
                  That&apos;s the medicine we forgot we needed.
                </p>
                <div className="pt-4">
                  <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg">
                    Join Our Community
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="inline-block mb-4 px-4 py-1 bg-white/10 rounded-full font-medium">
                Come With Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                We&apos;re not here to keep you glued to a screen.
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                We&apos;re here to help you put it down. Let&apos;s go back to
                living. Let&apos;s LogoutLoud.
              </p>
              <button className="bg-white hover:bg-opacity-90 text-primary px-10 py-4 rounded-lg text-lg font-bold transition-all shadow-lg">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
