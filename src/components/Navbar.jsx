"use client";
import React, { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-secondary border-b border-border flex items-center justify-between p-3 lg:px-10 xl:px-20">
      <div className="flex items-center justify-between w-full">
        <Image src="/logo.png" alt="Profounders" width={180} height={100} />

        {/* Menu Icon  */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <IoMenu size={30} />
          </button>
        </div>

        {/* Links for larger screens */}
        <div className={`hidden lg:flex gap-2 xl:gap-3`}>
          {navLinks.map((item) => (
            <Link href={item.link} key={item.id}>
              <div
                className={`text-white font-normal text-sm cursor-pointer rounded-md hover:bg-primaryBtn xl:px-5 p-3 ${
                  active === item.title ? "bg-primaryBtn" : ""
                }`}
                onClick={() => {
                  setActive(item.title);
                  setIsOpen(false);
                }}
              >
                {item.title}
              </div>
            </Link>
          ))}
        </div>

        <Link href="/" className="hidden lg:flex">
          <button className="text-white font-normal text-sm cursor-pointer rounded-md bg-primaryBtn px-5 py-3  hover:scale-105">
            Contact us
          </button>
        </Link>
      </div>
      {/* Dropdown Menu for small and md screens */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } absolute bg-secondary px-4 top-16 left-0 shadow-lg rounded-md w-screen h-screen`}
      >
        {navLinks.map((item) => (
          <Link href={item.link} key={item.id}>
            <div
              className={`text-white font-normal text-sm cursor-pointer rounded-md hover:bg-primaryBtn px-5 py-3 ${
                active === item.title ? "bg-primaryBtn" : ""
              }`}
              onClick={() => {
                setActive(item.title);
                setIsOpen(false);
              }}
            >
              {item.title}
            </div>
          </Link>
        ))}
        <Link href="/" className="w-full ml-4">
          <button className="w-fit text-white font-normal text-sm cursor-pointer rounded-md bg-primaryBtn px-5 py-3  hover:scale-105">
            Contact us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
