import ButtonCircle from "./ButtonCircle";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ButtonMode() {
  const [mode, setMode] = useState("light");

  const handleModeChange = () => {
    if (mode === "light") {
      localStorage.setItem("theme", "dark");
      setMode("dark");
      applyMode();
    } else {
      localStorage.setItem("theme", "light");
      setMode("light");
      applyMode();
    }
  };

  const applyMode = () => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMode(localStorage.getItem("theme"));
  };

  useEffect(() => {
    applyMode();
  }, []);

  return (
    <ButtonCircle handleClick={handleModeChange}>
      <span className="mx-auto">
        {mode === "light" ? <FaMoon /> : <FaSun />}
      </span>
    </ButtonCircle>
  );
}
