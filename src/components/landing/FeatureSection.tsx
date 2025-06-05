import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <>
      {/* Features Section */}
      <section id="connect" className="py-24 relative">
        {/* <div className="absolute inset-0 bg-[url('/images/dot-pattern.jpg')] bg-repeat opacity-5"></div> */}
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 bg-secondary/10 rounded-full text-secondary font-medium">
                Our Offerings
              </div>
              <h2 className="text-4xl font-bold mb-4">How We Connect</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Step out, meet up, and vibe offline.
              </p>
            </div>

            <div className="space-y-32">
              {[
                {
                  title: "Local Hangouts",
                  description:
                    "Casual meetups with like-minded people in your area. From coffee chats to hiking trips, find your tribe and create meaningful connections.",
                  image: "/images/features-1.jpg",
                  reverse: false,
                  color: "from-primary/5 to-chart-1/5",
                },
                {
                  title: "Curated Journeys",
                  description:
                    "Expertly designed experiences that create lasting memories. Travel together, learn together, grow together with our signature multi-day adventures.",
                  image: "/images/features-2.jpg",
                  reverse: true,
                  color: "from-chart-2/5 to-chart-3/5",
                },
                {
                  title: "Community Stories",
                  description:
                    "Share your offline adventures and inspire others to disconnect. Because the best stories happen when we log out and tune in to life around us.",
                  image: "/images/features-3.jpg",
                  reverse: false,
                  color: "from-chart-4/5 to-primary/5",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className={`grid md:grid-cols-2 gap-16 items-center ${
                    feature.reverse ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-1 bg-black/5 rounded-full font-medium">
                      0{i + 1}
                    </div>
                    <h3 className="text-3xl font-bold">{feature.title}</h3>
                    <p className="text-lg text-gray-600">
                      {feature.description}
                    </p>
                    <button className="flex items-center gap-2 text-secondary font-bold group">
                      Learn more{" "}
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="relative">
                    <div
                      className={`absolute -inset-4 bg-gradient-to-r ${feature.color} rounded-2xl blur-lg opacity-80`}
                    ></div>
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
