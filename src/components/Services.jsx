"use client";
import { services } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipedLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handleSwipedRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  return (
    <div className="w-full p-5 md:p-10 lg:px-24 xl:px-16 space-y-8">
      <h2 className="font-semibold text-3xl md:text-4xl">
        Get your UAE business up and running quickly
      </h2>
      <div className="md:hidden" {...handlers}>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 p-5">
                <div className="w-full border border-border rounded-[10px] p-9 space-y-7 flex flex-col items-start justify-center ">
                  <div className="flex gap-2 justify-center items-center">
                    <Image src={item.icon} className="!h-6 !w-6" width={24} height={24} alt="icon" />
                    <p className="text-base xl:text-xl font-semibold">
                      {item.title}
                    </p>
                  </div>
                  <p className="text-sm xl:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 w-full gap-5">
        {services.map(
          (item) =>
            item.id < 4 && (
              <div
                key={item.id}
                className="hover:scale-105 w-full border border-border rounded-[10px] p-9 space-y-7 flex flex-col items-start justify-center "
              >
                <div className="flex gap-2 justify-center items-center">
                  <Image src={item.icon} className="!h-6 !w-6" width={24} height={24} alt="icon" />
                  <p className="text-base xl:text-xl font-semibold">
                    {item.title}
                  </p>
                </div>
                <p className="text-sm xl:text-base">{item.desc}</p>
              </div>
            )
        )}
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 w-full gap-5">
        {services.map(
          (item) =>
            item.id > 3 && (
              <div
                key={item.id}
                className="hover:scale-105 w-full border border-border rounded-[10px] p-9 space-y-7 flex flex-col items-start justify-center "
              >
                <div className="flex gap-2">
                  <Image src={item.icon} className="!h-6 !w-6" width={24} height={24} alt="icon" />
                  <p className="text-base xl:text-xl font-semibold">
                    {item.title}
                  </p>
                </div>
                <p className="text-sm xl:text-base">{item.desc}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Services;
