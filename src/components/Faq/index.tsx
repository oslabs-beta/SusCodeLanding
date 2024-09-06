"use client";

import React, { useState } from "react";
import Graphics from "@/components/Faq/Graphics";
import faqData from "./faqData";
import FAQItem from "./FAQItem";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const handleFaqToggle = (index: number) => {
    activeFaq === index ? setActiveFaq(0) : setActiveFaq(index);
  };

  return (
    <>
      <section
        id="faq"
        className="relative z-10 bg-[#F8FAFB] py-[110px] dark:bg-[#15182B]"
      >
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
          </div>

          <div
            className="faqs wow fadeInUp mx-auto w-full max-w-[785px] rounded-lg bg-white px-6 py-[6px] shadow-card dark:bg-black dark:shadow-card-dark"
            data-wow-delay=".3s"
          >
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                faqData={{ ...faq, activeFaq, handleFaqToggle }}
              />
            ))}
          </div>
        </div>

        {/*Graphics*/}
        <Graphics />
      </section>
    </>
  );
};

export default Faq;
