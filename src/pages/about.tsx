import Image from "next/image";
import clsx from "clsx";

import { Seo } from "@/components";
import useLoaded from "@/hooks/useLoaded";
import { Layout } from "@/layouts";
import { BasicLink } from "@/components/BasicLink";

export default function About() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo title="About" />
      <main>
        <section className="flex container max-w-5xl mx-auto px-4 py-4 sm:py-10">
          <div
            className={clsx(
              "flex flex-col gap-6 w-full",
              isLoaded && "fade-in-start"
            )}
          >
            <h1
              className="font-bold text-2xl sm:text-4xl text-gray-800 dark:text-gray-100"
              data-fade="1"
            >
              About
            </h1>
            <div data-fade="2">
              <div className="float-right ml-4 w-[170px] sm:w-auto">
                <Image
                  src="https://res.cloudinary.com/wdwiramadhan/image/upload/v1642863133/wdwiramadhan/photo-profile.jpg"
                  alt="photo-profile"
                  width={250}
                  height={260}
                  className="rounded-md"
                />
              </div>
              <article className="prose dark:prose-invert text-lg leading-8 text-gray-600 dark:text-gray-300">
                <p data-fade="2">
                  I&apos;m Wahyu Dwi Ramadhan, a software engineer at{" "}
                  <BasicLink
                    href="https://www.tiket.com/"
                    className="no-underline"
                    isExternal
                    isNewTab
                    isActive
                  >
                    tiket.com
                  </BasicLink>{" "}
                  who focuses on frontend development.
                </p>
                <p data-fade="3">
                  I have technical background in Javascript programming language
                  and have develop applications in different domain in
                  Javascript. In this web i write article to share my knowledge
                  and stay in touch with software technology progress.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
