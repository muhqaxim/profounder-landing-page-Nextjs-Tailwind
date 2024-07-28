"use client"
import { heroCards, heroServices } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipedLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroServices.length);
  };

  const handleSwipedRight = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroServices.length) % heroServices.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  return (
    <div className="w-full h-full pb-5 md:pb-10">
      <div className="w-full h-full flex flex-col-reverse md:flex-row gap-5 md:gap-0 px-5 md:px-0 md:pl-10 lg:pl-28">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-6 xl:gap-12">
          <div className="space-y-6 py-5 md:py-10">
            <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
              Dubai Business Setup Made Easy
            </h1>
            <p className="text-sm xl:text-base w-[90%]">
              Launch Your Dream Company in Dubai with ProFounders&apos; Hassle-Free
              Services.
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full flex justify-start gap-4">
            <Link
              href="/"
              className="border border-border text-sm xl:text-base px-5 py-3 rounded-md hover:scale-105"
            >
              Browse Services
            </Link>
            <Link
              href="/"
              className="bg-primaryBtn text-sm xl:text-base px-5 py-3 rounded-md hover:scale-105"
            >
              Book Consultation
            </Link>
          </div>

          {/* Hero Cards */}
          <div className="w-full grid grid-cols-3 gap-4">
            {heroCards.map((item, index) => (
              <div
                key={index}
                className="rounded-md md:py-[14px] p-2 md:px-5 space-y-[2px] border border-border bg-secondary"
              >
                <p className="font-bold text-xl xl:text-3xl"> {item.number} </p>
                <p className="text-xs xl:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-end items-center">
          <Image src={"/hero.png"} alt="Hero Image" width={620} height={600} />
        </div>
      </div>

      {/* service cards */}
      <div className="md:hidden" {...handlers}>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {heroServices.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex justify-center p-5"
              >
                <div className="h-[160px] w-[250px] relative flex flex-col items-center justify-center gap-4 p-4 rounded-[10px] bg-secondary border border-border">
                  <Image
                    src="/arrowUp.png"
                    className="absolute top-2 right-2"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/offers.png"
                    alt="offers"
                    height={60}
                    width={60}
                  />
                  <p className="font-semibold text-sm">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col md:flex-row md:flex-wrap gap-4 justify-center items-center">
        {heroServices.map((item, index) => (
          <div
            key={index}
            className="hover:scale-105 h-[160px] w-[250px] relative flex flex-col items-center justify-center gap-4 p-4 rounded-[10px] bg-secondary border border-border"
          >
            <Image
              src="/arrowUp.png"
              className="absolute top-2 right-2"
              width={20}
              height={20}
            />
            <Image src="/offers.png" alt="offers" height={60} width={60} />
            <p className="font-semibold text-sm">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
