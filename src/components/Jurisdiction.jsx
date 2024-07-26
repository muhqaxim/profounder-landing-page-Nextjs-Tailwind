"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const Jurisdiction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const jurisdictions = [
    {
      title: "Mainland",
      description: "A company formation in Dubai Mainland offers unparalleled advantages and opportunities for entrepreneurs seeking to establish a strong presence in the region. This includes freedom to conduct business activities anywhere within the UAE, a diverse range of investment opportunities, no limit on the number of visas, and a broad scope of trading and conducting business activities within and outside the country.",
      link: "",
    },
    {
      title: "Free Zone",
      description: "Company formation in a Free Zone offers benefits such as 100% foreign ownership, tax exemptions, and simplified company setup procedures. It provides a favorable environment for businesses targeting international markets and seeking to operate within specific sectors or industries.",
      link: "",
    },
  ];

  const handleSwipedLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % jurisdictions.length);
  };

  const handleSwipedRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + jurisdictions.length) % jurisdictions.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  return (
    <div>
      <div className="w-full p-5 md:p-10 lg:px-24 xl:px-16 space-y-8">
        <h2 className="font-semibold text-3xl md:text-4xl">
          Choose your jurisdiction
        </h2>
        <div className="md:hidden" {...handlers}>
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {jurisdictions.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 p-5">
                  <div className="text-center border border-white rounded-lg p-5 xl:py-6 xl:px-8 flex flex-col gap-4 items-center justify-center">
                    <h3 className="semibold text-lg md:text-xl">{item.title}</h3>
                    <p className="text-sm md:text-base">
                      <span className="underline ">{item.title}</span> {item.description}
                    </p>
                    <Link href={item.link}>
                      <button className="bg-primaryBtn text-sm xl:text-base px-8 py-3 rounded-md  hover:scale-105">
                        Learn more
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-5 w-full justify-between">
          {jurisdictions.map((item, index) => (
            <div key={index} className="hover:scale-105 text-center border border-white rounded-lg p-5 xl:py-6 xl:px-8 flex flex-col gap-4 items-center justify-center">
              <h3 className="semibold text-lg md:text-xl">{item.title}</h3>
              <p className="text-sm md:text-base">
                <span className="underline ">{item.title}</span> {item.description}
              </p>
              <Link href={item.link}>
                <button className="bg-primaryBtn text-sm xl:text-base px-8 py-3 rounded-md  hover:scale-105">
                  Learn more
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jurisdiction;
