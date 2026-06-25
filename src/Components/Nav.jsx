import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="w-full  md:px-6 lg:px-4 lg:py-4">
        <nav className="h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="./logo.png"
              alt="Bright Future Academy"
              className="w-12 h-12 sm:w-17 sm:h-17 lg:w-20 lg:h-20 object-contain"
            />
            <h1 className="text-[17px]  font-bold text-[#0947a4] whitespace-nowrap lg:text-2xl">
              Bright Future Academy
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden  lg:flex items-center gap-5 text-gray-600 font-medium sm:text-base md:text-[20px] ">
           
            <li>Home</li>
            <li>Courses</li>
            <li>Results</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          {/* Right Side Button */}
          <div className="hidden md:block shrink-0">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition lg:text-xl">
              Book Demo Class
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden mr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={24}  />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t py-4  ">
            <ul className="flex flex-col gap-4">
           
            <li>Home</li>
            <li>Courses</li>
            <li>Results</li>
            <li>About</li>
            <li>Contact</li>
            </ul>

            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl">
              Book Demo Class
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
