import Image from "next/image";

const CTA = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4 bg-white mb-10">
      {/* Header Text */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Real Fun Begins When You Go Offline
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Stop waiting, start living! Sign up now and join the next adventure
          near you.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-md transition">
          Get the App now!
        </button>
      </div>

      {/* Image Grid with Correct Alignment */}
      <div className="mt-12 flex justify-center items-center gap-14">
        {/* Left Big Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-3 md:row-span-2 flex flex-col md:h-[280px]">
          <Image
            src="/images/meet-people.png"
            alt="Meet Like-Minded People"
            width={280}
            height={280}
            className="w-full h-auto rounded-xl"
          />
          <p className="text-sm font-semibold mt-2 text-gray-900">
            Meet Like-Minded People
          </p>
        </div>

        {/* Small Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-3 md:h-[200px] w-[155px] flex flex-col mt-24">
          <Image
            src="/images/events.png"
            alt="Join Unique Events & Trips"
            width={150}
            height={150}
            className="h-auto rounded-xl"
          />
          <p className="text-sm font-semibold mt-2 text-gray-900 text-wrap">
            Join Unique Events & Trips
          </p>
        </div>

        {/* Small Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-3 md:h-[200px] w-[155px] flex flex-col mt-24">
          <Image
            src="/images/experience.png"
            alt="Experience Fun Without Phones"
            width={150}
            height={150}
            className="h-auto rounded-xl"
          />
          <p className="text-sm font-semibold mt-2 text-gray-900 text-wrap">
            Experience Fun Without Phones
          </p>
        </div>

        {/* Right Big Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-3 md:row-span-2 flex flex-col md:h-[280px]">
          <Image
            src="/images/memories.png"
            alt="Create Unforgettable Memories"
            width={280}
            height={280}
            className="w-full h-auto rounded-xl"
          />
          <p className="text-sm font-semibold mt-2 text-gray-900">
            Create Unforgettable Memories
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
