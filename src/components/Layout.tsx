import * as React from "react";
import { Header } from "@/components";
import { PreloadProvider } from "@/context/PreloadContext";

export default function Default({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <PreloadProvider>{children}</PreloadProvider>
    </>
  );
}
