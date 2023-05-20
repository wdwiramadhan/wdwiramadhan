import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import React from "react";

type BasicLinkProps = {
  isNewTab?: boolean;
  isExternal?: boolean;
  isActive?: boolean;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"a"> &
  LinkProps;

export function BasicLink({
  children,
  href,
  isNewTab = false,
  isExternal = false,
  isActive = false,
  className,
  ...rest
}: BasicLinkProps) {
  const style = clsx(
    !isActive && "hover:text-indigo-400 text-gray-600 dark:text-gray-400",
    isActive && "text-indigo-400 dark:text-indigo-400",
    className
  );

  if (!isExternal && !isNewTab) {
    return (
      <Link {...rest} href={href} className={style}>
        {children}
      </Link>
    );
  }

  return (
    <a
      {...rest}
      target={isNewTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      href={href}
      className={style}
    >
      {children}
    </a>
  );
}
