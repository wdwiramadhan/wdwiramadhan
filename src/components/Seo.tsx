import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo(props: any) {
  const router = useRouter();
  const { ...customMeta } = props;

  const meta = {
    title: "Wahyu Dwi Ramadhan",
    siteName: "wdwiramadhan",
    description: "Web to showcase my thoughts about web development",
    image: "#",
    url: "https://wdwiramadhan.vercel.app",
    type: "website",
    ...customMeta,
  };
  meta.title = props.title ? `${meta.title} | ${meta.siteName}` : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wdwiramadhan" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  );
}
