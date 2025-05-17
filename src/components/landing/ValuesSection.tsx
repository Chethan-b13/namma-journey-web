import Image from "next/image";
import React from "react";
import { FaHandHoldingHeart, FaHeart, FaLeaf } from "react-icons/fa";

const ValuesSection = () => {
  return (
    <>
      {/* Values Section */}
      <section
        id="values"
        className="py-24 bg-gray-50 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 bg-black/5 rounded-full font-medium">
                Our Values
              </div>
              <h2 className="text-4xl font-bold mb-4">What We Stand For</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We believe in authentic human connections that happen when we
                put down our phones.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "From Loneliness to Belonging",
                  description:
                    "You might come alone, but you'll leave with friends who feel like family. We make it easy to connect without the awkwardness.",
                  icon: (
                    <FaHandHoldingHeart className="text-secondary text-3xl" />
                  ),
                  image: "/images/values-1.jpg",
                },
                {
                  title: "Let Nature Heal You",
                  description:
                    "Step into quiet forests, starry skies, and moments that ground you in the now.",
                  icon: <FaLeaf className="text-chart-3 text-3xl" />,
                  image: "/images/values-2.jpg",
                },
                {
                  title: "Make Memories, Not Content",
                  description:
                    "Live stories you'll tell forever — not because they got likes, but because they changed you.",
                  icon: <FaHeart className="text-chart-4 text-3xl" />,
                  image: "/images/values-3.jpg",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="h-48 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute -top-10 left-6 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mt-6 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-black text-white rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl -mr-32 -mt-32"></div>
              <p className="text-xl md:text-2xl font-light italic text-center relative z-10">
                &ldquo;The richest experiences happen when we disconnect to
                reconnect.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ValuesSection;
