"use client"
import React, { useState } from "react";
import { additionalServices } from "@/constants";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const AdditionalServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipedLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % additionalServices.length);
  };

  const handleSwipedRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + additionalServices.length) % additionalServices.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  return (
    <div className="w-full p-5 md:p-10 lg:px-24 xl:px-16 space-y-8">
      <h2 className="font-semibold text-3xl md:text-4xl">
        Additional services we offer
      </h2>
      <div className="md:hidden" {...handlers}>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {additionalServices.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <div className="w-full rounded-lg h-full min-h-[400px] bg-secondary p-2">
                  <div className="shadow-glow shadow-border border border-border rounded-lg w-full h-full flex flex-col">
                    <div className="h-48 md:h-64 w-full relative">
                      <Image
                        src={item.image}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                        alt="Service Image"
                      />
                    </div>
                    <div className="flex-1 p-3 md:p-6 w-full bg-primary">
                      <p className="text-xl font-semibold">{item.heading}</p>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
          {additionalServices.map(
            (item) =>
              item.id < 4 && (
                <div
                  key={item.id}
                  className="hover:scale-105 w-full rounded-lg h-full min-h-[400px] bg-secondary p-2"
                >
                  <div className="shadow-glow shadow-border border border-border rounded-lg w-full h-full flex flex-col">
                    <div className="h-48 md:h-64 w-full relative">
                      <Image
                        src={item.image}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                        alt="Service Image"
                      />
                    </div>
                    <div className="flex-1 p-3 md:p-6 w-full bg-primary">
                      <p className="text-xl font-semibold">{item.heading}</p>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
          {additionalServices.map(
            (item) =>
              item.id > 3 && (
                <div
                  key={item.id}
                  className="hover:scale-105 w-full rounded-lg h-full min-h-[400px] bg-secondary p-2"
                >
                  <div className="shadow-glow border border-border rounded-lg w-full h-full flex flex-col">
                    <div className="h-48 md:h-64 w-full relative">
                      <Image
                        src={item.image}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                        alt="Service Image"
                      />
                    </div>
                    <div className="flex-1 p-3 md:p-6 w-full bg-primary ">
                      <p className="text-xl font-semibold">{item.heading}</p>
                      <p className="text-sm xl:text-base">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
