"use client";

import { SunIcon, MoonIcon } from "./icons";

export function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="rounded-full p-3"
    >
      <SunIcon className="hidden h-10 w-10 dark:block" />
      <MoonIcon className="block h-10 w-10 dark:hidden" />
    </button>
  );
}
