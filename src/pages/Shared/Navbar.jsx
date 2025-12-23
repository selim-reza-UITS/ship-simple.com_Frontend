import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Calculator", href: "#calculator" },
    { name: "Admin Login", href: "/login" },
  ];
  return (
    <div className="border-b border-[#E4E4E4] bg-[#FEFEFE38] relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-4 lg:py-7">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[#2563EB] font-medium text-xl">
              Ship-Simple.Com
            </h1>
          </div>
          <div className="hidden lg:block">
            <ul className="flex space-x-5">
              {menuItems.map((item) => (
                <li key={item.name}>
                  {item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      className="text-[#1B1B1B] hover:bg-[#2563EB] rounded-md hover:text-white transition duration-200 px-3 py-2"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        isActive
                          ? "rounded-md bg-[#2563EB] text-white backdrop-blur-[4px] px-3 py-2 transition duration-200"
                          : "text-[#1B1B1B] hover:bg-[#2563EB] rounded-md hover:text-white transition duration-200 px-3 py-2"
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1B1B1B] focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg z-50">
          <ul className="flex flex-col p-4 space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-[#1B1B1B] hover:bg-[#2563EB] rounded-md hover:text-white transition duration-200 px-3 py-2"
                  >
                    {item.name}
                  </a>
                ) : (
                  <NavLink
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block rounded-md bg-[#2563EB] text-white backdrop-blur-[4px] px-3 py-2 transition duration-200"
                        : "block text-[#1B1B1B] hover:bg-[#2563EB] rounded-md hover:text-white transition duration-200 px-3 py-2"
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
