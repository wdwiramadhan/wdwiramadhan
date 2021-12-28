import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "@/layouts";
import clsx from "clsx";
import { Seo } from "@/components";

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo />
      <main>
        <section className="flex container max-w-5xl mx-auto px-4">
          <div className="flex flex-col max-w-2xl py-16 md:py-32">
            <h1 className="font-bold text-4xl md:text-5xl text-gray-800 dark:text-white">
              Wahyu Dwi Ramadhan
            </h1>
            <h2 className="mt-3 text-gray-700 text-xl dark:text-gray-300 tracking-wide">
              Fullstack Developer
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 mb-4 tracking-wide">
              Working with Javascript Ecosystem. Writing about software
              technology to stay in touch with its progress.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="/blog">
                <a
                  className={clsx(
                    "py-3 px-6 text-sm sm:text-md font-semibold text-gray-700 dark:text-white border rounded-md"
                  )}
                >
                  Read the blog
                </a>
              </Link>
              <Link href="/about">
                <a className="py-3 px-6 text-sm sm:text-md font-semibold text-gray-700 border rounded-md dark:text-white">
                  Learn about me
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
