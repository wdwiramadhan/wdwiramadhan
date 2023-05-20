import Image from "next/image";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { BasicLink } from "@/components/BasicLink";

export default function About() {
  return (
    <Layout>
      <Seo title="About" />
      <main>
        <section className="container mx-auto mt-8 flex max-w-5xl px-4 sm:mt-20">
          <div className="flex w-full flex-col gap-6">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 sm:text-4xl">
              About
            </h1>
            <div>
              <div className="float-right ml-8 w-[120px] sm:w-auto">
                <Image
                  src="https://res.cloudinary.com/wdwiramadhan/image/upload/v1642863133/wdwiramadhan/photo-profile.jpg"
                  alt="photo-profile"
                  width={250}
                  height={260}
                  className="rounded-md"
                />
              </div>
              <article className="prose-quoteless prose prose-neutral dark:prose-invert">
                <p>
                  I&apos;m Wahyu Dwi Ramadhan, a software engineer at{" "}
                  <BasicLink
                    href="https://www.tiket.com/"
                    className="font-normal no-underline"
                    isExternal
                    isNewTab
                    isActive
                  >
                    tiket.com
                  </BasicLink>{" "}
                  who focuses on frontend development.
                </p>
                <p>
                  I have technical background in Javascript programming language
                  and have develop applications in different domain in
                  Javascript. In this web i write article to share my knowledge
                  and stay in touch with software technology progress.
                </p>
                <p>
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
