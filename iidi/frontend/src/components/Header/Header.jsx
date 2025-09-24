import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

// Navigation Links
const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Courses", to: "/course", dropdown: true },
  { name: "Fee Payment", to: "/payment" },
];

// Course categories for dropdown
const courseCategories = [
  { name: "Data Science & AI", to: "/datascience" },
  { name: "Digital Marketing With AI", to: "" },
  { name: "Influencer Marketing With Content Creation", to: "" },
];

// SVG Icons
const LogoIcon = () => <img src="/logo.png" alt="logo" className="h-13 w-13" />;

const DropdownIcon = ({ isOpen }) => (
  <svg
    className={`w-4 h-4 ml-1 text-gray-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCourseClick = (courseName) => {
    setActiveLink("Courses");
    setIsDropdownOpen(false);
  };

  return (
    <div className="font-sans">
      <header className="max-w-6xl mx-auto fixed top-0 left-0 right-0 z-50 bg-white rounded-full shadow-md">
        <div className="bg-white rounded-full shadow-lg px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center justify-center h-12 w-12 bg-blue-100 rounded-full">
                <LogoIcon />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex md:items-center md:space-x-8 lg:space-x-10">
              {navLinks.map((link) => (
                <div key={link.name} className="relative" ref={link.name === "Courses" ? dropdownRef : null}>
                  <Link
                    to={link.to}
                    onClick={(e) => {
                      if (link.dropdown) {
                        e.preventDefault();
                        setIsDropdownOpen(!isDropdownOpen);
                        setActiveLink(link.name);
                      } else {
                        setActiveLink(link.name);
                        setIsDropdownOpen(false);
                      }
                    }}
                    className={`relative text-base font-medium transition-colors duration-200 ${activeLink === link.name ? "text-red-500" : "text-gray-600 hover:text-red-500"
                      }`}
                  >
                    <span className="flex items-center">
                      {link.name}
                      {link.dropdown && <DropdownIcon isOpen={isDropdownOpen && activeLink === link.name} />}
                    </span>
                    {activeLink === link.name && (
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-red-500 rounded-full"></span>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && isDropdownOpen && activeLink === link.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
                      <div className="py-2">
                        {courseCategories.map((course) => (
                          <Link
                            key={course.name}
                            to={course.to}
                            onClick={() => handleCourseClick(course.name)}
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-500 transition-colors duration-150"
                          >
                            <span className="font-medium">{course.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {!user ? null : (
                <>
                  <span className="text-gray-700">Hi, {user.name}</span>
                  <button
                    onClick={async () => {
                      await logout();
                      navigate("/");
                    }}
                    className="px-4 py-2 rounded-full border border-gray-200 text-gray-700"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.to}
                    onClick={(e) => {
                      if (link.dropdown) {
                        e.preventDefault();
                        setIsDropdownOpen(!isDropdownOpen);
                        setActiveLink(link.name);
                      } else {
                        setActiveLink(link.name);
                        setIsMenuOpen(false);
                      }
                    }}
                    className={`flex items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ${activeLink === link.name ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                  >
                    <span>{link.name}</span>
                    {link.dropdown && <DropdownIcon isOpen={isDropdownOpen && activeLink === link.name} />}
                  </Link>

                  {/* Mobile Dropdown */}
                  {link.dropdown && isDropdownOpen && activeLink === link.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {courseCategories.map((course) => (
                        <Link
                          key={course.name}
                          to={course.to}
                          onClick={() => {
                            handleCourseClick(course.name);
                            setIsMenuOpen(false);
                          }}
                          className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-gray-50 rounded-md transition-colors duration-150"
                        >
                          <span>{course.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="block w-full px-5 py-3 text-center font-medium text-red-600 bg-gray-50 hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>

      {/* Spacer div to prevent content being hidden under fixed header */}
      <div className="pt-20"></div>
    </div>
  );
}
