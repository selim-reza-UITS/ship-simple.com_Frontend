import { NavLink } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Link classes for Desktop
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 rounded-md bg-white text-primary font-bold transition duration-200"
      : "px-4 py-2 rounded-md text-white hover:bg-white/20 transition duration-200";

  // Link classes for Mobile
  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "block px-4 py-2 rounded-md bg-primary text-white font-bold"
      : "block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100";

  const menuLinks = [
    { to: "/", label: "Home" },
    { to: "#", label: "How it works" },
    { to: "/calculator", label: "Calculator" },
    { to: "#", label: "Contact" },
  ];

  return (
    <nav className="bg-primary shadow-md relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-xl font-bold text-primary uppercase tracking-wider flex items-center gap-2"
            >
              Ship-Simple.Com
            </NavLink>
          </div>

          {/* Center: Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuLinks.map((link) => (
              <NavLink key={link.label} to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right: Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white hover:bg-white/20 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute w-full left-0 top-16 shadow-lg z-50 border-t border-gray-100">
          <ul className="flex flex-col p-4 space-y-2">
            {menuLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  onClick={closeMenu}
                  className={mobileNavLinkClass}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
