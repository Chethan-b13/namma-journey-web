import Image from "next/image";
import React from "react";

const OurStorySection = () => {
  return (
    <>
      {/* Our Story Section */}
      <section id="story" className="py-24 relative overflow-hidden">
        <div className="absolute -top-40 left-20 w-80 h-80 bg-chart-2/10 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full text-primary font-medium">
                Our Journey
              </div>
              <h2 className="text-4xl font-bold mb-4">The LogoutLoud Story</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Created from loneliness. Designed to bring people home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-chart-3/20 to-primary/20 rounded-2xl blur-xl"></div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <Image
                    src="https://images.unsplash.com/photo-1658236748082-9d43c338b001?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Sunset at beach"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  We were two best friends working in IT, surrounded by people —
                  but feeling more alone than ever. Group chats went silent.
                  Weekend plans fell apart. Even phone calls started to feel
                  like chores.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Frustrated, we finally just left. A no-plan trip with no
                  expectations. Four friends. Udupi. No phones, just presence.
                  For the first time in years, we felt alive.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  After that, we saw it everywhere: people scrolling through
                  life instead of living it. Kids on screens instead of in
                  playgrounds. Retired parents fighting boredom with reels.
                  Friends recording concerts they weren&apos;t even enjoying.
                </p>
                <p className="text-lg text-primary font-medium">
                  That&apos;s when it hit us — the world doesn&apos;t need
                  another app to keep you online. It needs one to bring you back
                  offline. That&apos;s what{" "}
                  <span className="text-black">Logoutloud</span> is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStorySection;
