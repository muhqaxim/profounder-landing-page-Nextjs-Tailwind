import React from "react";
import { additionalServices } from "@/constants";
import Image from "next/image";

const AdditionalServices = () => {
  return (
    <div className="w-full p-5 md:p-10 lg:px-24 xl:px-16 space-y-8">
      <h2 className="font-semibold text-3xl md:text-4xl">
        Additional services we offer
      </h2>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
          {additionalServices.map(
            (item) =>
              item.id < 4 && (
                <div
                  key={item.id}
                  className="w-full rounded-lg h-full min-h-[400px] bg-secondary p-2"
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
                  className="w-full rounded-lg h-full min-h-[400px] bg-secondary p-2"
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
