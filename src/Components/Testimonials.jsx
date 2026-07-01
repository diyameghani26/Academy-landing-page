import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Aditi Sharma",
    role: "NEET 2023, Rank 452",
    image: "https://i.pravatar.cc/100?img=32",
    review:
      "The personalized attention I received at Bright Future helped me clarify my core concepts in Physics. I owe my success in NEET to my mentors here.",
  },
  {
    name: "Rahul Verma",
    role: "Class 12 Boards, 98.4%",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "The mock tests and analysis provided here are unmatched. They simulate the real exam pressure perfectly, making the actual boards feel easy.",
  },
  {
    name: "Ishani Goyal",
    role: "Class 9 Student",
    image: "https://i.pravatar.cc/100?img=5",
    review:
      "I joined for Foundation 8th grade, and the way they teach Math is just incredible. I no longer fear numbers; I enjoy them!",
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
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
    <section className="py-7 md:py-18 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{  once: false,
  amount: 0.3,}}
         transition={{
  type: "spring",
  stiffness: 120,
  damping: 10,
}}
          className="text-center mb-3 md:mb-9"
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-blue-600 shadow-lg">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Success Stories
            </h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{  once: false,
  amount: 0.3,}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-500 text-center mt-3 mb-10"
        >
          Hear from our students who turned their dreams into reality.
        </motion.p>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="bg-white border border-gray-200 rounded-2xl p-5 md:p-8 hover:border-blue-500 shadow-sm"
            >
              <motion.div
                className="flex gap-1 text-blue-600 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      rotate: 15,
                      scale: 1.2,
                    }}
                  >
                    <Star size={18} fill="currentColor" />
                  </motion.div>
                ))}
              </motion.div>

              <p className="italic text-gray-700 md:leading-8 mb-8">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}