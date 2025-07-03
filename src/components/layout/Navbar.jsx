import React from "react";
import {
  BarsIcon,
  NotificationIcon,
  SearchIcon,
  SolorIcon,
} from "../../CustomIcons";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ onBarClick }) {
  return (
    <div className="bg-sidebar p-4 rounded-[16px] border border-main">
      <div className="flex items-center gap-4 justify-between">
        <label
          htmlFor="search"
          className="border border-main w-full p-2 rounded-full max-w-[350px] flex items-center gap-2 justify-between"
        >
          <input
            className="placeholder:text-[var(--csecondary)] c-secondary outline-0 w-full"
            type="search"
            name="search"
            id="search"
            placeholder="Search here..."
          />
          <SearchIcon className="c-secondary text-2xl" />
        </label>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="text-xl c-primary relative">
            <NotificationIcon />
            <div className="absolute size-2 border-2 rounded-full bg-navlink top-0 right-0 border-[var(--bgbody)]"></div>
          </button>
          <button
            onClick={() => onBarClick((prev) => !prev)}
            className="text-xl c-primary sm:hidden"
          >
            <BarsIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
