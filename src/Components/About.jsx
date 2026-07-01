import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-12 md:py-15 bg-[#F7F9FC]">
      <div className="max-w-4xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{  once: false,
  amount: 0.3, }}
        transition={{
  type: "spring",
  stiffness: 120,
  damping: 10,
}}
          className="flex justify-center mb-12"
        >
          <div className="inline-block px-4 py-2 md:px-8 md:py-4 rounded-2xl bg-blue-600 shadow-lg">
            <h2 className="text-3xl font-bold text-white text-center">
              Frequently Asked Questions
            </h2>
          </div>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          className="space-y-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold">{faq.question}</span>

                <motion.div
                  animate={{ rotate: open === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-7">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
