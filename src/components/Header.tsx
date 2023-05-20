import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BasicLink } from "./BasicLink";

import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import useTheme from "@/hooks/useTheme";

type LinkType = {
  href: string;
  label: string;
};

const links: Array<LinkType> = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full py-3 transition-shadow  md:py-6">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between">
          <nav className="text-md flex space-x-4 font-medium text-gray-800 dark:text-gray-100 md:space-x-6">
            {links.map((link: LinkType, index) => (
              <BasicLink
                key={index}
                href={link.href}
                isActive={router.asPath === link.href}
              >
                {link.label}
              </BasicLink>
            ))}
          </nav>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-gray-800 dark:text-gray-100"
          >
            {mounted && theme === "dark" ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
