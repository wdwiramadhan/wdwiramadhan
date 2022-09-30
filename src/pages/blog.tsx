import clsx from "clsx";

import { Layout } from "@/layouts";
import { Seo } from "@/components";

export default function Blog() {
  return (
    <Layout>
      <Seo title="Blog" />
      <main>
        <section className="flex container max-w-5xl mx-auto px-4 py-4 sm:py-10">
          <div className={clsx("flex flex-col gap-6")}>
            <h1 className="font-bold text-2xl sm:text-4xl text-gray-800 dark:text-gray-100">
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
