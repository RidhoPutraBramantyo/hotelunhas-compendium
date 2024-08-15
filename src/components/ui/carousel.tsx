"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const rooms = [
  {
    imageUrl:
      "https://hotelunhas.com/wp-content/uploads/2024/06/Group-Deluxe-Room.png",
    title: "Deluxe Room",
    description:
      "This room is spacious and elegantly designed, covering 34.7 square meters with high-speed Wi-Fi.",
    readMoreLink: "#",
  },
  {
    imageUrl:
      "https://hotelunhas.com/wp-content/uploads/2024/06/Group-Junior-Suite-Room.png",
    title: "Junior Suite Room",
    description:
      "This room is spacious and elegantly designed, covering 34.7 square meters with high-speed Wi-Fi.",
    readMoreLink: "#",
  },
  {
    imageUrl:
      "https://hotelunhas.com/wp-content/uploads/2024/06/Group-Executive-Suite-Room.png",
    title: "Executive Suite Room",
    description:
      "This room is spacious and elegantly designed, covering 34.7 square meters with high-speed Wi-Fi.",
    readMoreLink: "#",
  },
  {
    imageUrl:
      "https://hotelunhas.com/wp-content/uploads/2024/06/Group-Presidential-Suite-Room.png",
    title: "Presidential Suite Room",
    description:
      "This room is spacious and elegantly designed, covering 34.7 square meters with high-speed Wi-Fi.",
    readMoreLink: "#",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(25); // Default value

  const updateSlidesToShow = useCallback(() => {
    if (window.innerWidth < 768) {
      setSlidesToShow(100); // Full width for mobile
    } else {
      setSlidesToShow(25); // Show 4 slides in a row on larger screens
    }
  }, []);

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, [updateSlidesToShow]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + rooms.length) % rooms.length
    );
  };

  return (
    <div className="relative w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto overflow-hidden py-4">
      <div
        className="flex gap-0 md:gap-8 justify-between transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * slidesToShow}%)` }}
      >
        {rooms.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 max-w-xs md:max-w-sm lg:max-w-[250px]"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-xl font-bold whitespace-nowrap">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <a
                href={item.readMoreLink}
                className="text-blue-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
        {rooms.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-blue-500"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
