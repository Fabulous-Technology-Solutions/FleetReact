import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const FooterComp = () => {
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
    <footer className="bg_light py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
        {/* Left Column: Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold c-primary">
            LOGO<span className="text-blue-600">.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed c-secondary">
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>

        {/* Center Column: Links */}
        <div className="flex flex-col gap-2 text-sm">
          <HashLink scroll={scrollWithOffset} smooth to="#home" className={`hover:text-blue-600 transition ${isActive('#home') ? "c-primary" : "c-secondary"}`}>
            Home
          </HashLink>
          <HashLink scroll={scrollWithOffset} smooth to="#features" className={`hover:text-blue-600 transition ${isActive('#features') ? "c-primary" : "c-secondary"}`}>
            Features
          </HashLink>
          <HashLink scroll={scrollWithOffset} smooth to="#pricing" className={`hover:text-blue-600 transition ${isActive('#pricing') ? "c-primary" : "c-secondary"}`}>
            Pricing
          </HashLink>
          <HashLink scroll={scrollWithOffset} smooth to="#about_us" className={`hover:text-blue-600 transition ${isActive('#about_us') ? "c-primary" : "c-secondary"}`}>
            About
          </HashLink>
          <HashLink scroll={scrollWithOffset} smooth to="#contact" className={`hover:text-blue-600 transition ${isActive('#contact') ? "c-primary" : "c-secondary"}`}>
            Contact Us
          </HashLink>
        </div>

        {/* Right Column: Newsletter */}
        <div>
          <h3 className="text-sm font-semibold c-primary mb-3">
            Subscribe To Newsletter
          </h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md mb-3 c-primary"
          />
          <button className="w-full font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-2 px-4 rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-10 text-xs text-gray-500">
        © 2025 SajidKhan. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComp;
