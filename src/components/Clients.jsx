import { clients } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Clients = () => {
  return (
    <div className="w-full p-5 md:p-10 lg:px-24 xl:px-16 space-y-8">
      <h2 className="font-semibold text-3xl md:text-4xl ">
        Our valued clients
      </h2>
      <p>
        At Profounder, we have had the privilege of working with a diverse range
        of clients across various industries. Here are some of the clients we've
        had the pleasure of serving
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 xl:gap-10">
        {clients.map((item) => (
          <div key={item.id} className="min-h-[420px] bg-secondary rounded-lg p-3">
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
        <p>01 of 10</p>
        <div className="space-x-3">
          <button className="p-2 rounded-full border border-border">
          <FaLongArrowAltLeft size={14}  />
          </button>
          <button className="p-2 rounded-full border border-border">
          <FaLongArrowAltRight size={14}  />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Clients;
