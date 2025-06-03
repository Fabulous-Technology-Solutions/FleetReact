import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    const isDark = theme === "dark";
    root.style.setProperty("--bgbody", isDark ? "#0E0E10" : "#ffffff");
    root.style.setProperty("--bgsidebar", isDark ? "#15161A" : "#F3F4F6");
    root.style.setProperty("--bgcardcontainer", isDark ? "#1E1F24" : "#F9FAFB");
    root.style.setProperty("--cprimary", isDark ? "#F3F4F6" : "#111827");
    root.style.setProperty("--csecondary", isDark ? "#9CA3AF" : "#4B5563");
    root.style.setProperty("--borderColor", isDark ? "#2C2D31" : "#E5E7EB");
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
