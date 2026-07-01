import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="px-5 py-9 pb-1 md:pb-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{  once: false,
           amount: 0.3,}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto bg-blue-600 rounded-3xl px-6 md:px-14 py-9 flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-10"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{  once: false,
            amount: 0.3,}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Start Your
            <br />
            Learning Journey?
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{  once: false,
                amount: 0.3, }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="md:mt-6 mt-4 text-blue-100 max-w-xl md:text-xl"
          >
            Join hundreds of successful students and take
            the first step towards your academic goals
            today.
          </motion.p>
        </motion.div>

        {/* Button */}
      <Link to="/enrollment" >
       <motion.button
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{  once: false,
              amount: 0.3,}}
          transition={{ delay: 0.5, duration: 0.7 }}
          whileHover={{
            scale: 1.08,
            y: -3,
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-semibold px-10 md:py-5 py-4 mt-3 rounded-xl md:text-xl shadow-lg"
        >
          Enroll Now
        </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}