import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";

export default function useTheme() {
  return useContext(ThemeContext) as ThemeContextType;
}
