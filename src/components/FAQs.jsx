"use client";
import React, { useState } from "react";
import { faqs } from "@/constants";
import { IoAddOutline } from "react-icons/io5";
const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full p-5 md:p-10 lg:px-24 xl:px-16 space-y-8">
      <h2 className="font-semibold text-3xl md:text-4xl">FAQs </h2>
      <div className="mx-auto flex flex-col gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full border border-border rounded-lg">
            <div className=" flex items-center justify-between ">
            <h3 className="w-full text-sm md:text-lg font-semibold ml-4 md:ml-8">{faq.question}</h3>
            <button
              onClick={() => toggleAccordion(index)}
              className=" bg-primaryBtn h-16 w-16 flex items-center justify-center rounded-r-lg  p-4 focus:outline-none"
            >
              <IoAddOutline size={22}/>
            </button>
            </div>
            {openIndex === index && (
              <div className="p-4 md:p-8 text-xs md:text-base">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
