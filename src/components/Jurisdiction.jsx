import Link from "next/link";
import React from "react";

const Jurisdiction = () => {
  return (
    <div>
      <div className="w-full p-5 md:p-10 lg:px-24 xl:px-16 space-y-8">
        <h2 className="font-semibold text-3xl md:text-4xl">
          Choose your jurisdiction
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full justify-between">
          <div className="text-center border border-white rounded-lg p-5 xl:py-6 xl:px-8 flex flex-col gap-4 items-center justify-center">
            <h3 className="semibold texxt-lg md:text-xl">Mainland</h3>
            <p className="text-sm md:text-base">
              A{" "}
              <span className="underline ">
                company formation in Dubai Mainland
              </span>{" "}
              offers unparalleled advantages and opportunities for entrepreneurs
              seeking to establish a strong presence in the region. This
              includes freedom to conduct business activities anywhere within
              the UAE, a diverse range of investment opportunities, no limit on
              the number of visas, and a broad scope of trading and conducting
              business activities within and outside the country.
            </p>
            <Link href="">
              <button className="bg-primaryBtn text-sm xl:text-base px-8 py-3 rounded-md  hover:scale-105">
                Learn more
              </button>
            </Link>
          </div>
          <div className="text-center border border-white rounded-lg p-5 xl:py-6 xl:px-8 flex flex-col gap-4 items-center justify-center">
            <h3 className="semibold texxt-lg md:text-xl">Mainland</h3>
            <p className="text-sm md:text-base">
              A{" "}
              <span className="underline ">
                company formation in Dubai Mainland
              </span>{" "}
              offers unparalleled advantages and opportunities for entrepreneurs
              seeking to establish a strong presence in the region. This
              includes freedom to conduct business activities anywhere within
              the UAE, a diverse range of investment opportunities, no limit on
              the number of visas, and a broad scope of trading and conducting
              business activities within and outside the country.
            </p>
            <Link href="">
              <button className="bg-primaryBtn text-sm xl:text-base px-8 py-3 rounded-md  hover:scale-105">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jurisdiction;
