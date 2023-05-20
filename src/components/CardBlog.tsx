import Link from "next/link";
import Balancer from "react-wrap-balancer";
import format from "date-fns/format";
import { NextImage } from "./NextImage";

type Props = {
  publishedAt: string;
  summary: string;
  title: string;
  slug: string;
  banner: string;
};

export function CardBlog({ publishedAt, summary, title, slug, banner }: Props) {
  return (
    <Link href={`/blog/${slug}`} className="rounded-md">
      <NextImage
        src={banner}
        alt="preview article"
        imgClassName="self-start rounded-lg"
        width={410}
        height={300}
      />
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
        <Balancer>{title}</Balancer>
      </h2>
      <p className="text-md mt-2 font-normal leading-6 tracking-wide text-gray-700 dark:text-gray-300">
        {summary}
      </p>
      <p className="mt-1 text-sm font-light leading-6 tracking-wide text-gray-800 dark:text-gray-400">
        {format(new Date(publishedAt), "MMMM dd, yyyy")}
      </p>
    </Link>
  );
}
