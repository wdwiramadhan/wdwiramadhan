import type { Metadata } from "next";
import BasicLink from "@/components/BasicLink";

export const metadata: Metadata = {
  title: "wdwiramadhan",
  description: "Welcome to my profile, explore my work and projects here.",
  openGraph: {
    title: "wdwiramadhan",
    description: "Welcome to my profile, explore my work and projects here.",
  },
};

const Page = () => {
  return (
    <>
      <main>
        <section className="container mx-auto flex max-w-4xl px-4">
          <div className="mt-16 flex flex-col md:mt-24">
            <h1 className="text-2xl font-bold text-gray-100 sm:text-5xl md:text-4xl">
              Wahyu Dwi Ramadhan
            </h1>
            <p className="text-md mt-1 font-light tracking-wide text-gray-400 sm:mt-2 sm:text-xl">
              Software Engineer at Tiket.com
            </p>
            <div className="mt-4 flex gap-2 sm:mt-8">
              <BasicLink
                isExternal
                href="https://www.linkedin.com/in/wdwiramadhan"
                className="text-sm text-gray-200 sm:text-lg"
              >
                LinkedIn
              </BasicLink>
              <BasicLink
                isExternal
                href="https://github.com/wdwiramadhan"
                className="text-sm text-gray-200 sm:text-lg"
              >
                GitHub
              </BasicLink>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
