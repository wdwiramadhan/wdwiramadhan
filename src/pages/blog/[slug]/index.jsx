import format from "date-fns/format";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from "contentlayer/generated";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { NextImage } from "@/components/NextImage";

export async function getStaticPaths() {
  const paths = allBlogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  return {
    props: {
      blog,
    },
  };
}

function DetailBlog({ blog }) {
  const Component = useMDXComponent(blog.body.code);

  return (
    <Layout>
      <Seo title={blog.title} />
      <main className="container mx-auto mt-8 max-w-3xl px-4 pb-16 sm:mt-20">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 sm:text-4xl">
          {blog.title}
        </h1>
        <p className="text-md mt-2 font-light leading-6 tracking-wide text-gray-800 dark:text-gray-400">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </p>
        <NextImage
          className="mt-8 bg-cover bg-center"
          src={blog.banner}
          width={768}
          height={300}
          alt={blog.title}
        />
        <article className="prose-quoteless prose prose-neutral mt-8 dark:prose-invert">
          <Component />
        </article>
      </main>
    </Layout>
  );
}

export default DetailBlog;
