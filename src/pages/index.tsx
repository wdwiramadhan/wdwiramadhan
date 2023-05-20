import Link from "next/link";

import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";

function Home() {
  return (
    <Layout>
      <Seo />
      <main>
        <section className="container mx-auto flex max-w-5xl px-4">
          <div className="mt-24 flex max-w-2xl flex-col md:mt-48">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 sm:text-4xl md:text-5xl">
              Wahyu Dwi Ramadhan
            </h1>
            <p className="mt-3 text-xl tracking-wide text-gray-600 dark:text-gray-400">
              Software Engineer
            </p>
            <p className="mt-4 mb-4 text-lg tracking-wide text-gray-600 dark:text-gray-400">
              Working with Javascript Ecosystem. Writing about software
              technology to stay in touch with its progress.
            </p>
            <div className="mt-6 flex space-x-3 sm:space-x-4">
              <Link
                href="/blog"
                className="sm:text-md transform rounded-lg border-0 bg-gray-800 py-3 px-6 text-sm font-semibold text-white hover:scale-[1.02] dark:bg-indigo-600"
              >
                Read the blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
