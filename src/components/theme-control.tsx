"use client";

import { useTheme } from "next-themes";

const themes = ["light", "system", "dark"] as const;

export function ThemeControl() {
  const { theme, setTheme } = useTheme();

  return (
    <div aria-label="Colour theme" className="flex items-center rounded-full border border-rule p-1 font-mono text-[0.625rem] uppercase tracking-[0.14em]" role="group">
      {themes.map((option) => (
        <button
          aria-pressed={theme === option}
          className="rounded-full px-2.5 py-1.5 text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent aria-[pressed=true]:bg-ink aria-[pressed=true]:text-canvas"
          key={option}
          onClick={() => setTheme(option)}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
