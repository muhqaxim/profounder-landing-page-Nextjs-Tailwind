import { partner } from "@/constants";
import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="w-full">
      <div className="w-full p-5 md:p-10 lg:px-24 xl:px-16 space-y-8">
        <h2 className="font-semibold text-3xl md:text-4xl">Our Partners </h2>
      </div>
      <div>
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-4">
            {partner.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="relative shadow-lg w-[200px] h-[130px] rounded-lg border border-border flex items-center justify-center">
                  <Image src={item.image} width={120} height={70}  alt="partner"/>
                </div>
              </div>
            ))}
            {partner.map((item, index) => (
              <div key={index + partner.length} className="-0">
                <div className="relative shadow-lg w-[200px] h-[130px] rounded-lg border border-border flex items-center justify-center">
                <Image src={item.image} width={120} height={70}  alt="partner" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
