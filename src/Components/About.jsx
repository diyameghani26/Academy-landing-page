import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I book a demo class?",
      answer:
        "Click on the 'Book Demo Class' button, fill in your details, and our team will contact you shortly.",
    },
    {
      question: "What is the teacher-to-student ratio?",
      answer:
        "We maintain a low teacher-to-student ratio to ensure every student receives personalized attention.",
    },
    {
      question: "Are there online classes available?",
      answer:
        "Yes! We offer both online and offline classes with live doubt-solving sessions.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
   <section className="py-12 md:py-15 bg-[#F7F9FC]">
  <div className="max-w-4xl mx-auto px-5">

    <div className="flex justify-center mb-12">
      <div className="inline-block px-4 py-2 md:px-8  md:py-4 rounded-2xl bg-blue-600 shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center">
          Frequently Asked Questions
        </h2>
      </div>
    </div>
        

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  size={20}
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-5 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
