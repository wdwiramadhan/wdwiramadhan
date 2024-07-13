import "@/styles/globals.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="h-screen w-full bg-neutral-900">{children}</body>
    </html>
  );
}
