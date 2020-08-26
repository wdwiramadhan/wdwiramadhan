import cn from "classnames";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug: any;
};

export default function CoverImage({ title, src, slug }: Props) {
  const image = (
    <img
      src={src}
      alt={`cover image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
