"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const Hero = () => {
  const [location, setLocation] = useState("Allentown, New Mexico");
  const [date, setDate] = useState("04 Aug, 2022");

  return (
    <section className="relative w-full px-6 py-16 md:py-24 lg:py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-lg">
          <div className="flex flex-col items-center md:items-start space-y-2 text-2xl md:text-4xl font-bold text-gray-800">
            <h1>Step Away from</h1>
            <h1>Screens, Step Into</h1>
            <h1 className="text-crimson_red">Experiences!</h1>
          </div>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Join fun-filled offline events and unforgettable trip adventures.
            Meet new people, create lasting memories, and rediscover real-world
            joy—no phone needed!
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex items-center bg-white shadow-md rounded-full p-2 border border-gray-200 w-full max-w-lg">
            <div className="flex items-center space-x-2 px-4 py-2 border-r border-gray-300">
              <span className="text-yellow-500">
                <FiMapPin />
              </span>
              <select
                className="text-gray-700 bg-transparent outline-none cursor-pointer"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>Allentown, New Mexico</option>
                <option>Los Angeles, CA</option>
                <option>New York, NY</option>
              </select>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2">
              <span className="text-yellow-500">📅</span>
              <input
                type="text"
                className="text-gray-700 bg-transparent cursor-pointer"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button className="bg-yellow-400 p-3 rounded-full text-white">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right Section (Images Grid) */}
        <div className="hidden md:flex justify-center items-center gap-4 md:gap-6">
          <div className="flex flex-col gap-4 md:gap-6 mr-4">
            <img
              src="/images/campfire.png"
              alt="Campfire Group"
              className="rounded-lg shadow-md object-cover w-full h-40 md:w-48 md:h-[16rem]"
            />
            <img
              src="/images/games.png"
              alt="Game Night"
              className="rounded-lg shadow-md object-cover w-40 h-40 md:w-48 md:h-[16rem]"
            />
          </div>
          <img
            src="/images/beach.png"
            alt="Beach Fun"
            className="rounded-lg shadow-md object-cover w-40 h-40 md:w-48 md:h-[16rem] bg-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
