import React from "react";

const FooterComp = () => {
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
          <a href="#" className="hover:text-blue-600 transition c-secondary">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition c-secondary">
            Features
          </a>
          <a href="#" className="hover:text-blue-600 transition c-secondary">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-600 transition c-secondary">
            About
          </a>
          <a href="#" className="hover:text-blue-600 transition c-secondary">
            Contact Us
          </a>
          <a href="#" className="hover:text-blue-600 transition c-secondary">
            Terms and Conditions
          </a>
          <a href="#" className="hover:text-blue-600 transition c-secondary">
            Privacy and Policy
          </a>
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
