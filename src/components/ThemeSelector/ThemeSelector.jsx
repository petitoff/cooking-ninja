import "./ThemeSelector.css";

import { useTheme } from "../../hooks/useTheme";

const THEME_COLORS = ["#58249c", "#249c6b", "#b70233"];

const ThemeSelector = () => {
  const { changeColor } = useTheme();

  return (
    <div className="theme-selector">
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
