"use client";

import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Aplicar tema inicial imediatamente para evitar FOUC
    const root = window.document.documentElement;
    const savedTheme = localStorage.getItem("theme") as Theme;
    const initialTheme = savedTheme || "system";

    const getSystemTheme = (): "light" | "dark" => {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    const resolved = initialTheme === "system" ? getSystemTheme() : initialTheme;
    root.classList.remove("light", "dark");
    root.classList.add(resolved);

    setTheme(initialTheme);
    setResolvedTheme(resolved);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;

    // Determinar o tema atual baseado na preferência do sistema
    const getSystemTheme = (): "light" | "dark" => {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    // Aplicar o tema
    const applyTheme = (newTheme: Theme) => {
      const resolved = newTheme === "system" ? getSystemTheme() : newTheme;

      root.classList.remove("light", "dark");
      root.classList.add(resolved);
      setResolvedTheme(resolved);
    };

    // Aplicar tema
    applyTheme(theme);

    // Salvar no localStorage
    localStorage.setItem("theme", theme);

    // Listener para mudanças na preferência do sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "system";
      return "light";
    });
  };

  const setThemeDirectly = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return {
    theme,
    resolvedTheme,
    mounted,
    toggleTheme,
    setTheme: setThemeDirectly,
  };
}
