"use client";
import { steps } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const BusinessSetup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipedLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
  };

  const handleSwipedRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + steps.length) % steps.length);
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
            {steps.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0 p-5">
                <div className="border-l border-primaryBtn p-4">
                  Step 0{item.id}
                </div>
                <div className="w-full min-h-[300px] group gradient-border p-9 space-y-7 flex flex-col items-start justify-center relative backdrop-blur-md overflow-hidden">
                  <div className="absolute top-0 -left-1 bg-primaryBtn w-10 h-10 blur-[30px] group-hover:blur-[15px]"></div>
                  <div className="absolute top-0 left-0 bg-primaryBtn w-10 h-10 blur-[50px] group-hover:blur-[30px]"></div>
                  <div className="absolute -top-7 left-7 bg-primaryBtn w-10 h-10 blur-[50px] group-hover:blur-[30px]"></div>
                  <div className="absolute top-2 left-7 bg-primaryBtn w-10 h-10 blur-[50px] group-hover:blur-[30px]"></div>
                  <div className="flex gap-3 justify-center items-center">
                    <Image
                      src={item.image}
                      className="!h-6 !w-6"
                      width={24}
                      height={24}
                      alt="icon"
                    />
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
        {steps.map((item) => (
          <div key={item.id}>
            <div className="border-l border-primaryBtn p-4">
              Step 0{item.id}
            </div>
            <div className="w-full group min-h-[300px] gradient-border p-9 space-y-7 flex flex-col items-start justify-center relative backdrop-blur-md overflow-hidden">
              <div className="absolute top-0 -left-1 bg-primaryBtn w-10 h-10 blur-[30px] group-hover:w-14 group-hover:h-14 group-hover:blur-[15px]"></div>
              <div className="absolute top-0 left-0 bg-primaryBtn w-10 h-10 blur-[50px] group-hover:w-14 group-hover:h-14 group-hover:blur-[35px]"></div>
              <div className="absolute -top-7 left-7 bg-primaryBtn w-10 h-10 blur-[50px] group-hover:w-14 group-hover:h-14 group-hover:blur-[35px]"></div>
              <div className="absolute top-2 left-7 bg-primaryBtn w-10 h-10 blur-[50px] group-hover:w-14 group-hover:h-14 group-hover:blur-[35px]"></div>
              <div className="flex gap-3 justify-center items-center">
                <Image
                  src={item.image}
                  className="!h-6 !w-6"
                  width={24}
                  height={24}
                  alt="icon"
                />
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
  );
};

export default BusinessSetup;
