import React, { useEffect, useState } from "react";
import { SolorIcon } from "../../CustomIcons";

const ThemeToggle = () => {
  const [rotated, setRotated] = useState(false);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--bgbody", "#0E0E10");
      root.style.setProperty("--bgsidebar", "#15161A");
      root.style.setProperty("--bgcardcontainer", "#1E1F24");
      root.style.setProperty("--cprimary", "#F3F4F6");
      root.style.setProperty("--csecondary", "#9CA3AF");
      root.style.setProperty("--borderColor", "#2C2D31");
      setRotated(true);
    } else {
      root.style.setProperty("--bgbody", "#ffffff");
      root.style.setProperty("--bgsidebar", "#F3F4F6");
      root.style.setProperty("--bgcardcontainer", "#F9FAFB");
      root.style.setProperty("--cprimary", "#111827");
      root.style.setProperty("--csecondary", "#4B5563");
      root.style.setProperty("--borderColor", "#E5E7EB");
      setRotated(false);
    }
  };

  const toggleTheme = () => {
    const newTheme = rotated ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
  }, []);

  return (
    <button
      className={`text-xl c-primary transition-transform duration-300 ${
        rotated ? "rotate-180" : ""
      }`}
      onClick={toggleTheme}
    >
      <SolorIcon />
    </button>
  );
};

export default ThemeToggle;
