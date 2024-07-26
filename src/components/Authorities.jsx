import { authorities } from "@/constants";
import Image from "next/image";
import React from "react";

const Authorities = () => {
  return (
    <div className="w-full">
      <div className="w-full p-5 md:p-10 lg:px-24 xl:px-16 space-y-8">
        <h2 className="font-semibold text-3xl md:text-4xl">
          Authorities we work with
        </h2>
      </div>
      <div>
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-4">
            {authorities.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="relative w-[200px] h-[130px] rounded-lg border border-border flex items-center justify-center bg-secondary">
                  <Image
                    src={item.image}
                    height={90}
                    width={90}
                    objectFit="contain"
                    alt="authority"
                  />
                </div>
              </div>
            ))}
            {authorities.map((item, index) => (
              <div key={index + authorities.length} className="-0">
                <div className="relative w-[200px] h-[130px] rounded-lg border border-border flex items-center justify-center bg-secondary">
                  <Image
                    src={item.image}
                    height={90}
                    width={90}
                    objectFit="contain"
                    alt="authority"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorities;
