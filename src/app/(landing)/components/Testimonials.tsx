"use client";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Eleanor Pena",
    role: "UI/UX Designer",
    image: "/images/pic.png",
    rating: 5,
    feedback:
      "Finally, a way to meet new people and have fun without being glued to a phone!",
  },
  {
    name: "Theresa Webb",
    role: "Vlogger",
    image: "/images/default-avatar.png",
    rating: 5,
    feedback:
      "The best way to make real connections. I had an unforgettable trip!",
  },
  {
    name: "Annette Black",
    role: "Doctor",
    image: "/images/pic.png",
    rating: 5,
    feedback:
      "Unique experiences, amazing people. Can't wait for my next event!",
  },
  {
    name: "Eleanor Pena",
    role: "UI/UX Designer",
    image: "/images/pic.png",
    rating: 5,
    feedback:
      "Finally, a way to meet new people and have fun without being glued to a phone!",
  },
  {
    name: "Theresa Webb",
    role: "Vlogger",
    image: "/images/default-avatar.png",
    rating: 5,
    feedback:
      "The best way to make real connections. I had an unforgettable trip!",
  },
];

export default function Testimonials() {
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

  return (
    <section
      id="testimonials"
      className="py-20 bg-white flex flex-col items-center"
    >
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-sm font-bold text-crimson_red tracking-wide uppercase mb-2">
          TESTIMONIAL
        </h2>
        <p className="text-2xl md:text-4xl font-bold text-gray-800">
          Our Community Loves It!
        </p>
      </div>

      {/* Testimonial Cards Container */}
      <div className="relative w-full max-w-6xl mt-8">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-100 p-3 rounded-full shadow-md hover:bg-red-200 transition z-10"
        >
          <FaChevronLeft className="text-red-500" size={16} />
        </button>

        {/* Testimonials Scroll Area */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-6 px-8 custom-scrollbar justify-center"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[200px] md:min-w-[320px] bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center flex-shrink-0"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
              <div className="flex mt-2 text-yellow-400">
                {"★".repeat(testimonial.rating)}
              </div>
              <p className="text-gray-600 text-center mt-4 text-sm">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-100 p-3 rounded-full shadow-md hover:bg-red-200 transition z-10"
        >
          <FaChevronRight className="text-red-500" size={16} />
        </button>
      </div>

      {/* Hide Scrollbar */}
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
