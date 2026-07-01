import { useState } from "react";
import { Menu, X } from "lucide-react";

import { AnimatePresence, motion } from "motion/react";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Courses", href: "#courses", id: "courses" },
  { name: "Results", href: "#results", id: "results" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];


  return (
   <header className="fixed top-0 left-0 w-full z-50  backdrop-blur-md border-b border-gray-100 rounded-2xl bg-white/40 ">
  <div className="max-w-7xl mx-auto px-5 lg:px-8">
    <nav className="h-20 flex items-center justify-between">

      {/* Left Section */}
      <div className="flex items-center gap-20 ">

        {/* Logo */}
        <div className="flex items-center lg:gap-2 shrink-0 lg:-ml-20  -ml-6">
          <img
            src="./logo.png"
            alt="Bright Future Academy"
            className="w-14 h-14 lg:w-18 lg:h-18 object-contain"
          />

          <h1 className="text-xl lg:text-3xl font-bold text-[#0947a4] whitespace-nowrap">
            Bright Future Academy
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-[17px] font-medium ml-20">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setActive(link.id)}
                className={`relative pb-1 transition-all duration-300 ${
                  active === link.id
                    ? "text-[#0947a4]"
                    : "text-gray-600 hover:text-[#0947a4]"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#0947a4] transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        <button className="hidden lg:block lg:text-2xl bg-[#0947a4] hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 -mr-7">
          Book Demo Class
        </button>

        {/* Mobile Toggle */}
      <button
  className="lg:hidden w-10 h-10 flex items-center justify-center"
  onClick={() => setIsOpen(!isOpen)}
>
  <AnimatePresence mode="wait">
    {isOpen ? (
      <motion.div
        key="close"
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25 }}
      >
        <X size={30} />
      </motion.div>
    ) : (
      <motion.div
        key="menu"
        initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25 }}
      >
        <Menu size={28} />
      </motion.div>
    )}
  </AnimatePresence>
</button>

      </div>

    </nav>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="absolute top-full left-0 w-full lg:hidden bg-white/90 backdrop-blur-2xl border-b border-white/20 shadow-xl py-6">

<ul className="flex flex-col text-center gap-5">
  {navLinks.map((link) => (
    <li key={link.id}>
     <a
  href={link.href}
  onClick={() => {
    setActive(link.id);
    setIsOpen(false);
  }}
  className={`inline-block pb-2 transition-all duration-300 ${
    active === link.id
      ? "text-[#0947a4] border-b-2 border-[#0947a4] font-semibold"
      : "text-gray-600 hover:text-[#0947a4]"
  }`}
>
  {link.name}
</a>
    </li>
  ))}
</ul>

           
          </div>
        )}
      </div>
    </header>
  );
}
