import { footer_Contact, footer_QuickLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-t border-border p-4 md:p-6 xl:p-20 flex flex-col lg:flex-row gap-5 xl:gap-20">
      <div className="w-full lg:w-2/5 space-y-6">
        <Image src="/logo.png" width={174} height={40} alt="logo" />
        <p className="text-sm lg:text-base">
          We stand out by providing personalized solutions tailored to our
          clients’ specific needs to ensure that their important needs are
          handled quickly and accurately. Our commitment to efficiency and
          reliability gives us an edge in delivering high-quality solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-0 w-full lg-w-3/5">
        <div className="space-y-6">
          <h3 className=" text-lg">Quick Links</h3>
          {footer_QuickLinks.map((item) => (
            <li
              key={item.id}
              className="text-sm lg:text-base list-none space-y-4"
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </div>
        <div className="space-y-6">
          <h3 className=" text-lg">Let's Connect</h3>
          {footer_Contact.map((item) => (
            <li
              key={item.id}
              className="text-sm lg:text-base list-none space-y-4"
            >
              {item.name}: <Link href={item.link}>{item.desc}</Link>
            </li>
          ))}
        </div>
        <div className="space-y-6">
          <h3 className=" text-lg">Visit Us</h3>
          <p className="text-sm lg:text-base">
            Al Barsha Business Center Office 431, Al Barsha 1, Dubai
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
