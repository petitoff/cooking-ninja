import "./ThemeSelector.css";
import modeIcon from "../../assets/mode-icon.svg";

import { useTheme } from "../../hooks/useTheme";

const THEME_COLORS = ["#58249c", "#249c6b", "#b70233"];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();

  const handleToggle = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={handleToggle}
          src={modeIcon}
          alt="Change color theme"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {THEME_COLORS.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
