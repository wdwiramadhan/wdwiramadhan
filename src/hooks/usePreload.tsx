import { useContext } from "react";
import { PreloadContext } from "@/context/PreloadContext";

export default function usePrelaod() {
  return useContext(PreloadContext);
}
