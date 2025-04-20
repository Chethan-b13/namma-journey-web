import React from "react";

const CTASection = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-20"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="inline-block mb-4 px-4 py-1 bg-black/10 rounded-full font-medium text-white">
                Join Our Community
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to live life unfiltered?
              </h2>
              <p className="text-xl text-black/80 max-w-2xl mx-auto">
                Join thousands who are rediscovering the joy of real-world
                connections.
              </p>
              <button className="bg-white hover:bg-opacity-90 text-primary px-10 py-4 rounded-lg text-lg font-bold transition-all shadow-lg animate-bounce">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
