import Link from "next/link";
import clsx from "clsx";

interface BasicLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isNewTab?: boolean;
  isExternal?: boolean;
  isActive?: boolean;
}

export const BasicLink: React.FC<BasicLinkProps> = ({
  children,
  href = "",
  isNewTab = false,
  isExternal = false,
  isActive = false,
  className,
  ...rest
}: BasicLinkProps) => {
  const style = clsx(
    "hover:text-indigo-400",
    isActive && "text-indigo-400",
    className
  );

  if (!isExternal && !isNewTab) {
    return (
      <Link href={href}>
        <a {...rest} className={style}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target={isNewTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      href={href}
      {...rest}
      className={style}
    >
      {children}
    </a>
  );
};
