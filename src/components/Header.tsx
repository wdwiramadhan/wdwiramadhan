"use client";
import { usePathname } from "next/navigation";
import BasicLink from "./BasicLink";

type LinkType = {
  href: string;
  label: string;
};

const links: Array<LinkType> = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full py-3 transition-shadow  md:py-6">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between">
          <nav className="text-md flex space-x-4 font-medium text-gray-100 md:space-x-6">
            {links.map((link: LinkType, index) => (
              <BasicLink
                key={index}
                href={link.href}
                isActive={pathname === link.href}
              >
                {link.label}
              </BasicLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
