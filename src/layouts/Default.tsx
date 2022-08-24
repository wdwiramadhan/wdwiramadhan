import { ReactNode } from "react";
import { Header } from "@/components";
import { PreloadProvider } from "@/context/PreloadContext";

export default function Default({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <PreloadProvider>{children}</PreloadProvider>
    </>
  );
}
