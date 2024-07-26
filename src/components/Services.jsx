import { services } from "@/constants";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="w-full p-5 md:p-10 lg:px-24 xl:px-16 space-y-8">
      <h2 className="font-semibold text-3xl md:text-4xl">
        Get your UAE business up and running quickly
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
        {services.map(
          (item) =>
            item.id < 4 && (
              <div
                key={item.id}
                className="w-full border border-border rounded-[10px] p-9 space-y-7 flex flex-col items-start justify-center "
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
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
        {services.map(
          (item) =>
            item.id > 3 && (
              <div
                key={item.id}
                className="w-full border border-border rounded-[10px] p-9 space-y-7 flex flex-col items-start justify-center "
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
