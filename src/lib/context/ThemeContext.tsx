import { useState, useEffect, createContext, ReactNode } from "react";

export type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const getInitialTheme = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "dark";
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(getInitialTheme());
  const rawSetTheme = (rawTheme: string) => {
    if (rawTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    window.localStorage.setItem("theme", rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
    return () => {
      rawSetTheme(theme);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
