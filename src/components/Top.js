import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

const Top = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "medium"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header className="logo">
      <a href="https://frontendgyaan.com">
        <img src={Logo} alt="Frontend Gyaan Logo" />
        <span>Frontendgyaan</span>
      </a>
    </header>
  );
};

export default Top;
