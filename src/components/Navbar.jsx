import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Achievements", to: "achievements" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 text-white">
        <h1 className="text-xl font-bold">Devesh</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {links.map((link) => (
            <li key={link.to} className="hover:text-blue-400 transition duration-200">
              <Link
                to={link.to}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden text-xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur text-white px-6 py-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              offset={-70}
              duration={500}
              className="block text-base font-medium hover:text-blue-400"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

