import { useState } from "react";
import ThemeToggle from "../layout/ThemeToggle";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();

const isActive = (hash) => {
  return location.hash === hash && location.pathname === "/";
};
const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; // adjust this value to control the space from top
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

  return (
    <nav className="bg_light fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h3 className="c-primary text-3xl">LOGO</h3>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className=" font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-2 px-4 rounded-[12px]"
            onClick={() => navigate("/sign-up")}
          >
            Get started Free
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <HashLink to="/#home" scroll={scrollWithOffset} smooth className={`block py-2 px-3 ${isActive('#home') ? "c-primary" : "c-secondary"}`}>Home</HashLink>
            </li>
            <li>
              <HashLink to="#features" scroll={scrollWithOffset} smooth className={`block py-2 px-3 ${isActive('#features') ? "c-primary" : "c-secondary"}`}>Features</HashLink>
            </li>
            <li>
              <HashLink to="#pricing" scroll={scrollWithOffset} smooth className={`block py-2 px-3 ${isActive('#pricing') ? "c-primary" : "c-secondary"}`}>Pricing</HashLink>
            </li>
            <li>
              <HashLink to="#about_us" scroll={scrollWithOffset} smooth className={`block py-2 px-3 ${isActive('#about_us') ? "c-primary" : "c-secondary"}`}>About Us</HashLink>
            </li>
            <li>
              <HashLink to="#contact" scroll={scrollWithOffset} smooth className={`block py-2 px-3 ${isActive('#contact') ? "c-primary" : "c-secondary"}`}>Contact</HashLink>
            </li>
            <li className="flex items-center">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
