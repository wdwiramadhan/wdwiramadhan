import { useState, useEffect, createContext, ReactNode } from "react";

const PreloadContext = createContext<boolean>(false);

function PreloadProvider({ children }: { children: ReactNode }) {
  const [preloaded, setPreloaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setPreloaded(true);
    }, 200);
  }, []);

  return (
    <PreloadContext.Provider value={preloaded}>
      {children}
    </PreloadContext.Provider>
  );
}

export { PreloadContext, PreloadProvider };
