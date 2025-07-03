import { SolorIcon } from "../../CustomIcons";
import { useTheme } from "../../theme/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`text-xl c-primary transition-transform duration-300 ${
        theme === "dark" ? "rotate-180" : ""
      }`}
      onClick={toggleTheme}
    >
      <SolorIcon />
    </button>
  );
};

export default ThemeToggle;
