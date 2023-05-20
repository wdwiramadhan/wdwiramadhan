import { Header } from "@/components/Header";
import { PreloadProvider } from "@/context/PreloadContext";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <PreloadProvider>{children}</PreloadProvider>
    </>
  );
}
