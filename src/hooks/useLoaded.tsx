import { useState, useEffect } from "react";
import usePreload from "./usePreload";

export default function useLoaded() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const preloaded = usePreload();

  useEffect(() => {
    if (preloaded) {
      setIsLoaded(true);
    } else {
      setTimeout(() => {
        setIsLoaded(true);
      }, 200);
    }

    return () => setIsLoaded(false);
  }, [preloaded]);
  return isLoaded;
}
