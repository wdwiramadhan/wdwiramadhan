import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { BasicLink } from "./BasicLink";

import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import useTheme from "@/hooks/useTheme";

type LinkType = {
  href: string;
  label: string;
};

function Nav() {
  const router = useRouter();
  const links: Array<LinkType> = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav>
      <ul
        className={clsx(
          "flex space-x-4 md:space-x-6",
          "font-medium text-md text-gray-800 dark:text-gray-100"
        )}
      >
        {links.map((link: LinkType, idx) => (
          <li key={idx}>
            <BasicLink href={link.href} isActive={router.asPath === link.href}>
              {link.label}
            </BasicLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Header() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full py-8 transition-shadow">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Nav />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={clsx("p-2 text-indigo-400 ")}
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
