import { Header } from "@/components";
import * as React from "react";

export default function Default({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-fullh-screen">
      <Header />
      {children}
    </div>
  );
}
