import * as React from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function useTheme() {
  return React.useContext(ThemeContext);
}
