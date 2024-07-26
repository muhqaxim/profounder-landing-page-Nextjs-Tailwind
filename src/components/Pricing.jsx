"use client"
import { pricingCards } from "@/constants";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const Pricing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipedLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pricingCards.length);
  };

  const handleSwipedRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pricingCards.length) % pricingCards.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  return (
    <div className="w-full p-5 md:p-10 lg:px-24 xl:px-16 space-y-8">
      <h2 className="font-semibold text-3xl md:text-4xl ">
        Dubai business setup costs
      </h2>
      <p>
        The cost of setting up business in Dubai depends on several variables
        such as the nature of the business operation, the chosen jurisdiction,
        and the number of owners necessitating visas. For an accurate assessment
        of expenses, explore our packages.
      </p>
      <div className="md:hidden" {...handlers}>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {pricingCards.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0 p-5">
                <div className="text-sm lg:text-base flex flex-col gap-3">
                  <h3 className="font-semibold text-base md:text-lg xl:text-xl">{item.title}</h3>
                  <p className="text-sm md:text-base">{item.desc}</p>
                  <div className="bg-primaryBtn p-2 w-fit rounded-lg">
                    {item.visa}
                  </div>
                  <div className="flex gap-2 cursor-pointer hover:scale-105">
                    Get started <FaLongArrowAltRight size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <div className="w-full xl:w-[80%] flex flex-wrap gap-10 xl:gap-x-36 xl:gap-y-10 items-center justify-center">
          {pricingCards.map((item) => (
            <div key={item.id} className="hover:scale-105 text-sm lg:text-base flex flex-col gap-3">
              <h3 className="font-semibold text-base md:text-lg xl:text-xl">{item.title}</h3>
              <p className="text-sm md:text-base">{item.desc}</p>
              <div className="bg-primaryBtn p-2 w-fit rounded-lg">
                {item.visa}
              </div>
              <div className="flex gap-2 cursor-pointer hover:scale-105">
                Get started <FaLongArrowAltRight size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-full rounded-[30px] overflow-hidden">
        <div
          className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url(/BookConsultation.png)" }}
        >
          <div className="absolute inset-0 flex flex-col text-white items-center md:items-start justify-center px-8 md:px-16 ">
            <h2 className="text-6xl xl:text-7xl font-semibold mb-2">
              Your One Stop
            </h2>
            <h3 className="text-base mb-4 capitalize">
              WHERE VISION MEETS VENTURE
            </h3>
            <button className="bg-primaryBtn p-2 md:py-3 px-5 w-fit rounded-lg hover:scale-105">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
