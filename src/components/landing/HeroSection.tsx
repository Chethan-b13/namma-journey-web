import Image from "next/image";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-5 z-0"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-chart-3/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-6 py-20 z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 bg-secondary/10 rounded-full text-secondary font-medium">
                Reconnect with reality
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                <span className="text-black">Logout</span>
                <span className="text-primary">loud</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                Because real connection doesn&apos;t happen on screens.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  You <span className="text-secondary">weren&apos;t</span> made
                  to <br /> live online.
                  {/* <br /> <span className="text-primary">Connect in person.</span> */}
                </h2>
                <p className="text-lg text-gray-600">
                  It&apos;s time to come home — to people who see you, to places
                  that ground you, and to the kind of presence you forgot you
                  were missing. <br />
                  No filters. No feeds. Just real life, lived fully.
                </p>
                {/* <div className="pt-4 flex flex-wrap gap-4">
                      <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg">
                        Join a Hangout <FaArrowRight />
                      </button>
                      <button className="bg-black/5 hover:bg-black/10 text-black px-8 py-3 rounded-lg font-bold transition-all border border-black/10">
                        Explore Journeys
                      </button>
                    </div> */}

                {/* App Store Buttons */}
                <div className="mt-8">
                  <p className="text-sm text-gray-500 mb-3">
                    Download our app:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://apps.apple.com/in/app/logoutloud/id6746362059"
                      className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-black/90 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaApple className="text-xl" />
                      <div className="flex flex-col">
                        <span className="text-xs">Download on the</span>
                        <span className="text-sm font-semibold">App Store</span>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-black/90 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGooglePlay className="text-xl" color="#FFDE59" />
                      <div className="flex flex-col">
                        <span className="text-xs">Get it on</span>
                        <span className="text-sm font-semibold">
                          Google Play
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-2xl blur-xl"></div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <Image
                    src="/images/header-image.jpg"
                    alt="People connecting"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-chart-4/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
