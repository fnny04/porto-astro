import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5/index.js";

const themes = ["light", "dark"];

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefera-color-schheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-amber-300 dark:bg-zinc-600">
      {themes.map((t) => {
        const checked = t === theme;
        return (
          <button
            key={t}
            className={`${
              checked ? "bg-white" : ""
            } cursor-pointer  md:rounded-2xl rounded-xl md:p-2 p-1`}
            onClick={toggleTheme}
          >
            {t === "light" ? <IoMoon /> : <IoSunny />}
          </button>
        );
      })}
    </div>
  ) : (
    <div></div>
  );
}
