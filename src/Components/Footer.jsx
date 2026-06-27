import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
   <footer className="bg-[#F7F9FC] pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-50 pb-14">

          {/* Left Section */}
          <div>
            {/* Logo */}
            <div className="flex items-center ">
              <img
                src="./logo.png"
                alt="Bright Future Academy"
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain shrink-0 lg:-mt-5"
              />

              <h2 className="text-xl sm:text-2xl font-bold text-blue-600 leading-tight lg:-mt-7">
                Bright Future Academy
              </h2>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-md text-gray-600 leading-7">
              Empowering the next generation with world-class education,
              personalized mentorship, and a commitment to academic excellence.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-7">
              {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-600">
              {[
                "Home",
                "Courses",
                "Results",
                "About Us",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-600">

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-blue-600 shrink-0 mt-1"
                />
                <p>
                  123 Education Hub,
                  <br />
                  Knowledge Square,
                  <br />
                  Metro City - 400001
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-blue-600 shrink-0"
                />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-blue-600 shrink-0"
                />
                <p>info@brightfuture.com</p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">

          <p className="text-center sm:text-left">
            © 2024 Bright Future Academy. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-blue-600 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
