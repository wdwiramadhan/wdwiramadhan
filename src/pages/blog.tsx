import { Seo, Layout } from "@/components";

export default function Blog() {
  return (
    <Layout>
      <Seo title="Blog" />
      <main>
        <section className="container mx-auto flex max-w-5xl px-4 py-4 sm:py-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 sm:text-4xl">
              Blog
            </h1>
            <div className="text-xl text-gray-600 dark:text-gray-300">
              Coming Soon
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
