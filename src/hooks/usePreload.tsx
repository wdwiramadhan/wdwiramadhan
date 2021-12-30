import * as React from "react";
import { PreloadContext } from "@/context/PreloadContext";

export default function usePrelaod() {
  return React.createContext(PreloadContext);
}
