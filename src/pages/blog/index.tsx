import { allBlogs } from "contentlayer/generated";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { CardBlog } from "@/components/CardBlog";

function Blog() {
  return (
    <Layout>
      <Seo title="Blog" />
      <main className="container mx-auto mt-8 max-w-5xl px-4 sm:mt-20">
        <div className="flex flex-col">
          <h1 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-100 sm:text-4xl">
            Blog
          </h1>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
            {allBlogs.map((blog) => (
              <CardBlog
                key={blog._id}
                publishedAt={blog.publishedAt}
                summary={blog.summary}
                title={blog.title}
                slug={blog.slug}
                banner={blog.banner}
              />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Blog;
