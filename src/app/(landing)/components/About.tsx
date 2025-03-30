import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 px-6 md:px-16 py-12">
      {/* Left Section - Images */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        {/* Large Campfire Image with Oval Shape */}
        <div className="relative w-64 h-96 lg:w-80 lg:h-[500px] rounded-[30%] overflow-hidden">
          <Image
            src="/images/about_image_1.png"
            alt="Campfire Group"
            layout="fill"
          />
        </div>

        {/* Small Game Night Image - Overlapping the Bottom Right */}
        <div className="absolute bottom-[-30px] left-[60%] w-40 h-40 lg:w-56 lg:h-[300px] rounded-[30%] overflow-hiddenshadow-lg">
          <Image
            src="/images/about_image_2.png"
            alt="Game Night"
            layout="fill"
          />
        </div>
      </div>

      {/* Right Section - Text Content */}
      <div className="w-full lg:w-1/2">
        <h4 className="text-sm font-bold text-crimson_red tracking-wide uppercase mb-2">
          About Us
        </h4>
        <div className="text-center md:text-left max-w-lg">
          <div className="flex flex-col items-center md:items-start space-y-2 text-2xl md:text-4xl font-bold text-gray-800">
            <h1>Bringing People Together,</h1>
            <h1>One Adventure at a Time</h1>
          </div>
        </div>
        {/* <div className="flex flex-col items-center gap-2 mt-2">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mt-2">
            Bringing People Together,{" "}
          </h2>
          <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mt-2">
            One Adventure at a Time
          </h2>
        </div> */}
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Tired of endless scrolling? It’s time to disconnect from screens and
          reconnect with real-life experiences. Our platform helps people of all
          ages find and join exciting offline events and trips, making friends
          and memories along the way.
        </p>

        {/* Stats Section */}
        <div className="flex gap-6 mt-6">
          <div>
            <p className="text-2xl font-bold text-crimson_red">1k+</p>
            <p className="text-gray-600 text-sm">Successful Events</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-crimson_red">20k+</p>
            <p className="text-gray-600 text-sm">Happy Travelers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-500 flex items-center">
              4.9<span className="ml-1">⭐</span>
            </p>
            <p className="text-gray-600 text-sm">Overall Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
