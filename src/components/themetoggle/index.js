import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme") || "dark");
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="menu__button nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 style={{ width: "1.2rem", height: "1.2rem" }} />
    </div>
  );
};

export default Themetoggle;
