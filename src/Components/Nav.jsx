import { useState } from "react";
import { Menu, X } from "lucide-react";





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
    <header className="w-full fixed bg-white border-b border-gray-100">
      <div className="w-full py-3  md:px-6 lg:px-4 lg:py-4">
        <nav className="h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="./logo.png"
              alt="Bright Future Academy"
              className="w-12 h-12 sm:w-17 sm:h-17 lg:w-20 lg:h-20 object-contain"
            />
            <h1 className="text-[24px]  font-bold text-[#0947a4] whitespace-nowrap lg:text-2xl">
              Bright Future Academy
            </h1>
          </div>

          {/* Desktop Menu */}
<ul className="hidden lg:flex items-center gap-8">
  {navLinks.map((link) => (
    <li key={link.id}>
      <a
        href={link.href}
        onClick={() => setActive(link.id)}
        className={`relative pb-2 transition-all duration-300 ${
          active === link.id
            ? "text-[#0947a4] font-semibold"
            : "text-gray-600 hover:text-[#0947a4]"
        }`}
      >
        {link.name}

        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-[#0947a4] transition-all duration-300 ${
            active === link.id ? "w-full" : "w-0"
          }`}
        ></span>
      </a>
    </li>
  ))}
</ul>

          {/* Right Side Button */}
          <div className="hidden lg:block shrink-0">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition lg:text-xl">
              Book Demo Class
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden mr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={24}  />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gray-100 text-center  py-6">

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

            <button className="w-full mt-4 bg-[#0947a4] text-white py-3 rounded-xl">
              Book Demo Class
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
