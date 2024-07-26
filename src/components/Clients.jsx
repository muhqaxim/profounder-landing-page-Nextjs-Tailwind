"use client";
import { clients } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipedLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const handleSwipedRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  return (
    <div className="w-full p-5 md:p-10 lg:px-24 xl:px-16 space-y-8">
      <h2 className="font-semibold text-3xl md:text-4xl">
        Our valued clients
      </h2>
      <p>
        At Profounder, we have had the privilege of working with a diverse range
        of clients across various industries. Here are some of the clients we've
        had the pleasure of serving
      </p>
      <div className="md:hidden" {...handlers}>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {clients.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0 p-5">
                <div className="min-h-[420px] bg-secondary rounded-lg p-3">
                  <div className="shadow-glow flex flex-col h-full gap-7 border border-border bg-primary p-3 md:p-10 rounded-lg">
                    <div className="space-y-2">
                      {item.date}
                      <div className="font-semibold text-xl md:text-2xl">
                        {item.name}
                      </div>
                    </div>
                    <div className="flex w-full items-center">
                      <div className="w-1/2 text-sm pr-2 border-r border-border">
                        <div className="flex gap-2">
                          <Image src="/domain.png" width={20} height={20} />
                          Domain
                        </div>
                        {item.domian}
                      </div>
                      <div className="w-1/2 text-sm border-l border-border pl-2 md:pl-5">
                        <div className="flex gap-2 ">
                          <Image src="/category.png" width={20} height={20} />
                          Category
                        </div>
                        {item.category}
                      </div>
                    </div>
                    <div className="rounded-lg p-5 xl:p-6 space-y-2 border border-border">
                      <p>What They Said 🤗</p>
                      <p>{item.feedback}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between py-3">
          <button onClick={handlePrev} className="p-2 rounded-full border border-border">
            <FaLongArrowAltLeft size={14} />
          </button>
          <button onClick={handleNext} className="p-2 rounded-full border border-border">
            <FaLongArrowAltRight size={14} />
          </button>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 w-full gap-5 xl:gap-10">
        {clients.map((item) => (
          <div key={item.id} className="hover:scale-105 min-h-[420px] bg-secondary rounded-lg p-3">
            <div className="shadow-glow flex flex-col h-full gap-7 border border-border bg-primary p-3 md:p-10 rounded-lg">
              <div className="space-y-2">
                {item.date}
                <div className="font-semibold text-xl md:text-2xl">
                  {item.name}
                </div>
              </div>
              <div className="flex w-full items-center">
                <div className="w-1/2 text-sm pr-2 border-r border-border">
                  <div className="flex gap-2">
                    <Image src="/domain.png" width={20} height={20} />
                    Domain
                  </div>
                  {item.domian}
                </div>
                <div className="w-1/2 text-sm border-l border-border pl-2 md:pl-5">
                  <div className="flex gap-2 ">
                    <Image src="/category.png" width={20} height={20} />
                    Category
                  </div>
                  {item.category}
                </div>
              </div>
              <div className="rounded-lg p-5 xl:p-6 space-y-2 border border-border">
                <p>What They Said 🤗</p>
                <p>{item.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-border w-full text-xs flex justify-between py-3">
        <p>{`${currentIndex + 1} of ${clients.length}`}</p>
        <div className="space-x-3 hidden md:flex">
          <button onClick={handlePrev} className="p-2 rounded-full border border-border">
            <FaLongArrowAltLeft size={14} />
          </button>
          <button onClick={handleNext} className="p-2 rounded-full border border-border">
            <FaLongArrowAltRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
