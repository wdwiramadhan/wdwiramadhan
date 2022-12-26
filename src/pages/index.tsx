import type { NextPage } from "next";
import Link from "next/link";
import clsx from "clsx";

import { Seo } from "@/components";
import { Layout } from "@/layouts";

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo />
      <main>
        <section className="flex container max-w-5xl mx-auto px-4">
          <div className={clsx("flex flex-col max-w-2xl py-16 md:py-32")}>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-100">
              Wahyu Dwi Ramadhan
            </h1>
            <h2 className="mt-3 text-xl text-gray-600 dark:text-gray-400 tracking-wide">
              Software Engineer
            </h2>
            <p className="mt-4 mb-4 text-lg text-gray-600 dark:text-gray-400 tracking-wide">
              Working with Javascript Ecosystem. Writing about software
              technology to stay in touch with its progress.
            </p>
            <div className="flex space-x-3 sm:space-x-4 mt-6">
              <Link
                href="/blog"
                className={clsx(
                  "py-3 px-6 border-0 bg-gray-800 dark:bg-indigo-500 text-sm sm:text-md font-semibold text-white rounded-lg",
                  "transform hover:scale-[1.02]"
                )}
              >
                Read the blog
              </Link>
              <Link
                href="/about"
                className={clsx(
                  "py-3 px-6 text-sm sm:text-md font-semibold text-gray-800 rounded-lg dark:bg-gray-800 dark:text-gray-100",
                  "border dark:border-0",
                  "transform hover:scale-[1.02]"
                )}
              >
                Learn about me
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
