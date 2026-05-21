"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Do you offer home delivery?",
    answer: "Yes, we provide fast and reliable home delivery within your city."
  },
  {
    question: "Can I reserve a table online?",
    answer: "Absolutely! You can reserve a table using our online reservation system."
  },
  {
    question: "Do you have vegetarian options?",
    answer: "Yes, we offer a wide variety of vegetarian and vegan dishes."
  },
  {
    question: "What are your opening hours?",
    answer: "We are open from 10:00 AM to 10:00 PM on weekdays and till 11:00 PM on weekends."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-5 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 cursor-pointer bg-white shadow-sm"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">
                {faq.question}
              </h3>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}