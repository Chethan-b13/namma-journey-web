//

"use client";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Tours() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const tours = [
    {
      title: "Fall in love among the winding streets and snow-covered",
      location: "Prague, Czechia",
      price: "$200",
      duration: "10 days tour",
      rating: "4.9",
      image: "/images/tour1.png",
    },
    {
      title: "History is not about the past but a map of the past",
      location: "Beijing, China",
      price: "$450",
      duration: "5 days tour",
      rating: "4.9",
      image: "/images/tour2.png",
    },
    {
      title: "The unique character as a symbol of taste and ostentation",
      location: "Istanbul, Turkey",
      price: "$150",
      duration: "7 days tour",
      rating: "4.9",
      image: "/images/tour3.png",
    },
    {
      title: "You don't live inside",
      location: "Paris, France",
      price: "$100",
      duration: "3 days tour",
      rating: "4.9",
      image: "/images/tour3.png",
    },
    {
      title: "Fall in love among the winding streets and snow-covered",
      location: "Prague, Czechia",
      price: "$200",
      duration: "10 days tour",
      rating: "4.9",
      image: "/images/tour1.png",
    },
    {
      title: "History is not about the past but a map of the past",
      location: "Beijing, China",
      price: "$450",
      duration: "5 days tour",
      rating: "4.9",
      image: "/images/tour2.png",
    },
    {
      title: "The unique character as a symbol of taste and ostentation",
      location: "Istanbul, Turkey",
      price: "$150",
      duration: "7 days tour",
      rating: "4.9",
      image: "/images/tour3.png",
    },
  ];

  return (
    <section id="tours" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-sm font-bold text-crimson_red tracking-wide uppercase mb-2">
          TOUR PACKAGES
        </h2>
        <p className="text-2xl md:text-4xl font-bold text-gray-800">
          Exciting Adventures Await!
        </p>
        <p className="text-gray-600 mt-2 mb-4 text-lg leading-relaxed">
          Find the perfect experience near you—whether it's a fun social event
          or a thrilling outdoor trip.
        </p>

        {/* Floating Scroll Arrows */}
        <div className="absolute top-20 right-40 flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="bg-red-100 p-2 rounded-full shadow-md hover:bg-red-200 transition"
          >
            <FaChevronLeft className="text-red-500" size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-red-100 p-2 rounded-full shadow-md hover:bg-red-200 transition"
          >
            <FaChevronRight className="text-red-500" size={16} />
          </button>
        </div>

        {/* Horizontal Scrollable Section */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto custom-scrollbar scroll-smooth py-4"
        >
          {tours.map((tour, index) => (
            <div
              key={index}
              className="w-[350px] md:min-w-[280px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex-shrink-0"
            >
              <div className="h-40 bg-gray-200">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-2">{tour.location}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-crimson_red font-bold">
                    {tour.price}
                  </span>
                  <span className="text-gray-500">{tour.duration}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span>{tour.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar Globally */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </section>
  );
}
