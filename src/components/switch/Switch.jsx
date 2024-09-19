import { useEffect } from "react";
import { useState } from "react";

const Switch = () => {
  const [theme, setTheme] = useState("light");

  const handleChange = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  });

  return (
    <div className="container-switch">
      <span>Change Theme </span>
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Switch;
