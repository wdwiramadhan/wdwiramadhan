import clsx from "clsx";

import { Layout } from "@/layouts";
import useLoaded from "@/hooks/useLoaded";
import { Seo } from "@/components";

export default function Blog() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo title="Blog" />
      <main>
        <section className="flex container max-w-5xl mx-auto px-4 py-10">
          <div
            className={clsx("flex flex-col gap-6", isLoaded && "fade-in-start")}
          >
            <h1
              className="font-bold text-4xl text-gray-800 dark:text-gray-100"
              data-fade="1"
            >
              Blog
            </h1>
            <div
              className="text-xl text-gray-600 dark:text-gray-300"
              data-fade="2"
            >
              Coming Soon
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
