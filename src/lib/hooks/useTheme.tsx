import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@/lib/context/ThemeContext";

export default function useTheme() {
  return useContext(ThemeContext) as ThemeContextType;
}
