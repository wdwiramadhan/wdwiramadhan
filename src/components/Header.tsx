import clsx from "clsx";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import useTheme from "@/hooks/useTheme";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

type LinkType = {
  href: string;
  label: string;
};

function NavItem({ link }: { link: LinkType }) {
  const router = useRouter();
  const { href, label } = link;
  const isActive = router.asPath === href;
  return (
    <li>
      <Link href={href}>
        <a
          className={clsx(
            "p-2 rounded-md",
            "hover:bg-gray-200 hover:dark:bg-neutral-900 hover:dark:text-white",
            isActive && "text-gray-800 font-semibold dark:text-white "
          )}
        >
          {label}
        </a>
      </Link>
    </li>
  );
}

function Nav() {
  const links: Array<LinkType> = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/project", label: "Project" },
    { href: "/about", label: "About" },
  ];
  return (
    <nav>
      <ul
        className={clsx(
          "flex space-x-1 sm:space-x-2",
          "font-medium text-md text-gray-500 dark:text-gray-400"
        )}
      >
        {links.map((link: LinkType, idx) => (
          <NavItem key={idx} link={link} />
        ))}
      </ul>
    </nav>
  );
}

export default function Header() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full py-8">
      <div className="container max-w-5xl mx-auto px-2">
        <div className="flex justify-between items-center">
          <Nav />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={clsx(
              "p-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-700 dark:text-white",
              "hover:ring-2 dark:hover:none hover:ring-gray-400"
            )}
          >
            {mounted && theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
