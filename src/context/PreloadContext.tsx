import * as React from "react";

const PreloadContext = React.createContext<boolean>(false);

function PreloadProvider({ children }: { children: React.ReactNode }) {
  const [preloaded, setPreloaded] = React.useState<boolean>(false);

  React.useEffect(() => {
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
