import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{ duration: 0.8 }}
      className="relative bg-[#F7F9FC] pt-16 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20"
        >
          {/* Logo */}
          <div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3"
            >
              <img
                src="./logo.png"
                alt="Bright Future Academy"
                className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
              />

              <h2 className="text-xl font-bold leading-tight text-blue-600 sm:text-2xl">
                Bright Future Academy
              </h2>
            </motion.div>

            <p className="mt-5 max-w-md leading-7 text-gray-600">
              Empowering the next generation with world-class education,
              personalized mentorship, and a commitment to academic excellence.
            </p>

            <div className="mt-7 flex gap-4">
              {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-600">
              {["Home", "Courses", "Results", "About Us", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 8 }}
                      className="transition hover:text-blue-600"
                    >
                      {item}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-blue-600" />

                <p>
                  123 Education Hub
                  <br />
                  Knowledge Square
                  <br />
                  Metro City - 400001
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-blue-600" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-blue-600" />
                <p>info@brightfuture.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-6 text-center text-sm text-gray-600 md:flex-row md:text-left"
        >
          <p>
            © 2024 Bright Future Academy. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:justify-end">
            <a href="#" className="transition hover:text-blue-600">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll To Top Button */}
      {showTop && (
        <button
          onClick={scrollTop}
          aria-label="Scroll to top"
          className=" fixed bottom-4 right-11 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14  items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-colors hover:bg-blue-700 z-50
          "
        >
          <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      )}
    </motion.footer>
  );
}